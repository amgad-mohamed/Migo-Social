/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__, _context__WEBPACK_IMPORTED_MODULE_4__]);\n([js_cookie__WEBPACK_IMPORTED_MODULE_2__, _context__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst Nav = ()=>{\n    const { state, setState } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context__WEBPACK_IMPORTED_MODULE_4__.UserContext);\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const handleRouteChange = ()=>{\n            setCurrent(window.location.pathname);\n        };\n        handleRouteChange();\n        window.addEventListener(\"popstate\", handleRouteChange);\n        return ()=>{\n            window.removeEventListener(\"popstate\", handleRouteChange);\n        };\n    }, []);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const logout = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"token\");\n        js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"user\");\n        setState({\n            user: null,\n            token: null\n        });\n        router.push(\"/login\");\n    };\n    const isAuthenticated = !!state.token;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"nav container justify-content-between  my-3 gap-3 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        className: \"text-decoration-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/images/logo.png\",\n                            alt: \"logo\",\n                            className: \"logo\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\New Social App\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\New Social App\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"E:\\\\New Social App\\\\client\\\\components\\\\Nav.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                !isAuthenticated ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"d-flex align-items-center gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"login\",\n                            className: \"text-decoration-none nav-item-btn\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\New Social App\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\New Social App\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"register\",\n                            className: \"text-decoration-none nav-item-btn\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Register\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\New Social App\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\New Social App\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, undefined),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\New Social App\\\\client\\\\components\\\\Nav.js\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"d-flex align-items-center gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"user-name\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"text-decoration-none\",\n                                href: \"/user/dashboard\",\n                                children: [\n                                    \"Welcome \",\n                                    state.user.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\New Social App\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\New Social App\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            onClick: logout,\n                            className: \"text-decoration-none nav-item-btn\",\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\New Social App\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\New Social App\\\\client\\\\components\\\\Nav.js\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\New Social App\\\\client\\\\components\\\\Nav.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\New Social App\\\\client\\\\components\\\\Nav.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDRztBQUN3QjtBQUNmO0FBQ0Q7QUFFeEMsTUFBTU8sTUFBTTtJQUNWLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR1AsaURBQVVBLENBQUNHLGlEQUFXQTtJQUNsRCxNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFDdkNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVMsb0JBQW9CO1lBQ3hCRCxXQUFXRSxPQUFPQyxRQUFRLENBQUNDLFFBQVE7UUFDckM7UUFDQUg7UUFDQUMsT0FBT0csZ0JBQWdCLENBQUMsWUFBWUo7UUFDcEMsT0FBTztZQUNMQyxPQUFPSSxtQkFBbUIsQ0FBQyxZQUFZTDtRQUN6QztJQUNGLEdBQUcsRUFBRTtJQUNMLE1BQU1NLFNBQVNaLHNEQUFTQTtJQUV4QixNQUFNYSxTQUFTO1FBQ2JsQix3REFBYyxDQUFDO1FBQ2ZBLHdEQUFjLENBQUM7UUFDZlEsU0FBUztZQUFFWSxNQUFNO1lBQU1DLE9BQU87UUFBSztRQUNuQ0osT0FBT0ssSUFBSSxDQUFDO0lBQ2Q7SUFDQSxNQUFNQyxrQkFBa0IsQ0FBQyxDQUFDaEIsTUFBTWMsS0FBSztJQUNyQyxxQkFDRSw4REFBQ0c7a0JBQ0MsNEVBQUNDO1lBQUdDLFdBQVU7OzhCQUNaLDhEQUFDQzs4QkFDQyw0RUFBQzVCLGtEQUFJQTt3QkFBQzZCLE1BQUs7d0JBQUlGLFdBQVU7a0NBQ3ZCLDRFQUFDRzs0QkFBSUMsS0FBSTs0QkFBbUJDLEtBQUk7NEJBQU9MLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBR3BELENBQUNILGdDQUNBLDhEQUFDQztvQkFBSUUsV0FBVTs7c0NBQ2IsOERBQUMzQixrREFBSUE7NEJBQUM2QixNQUFLOzRCQUFRRixXQUFVO3NDQUMzQiw0RUFBQ0M7MENBQUc7Ozs7Ozs7Ozs7O3NDQUVOLDhEQUFDNUIsa0RBQUlBOzRCQUFDNkIsTUFBSzs0QkFBV0YsV0FBVTtzQ0FDOUIsNEVBQUNDOzBDQUFHOzs7Ozs7Ozs7Ozt3QkFDRTs7Ozs7OzhDQUdWLDhEQUFDSDtvQkFBSUUsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUNaLDRFQUFDM0Isa0RBQUlBO2dDQUFDMkIsV0FBVTtnQ0FBdUJFLE1BQUs7O29DQUFrQjtvQ0FDbkRyQixNQUFNYSxJQUFJLENBQUNZLElBQUk7Ozs7Ozs7Ozs7OztzQ0FHNUIsOERBQUNMOzRCQUFHTSxTQUFTZjs0QkFBUVEsV0FBVTtzQ0FBb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUS9FO0FBRUEsaUVBQWVwQixHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9OYXYuanM/ODY0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTmF2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc3RhdGUsIHNldFN0YXRlIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgIHNldEN1cnJlbnQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgIH07XHJcbiAgICBoYW5kbGVSb3V0ZUNoYW5nZSgpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBDb29raWVzLnJlbW92ZShcInRva2VuXCIpO1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJ1c2VyXCIpO1xyXG4gICAgc2V0U3RhdGUoeyB1c2VyOiBudWxsLCB0b2tlbjogbnVsbCB9KTtcclxuICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gIH07XHJcbiAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gISFzdGF0ZS50b2tlbjtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBjb250YWluZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gIG15LTMgZ2FwLTMgXCI+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LWRlY29yYXRpb24tbm9uZVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJsb2dvXCIgY2xhc3NOYW1lPVwibG9nb1wiIC8+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICB7IWlzQXV0aGVudGljYXRlZCA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBnYXAtNFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwibG9naW5cIiBjbGFzc05hbWU9XCJ0ZXh0LWRlY29yYXRpb24tbm9uZSBuYXYtaXRlbS1idG5cIj5cclxuICAgICAgICAgICAgICA8bGk+TG9naW48L2xpPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJyZWdpc3RlclwiIGNsYXNzTmFtZT1cInRleHQtZGVjb3JhdGlvbi1ub25lIG5hdi1pdGVtLWJ0blwiPlxyXG4gICAgICAgICAgICAgIDxsaT5SZWdpc3RlcjwvbGk+XHJcbiAgICAgICAgICAgIDwvTGluaz57XCIgXCJ9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGdhcC00XCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ1c2VyLW5hbWVcIj5cclxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJ0ZXh0LWRlY29yYXRpb24tbm9uZVwiIGhyZWY9XCIvdXNlci9kYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgIFdlbGNvbWUge3N0YXRlLnVzZXIubmFtZX1cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBvbkNsaWNrPXtsb2dvdXR9IGNsYXNzTmFtZT1cInRleHQtZGVjb3JhdGlvbi1ub25lIG5hdi1pdGVtLWJ0blwiPlxyXG4gICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiQ29va2llcyIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlVzZXJDb250ZXh0IiwidXNlUm91dGVyIiwiTmF2Iiwic3RhdGUiLCJzZXRTdGF0ZSIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyb3V0ZXIiLCJsb2dvdXQiLCJyZW1vdmUiLCJ1c2VyIiwidG9rZW4iLCJwdXNoIiwiaXNBdXRoZW50aWNhdGVkIiwiZGl2IiwidWwiLCJjbGFzc05hbWUiLCJsaSIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJuYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ }),

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContext: () => (/* binding */ UserContext),\n/* harmony export */   UserProvider: () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_4__]);\n([js_cookie__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst UserProvider = ({ children })=>{\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {},\n        token: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"token\");\n        const userCookie = js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"user\");\n        if (token && userCookie) {\n            try {\n                const user = JSON.parse(userCookie);\n                setState({\n                    ...state,\n                    user,\n                    token\n                });\n            } catch (error) {\n                console.error(\"Failed to parse user data:\", error);\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(\"user\");\n            }\n        }\n    }, []);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const url = `${\"http://localhost:8000/api\"}`;\n    const token = state && state.token;\n    axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].defaults.baseURL = url;\n    axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].defaults.headers.common[\"Authorization\"] = `Bearer ${token}`;\n    // axios.interceptors.response.use(\n    //   (response) => response,\n    //   (error) => {\n    //     const originalRequest = error.config;\n    //     if (\n    //       error.response.status === 401 &&\n    //       originalRequest.url ===\n    //         `${process.env.NEXT_PUBLIC_API_URL}/current-user`\n    //     ) {\n    //       Cookies.remove(\"token\");\n    //       Cookies.remove(\"user\");\n    //       setState({ ...state, user: {}, token: \"\" });\n    //       router.push(\"/login\");\n    //     }\n    //     return Promise.reject(error);\n    //   }\n    // );\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            state,\n            setState\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\New Social App\\\\client\\\\context\\\\index.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJEO0FBQzNCO0FBQ1E7QUFDZDtBQUUxQixNQUFNTSw0QkFBY04sb0RBQWFBLENBQUM7QUFFbEMsTUFBTU8sZUFBZSxDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUNoQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7UUFDakNTLE1BQU0sQ0FBQztRQUNQQyxPQUFPO0lBQ1Q7SUFDQVgsZ0RBQVNBLENBQUM7UUFDUixNQUFNVyxRQUFRVCxxREFBVyxDQUFDO1FBQzFCLE1BQU1XLGFBQWFYLHFEQUFXLENBQUM7UUFDL0IsSUFBSVMsU0FBU0UsWUFBWTtZQUN2QixJQUFJO2dCQUNGLE1BQU1ILE9BQU9JLEtBQUtDLEtBQUssQ0FBQ0Y7Z0JBQ3hCSixTQUFTO29CQUFFLEdBQUdELEtBQUs7b0JBQUVFO29CQUFNQztnQkFBTTtZQUNuQyxFQUFFLE9BQU9LLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyw4QkFBOEJBO2dCQUM1Q2Qsd0RBQWMsQ0FBQztZQUNqQjtRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBQ0wsTUFBTWlCLFNBQVNoQixzREFBU0E7SUFDeEIsTUFBTWlCLE1BQU0sQ0FBQyxFQUFFQywyQkFBK0IsQ0FBQyxDQUFDO0lBQ2hELE1BQU1WLFFBQVFILFNBQVNBLE1BQU1HLEtBQUs7SUFDbENQLHNEQUFjLENBQUNxQixPQUFPLEdBQUdMO0lBQ3pCaEIsc0RBQWMsQ0FBQ3NCLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGdCQUFnQixHQUFHLENBQUMsT0FBTyxFQUFFaEIsTUFBTSxDQUFDO0lBQ2xFLG1DQUFtQztJQUNuQyw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLDRDQUE0QztJQUM1QyxXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLGdDQUFnQztJQUNoQyw0REFBNEQ7SUFDNUQsVUFBVTtJQUNWLGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMscURBQXFEO0lBQ3JELCtCQUErQjtJQUMvQixRQUFRO0lBQ1Isb0NBQW9DO0lBQ3BDLE1BQU07SUFDTixLQUFLO0lBQ0wscUJBQ0UsOERBQUNOLFlBQVl1QixRQUFRO1FBQUNDLE9BQU87WUFBRXJCO1lBQU9DO1FBQVM7a0JBQzVDRjs7Ozs7O0FBR1A7QUFFcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb250ZXh0L2luZGV4LmpzPzVkMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XHJcblxyXG5jb25zdCBVc2VyUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB1c2VyOiB7fSxcclxuICAgIHRva2VuOiBcIlwiLFxyXG4gIH0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KFwidG9rZW5cIik7XHJcbiAgICBjb25zdCB1c2VyQ29va2llID0gQ29va2llcy5nZXQoXCJ1c2VyXCIpO1xyXG4gICAgaWYgKHRva2VuICYmIHVzZXJDb29raWUpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZSh1c2VyQ29va2llKTtcclxuICAgICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCB1c2VyLCB0b2tlbiB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIHVzZXIgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgICAgIENvb2tpZXMucmVtb3ZlKFwidXNlclwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfWA7XHJcbiAgY29uc3QgdG9rZW4gPSBzdGF0ZSAmJiBzdGF0ZS50b2tlbiA7XHJcbiAgYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IHVybDtcclxuICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIkF1dGhvcml6YXRpb25cIl0gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuICAvLyBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG4gIC8vICAgKHJlc3BvbnNlKSA9PiByZXNwb25zZSxcclxuICAvLyAgIChlcnJvcikgPT4ge1xyXG4gIC8vICAgICBjb25zdCBvcmlnaW5hbFJlcXVlc3QgPSBlcnJvci5jb25maWc7XHJcbiAgLy8gICAgIGlmIChcclxuICAvLyAgICAgICBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSAmJlxyXG4gIC8vICAgICAgIG9yaWdpbmFsUmVxdWVzdC51cmwgPT09XHJcbiAgLy8gICAgICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9jdXJyZW50LXVzZXJgXHJcbiAgLy8gICAgICkge1xyXG4gIC8vICAgICAgIENvb2tpZXMucmVtb3ZlKFwidG9rZW5cIik7XHJcbiAgLy8gICAgICAgQ29va2llcy5yZW1vdmUoXCJ1c2VyXCIpO1xyXG4gIC8vICAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIHVzZXI6IHt9LCB0b2tlbjogXCJcIiB9KTtcclxuICAvLyAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gIC8vICAgfVxyXG4gIC8vICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgc2V0U3RhdGUgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFVzZXJDb250ZXh0LCBVc2VyUHJvdmlkZXIgfTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvb2tpZXMiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsIlVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlciIsInRva2VuIiwiZ2V0IiwidXNlckNvb2tpZSIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwiY29uc29sZSIsInJlbW92ZSIsInJvdXRlciIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwiaGVhZGVycyIsImNvbW1vbiIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/style.css */ \"./public/css/style.css\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Nav__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_4__, _context__WEBPACK_IMPORTED_MODULE_6__]);\n([_components_Nav__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_4__, _context__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_6__.UserProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {\n                autoClose: 3000,\n                position: \"top-center\"\n            }, void 0, false, {\n                fileName: \"E:\\\\New Social App\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\New Social App\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"E:\\\\New Social App\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\New Social App\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDVjtBQUNIO0FBQ2U7QUFDRDtBQUNMO0FBRTNCLFNBQVNHLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBQ0UsOERBQUNILGtEQUFZQTs7MEJBQ1gsOERBQUNELDBEQUFjQTtnQkFBQ0ssV0FBVztnQkFBTUMsVUFBUzs7Ozs7OzBCQUMxQyw4REFBQ1AsdURBQUdBOzs7OzswQkFDSiw4REFBQ0k7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL05hdlwiO1xyXG5pbXBvcnQgXCIuLi9wdWJsaWMvY3NzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XHJcbmltcG9ydCB7IFVzZXJQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyUHJvdmlkZXI+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lciBhdXRvQ2xvc2U9ezMwMDB9IHBvc2l0aW9uPVwidG9wLWNlbnRlclwiIC8+XHJcbiAgICAgIDxOYXYgLz5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9Vc2VyUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTmF2IiwiVG9hc3RDb250YWluZXIiLCJVc2VyUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhdXRvQ2xvc2UiLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-toastify","vendor-chunks/bootstrap"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();