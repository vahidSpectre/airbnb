import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Section from "../components/Section";
import classes from "./Header.module.css";
import Filters from "./Filters";
const Header = () => {
  const [fullSearchBar, setFullSearchBar] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [staysIsFocused, setStaysIsFocused] = useState(false);
  const [expIsFocused, setExpIsFocused] = useState(false);
  const [whereIsFocused, setWhereIsFocused] = useState(false);
  const [checkinIsFocused, setCheckinIsFocused] = useState(false);
  const [dateIsFocused, setDateIsFocused] = useState(false);
  const [ckeckoutIsFocused, setCkeckoutIsFocused] = useState(false);
  const [whoIsFocused, setWhoIsFocused] = useState(false);

  const stays = useRef();
  const exp = useRef();

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
      setStaysIsFocused(true);
    }
  });

  const variants = {
    initial: { top: 0 },
    animate: { top: "10rem" },
  };

  const searchBoxContentRenderer = () => {
    if (!fullSearchBar) {
      return (
        <div className={classes.search_bar_main}>
          <motion.button
            className={classes.where}
            initial={{ height: "4.5rem" }}
            animate={{ height: fullSearchBar ? "4.5rem" : "4rem" }}
            transition={{ delay: fullSearchBar ? 0.2 : 0, duration: 0 }}
            style={{ textAlign: !fullSearchBar ? "center" : "right" }}
          >
            <strong>Anywhere</strong>
            <div className={classes.where_content}>asdfasdfasdf</div>
          </motion.button>
          <motion.button
            className={classes.date}
            initial={{ height: "4.5rem" }}
            animate={{ height: fullSearchBar ? "4.5rem" : "4rem" }}
            transition={{ delay: fullSearchBar ? 0.2 : 0, duration: 0 }}
            style={{ textAlign: !fullSearchBar ? "center" : "right" }}
          >
            <strong>Any week</strong>
          </motion.button>
          <motion.button
            className={classes.who}
            initial={{ height: "4.5rem" }}
            animate={{ height: fullSearchBar ? "4.5rem" : "4rem" }}
            transition={{ delay: fullSearchBar ? 0.2 : 0, duration: 0 }}
            style={{ textAlign: "center", padding: "0.5rem" }}
          >
            Add gusts
            <motion.button className={classes.svg}>
              <img src="./assets/svgs/header/search.svg" alt="" />
            </motion.button>
          </motion.button>
        </div>
      );
    }
    if (fullSearchBar && staysIsFocused) {
      return (
        <div className={classes.search_bar_main}>
          <motion.button
            className={classes.where}
            initial={{ height: "4.5rem" }}
            animate={{ height: fullSearchBar ? "4.5rem" : "4rem" }}
            transition={{ delay: fullSearchBar ? 0.2 : 0, duration: 0 }}
            onFocus={() => setWhereIsFocused(true)}
            onBlur={() => setWhereIsFocused(false)}
          >
            afsdg
            <div className={classes.where_content}>asdfasdfasdf</div>
          </motion.button>
          <motion.button
            className={classes.check_in}
            initial={{ height: "4.5rem" }}
            animate={{ height: fullSearchBar ? "4.5rem" : "4rem" }}
            transition={{ delay: fullSearchBar ? 0.2 : 0, duration: 0 }}
            onFocus={() => setCheckinIsFocused(true)}
            onBlur={() => setCheckinIsFocused(false)}
            
          >
            asfg
            <div className={classes.check_in_content}>in</div>
          </motion.button>
          <motion.button
            className={classes.check_out}
            initial={{ height: "4.5rem" }}
            animate={{ height: fullSearchBar ? "4.5rem" : "4rem" }}
            transition={{ delay: fullSearchBar ? 0.2 : 0, duration: 0 }}
            onFocus={() => setCkeckoutIsFocused(true)}
            onBlur={() => setCkeckoutIsFocused(false)}
          >
            asfg
            <div className={classes.check_out_content}>uot</div>
          </motion.button>
          <motion.button
            className={classes.who}
            initial={{ height: "4.5rem" }}
            animate={{ height: fullSearchBar ? "4.5rem" : "4rem" }}
            transition={{ delay: fullSearchBar ? 0.2 : 0, duration: 0 }}
            onFocus={() => setWhoIsFocused(true)}
            onBlur={() => setWhoIsFocused(false)}
          >
            asfg
            <div className={classes.who_content}>asdfasdfasdf</div>
            <button
              className={`${classes.svg} ${
                whoIsFocused && classes.extended_svg
              }`}
            >
              <img src="./assets/svgs/header/search.svg" alt="" />
              <p style={{ display: whoIsFocused ? "block" : "none" }}>Search</p>
            </button>
          </motion.button>
        </div>
      );
    }
    if (fullSearchBar && expIsFocused) {
      return (
        <div className={classes.search_bar_main}>
          <motion.button
            className={classes.where}
            initial={{ height: "4.5rem" }}
            animate={{ height: fullSearchBar ? "4.5rem" : "4rem" }}
            transition={{ delay: fullSearchBar ? 0.2 : 0, duration: 0 }}
            onFocus={() => setWhereIsFocused(true)}
            onBlur={() => setWhereIsFocused(false)}
          >
            a
            <div className={classes.where_content}>asdfasdfasdf</div>
          </motion.button>
          <motion.button
            className={classes.date}
            initial={{ height: "4.5rem" }}
            animate={{ height: fullSearchBar ? "4.5rem" : "4rem" }}
            transition={{ delay: fullSearchBar ? 0.2 : 0, duration: 0 }}
            onFocus={() => setDateIsFocused(true)}
          >
            data <div className={`${classes.date_content}`}>ff</div>
          </motion.button>
          <motion.button
            className={classes.who}
            initial={{ height: "4.5rem" }}
            animate={{ height: fullSearchBar ? "4.5rem" : "4rem" }}
            transition={{ delay: fullSearchBar ? 0.2 : 0, duration: 0 }}
            onFocus={() => setWhoIsFocused(true)}
            onBlur={() => setWhoIsFocused(false)}
          >
            asfg
            <div className={classes.who_content}>asdfasdfasdf</div>
            <button
              className={`${classes.svg} ${
                whoIsFocused && classes.extended_svg
              }`}
            >
              <img src="./assets/svgs/header/search.svg" alt="" />
              <p style={{ display: whoIsFocused ? "block" : "none" }}>Search</p>
            </button>
          </motion.button>
        </div>
      );
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
              <button>
                <img src="./assets/svgs/header/logo.svg" alt="" />
              </button>
            </div>
            <motion.div
              className={`${classes.search_container} ${
                fullSearchBar ? classes.full : classes.less
              } `}
            >
              <motion.div
                className={classes.hidden_buttons_wrapper}
                initial={{ opacity: 0, height: 0, y: 0 }}
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
                <button
                  className={`${classes.hidden_button} ${
                    staysIsFocused && classes.hidden_button_active
                  }`}
                  onClick={() => {
                    setStaysIsFocused(true);
                    setExpIsFocused(false);
                  }}
                  ref={stays}
                >
                  Stays
                </button>
                <button
                  className={`${classes.hidden_button} ${
                    expIsFocused && classes.hidden_button_active
                  }`}
                  onClick={() => {
                    setStaysIsFocused(false);
                    setExpIsFocused(true);
                  }}
                  ref={exp}
                >
                  Experiences
                </button>
                <button className={classes.hidden_button}>
                  Online Experiences
                </button>
              </motion.div>
              <motion.div
                className={classes.search_box}
                initial={{ width: "100%", heigh: "4rem", translateX: "0%" }}
                animate={{
                  width: fullSearchBar ? "140%" : "50%",
                  height: fullSearchBar ? "4.5rem" : "4rem",
                }}
                transition={{
                  bounce: 0,
                  type: "spring",
                  duration: 0.2,
                }}
                onClick={() => {
                  setFullSearchBar(true);
                  !fullSearchBar && setStaysIsFocused(true);
                }}
              >
                {searchBoxContentRenderer()}
              </motion.div>
            </motion.div>
            <div className={classes.header_right_side}>
              <button>Airbnb your home</button>
              <button>sdfg</button>
              <button>sdfg</button>
            </div>
          </div>
        </div>
        <div
          className={`${classes.backdrop} ${
            fullSearchBar ? classes.db : classes.dn
          }`}
          onClick={() => {
            setFullSearchBar(false);
            setStaysIsFocused(false);
            setExpIsFocused(false);
            stays.current.blur();
            exp.current.blur();
          }}
        ></div>
      </Section>
      <Filters />
    </div>
  );
};

export default Header;
