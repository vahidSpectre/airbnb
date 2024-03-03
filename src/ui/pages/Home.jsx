import React from "react";

import Section from "../components/Section";
import classes from "./Home.module.css";
import RealEstate from "../components/RealEstate";

const Home = () => {
  return (
    <div className={classes.home}>
      <Section className={classes.rs_container}>
        <RealEstate/>
        <RealEstate/>
        <RealEstate/>
        <RealEstate/>
        <RealEstate/>
        <RealEstate/>
      </Section>
    </div>
  );
};

export default Home;
