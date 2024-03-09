import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Section from "../components/Section";
import classes from "./Header.module.css";
import Filters from "./Filters";
const Header = () => {
  const [fullSearchBar, setFullSearchBar] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  document.addEventListener("scroll", () => {
    if (fullSearchBar === true) {
      setFullSearchBar(false);
    }

    const scroll = window.scrollY;
    if (scroll > 100) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
      setFullSearchBar(true);
    }
  });

  const variants = {
    initial: { top: 0 },
    animate: { top: "10rem" },
  };

  const searchBoxContentRenderer = () => {
    if (fullSearchBar) {
      return "where";
    }
    if (!fullSearchBar) {
      return "any where";
    }
  };

  return (
    <div>
      <Section cardProps={classes.card}>
        <div
          className={`${classes.wrapper} ${
            isFixed ? classes.p_fixed : classes.p_relative
          }`}
        >
          <div className={classes.header_container}>
            <div className={classes.header_left_side}>
              <button>asdf</button>
            </div>
            <motion.div
              className={`${classes.search_container} ${
                fullSearchBar ? classes.full : classes.less
              } `}
            >
              <motion.div
                className={classes.hidden_buttons_wrapper}
                initial={{ opacity: 0, height: 0, y: 0, height: "0" }}
                animate={{
                  opacity: fullSearchBar ? 1 : 0,
                  height: fullSearchBar ? "4rem" : "0",
                  y: fullSearchBar ? 0 : "-10%",
                }}
                transition={{
                  type: "just",
                  duration: 0.1,
                  delay: fullSearchBar ? 0.2 : 0,
                }}
              >
                <button className={classes.hidden_button}>Stays</button>
                <button className={classes.hidden_button}>Experiences</button>
                <button className={classes.hidden_button}>
                  Online Experiences
                </button>
              </motion.div>
              <motion.div
                className={classes.search_box}
                initial={{ width: "100%", heigh: "2rem", translateX: "0%" }}
                animate={{
                  width: fullSearchBar ? "140%" : "100%",
                  height: fullSearchBar ? "5rem" : "4rem",
                  translateX: fullSearchBar ? "-14.2%" : "0%",
                }}
                transition={{
                  bounce: 0,
                  type: "spring",
                  duration: 0.25,
                  delay: fullSearchBar ? 0.1 : 0,
                }}
                onClick={() => setFullSearchBar(!fullSearchBar)}
              >
                {searchBoxContentRenderer()}
              </motion.div>
            </motion.div>
            <div className={classes.header_right_side}>
              <button>sdfg</button>
              <button>sdfg</button>
              <button>sdfg</button>
            </div>
          </div>
        </div>
      </Section>
      <Filters />
    </div>
  );
};

export default Header;
