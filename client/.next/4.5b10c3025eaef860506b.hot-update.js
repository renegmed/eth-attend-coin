webpackHotUpdate(4,{

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
//# sourceMappingURL=4.5b10c3025eaef860506b.hot-update.js.map