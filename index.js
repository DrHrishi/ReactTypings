"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ReactJsTyping = /*#__PURE__*/function (_Component) {
  _inherits(ReactJsTyping, _Component);

  var _super = _createSuper(ReactJsTyping);

  function ReactJsTyping(props) {
    var _this;

    _classCallCheck(this, ReactJsTyping);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "cursorColors", function () {
      var elem = document.querySelector('span');
      elem.style.borderRightColor = elem.style.borderRightColor == 'white' ? _this.props.cursorColor : 'white';
    });

    _defineProperty(_assertThisInitialized(_this), "writeLine", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _this$state, writeText, isDeleting, speed, i, fullTxt, delTime, loopNumber;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$state = _this.state, writeText = _this$state.writeText, isDeleting = _this$state.isDeleting;
              speed = _this.props.speed;
              i = _this.state.loopNumber % _this.props.StringList.length;
              fullTxt = _this.props.StringList[i];

              if (!isDeleting) {
                _context2.next = 9;
                break;
              }

              _context2.next = 7;
              return _this.setState({
                writeText: fullTxt.substring(0, writeText.length - 1)
              });

            case 7:
              _context2.next = 11;
              break;

            case 9:
              _context2.next = 11;
              return _this.setState({
                writeText: fullTxt.substring(0, writeText.length + 1)
              });

            case 11:
              delTime = 90;

              if (isDeleting) {
                delTime /= 2;
              }

              if (!(!isDeleting && writeText === fullTxt)) {
                _context2.next = 19;
                break;
              }

              delTime = speed || 700;
              _context2.next = 17;
              return _this.setState({
                isDeleting: true
              });

            case 17:
              _context2.next = 24;
              break;

            case 19:
              if (!(isDeleting && writeText === '')) {
                _context2.next = 24;
                break;
              }

              loopNumber = _this.state.loopNumber + 1;
              _context2.next = 23;
              return _this.setState({
                isDeleting: false,
                loopNumber: loopNumber
              });

            case 23:
              delTime = speed || 700;

            case 24:
              setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _this.writeLine();

                      case 2:
                        return _context.abrupt("return", _context.sent);

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })), delTime);

            case 25:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _this.state = {
      writeText: '',
      loopNumber: 0,
      isDeleting: false
    };
    return _this;
  }

  _createClass(ReactJsTyping, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        return _this2.writeLine();
      }, 500);
      setInterval(function () {
        return _this2.cursorColors();
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          borderRight: "1px solid ".concat(this.props.cursorColor || '#666'),
          paddingRight: '3px'
        }
      }, this.state.writeText);
    }
  }]);

  return ReactJsTyping;
}(_react.Component);

exports["default"] = ReactJsTyping;
