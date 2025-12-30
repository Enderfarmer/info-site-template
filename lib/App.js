import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "info-site-generator/src/pages/Home.tsx";
import defaults from "info-site-generator/src/contentDefaults.json";
import { ThemeContext } from "info-site-generator/src/theme.ts";
import Wrapper from "info-site-generator/src/components/Wrapper.tsx";
import { SiteData } from "info-site-generator/declarations";
import "./index.css";
import Content from "info-site-generator/src/pages/Content.tsx";
import PageGen from "info-site-generator/src/pages/Page.tsx";
import Search from "info-site-generator/src/pages/Search.tsx";
import React from "react";

/**
 * The info site generator
 * @param {SiteData} data The data of the site in SiteData format
 * @param {React.ReactNode[]} children The children
 * @returns A ready app based on the data provided
 */
function SiteGen({
  data,
  children
}) {
  // loop through the possible site data and set defaults
  let dataSecond = data;
  Object.keys(defaults).forEach(key => {
    dataSecond[key] = data[key] || defaults[key];
  });
  let validData = dataSecond;
  validData.pages?.forEach(page => {
    page.withLink = page.withLink ?? true;
    // page.withLink = page.withLink === undefined ? false : page.withLink;
  });
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: localStorage.getItem("theme") || "light"
  }, /*#__PURE__*/React.createElement(HashRouter, null, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    index: true,
    element: /*#__PURE__*/React.createElement(Wrapper, {
      data: validData,
      component: /*#__PURE__*/React.createElement(Home, {
        data: validData
      })
    })
  }), /*#__PURE__*/React.createElement(Route, {
    path: "all-content",
    element: /*#__PURE__*/React.createElement(Wrapper, {
      data: validData,
      component: /*#__PURE__*/React.createElement(Content, {
        data: validData
      })
    })
  }), /*#__PURE__*/React.createElement(Route, {
    path: "search",
    element: /*#__PURE__*/React.createElement(Wrapper, {
      data: validData,
      component: /*#__PURE__*/React.createElement(Search, {
        data: validData
      })
    })
  }), children.map(page => /*#__PURE__*/React.createElement(Route, {
    element: /*#__PURE__*/React.createElement(Wrapper, {
      data: validData,
      component: /*#__PURE__*/React.createElement(PageGen, {
        page: page
      })
    }),
    path: page.slug
  })))));
}
export default SiteGen;