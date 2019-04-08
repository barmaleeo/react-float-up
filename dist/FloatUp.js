"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./floatUpStyle.scss");

var ReactDOM = _interopRequireWildcard(require("react-dom"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FloatUp =
/*#__PURE__*/
function (_Component) {
  _inherits(FloatUp, _Component);

  function FloatUp() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FloatUp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FloatUp)).call.apply(_getPrototypeOf2, [this].concat(args)));

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
      return _react.default.createElement("div", {
        className: 'float-up-outher' + (s.show ? ' show' : '')
      }, p.children.map(function (i, n) {
        return i;
      }));
    }
  }]);

  return FloatUp;
}(_react.Component);

exports.default = FloatUp;