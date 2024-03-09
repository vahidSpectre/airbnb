import React from "react";

import Section from "../components/Section";
import classes from "./Filters.module.css";

const Filters = ({ className }) => {
 
  return (
    <Section
      cardProps={classes.card}
      className={`${classes.wrapper} ${className}`}
    >
      Filters
    </Section>
  );
};

export default Filters;
