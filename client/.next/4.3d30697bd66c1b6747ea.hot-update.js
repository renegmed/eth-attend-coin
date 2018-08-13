webpackHotUpdate(4,{

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
var _jsxFileName = "/Users/rene/learn/blockchain/ethereum/alpha/attendance-coin/client/components/Header.js";



/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Menu */], {
    style: {
      marginTop: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
    route: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Logo Here")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Menu */].Menu, {
    position: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
    route: "/transfer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Transfer")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
    route: "/approve",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "Approve"))));
});

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("./node_modules/next-routes/dist/index.js")();

routes.add('/', '/index') // Transfer the balance from token owner's account to `to` account
// - Owner's account must have sufficient balance to transfer
// - 0 value transfers are allowed
.add('/transfer', '/transfer') // Token owner can approve for `spender` to transferFrom(...) `tokens`
// from the token owner's account
.add('/approve', '/approveTransfer') // Transfer `tokens` from the `from` account to the `to` account
.add('/transferFrom', '/transferFrom') // Returns the amount of tokens approved by the owner that can be
// transferred to the spender's account
.add('/allowance', '/allowance') // Token owner can approve for `spender` to transferFrom(...) `tokens`
// from the token owner's account. The `spender` contract function
// `receiveApproval(...)` is then executed
.add('/approveAndCall', '/approveAndCall');
module.exports = routes;

/***/ })

})
//# sourceMappingURL=4.3d30697bd66c1b6747ea.hot-update.js.map