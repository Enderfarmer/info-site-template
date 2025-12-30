import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import defaults from "./contentDefaults.json";
import { ThemeContext } from "./theme";
import Wrapper from "./components/Wrapper";
import "./index.css";
import Content from "./pages/Content";
import PageGen from "./pages/Page";
import Search from "./pages/Search";
import React from "react";

/**
 * The info site generator main component
 * @returns A ready app based on the data provided
 */
function SiteGen({
  data_provided,
  children
}) {
  const validData = {
    ...defaults,
    ...data_provided
  };
  Object.values(validData.pages).forEach(page => {
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
  }), React.Children.map(children, child => {
    // Check if it's a valid React element (not a string or null)
    if (! /*#__PURE__*/React.isValidElement(child)) return null;

    // Tell TS this element has props with an 'id'
    const pageElement = child;
    const pageId = pageElement.props.id;

    // Get the metadata from our data object
    const pageMetadata = validData.pages[pageId];
    if (!pageMetadata) {
      console.warn(`No metadata found in data object for page ID: ${pageId}`);
      return null;
    }
    return /*#__PURE__*/React.createElement(Route, {
      key: pageId,
      path: pageMetadata.slug,
      element: /*#__PURE__*/React.createElement(Wrapper, {
        data: validData,
        component: /*#__PURE__*/React.createElement(PageGen, {
          page: pageElement,
          data: pageMetadata
        })
      })
    });
  }))));
}
export default SiteGen;