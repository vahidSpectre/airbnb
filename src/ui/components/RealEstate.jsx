import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@mui/material";

import classes from "./RealEstate.module.css";
import CustomSliderButton from "./CustomSliderButton";
import { nanoid } from "@reduxjs/toolkit";

const RealEstate = ({ className, imageArray }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [touchStar, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isImagesLoading, setIsImagesLoading] = useState(true);

  const thumbsRef = useRef([]);

  const imagesCount = imageArray.length - 1;

  // const observer = useMemo(
  //   () =>
  //     new IntersectionObserver(([entry]) => {
  //       entry.isIntersecting
  //         ? entry.target.classList.add(classes.fade)
  //         : entry.target.classList.remove(classes.fade);
  //     }),
  //   [thumbsRef]
  // );

  // useEffect(() => {
  //   thumbsRef.current.map((elem) => {
  //     observer.observe(elem);
  //   });
  //   return () => observer.disconnect();
  // }, [sliderIndex]);

  useEffect(() => {
    const diff = touchEnd - touchStar;

    if (touchEnd !== 0) {
      if (diff > 0 && sliderIndex > 0) {
        setSliderIndex((sliderIndex) => (sliderIndex -= 1));
      }
      if (diff < 0 && sliderIndex < imagesCount) {
        setSliderIndex((sliderIndex) => (sliderIndex += 1));
      }
    }
  }, [touchEnd]);

  const opacity = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
  };

  return (
    <motion.div
      className={`${classes.wrapper} ${className}`}
      initial="initial"
      animate="initial"
      whileHover={"animate"}
    >
      <div
        className={classes.image_container}
        style={{ transform: `translateX(${-sliderIndex * 100}%)` }}
        onTouchStart={(e) => setTouchStart(e.changedTouches[0].clientX)}
        onTouchEnd={(e) => setTouchEnd(e.changedTouches[0].clientX)}
      >
        <Skeleton
          variant="rectangular"
          animation="wave"
          className={`${
            isImagesLoading ? classes.display_block : classes.display_none
          }`}
          sx={{ aspectRatio: 1, paddingTop: "100%" }}
        />
        {imageArray.map((img) => {
          const id = nanoid();
          return (
            <img
              src={img}
              key={img}
              onLoad={() => setIsImagesLoading(false)}
              className={`${classes.img} ${
                isImagesLoading ? classes.display_none : classes.display_block
              }`}
            />
          );
        })}
      </div>
      <CustomSliderButton
        className={classes.next_button}
        onClick={() => {
          if (sliderIndex < imagesCount) {
            setSliderIndex((sliderIndex) => (sliderIndex += 1));
          }
        }}
        style={{
          display: `${sliderIndex < imagesCount ? "block" : "none"}`,
        }}
        variants={"next"}
      />
      <CustomSliderButton
        className={classes.perv_button}
        onClick={() => {
          if (sliderIndex > 0) {
            setSliderIndex((sliderIndex) => (sliderIndex -= 1));
          }
        }}
        style={{ display: `${sliderIndex > 0 ? "block" : "none"}` }}
        variants={"perv"}
      />
      <div className={classes.detail_contaienr}>
        <span className={classes.detail_righ_side}>
          <Skeleton className={classes.star} animation="wave" variant="text" />
        </span>
        <span className={classes.detail_left_side}>
          <Skeleton className={classes.title} animation="wave" variant="text" />
          <Skeleton className={classes.name} animation="wave" variant="text" />
          <Skeleton className={classes.date} animation="wave" variant="text" />
          <Skeleton className={classes.fee} animation="wave" variant="text" />
        </span>
      </div>
      <div className={classes.thumb_container}>
        <div
          className={classes.thumb_show}
          style={{
            transform: `translateX(${
              sliderIndex < imageArray.length - 2 && sliderIndex > 2
                ? (sliderIndex - 2) * -12
                : sliderIndex < imageArray.length - 2
                ? 0
                : (imageArray.length - 5) * -12
            }px)`,
          }}
        >
          {imageArray.map((_, i) => {
            return (
              <motion.div
                className={`${
                  sliderIndex === i
                    ? classes.thumb_active
                    : classes.thumb_not_active
                } `}
                variants={opacity}
                onClick={() => setSliderIndex(i)}
                key={i}
                ref={(elem) => (thumbsRef.current[i] = elem)}
              />
            );
          })}{" "}
        </div>
      </div>
    </motion.div>
  );
};

export default RealEstate;
