"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/ThemeSwitcher.js":
/*!********************************************!*\
  !*** ./components/layout/ThemeSwitcher.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/next/dist/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _DarkTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DarkTheme */ \"./components/DarkTheme.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar ThemeSwitcher = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), darkMode = ref[0], setDarkMode = ref[1];\n    var colorMode = darkMode ? \"Light Mode\" : \"Dark Mode\";\n    fu;\n    console.log(\"[ThemeSwitcher]\", darkMode);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    darkMode ? setDarkMode(false) : setDarkMode(true);\n                },\n                className: \"jsx-44868225f396c5b6\",\n                children: colorMode\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\csatchell\\\\Desktop\\\\coding\\\\nextjs\\\\nextjs-blog\\\\components\\\\layout\\\\ThemeSwitcher.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"44868225f396c5b6\",\n                children: \"button.jsx-44868225f396c5b6{background-color:#a1719d;padding:10px 25px;margin:0;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;height:40px;margin:10px 25px;font-weight:bold;border:none}\"\n            }, void 0, false, void 0, _this),\n            darkMode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DarkTheme__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\csatchell\\\\Desktop\\\\coding\\\\nextjs\\\\nextjs-blog\\\\components\\\\layout\\\\ThemeSwitcher.js\",\n                lineNumber: 33,\n                columnNumber: 21\n            }, _this),\n            \" \"\n        ]\n    }, void 0, true);\n};\n_s(ThemeSwitcher, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = ThemeSwitcher;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeSwitcher);\nvar _c;\n$RefreshReg$(_c, \"ThemeSwitcher\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9UaGVtZVN3aXRjaGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFBMEI7QUFDTztBQUNJO0FBRXJDLElBQU1HLGFBQWEsR0FBRyxXQUFNOztJQUMxQixJQUFnQ0YsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUF4Q0csUUFBUSxHQUFpQkgsR0FBZSxHQUFoQyxFQUFFSSxXQUFXLEdBQUlKLEdBQWUsR0FBbkI7SUFDNUIsSUFBTUssU0FBUyxHQUFHRixRQUFRLEdBQUcsWUFBWSxHQUFHLFdBQVc7SUFFdkRHLEVBQUU7SUFDRkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLEVBQUNMLFFBQVEsQ0FBQyxDQUFDO0lBRXhDLHFCQUNFOzswQkFDRSw4REFBQ00sUUFBTTtnQkFDTEMsT0FBTyxFQUFFLFdBQU07b0JBQ2JQLFFBQVEsR0FBR0MsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHQSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ25EOzswQkFFQUMsU0FBUzs7Ozs7cUJBQ0g7Ozs7O1lBYVBGLFFBQVEsa0JBQUksOERBQUNGLGtEQUFTOzs7O3FCQUFHO1lBQUUsR0FBQzs7b0JBQzdCLENBQ0g7Q0FDSDtHQS9CS0MsYUFBYTtBQUFiQSxLQUFBQSxhQUFhO0FBaUNuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L1RoZW1lU3dpdGNoZXIuanM/ODAxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEYXJrVGhlbWUgZnJvbSBcIi4uL0RhcmtUaGVtZVwiO1xyXG5cclxuY29uc3QgVGhlbWVTd2l0Y2hlciA9ICgpID0+IHtcclxuICBjb25zdCBbZGFya01vZGUsIHNldERhcmtNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBjb2xvck1vZGUgPSBkYXJrTW9kZSA/IFwiTGlnaHQgTW9kZVwiIDogXCJEYXJrIE1vZGVcIjtcclxuXHJcbiAgZnVcclxuICBjb25zb2xlLmxvZygnW1RoZW1lU3dpdGNoZXJdJyxkYXJrTW9kZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgZGFya01vZGUgPyBzZXREYXJrTW9kZShmYWxzZSkgOiBzZXREYXJrTW9kZSh0cnVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NvbG9yTW9kZX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ExNzE5ZDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHggMjVweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICB7IGRhcmtNb2RlICYmIDxEYXJrVGhlbWUgLz4gfSB7LyogU3R5bGVzIE11c3QgZW5jYXBzdWxhdGVkIGpzeCBpbiBjb21wb25lbnQuIENhbm5vdCB1c2UgY29uZGl0aW9uYWwgcmVuZGVyIGRpcmVjdGx5ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoZW1lU3dpdGNoZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRGFya1RoZW1lIiwiVGhlbWVTd2l0Y2hlciIsImRhcmtNb2RlIiwic2V0RGFya01vZGUiLCJjb2xvck1vZGUiLCJmdSIsImNvbnNvbGUiLCJsb2ciLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/ThemeSwitcher.js\n"));

/***/ })

});