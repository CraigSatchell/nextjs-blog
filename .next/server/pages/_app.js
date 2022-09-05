(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3911:
/***/ ((module) => {

// Exports
module.exports = {
	"ul": "layout_ul__Rt1mc",
	"li": "layout_li__ZA3Af",
	"footer": "layout_footer__FuAbq"
};


/***/ }),

/***/ 9570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/dist/styled-jsx/style.js
var style = __webpack_require__(536);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/layout/layout.module.css
var layout_module = __webpack_require__(3911);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/DarkTheme.js



const DarkTheme = ()=>{
    return jsx_runtime_.jsx((style_default()), {
        id: "86f1e1f4d187b008",
        children: ":root{--background-color:black;--text-color:white}"
    });
};
/* harmony default export */ const components_DarkTheme = (DarkTheme);

;// CONCATENATED MODULE: ./components/layout/ThemeSwitcher.js





function loadDarkMode() {
    let value = localStorage.getItem("darkMode");
    if (value) {
        return JSON.parse(value);
    } else {
        return false;
    }
}
const ThemeSwitcher = ()=>{
    const { 0: darkMode , 1: setDarkMode  } = (0,external_react_.useState)(()=>{
        loadDarkMode;
    });
    const colorMode = darkMode ? "Light Mode" : "Dark Mode";
    function handleClick() {
        localStorage.setItem("darkMode", JSON.stringify(!darkMode));
        darkMode ? setDarkMode(false) : setDarkMode(true);
    }
    console.log("[ThemeSwitcher]", darkMode);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: handleClick,
                className: "jsx-44868225f396c5b6",
                children: colorMode
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "44868225f396c5b6",
                children: "button.jsx-44868225f396c5b6{background-color:#a1719d;padding:10px 25px;margin:0;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;height:40px;margin:10px 25px;font-weight:bold;border:none}"
            }),
            darkMode && /*#__PURE__*/ jsx_runtime_.jsx(components_DarkTheme, {}),
            " "
        ]
    });
};
/* harmony default export */ const layout_ThemeSwitcher = (ThemeSwitcher);

;// CONCATENATED MODULE: ./components/layout/header.js





const Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "jsx-b19f36d8aa66603a",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: "jsx-b19f36d8aa66603a",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "jsx-b19f36d8aa66603a" + " " + ((layout_module_default()).ul || ""),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "jsx-b19f36d8aa66603a",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: "My Blog | "
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "jsx-b19f36d8aa66603a" + " " + ((layout_module_default()).li || ""),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "jsx-b19f36d8aa66603a" + " " + ((layout_module_default()).li || ""),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/posts/first-post",
                                        children: "First Post"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "jsx-b19f36d8aa66603a" + " " + ((layout_module_default()).li || ""),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/posts",
                                        children: "Archives"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "jsx-b19f36d8aa66603a" + " " + ((layout_module_default()).li || ""),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/about",
                                        children: "About"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "jsx-b19f36d8aa66603a" + " " + ((layout_module_default()).li || ""),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/contactme",
                                        children: "Contact Me"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(layout_ThemeSwitcher, {})
                    ]
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "b19f36d8aa66603a",
                children: "nav.jsx-b19f36d8aa66603a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}header.jsx-b19f36d8aa66603a{background-color:#6b136b;-webkit-box-shadow:3px 3px 5px#666;-moz-box-shadow:3px 3px 5px#666;box-shadow:3px 3px 5px#666}"
            })
        ]
    });
};
/* harmony default export */ const header = (Header);

;// CONCATENATED MODULE: ./components/layout/footer.js


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: (layout_module_default()).footer,
        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "(C) Copyright 2022 - Craig Satchell - All Rights Reserved"
        })
    });
};
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./components/layout/layout.js



const Layout = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    });
};
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js



function App({ Component , pageProps  }) {
    console.log("[APP] render");
    return /*#__PURE__*/ jsx_runtime_.jsx(layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 536:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(1892).style


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1892:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/styled-jsx/dist/index/index.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664], () => (__webpack_exec__(9570)));
module.exports = __webpack_exports__;

})();