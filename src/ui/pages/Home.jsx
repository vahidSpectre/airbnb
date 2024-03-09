import React from "react";

import Section from "../components/Section";
import classes from "./Home.module.css";
import RealEstate from "../components/RealEstate";
import Filters from "../layout/Filters";

import data from "../../data/data.json";
import { nanoid } from "@reduxjs/toolkit";
import Header from "../layout/Header";

const Home = () => {

  return (
    <div className={classes.home}>
      <Header/>
      <Section className={classes.rs_container}>
        {Object.values(data).map((elem) => {
          const id = nanoid()
          return <RealEstate imageArray={elem} key={id}/>;
        })}
      </Section>
     
    </div>
  );
};

export default Home;
