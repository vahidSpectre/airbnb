import React, { useEffect, useState } from "react";

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
    if (scroll !== 0) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
      setFullSearchBar(true);
    }
  });

  return (
    <Section>
      <div
        className={`${classes.wrapper} ${
          isFixed ? classes.p_fixed : classes.p_relative
        }`}
      >
        <div className={classes.header_container}>
          <div className={classes.header_left_side}>
            <button>asdf</button>
          </div>
          <div
            className={`${classes.search_container} ${
              fullSearchBar ? classes.full : classes.less
            } `}
            onClick={() => setFullSearchBar(!fullSearchBar)}
          >
            dsafasfdsadf
          </div>
          <div className={classes.header_right_side}>
            <button>sdfg</button>
            <button>sdfg</button>
            <button>sdfg</button>
          </div>
        </div>
        <Filters />
      </div>
    </Section>
  );
};

export default Header;
