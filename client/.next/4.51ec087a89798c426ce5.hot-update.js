webpackHotUpdate(4,{

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("./node_modules/next-routes/dist/index.js")();

routes.add('/', '/index') // Transfer the balance from token owner's account to `to` account
// - Owner's account must have sufficient balance to transfer
// - 0 value transfers are allowed
.add('/transfer', '/transfer') // Token owner can approve for `spender` to transferFrom(...) `tokens`
// from the token owner's account
.add('/approve', '/approve').add('/transferFrom', '/transferFrom').add('/allowance', '/allowance').add('/approveAndCall', '/approveAndCall');
module.exports = routes;

/***/ })

})
//# sourceMappingURL=4.51ec087a89798c426ce5.hot-update.js.map