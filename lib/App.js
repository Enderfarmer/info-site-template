"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRouter = require("react-router");
var _Home = _interopRequireDefault(require("./pages/Home"));
var _contentDefaults = _interopRequireDefault(require("./contentDefaults.json"));
var _theme = require("./theme");
var _Wrapper = _interopRequireDefault(require("./components/Wrapper"));
require("./index.css");
var _Content = _interopRequireDefault(require("./pages/Content"));
var _Page = _interopRequireDefault(require("./pages/Page"));
var _Search = _interopRequireDefault(require("./pages/Search"));
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * The info site generator main component
 * @returns A ready app based on the data provided
 */
function SiteGen(_ref) {
  let {
    data_provided,
    children
  } = _ref;
  const childRenderCallback = child => {
    // Check if it's a valid React element (not a string or null)
    if (! /*#__PURE__*/_react.default.isValidElement(child)) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouter.Route, {
        path: child.slug,
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Wrapper.default, {
          component: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Page.default, {
            data: child
          }),
          data: validData
        })
      });
    }
    const pageElement = child;
    // 1. Get the 'type' (this is the actual function or class)
    const componentType = child.type;

    // 2. Extract the name
    // We check for 'displayName' first (React convention) then 'name'
    let componentName = "";
    if (typeof componentType === "string") {
      componentName = componentType; // It's a "div", "span", etc.
    } else {
      // It's a function or class component
      componentName = componentType.displayName || componentType.name;
    }

    // 3. Fallback logic: Use prop ID, then function name
    const pageId = pageElement.props.id || componentName.toLowerCase();
    console.log("Detected ID: ".concat(pageId)); // Helpful for debugging!

    const pageMetadata = validData.pages[pageId];
    if (!pageMetadata) {
      console.warn("No metadata found in data object for page ID: ".concat(pageId));
      return null;
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouter.Route, {
      path: pageMetadata.slug,
      element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Wrapper.default, {
        data: validData,
        component: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Page.default, {
          page: pageElement,
          data: pageMetadata
        })
      })
    }, pageId);
  };
  const validData = _objectSpread(_objectSpread({}, _contentDefaults.default), data_provided);
  Object.values(validData.pages).forEach(page => {
    var _page$withLink;
    page.withLink = (_page$withLink = page.withLink) !== null && _page$withLink !== void 0 ? _page$withLink : true;
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_theme.ThemeContext.Provider, {
    value: localStorage.getItem("theme") || "light",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouter.HashRouter, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouter.Routes, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouter.Route, {
          index: true,
          element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Wrapper.default, {
            data: validData,
            component: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Home.default, {
              data: validData
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouter.Route, {
          path: "all-content",
          element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Wrapper.default, {
            data: validData,
            component: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Content.default, {
              data: validData
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouter.Route, {
          path: "search",
          element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Wrapper.default, {
            data: validData,
            component: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Search.default, {
              data: validData
            })
          })
        }), children ? _react.default.Children.map(children, childRenderCallback) : _contentDefaults.default.pages.map(childRenderCallback)]
      })
    })
  });
}
var _default = exports.default = SiteGen;