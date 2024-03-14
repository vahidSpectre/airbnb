import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Section from "../components/Section";
import classes from "./Home.module.css";
import RealEstate from "../components/RealEstate";

import data from "../../data/data.json";
import Header from "../layout/Header";
import Map from "../map/Map";

const Home = () => {
  const [renderArray, setRenderArray] = useState([]);
  const [isMapVisiable, setIsMapVisiable] = useState(true);
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
      {!isMapVisiable ? (
        <Section className={classes.rs_container}>
          {renderArray.map((elem) => {
            return <RealEstate data={elem} key={elem.objectId} />;
          })}
        </Section>
      ) : (
        <div>
          <Map data={renderArray}/>
        </div>
      )}
      <button
        className={classes.map_button}
        onClick={() => setIsMapVisiable(!isMapVisiable)}
      >
        map
      </button>
    </div>
  );
};

export default Home;
