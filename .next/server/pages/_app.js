(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 291:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "Navigation_navbar__rwTIF",
	"nav": "Navigation_nav__7ieys",
	"scrolling-active": "Navigation_scrolling-active__rmO8G",
	"navbar-collapse": "Navigation_navbar-collapse__adciy",
	"nav-link": "Navigation_nav-link__g1e_V",
	"nav-logo": "Navigation_nav-logo__HtEUD",
	"navbarMenu": "Navigation_navbarMenu___54dV",
	"navbar-toggler": "Navigation_navbar-toggler__C4hcS"
};


/***/ }),

/***/ 412:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(168);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(183);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_analytics__WEBPACK_IMPORTED_MODULE_1__]);
_analytics__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Layout({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navigation__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_analytics__WEBPACK_IMPORTED_MODULE_1__/* .AnalyticsWrapper */ .K, {})
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Navigation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-bootstrap/Nav"
const Nav_namespaceObject = require("react-bootstrap/Nav");
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Navbar"
const Navbar_namespaceObject = require("react-bootstrap/Navbar");
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Container"
const Container_namespaceObject = require("react-bootstrap/Container");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Offcanvas"
const Offcanvas_namespaceObject = require("react-bootstrap/Offcanvas");
var Offcanvas_default = /*#__PURE__*/__webpack_require__.n(Offcanvas_namespaceObject);
// EXTERNAL MODULE: ./src/styles/Navigation.module.css
var Navigation_module = __webpack_require__(291);
var Navigation_module_default = /*#__PURE__*/__webpack_require__.n(Navigation_module);
;// CONCATENATED MODULE: ./components/Navigation/index.js






const Navigation = ()=>{
    const NavLink = [
        {
            "name": "Home",
            "link": "/"
        },
        {
            "name": "Projects",
            "link": "/projects"
        },
        {
            "name": "Contact",
            "link": "/contact"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()), {
        className: (Navigation_module_default()).navbar,
        collapseOnSelect: true,
        expand: "lg",
        variant: "dark",
        fixed: "top",
        "aria-label": "responsive navigation",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Toggle, {
                    className: (Navigation_module_default())["navbar-toggler"],
                    "aria-label": "responsive nav toggler",
                    "aria-controls": "responsive-navbar-nav"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Navbar_default()).Offcanvas, {
                    className: (Navigation_module_default())["navbar-toggler"],
                    id: "offcanvasNavbar",
                    "aria-labelledby": "offcanvasNavbarLabel",
                    placement: "end",
                    "aria-label": "Toggle collapsible navigation",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Offcanvas_default()).Header, {
                            closeButton: true
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Offcanvas_default()).Body, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()), {
                                className: "justify-content-end flex-grow-1 pe-3",
                                children: NavLink.map((nav)=>{
                                    /*#__PURE__*/ return jsx_runtime_.jsx((Nav_default()).Link, {
                                        href: nav === null || nav === void 0 ? void 0 : nav.link,
                                        "aria-label": `Navigation Link ${nav === null || nav === void 0 ? void 0 : nav.name}`,
                                        children: nav === null || nav === void 0 ? void 0 : nav.name
                                    }, nav === null || nav === void 0 ? void 0 : nav.name);
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navigation = (Navigation);


/***/ }),

/***/ 168:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ AnalyticsWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_1__]);
_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function AnalyticsWrapper() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_1__.Analytics, {});
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 730:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(412);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_3__]);
_components_Layout__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 90:
/***/ (() => {



/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 752:
/***/ ((module) => {

"use strict";
module.exports = import("@vercel/analytics/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(730));
module.exports = __webpack_exports__;

})();