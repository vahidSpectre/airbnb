import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@mui/material";

import classes from "./RealEstate.module.css";

const RealEstate = ({ className, imageArray }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [touchStar, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isImagesLoading, setIsImagesLoading] = useState(true);

  const buttonVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const imagesCount = imageArray.length - 1;

  useEffect(() => {
    const diff = touchEnd - touchStar;
    console.log(diff)
    if (touchEnd !== 0) {
      if (diff > 0 && sliderIndex > 0) {
        setSliderIndex((sliderIndex) => (sliderIndex -= 1));
      }
      if (diff < 0 && sliderIndex < imagesCount) {
        setSliderIndex((sliderIndex) => (sliderIndex += 1));
      }
    }
  }, [touchEnd]);

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
      <motion.button
        className={classes.next_button}
        onClick={() => {
          if (sliderIndex < imagesCount) {
            setSliderIndex((sliderIndex) => (sliderIndex += 1));
          }
        }}
        variants={buttonVariants}
        style={{
          display: `${sliderIndex < imagesCount ? "block" : "none"}`,
        }}
      >
        next
      </motion.button>
      <motion.button
        className={classes.perv_button}
        onClick={() => {
          if (sliderIndex > 0) {
            setSliderIndex((sliderIndex) => (sliderIndex -= 1));
          }
        }}
        variants={buttonVariants}
        style={{ display: `${sliderIndex > 0 ? "block" : "none"}` }}
      >
        perv
      </motion.button>
    </motion.div>
  );
};

export default RealEstate;
