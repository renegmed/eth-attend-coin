webpackHotUpdate(4,{

/***/ "./pages/details.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_Web3Container__ = __webpack_require__("./lib/Web3Container.js");

var _jsxFileName = "/Users/rene/learn/blockchain/ethereum/alpha/attendance-coin/client/pages/details.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Details =
/*#__PURE__*/
function (_Component) {
  _inherits(Details, _Component);

  function Details() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Details);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Details.__proto__ || Object.getPrototypeOf(Details)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        web3: null,
        contract: null,
        accounts: null // static async getInitialProps(props) {  
        //     const { web3, contract, accounts } = props.query  
        //     console.log(web3)
        //     console.log(contract)    
        //     console.log(accounts)
        //     return  { web3, contract, accounts }
        // }

      }
    }), _temp));
  }

  _createClass(Details, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var _props, web3, contract, accounts, name, symbol, totalSupply, currentAccount, accountBalance, allowance;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _props = this.props, web3 = _props.web3, contract = _props.contract, accounts = _props.accounts;
                console.log(web3);
                console.log(contract);
                console.log(accounts);
                _context.next = 6;
                return contract.methods.name().call();

              case 6:
                name = _context.sent;
                _context.next = 9;
                return contract.methods.symbol().call();

              case 9:
                symbol = _context.sent;
                _context.next = 12;
                return contract.methods.totalSupply().call();

              case 12:
                totalSupply = _context.sent;
                currentAccount = accounts[0];
                _context.next = 16;
                return contract.methods.balanceOf(currentAccount).call();

              case 16:
                accountBalance = _context.sent;
                _context.next = 19;
                return contract.methods.allowance(currentAccount, accounts[1]).call();

              case 19:
                allowance = _context.sent;
                this.setState({
                  web3: web3,
                  contract: contract,
                  accounts: accounts,
                  name: name,
                  symbol: symbol,
                  totalSupply: totalSupply,
                  currentAccount: currentAccount,
                  accountBalance: accountBalance,
                  allowance: allowance
                });

              case 21:
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
    key: "renderCards",
    value: function renderCards() {
      var _state = this.state,
          name = _state.name,
          symbol = _state.symbol,
          totalSupply = _state.totalSupply,
          currentAccount = _state.currentAccount,
          accountBalance = _state.accountBalance,
          allowance = _state.allowance;
      var items = [{
        header: name,
        meta: 'Name of Token Account'
      }, {
        header: symbol,
        meta: 'Token Symbol'
      }, {
        header: totalSupply,
        meta: 'Total Token Supply'
      }, {
        header: currentAccount,
        meta: 'User Account Address'
      }, {
        header: accountBalance,
        meta: 'Current Account Balance'
      }, {
        header: allowance,
        meta: 'Allowance Granted to Spender'
      }];
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Card */].Group, {
        items: items,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "Account Details"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["c" /* Grid */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["c" /* Grid */].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["c" /* Grid */].Column, {
        width: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, this.renderCards()))));
    }
  }]);

  return Details;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__lib_Web3Container__["a" /* default */], {
    renderLoading: function renderLoading() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "Loading Dapp Page...");
    },
    render: function render(_ref2) {
      var web3 = _ref2.web3,
          accounts = _ref2.accounts,
          contract = _ref2.contract;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Details, {
        accounts: accounts,
        contract: contract,
        web3: web3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/details")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.5a15b18246e84ab026be.hot-update.js.map