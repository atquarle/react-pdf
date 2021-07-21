"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _propTypes2 = require("../shared/propTypes");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var EndOfContentInternal = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(EndOfContentInternal, _PureComponent);

  var _super = _createSuper(EndOfContentInternal);

  function EndOfContentInternal() {
    (0, _classCallCheck2["default"])(this, EndOfContentInternal);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(EndOfContentInternal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          forwardedRef = _this$props.forwardedRef,
          top = _this$props.top;
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: forwardedRef,
        style: {
          display: 'block',
          position: 'absolute',
          left: 0,
          top: top,
          right: 0,
          bottom: 0,
          zIndex: -1,
          cursor: 'default',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          MsUserSelect: 'none'
        }
      });
    }
  }]);
  return EndOfContentInternal;
}(_react.PureComponent);

EndOfContentInternal.propTypes = {
  forwardedRef: _propTypes2.isRef,
  top: _propTypes["default"].string
};

function EndOfContent(props, ref) {
  return /*#__PURE__*/_react["default"].createElement(EndOfContentInternal, (0, _extends2["default"])({}, props, {
    forwardedRef: ref
  }));
}

var _default = /*#__PURE__*/(0, _react.forwardRef)(EndOfContent);

exports["default"] = _default;