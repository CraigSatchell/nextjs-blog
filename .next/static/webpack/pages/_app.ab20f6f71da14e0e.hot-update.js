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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/next/dist/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _DarkTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DarkTheme */ \"./components/DarkTheme.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar ThemeSwitcher = function() {\n    var loadDarkMode = function loadDarkMode() {\n        var value = localStorage.getItem(\"darkMode\");\n        return;\n    };\n    var handleClick = function handleClick() {\n        localStorage.setItem(\"darkMode\", JSON.stringify(!darkMode));\n        darkMode ? setDarkMode(false) : setDarkMode(true);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), darkMode = ref[0], setDarkMode = ref[1];\n    var colorMode = darkMode ? \"Light Mode\" : \"Dark Mode\";\n    console.log(\"[ThemeSwitcher]\", darkMode);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                className: \"jsx-44868225f396c5b6\",\n                children: colorMode\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\csatchell\\\\Desktop\\\\coding\\\\nextjs\\\\nextjs-blog\\\\components\\\\layout\\\\ThemeSwitcher.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"44868225f396c5b6\",\n                children: \"button.jsx-44868225f396c5b6{background-color:#a1719d;padding:10px 25px;margin:0;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;height:40px;margin:10px 25px;font-weight:bold;border:none}\"\n            }, void 0, false, void 0, _this),\n            darkMode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DarkTheme__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\csatchell\\\\Desktop\\\\coding\\\\nextjs\\\\nextjs-blog\\\\components\\\\layout\\\\ThemeSwitcher.js\",\n                lineNumber: 40,\n                columnNumber: 21\n            }, _this),\n            \" \"\n        ]\n    }, void 0, true);\n};\n_s(ThemeSwitcher, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = ThemeSwitcher;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeSwitcher);\nvar _c;\n$RefreshReg$(_c, \"ThemeSwitcher\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9UaGVtZVN3aXRjaGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFBMEI7QUFDTztBQUNJO0FBRXJDLElBQU1HLGFBQWEsR0FBRyxXQUFNO1FBSWpCQyxZQUFZLEdBQXJCLFNBQVNBLFlBQVksR0FBRztRQUN0QixJQUFNQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUM5QyxPQUFNO0tBQ1A7UUFFUUMsV0FBVyxHQUFwQixTQUFTQSxXQUFXLEdBQUc7UUFDckJGLFlBQVksQ0FBQ0csT0FBTyxDQUFDLFVBQVUsRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM1REEsUUFBUSxHQUFHQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUdBLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNuRDs7SUFYRCxJQUFnQ1osR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUF4Q1csUUFBUSxHQUFpQlgsR0FBZSxHQUFoQyxFQUFFWSxXQUFXLEdBQUlaLEdBQWUsR0FBbkI7SUFDNUIsSUFBTWEsU0FBUyxHQUFHRixRQUFRLEdBQUcsWUFBWSxHQUFHLFdBQVc7SUFZdkRHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixFQUFDSixRQUFRLENBQUMsQ0FBQztJQUV4QyxxQkFDRTs7MEJBQ0UsOERBQUNLLFFBQU07Z0JBQ0xDLE9BQU8sRUFBRVYsV0FBVzs7MEJBRW5CTSxTQUFTOzs7OztxQkFDSDs7Ozs7WUFhUEYsUUFBUSxrQkFBSSw4REFBQ1Ysa0RBQVM7Ozs7cUJBQUc7WUFBRSxHQUFDOztvQkFDN0IsQ0FDSDtDQUNIO0dBdENLQyxhQUFhO0FBQWJBLEtBQUFBLGFBQWE7QUF3Q25CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvVGhlbWVTd2l0Y2hlci5qcz84MDEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERhcmtUaGVtZSBmcm9tIFwiLi4vRGFya1RoZW1lXCI7XHJcblxyXG5jb25zdCBUaGVtZVN3aXRjaGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkYXJrTW9kZSwgc2V0RGFya01vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNvbG9yTW9kZSA9IGRhcmtNb2RlID8gXCJMaWdodCBNb2RlXCIgOiBcIkRhcmsgTW9kZVwiO1xyXG5cclxuICBmdW5jdGlvbiBsb2FkRGFya01vZGUoKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrTW9kZScpO1xyXG4gICAgcmV0dXJuIFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFya01vZGUnLCBKU09OLnN0cmluZ2lmeSghZGFya01vZGUpKTtcclxuICAgIGRhcmtNb2RlID8gc2V0RGFya01vZGUoZmFsc2UpIDogc2V0RGFya01vZGUodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZygnW1RoZW1lU3dpdGNoZXJdJyxkYXJrTW9kZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgID5cclxuICAgICAgICB7Y29sb3JNb2RlfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTE3MTlkO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIG1hcmdpbjogMTBweCAyNXB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIHsgZGFya01vZGUgJiYgPERhcmtUaGVtZSAvPiB9IHsvKiBTdHlsZXMgTXVzdCBlbmNhcHN1bGF0ZWQganN4IGluIGNvbXBvbmVudC4gQ2Fubm90IHVzZSBjb25kaXRpb25hbCByZW5kZXIgZGlyZWN0bHkgKi99XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhlbWVTd2l0Y2hlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEYXJrVGhlbWUiLCJUaGVtZVN3aXRjaGVyIiwibG9hZERhcmtNb2RlIiwidmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGFuZGxlQ2xpY2siLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhcmtNb2RlIiwic2V0RGFya01vZGUiLCJjb2xvck1vZGUiLCJjb25zb2xlIiwibG9nIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/ThemeSwitcher.js\n"));

/***/ })

});