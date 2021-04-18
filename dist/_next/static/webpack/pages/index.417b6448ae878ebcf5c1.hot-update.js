webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Listing.js":
/*!*******************************!*\
  !*** ./components/Listing.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_tej_Sites_jackal_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icon */ \"./components/Icon.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-copy-to-clipboard */ \"./node_modules/react-copy-to-clipboard/lib/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-device-detect */ \"./node_modules/react-device-detect/main.js\");\n/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/Users/tej/Sites/jackal/components/Listing.js\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_tej_Sites_jackal_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar Listing = function Listing(_ref) {\n  var item = _ref.item,\n      channel = _ref.channel,\n      setChannel = _ref.setChannel;\n\n  var handlePlay = function handlePlay(currentUrl) {\n    if (react_device_detect__WEBPACK_IMPORTED_MODULE_7__[\"isBrowser\"]) {\n      setChannel(_objectSpread(_objectSpread({}, channel), {}, {\n        url: currentUrl,\n        keyword: \"\"\n      }));\n    }\n\n    if (react_device_detect__WEBPACK_IMPORTED_MODULE_7__[\"isMobile\"]) {\n      window.open(currentUrl, \"_blank\");\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Table\"], {\n    variant: \"dark\",\n    striped: true,\n    responsive: true,\n    borderless: true,\n    className: \"m-0\",\n    size: \"sm\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"thead\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n          className: \"p-3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n            children: \"Channel\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n          className: \"p-3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n            children: \"Controls\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n          className: \"p-3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n            children: \"Status\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n      children: item.map(function (j, id) {\n        var title = j.title,\n            url = j.url;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n            className: \"text-wrap px-3 vm h-100\",\n            children: [++id, \": \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n              children: title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 25\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n            className: \"text-wrap p-3\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"ButtonGroup\"], {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n                variant: \"success\",\n                className: \"shadow-lg\",\n                onClick: function onClick() {\n                  return handlePlay(url);\n                },\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__[\"FaPlayCircle\"], {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 59,\n                    columnNumber: 23\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 58,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 53,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__[\"CopyToClipboard\"], {\n                text: url,\n                onCopy: function onCopy() {\n                  return alert(\"URL copied successfully!\");\n                },\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n                  variant: \"info\",\n                  className: \"shadow-lg\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__[\"FaRegCopy\"], {}, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 68,\n                      columnNumber: 25\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 67,\n                    columnNumber: 23\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 66,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 62,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 15\n          }, _this)]\n        }, id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Listing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Listing);\n\nvar _c;\n\n$RefreshReg$(_c, \"Listing\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0aW5nLmpzPzcwZmUiXSwibmFtZXMiOlsiTGlzdGluZyIsIml0ZW0iLCJjaGFubmVsIiwic2V0Q2hhbm5lbCIsImhhbmRsZVBsYXkiLCJjdXJyZW50VXJsIiwiaXNCcm93c2VyIiwidXJsIiwia2V5d29yZCIsImlzTW9iaWxlIiwid2luZG93Iiwib3BlbiIsIm1hcCIsImoiLCJpZCIsInRpdGxlIiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQW1DO0FBQUEsTUFBaENDLElBQWdDLFFBQWhDQSxJQUFnQztBQUFBLE1BQTFCQyxPQUEwQixRQUExQkEsT0FBMEI7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUNqRCxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxVQUFELEVBQWdCO0FBQ2pDLFFBQUlDLDZEQUFKLEVBQWU7QUFDYkgsZ0JBQVUsaUNBQ0xELE9BREs7QUFFUkssV0FBRyxFQUFFRixVQUZHO0FBR1JHLGVBQU8sRUFBRTtBQUhELFNBQVY7QUFLRDs7QUFDRCxRQUFJQyw0REFBSixFQUFjO0FBQ1pDLFlBQU0sQ0FBQ0MsSUFBUCxDQUFZTixVQUFaLEVBQXdCLFFBQXhCO0FBQ0Q7QUFDRixHQVhEOztBQVlBLHNCQUNFLHFFQUFDLHFEQUFEO0FBQ0UsV0FBTyxFQUFDLE1BRFY7QUFFRSxXQUFPLE1BRlQ7QUFHRSxjQUFVLE1BSFo7QUFJRSxjQUFVLE1BSlo7QUFLRSxhQUFTLEVBQUMsS0FMWjtBQU1FLFFBQUksRUFBQyxJQU5QO0FBQUEsNEJBUUU7QUFBQSw2QkFDRTtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQyxLQUFkO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBSSxtQkFBUyxFQUFDLEtBQWQ7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFPRTtBQUFJLG1CQUFTLEVBQUMsS0FBZDtBQUFBLGlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkYsZUFxQkU7QUFBQSxnQkFDR0osSUFBSSxDQUFDVyxHQUFMLENBQVMsVUFBQ0MsQ0FBRCxFQUFJQyxFQUFKLEVBQVc7QUFBQSxZQUNYQyxLQURXLEdBQ0lGLENBREosQ0FDWEUsS0FEVztBQUFBLFlBQ0pSLEdBREksR0FDSU0sQ0FESixDQUNKTixHQURJO0FBRW5CLDRCQUNFO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLHlCQUFkO0FBQUEsdUJBQ0csRUFBRU8sRUFETCxxQkFDVTtBQUFBLHdCQUFTQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBSSxxQkFBUyxFQUFDLGVBQWQ7QUFBQSxtQ0FDRSxxRUFBQywyREFBRDtBQUFBLHNDQUNFLHFFQUFDLHNEQUFEO0FBQ0UsdUJBQU8sRUFBQyxTQURWO0FBRUUseUJBQVMsRUFBQyxXQUZaO0FBR0UsdUJBQU8sRUFBRTtBQUFBLHlCQUFNWCxVQUFVLENBQUNHLEdBQUQsQ0FBaEI7QUFBQSxpQkFIWDtBQUFBLHVDQUtFLHFFQUFDLDZDQUFEO0FBQUEseUNBQ0UscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBVUUscUVBQUMsdUVBQUQ7QUFDRSxvQkFBSSxFQUFFQSxHQURSO0FBRUUsc0JBQU0sRUFBRTtBQUFBLHlCQUFNUyxLQUFLLENBQUMsMEJBQUQsQ0FBWDtBQUFBLGlCQUZWO0FBQUEsdUNBSUUscUVBQUMsc0RBQUQ7QUFBUSx5QkFBTyxFQUFDLE1BQWhCO0FBQXVCLDJCQUFTLEVBQUMsV0FBakM7QUFBQSx5Q0FDRSxxRUFBQyw2Q0FBRDtBQUFBLDJDQUNFLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBLFdBQVNGLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQThCRCxPQWhDQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyREQsQ0F4RUQ7O0tBQU1kLE87QUEwRVNBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MaXN0aW5nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4vSWNvblwiO1xuaW1wb3J0IHsgQnV0dG9uR3JvdXAsIEJ1dHRvbiwgVGFibGUgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgeyBDb3B5VG9DbGlwYm9hcmQgfSBmcm9tIFwicmVhY3QtY29weS10by1jbGlwYm9hcmRcIjtcbmltcG9ydCB7IEZhUmVnQ29weSwgRmFQbGF5Q2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBpc0Jyb3dzZXIsIGlzTW9iaWxlIH0gZnJvbSBcInJlYWN0LWRldmljZS1kZXRlY3RcIjtcblxuY29uc3QgTGlzdGluZyA9ICh7IGl0ZW0sIGNoYW5uZWwsIHNldENoYW5uZWwgfSkgPT4ge1xuICBjb25zdCBoYW5kbGVQbGF5ID0gKGN1cnJlbnRVcmwpID0+IHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBzZXRDaGFubmVsKHtcbiAgICAgICAgLi4uY2hhbm5lbCxcbiAgICAgICAgdXJsOiBjdXJyZW50VXJsLFxuICAgICAgICBrZXl3b3JkOiBcIlwiLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgd2luZG93Lm9wZW4oY3VycmVudFVybCwgXCJfYmxhbmtcIik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxUYWJsZVxuICAgICAgdmFyaWFudD1cImRhcmtcIlxuICAgICAgc3RyaXBlZFxuICAgICAgcmVzcG9uc2l2ZVxuICAgICAgYm9yZGVybGVzc1xuICAgICAgY2xhc3NOYW1lPVwibS0wXCJcbiAgICAgIHNpemU9XCJzbVwiXG4gICAgPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInAtM1wiPlxuICAgICAgICAgICAgPHN0cm9uZz5DaGFubmVsPC9zdHJvbmc+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicC0zXCI+XG4gICAgICAgICAgICA8c3Ryb25nPkNvbnRyb2xzPC9zdHJvbmc+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicC0zXCI+XG4gICAgICAgICAgICA8c3Ryb25nPlN0YXR1czwvc3Ryb25nPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5PlxuICAgICAgICB7aXRlbS5tYXAoKGosIGlkKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyB0aXRsZSwgdXJsIH0gPSBqO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHIga2V5PXtpZH0+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXdyYXAgcHgtMyB2bSBoLTEwMFwiPlxuICAgICAgICAgICAgICAgIHsrK2lkfTogPHN0cm9uZz57dGl0bGV9PC9zdHJvbmc+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXdyYXAgcC0zXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdy1sZ1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBsYXkodXJsKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEljb24+XG4gICAgICAgICAgICAgICAgICAgICAgPEZhUGxheUNpcmNsZSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ljb24+XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgdGV4dD17dXJsfVxuICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IGFsZXJ0KFwiVVJMIGNvcGllZCBzdWNjZXNzZnVsbHkhXCIpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJpbmZvXCIgY2xhc3NOYW1lPVwic2hhZG93LWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFSZWdDb3B5IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC90Ym9keT5cbiAgICA8L1RhYmxlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdGluZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Listing.js\n");

/***/ })

})