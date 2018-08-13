webpackHotUpdate(5,{

/***/ "./lib/Web3Container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Web3Container; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getWeb3__ = __webpack_require__("./lib/getWeb3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getContract__ = __webpack_require__("./lib/getContract.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contracts_FixedSupplyToken_json__ = __webpack_require__("./lib/contracts/FixedSupplyToken.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contracts_FixedSupplyToken_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__contracts_FixedSupplyToken_json__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Web3Container =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Web3Container, _React$Component);

  function Web3Container() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Web3Container);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Web3Container.__proto__ || Object.getPrototypeOf(Web3Container)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        web3: null,
        accounts: null,
        contract: null
      }
    }), _temp));
  }

  _createClass(Web3Container, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var web3, contract, accounts, name, symbol, totalSupply, decimals, currentAccount, accountBalance;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__getWeb3__["a" /* default */])();

              case 3:
                web3 = _context.sent;
                _context.next = 6;
                return Object(__WEBPACK_IMPORTED_MODULE_3__getContract__["a" /* default */])(web3, __WEBPACK_IMPORTED_MODULE_4__contracts_FixedSupplyToken_json___default.a);

              case 6:
                contract = _context.sent;
                _context.next = 9;
                return web3.eth.getAccounts();

              case 9:
                accounts = _context.sent;
                _context.next = 12;
                return contract.methods.name().call();

              case 12:
                name = _context.sent;
                _context.next = 15;
                return contract.methods.symbol().call();

              case 15:
                symbol = _context.sent;
                _context.next = 18;
                return contract.methods.totalSupply().call();

              case 18:
                totalSupply = _context.sent;
                _context.next = 21;
                return contract.methods.decimals().call();

              case 21:
                decimals = _context.sent;
                currentAccount = accounts[0];
                _context.next = 25;
                return contract.methods.balanceOf(currentAccount).call();

              case 25:
                accountBalance = _context.sent;
                this.setState({
                  web3: web3,
                  contract: contract,
                  name: name,
                  symbol: symbol,
                  totalSupply: totalSupply,
                  currentAccount: currentAccount,
                  decimals: decimals,
                  accountBalance: accountBalance
                });
                _context.next = 33;
                break;

              case 29:
                _context.prev = 29;
                _context.t0 = _context["catch"](0);
                alert("Failed to load web3, accounts, or contract. Check console for details.");
                console.log(_context.t0);

              case 33:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 29]]);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          web3 = _state.web3,
          contract = _state.contract,
          name = _state.name,
          symbol = _state.symbol,
          totalSupply = _state.totalSupply,
          decimals = _state.decimals,
          currentAccount = _state.currentAccount,
          accountBalance = _state.accountBalance;
      return web3 && contract ? this.props.render({
        web3: web3,
        contract: contract,
        name: name,
        symbol: symbol,
        totalSupply: totalSupply,
        decimals: decimals,
        currentAccount: currentAccount,
        accountBalance: accountBalance
      }) : this.props.renderLoading();
    }
  }]);

  return Web3Container;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=5.502b02c9f011b800da70.hot-update.js.map