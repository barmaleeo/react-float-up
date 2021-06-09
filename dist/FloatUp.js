"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./floatUpStyle.scss");

var ReactDOM = _interopRequireWildcard(require("react-dom"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FloatUp = /*#__PURE__*/function (_Component) {
  _inherits(FloatUp, _Component);

  var _super = _createSuper(FloatUp);

  function FloatUp() {
    var _this;

    _classCallCheck(this, FloatUp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      show: false
    });

    _defineProperty(_assertThisInitialized(_this), "show", function () {
      var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var self = _assertThisInitialized(_this);

      _this.setState({
        show: show
      }, function () {
        window.addEventListener('keyup', self.keyUpListener.bind(self));
        window.addEventListener('click', self.clickListener.bind(self));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hide", function () {
      var hide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      _this.show(!hide);
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      _this.show(!_this.state.show);
    });

    _defineProperty(_assertThisInitialized(_this), "clickListener", function (e) {
      if (_this.state.show && !_this.state.element.contains(e.target)) {
        window.removeEventListener('keyup', _this.keyUpListener.bind(_assertThisInitialized(_this)));
        window.removeEventListener('click', _this.clickListener.bind(_assertThisInitialized(_this)));

        _this.setState({
          show: false
        });
      }
    });

    return _this;
  }

  _createClass(FloatUp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        element: ReactDOM.findDOMNode(this)
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('keyup', this.keyUpListener.bind(this));
      window.removeEventListener('click', this.clickListener.bind(this));
    }
  }, {
    key: "keyUpListener",
    value: function keyUpListener(e) {
      if (e.code === 'Escape') {
        window.removeEventListener('keyup', this.keyUpListener.bind(this));
        window.removeEventListener('click', this.clickListener.bind(this));
        this.setState({
          show: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var p = this.props;
      var s = this.state;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: 'float-up-outher' + (s.show ? ' show' : '')
      }, p.children);
    }
  }]);

  return FloatUp;
}(_react.Component);

exports.default = FloatUp;