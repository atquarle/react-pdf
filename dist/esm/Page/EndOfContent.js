import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { forwardRef, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isRef } from '../shared/propTypes';

var EndOfContentInternal = /*#__PURE__*/function (_PureComponent) {
  _inherits(EndOfContentInternal, _PureComponent);

  var _super = _createSuper(EndOfContentInternal);

  function EndOfContentInternal() {
    _classCallCheck(this, EndOfContentInternal);

    return _super.apply(this, arguments);
  }

  _createClass(EndOfContentInternal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          forwardedRef = _this$props.forwardedRef,
          top = _this$props.top;
      return /*#__PURE__*/React.createElement("div", {
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
}(PureComponent);

EndOfContentInternal.propTypes = {
  forwardedRef: isRef,
  top: PropTypes.string
};

function EndOfContent(props, ref) {
  return /*#__PURE__*/React.createElement(EndOfContentInternal, _extends({}, props, {
    forwardedRef: ref
  }));
}

export default /*#__PURE__*/forwardRef(EndOfContent);