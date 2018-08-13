webpackHotUpdate(5,{

/***/ "./pages/transfer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_Web3Container__ = __webpack_require__("./lib/Web3Container.js");

var _jsxFileName = "/Users/rene/learn/blockchain/ethereum/alpha/attendance-coin/client/pages/transfer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Transfer =
/*#__PURE__*/
function (_Component) {
  _inherits(Transfer, _Component);

  function Transfer() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Transfer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Transfer.__proto__ || Object.getPrototypeOf(Transfer)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        web3: null,
        contract: null,
        currentAccount: '',
        accountBalance: 0 // static async getInitialProps(props) {  
        //        const { web3, accounts, contract, currentAccount, accountBalance } = this.props  
        //        console.log("+++++++ Transfer.getInitialProps() ++++++++++++")
        //        console.log(web3)
        //        console.log(contract)    
        //        console.log(currentAccount)
        //        console.log(accountBalance)
        //       return  { web3, contract, currentAccount, accountBalance  }
        // }

      }
    }), _temp));
  }

  _createClass(Transfer, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var _props, web3, contract, name, symbol, totalSupply, decimals, currentAccount, accountBalance;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _props = this.props, web3 = _props.web3, contract = _props.contract, name = _props.name, symbol = _props.symbol, totalSupply = _props.totalSupply, decimals = _props.decimals, currentAccount = _props.currentAccount, accountBalance = _props.accountBalance;
                console.log('------ Details.componentDidMount() ---------');
                console.log(web3);
                console.log(contract);
                console.log(currentAccount);
                this.setState({
                  web3: web3,
                  contract: contract,
                  name: name,
                  symbol: symbol,
                  totalSupply: totalSupply,
                  decimals: decimals,
                  currentAccount: currentAccount,
                  accountBalance: accountBalance
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Label */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "User Account Address:", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Label */].Detail, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, this.state.currentAccount)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Label */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "Current Account Balance:", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Label */].Detail, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, this.state.accountBalance)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      })));
    }
  }]);

  return Transfer;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__lib_Web3Container__["a" /* default */], {
    renderLoading: function renderLoading() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "Loading Dapp Page...");
    },
    render: function render(_ref2) {
      var web3 = _ref2.web3,
          contract = _ref2.contract,
          name = _ref2.name,
          symbol = _ref2.symbol,
          totalSupply = _ref2.totalSupply,
          decimals = _ref2.decimals,
          currentAccount = _ref2.currentAccount,
          accountBalance = _ref2.accountBalance;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Transfer, {
        contract: contract,
        web3: web3,
        name: name,
        symbol: symbol,
        totalSupply: totalSupply,
        decimals: decimals,
        currentAccount: currentAccount,
        accountBalance: accountBalance,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  });
});
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/transfer")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.08f9cf4982d63d9a3c5d.hot-update.js.map