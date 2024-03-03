import React from "react";

import classes from "./Section.module.css";
const Section = ({ cardProps, className, children }) => {
  return (
    <section className={`${classes.wrapper} ${cardProps}`}>
      <div className={`${classes.content} ${className}`}>{children}</div>
    </section>
  );
};

export default Section;
