webpackHotUpdate(5,{

/***/ "./components/TransferForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);

var _jsxFileName = "/Users/rene/learn/blockchain/ethereum/alpha/attendance-coin/client/components/TransferForm.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var TransferForm =
/*#__PURE__*/
function (_Component) {
  _inherits(TransferForm, _Component);

  function TransferForm() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, TransferForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = TransferForm.__proto__ || Object.getPrototypeOf(TransferForm)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        to: '',
        value: '',
        errorMessage: '',
        loading: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(event) {
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  event.preventDefault(); // const {address} = this.props;
                  // console.log("******* ContributeForm onSubmit() address ***********");
                  // console.log(address);
                  // const web3 = await getWeb3()     
                  // console.log("******* ContributeForm onSubmit()  web3  ***********");
                  // console.log(web3);
                  // const campaign = new web3.eth.Contract(
                  //   campaignDefinition.abi,
                  //   address
                  // )
                  // console.log("******* ContributeForm onSubmit()  campaign  ***********");
                  // console.log(campaign);
                  // this.setState({ loading: true, errorMessage: '' });
                  // try {
                  //   const accounts = await web3.eth.getAccounts();
                  //   console.log("******* ContributeForm onSubmit()  accounts  ***********");
                  //   console.log(accounts);
                  //   await campaign.methods.contribute().send({
                  //     from: accounts[0],
                  //     value: web3.utils.toWei(this.state.value, 'ether')
                  //   });
                  //   Router.replaceRoute(`/campaigns/${this.props.address}`);
                  // } catch (err) {
                  //   this.setState({ errorMessage: err.message });
                  // }

                  _this.setState({
                    loading: false,
                    value: '',
                    to: ''
                  });

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value(_x) {
          return _value.apply(this, arguments);
        };
      }()
    }), _temp));
  }

  _createClass(TransferForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["c" /* Form */], {
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["c" /* Form */].Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "Tokens to Transfer"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Input */], {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this2.setState({
            value: event.target.value
          });
        },
        label: "No. of Tokens",
        labelPosition: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Input */], {
        value: this.state.to,
        onChange: function onChange(event) {
          return _this2.setState({
            to: event.target.to
          });
        },
        label: "Transfer To",
        labelPosition: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["g" /* Message */], {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */], {
        primary: true,
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "Transfer Now!"));
    }
  }]);

  return TransferForm;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ })

})
//# sourceMappingURL=5.1abfd7bb6ea0468829f5.hot-update.js.map