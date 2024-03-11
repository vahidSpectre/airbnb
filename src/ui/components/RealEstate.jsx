import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@mui/material";

import classes from "./RealEstate.module.css";
import CustomSliderButton from "./CustomSliderButton";
import { nanoid } from "@reduxjs/toolkit";

const RealEstate = ({ key, className, data }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [touchStar, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isImagesLoading, setIsImagesLoading] = useState(true);
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [availableDays, setAvailableDays] = useState(0);
  const [price, setPrice] = useState(0);
  const [star, setStar] = useState(0);

  const thumbsRef = useRef([]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    const monthInt = new Date(data.available).getMonth();
    const dayInt = new Date(data.available).getDay();
    setMonth(months[monthInt]);
    setDay(dayInt);
    setAvailableDays(data.available_days);
    setPrice(data.price);
    setStar(data.star);
  }, [data.available, data.available_days, data.price, data.star]);

  const imagesCount = data.images.length - 1;

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
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <motion.div
      className={`${classes.wrapper} ${className}`}
      initial="initial"
      animate="initial"
      whileHover={"animate"}
      key={key}
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
        {data.images.map((img) => {
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
          {star ? (
            <div className={classes.star_wrapper}>
              <img src="./assets/svgs/real-estate/star.svg" alt="" />
              <p>{star}</p>
            </div>
          ) : (
            <Skeleton
              className={classes.star}
              animation="wave"
              variant="text"
            />
          )}
        </span>
        <span className={classes.detail_left_side}>
          {data.location.state && data.location.country ? (
            <>
              <p>{data.location.state}</p>
              <p>{data.location.country}</p>
            </>
          ) : (
            <Skeleton
              className={classes.title}
              animation="wave"
              variant="text"
            />
          )}
          {data.distance ? (
            <p>{data.distance} Kilometers away</p>
          ) : (
            <Skeleton className={classes.dis} animation="wave" variant="text" />
          )}
          {month ? (
            <p>
              {month}&nbsp;{day + 1}-{day + availableDays}
            </p>
          ) : (
            <Skeleton
              className={classes.date}
              animation="wave"
              variant="text"
            />
          )}
          {price !== 0 ? (
            <p>{price}&nbsp;$</p>
          ) : (
            <Skeleton className={classes.fee} animation="wave" variant="text" />
          )}
        </span>
      </div>
      <div className={classes.thumb_container}>
        <div
          className={classes.thumb_show}
          style={{
            transform: `translateX(${
              sliderIndex < data.images.length - 2 && sliderIndex > 2
                ? (sliderIndex - 2) * -12
                : sliderIndex < data.images.length - 2
                ? 0
                : (data.images.length - 5) * -12
            }px)`,
          }}
        >
          {data.images.map((_, i) => {
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
