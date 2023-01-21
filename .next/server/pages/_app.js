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
	"navbar-toggler": "Navigation_navbar-toggler__C4hcS",
	"desktop_links": "Navigation_desktop_links__2NUpc"
};


/***/ }),

/***/ 384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(90);
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
;// CONCATENATED MODULE: ./src/components/Navigation/index.js






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
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Toggle, {
                    "aria-controls": "responsive-navbar-nav"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Collapse, {
                    id: "responsive-navbar-nav",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()), {
                        className: "desktop_links",
                        children: NavLink.map((nav)=>{
                            /*#__PURE__*/ return jsx_runtime_.jsx((Nav_default()).Link, {
                                href: nav === null || nav === void 0 ? void 0 : nav.link,
                                children: nav === null || nav === void 0 ? void 0 : nav.name
                            }, nav === null || nav === void 0 ? void 0 : nav.name);
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Navbar_default()).Offcanvas, {
                    className: "navbar-toggler",
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

;// CONCATENATED MODULE: ./src/components/Layout.js


function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navigation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/pages/_app.js




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(384));
module.exports = __webpack_exports__;

})();