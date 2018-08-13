webpackHotUpdate(4,{

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("./node_modules/next-routes/dist/index.js")();

routes.add('/', '/index') // Transfer the balance from token owner's account to `to` account
// - Owner's account must have sufficient balance to transfer
// - 0 value transfers are allowed
.add('/transfer', '/transfer').add('/approve', '/approve');
module.exports = routes;

/***/ })

})
//# sourceMappingURL=4.0d89c660708787da84b7.hot-update.js.map