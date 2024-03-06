import React from "react";
import { motion } from "framer-motion";

import classes from "./CustomSliderButton.module.css";
const CustomSliderButton = ({
  variants,
  onClick,
  style,
  className,
  border,
}) => {
  const buttonVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <motion.button
      className={`${className} ${classes.button} ${
        variants === "next" ? classes.next_button : classes.perv_button
      } ${border ? classes.border : ""}`}
      onClick={onClick}
      variants={buttonVariants}
      style={style}
    >
      <p
        style={{
          transform: `${variants === "next" ? "rotate(180deg)" : "rotate(0)"}`,
        }}
      >
        ❮
      </p>
    </motion.button>
  );
};

export default CustomSliderButton;
