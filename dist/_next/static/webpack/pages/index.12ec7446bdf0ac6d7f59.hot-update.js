webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Version.js":
/*!*******************************!*\
  !*** ./components/Version.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/tej/Sites/jackal/components/Version.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Version = function Version() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      show = _useState[0],\n      setShow = _useState[1];\n\n  if (show) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Alert\"], {\n      className: \" mt-2 mb-3\",\n      onClose: function onClose() {\n        return setShow(false);\n      },\n      variant: \"success\",\n      dismissible: true,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Alert\"].Heading, {\n        children: [\"Version: \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n          children: \"1.2\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 20\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"text-left m-0 mb-2\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n          children: \"HTTPS Bug:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, _this), \" Vercel does not support disabling HTTPS on server by default. Because of this reason, we have moved this application to\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"http://jackal.surge.sh/\",\n          target: \"_blank\",\n          rel: \"noopener noreferrer\",\n          children: \"SURGE\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, _this), \"to make sure our visitors do not face any issues with their streams.\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, _this);\n  }\n\n  return null;\n};\n\n_s(Version, \"vfh/DqFDMxhJHyczn42K3OB7AlU=\");\n\n_c = Version;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Version);\n\nvar _c;\n\n$RefreshReg$(_c, \"Version\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WZXJzaW9uLmpzPzA5MWUiXSwibmFtZXMiOlsiVmVyc2lvbiIsInVzZVN0YXRlIiwic2hvdyIsInNldFNob3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxDQUFDLElBQUQsQ0FEWjtBQUFBLE1BQ2JDLElBRGE7QUFBQSxNQUNQQyxPQURPOztBQUVwQixNQUFJRCxJQUFKLEVBQVU7QUFDUix3QkFDRSxxRUFBQyxxREFBRDtBQUNFLGVBQVMsRUFBQyxZQURaO0FBRUUsYUFBTyxFQUFFO0FBQUEsZUFBTUMsT0FBTyxDQUFDLEtBQUQsQ0FBYjtBQUFBLE9BRlg7QUFHRSxhQUFPLEVBQUMsU0FIVjtBQUlFLGlCQUFXLE1BSmI7QUFBQSw4QkFNRSxxRUFBQyxxREFBRCxDQUFPLE9BQVA7QUFBQSw2Q0FDVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixlQVNFO0FBQUcsaUJBQVMsRUFBQyxvQkFBYjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLDJJQUlFO0FBQ0UsY0FBSSxFQUFDLHlCQURQO0FBRUUsZ0JBQU0sRUFBQyxRQUZUO0FBR0UsYUFBRyxFQUFDLHFCQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBeUJEOztBQUNELFNBQU8sSUFBUDtBQUNELENBOUJEOztHQUFNSCxPOztLQUFBQSxPO0FBK0JTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVmVyc2lvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmNvbnN0IFZlcnNpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKHRydWUpO1xuICBpZiAoc2hvdykge1xuICAgIHJldHVybiAoXG4gICAgICA8QWxlcnRcbiAgICAgICAgY2xhc3NOYW1lPVwiIG10LTIgbWItM1wiXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3coZmFsc2UpfVxuICAgICAgICB2YXJpYW50PVwic3VjY2Vzc1wiXG4gICAgICAgIGRpc21pc3NpYmxlXG4gICAgICA+XG4gICAgICAgIDxBbGVydC5IZWFkaW5nPlxuICAgICAgICAgIFZlcnNpb246IDxzdHJvbmc+MS4yPC9zdHJvbmc+XG4gICAgICAgIDwvQWxlcnQuSGVhZGluZz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IG0tMCBtYi0yXCI+XG4gICAgICAgICAgPHN0cm9uZz5IVFRQUyBCdWc6PC9zdHJvbmc+IFZlcmNlbCBkb2VzIG5vdCBzdXBwb3J0IGRpc2FibGluZyBIVFRQUyBvblxuICAgICAgICAgIHNlcnZlciBieSBkZWZhdWx0LiBCZWNhdXNlIG9mIHRoaXMgcmVhc29uLCB3ZSBoYXZlIG1vdmVkIHRoaXNcbiAgICAgICAgICBhcHBsaWNhdGlvbiB0b1xuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cDovL2phY2thbC5zdXJnZS5zaC9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNVUkdFXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIHRvIG1ha2Ugc3VyZSBvdXIgdmlzaXRvcnMgZG8gbm90IGZhY2UgYW55IGlzc3VlcyB3aXRoIHRoZWlyIHN0cmVhbXMuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvQWxlcnQ+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5leHBvcnQgZGVmYXVsdCBWZXJzaW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Version.js\n");

/***/ })

})