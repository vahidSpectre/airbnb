import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Section from "../components/Section";
import classes from "./Home.module.css";
import RealEstate from "../components/RealEstate";

import data from "../../data/data.json";
import Header from "../layout/Header";

const Home = () => {
  const [renderArray, setRenderArray] = useState([]);
  const store = useSelector((state) => state.ariaStore.aria);

  useEffect(() => {
    console.log(typeof store);
    if (store === "all") {
      setRenderArray(data);
    } else {
      setRenderArray(data.filter((d) => d.aria === store));
    }
  }, [store]);

  return (
    <div className={classes.home}>
      <Header />
      <Section className={classes.rs_container}>
        {renderArray.map((elem) => {
          return <RealEstate data={elem} key={elem.objectId} />;
        })}
      </Section>
    </div>
  );
};

export default Home;
