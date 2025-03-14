import _extends from "@babel/runtime/helpers/esm/extends";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import makeCancellable from 'make-cancellable-promise';
import PageContext from '../PageContext';
import TextLayerItem from './TextLayerItem';
import EndOfContent from './EndOfContent';
import { cancelRunningTask, errorOnDev } from '../shared/utils';
import { isPage, isRotate } from '../shared/propTypes';
var DEFAULT_END_OF_CONTENT_TOP = '100%';
export var TextLayerInternal = /*#__PURE__*/function (_PureComponent) {
  _inherits(TextLayerInternal, _PureComponent);

  var _super = _createSuper(TextLayerInternal);

  function TextLayerInternal() {
    var _this;

    _classCallCheck(this, TextLayerInternal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      textItems: null,
      endOfContentTop: DEFAULT_END_OF_CONTENT_TOP
    });

    _defineProperty(_assertThisInitialized(_this), "endOfContentRef", /*#__PURE__*/createRef());

    _defineProperty(_assertThisInitialized(_this), "textLayerRef", /*#__PURE__*/createRef());

    _defineProperty(_assertThisInitialized(_this), "loadTextItems", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var page, cancellable, _yield$cancellable$pr, textItems;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              page = _this.props.page;
              _context.prev = 1;
              cancellable = makeCancellable(page.getTextContent());
              _this.runningTask = cancellable;
              _context.next = 6;
              return cancellable.promise;

            case 6:
              _yield$cancellable$pr = _context.sent;
              textItems = _yield$cancellable$pr.items;
              console.log(textItems);

              _this.setState({
                textItems: textItems
              }, _this.onLoadSuccess);

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);

              _this.onLoadError(_context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 12]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "onLoadSuccess", function () {
      var onGetTextSuccess = _this.props.onGetTextSuccess;
      var textItems = _this.state.textItems;
      if (onGetTextSuccess) onGetTextSuccess(textItems);
    });

    _defineProperty(_assertThisInitialized(_this), "onLoadError", function (error) {
      _this.setState({
        textItems: false
      });

      errorOnDev(error);
      var onGetTextError = _this.props.onGetTextError;
      if (onGetTextError) onGetTextError(error);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (evt) {
      if (!_this.textLayerRef.current || !_this.endOfContentRef.current || evt.target === _this.textLayerRef.current) {
        return;
      }

      var endOfContentEl = _this.endOfContentRef.current;
      var textLayerEl = _this.textLayerRef.current;
      var isFirefox = window.getComputedStyle(endOfContentEl).getPropertyValue('-moz-user-select') === 'none';

      if (isFirefox) {
        _this.setState({
          endOfContentTop: '0'
        });
      } else {
        var divBounds = textLayerEl.getBoundingClientRect();
        var r = Math.max(0, (evt.clientY - divBounds.top) / divBounds.height);

        _this.setState({
          endOfContentTop: "".concat((r * 100).toFixed(2), "%")
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function () {
      _this.setState({
        endOfContentTop: DEFAULT_END_OF_CONTENT_TOP
      });
    });

    return _this;
  }

  _createClass(TextLayerInternal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var page = this.props.page;

      if (!page) {
        throw new Error('Attempted to load page text content, but no page was specified.');
      }

      this.loadTextItems();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var page = this.props.page;

      if (prevProps.page && page !== prevProps.page) {
        this.loadTextItems();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      cancelRunningTask(this.runningTask);
    }
  }, {
    key: "renderTextItems",
    value: function renderTextItems() {
      var textItems = this.state.textItems;

      if (!textItems) {
        return null;
      }

      return textItems.map(function (textItem, itemIndex) {
        return /*#__PURE__*/React.createElement(TextLayerItem // eslint-disable-next-line react/no-array-index-key
        , _extends({
          key: itemIndex,
          itemIndex: itemIndex
        }, textItem));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var viewport = this.unrotatedViewport,
          rotate = this.rotate,
          textLayerRef = this.textLayerRef,
          endOfContentRef = this.endOfContentRef;
      var _this$state = this.state,
          endOfContentTop = _this$state.endOfContentTop,
          textItems = _this$state.textItems;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "react-pdf__Page__textContent",
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        ref: textLayerRef,
        style: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: "".concat(viewport.width, "px"),
          height: "".concat(viewport.height, "px"),
          color: 'transparent',
          transform: "translate(-50%, -50%) rotate(".concat(rotate, "deg)"),
          WebkitTransform: "translate(-50%, -50%) rotate(".concat(rotate, "deg)")
        }
      }, this.renderTextItems(), textItems && /*#__PURE__*/React.createElement(EndOfContent, {
        key: "endOfContent",
        ref: endOfContentRef,
        top: endOfContentTop
      })));
    }
  }, {
    key: "unrotatedViewport",
    get: function get() {
      var _this$props = this.props,
          page = _this$props.page,
          scale = _this$props.scale;
      return page.getViewport({
        scale: scale
      });
    }
    /**
     * It might happen that the page is rotated by default. In such cases, we shouldn't rotate
     * text content.
     */

  }, {
    key: "rotate",
    get: function get() {
      var _this$props2 = this.props,
          page = _this$props2.page,
          rotate = _this$props2.rotate;
      return rotate - page.rotate;
    }
  }]);

  return TextLayerInternal;
}(PureComponent);
TextLayerInternal.propTypes = {
  onGetTextError: PropTypes.func,
  onGetTextSuccess: PropTypes.func,
  page: isPage.isRequired,
  rotate: isRotate,
  scale: PropTypes.number
};
export default function TextLayer(props) {
  return /*#__PURE__*/React.createElement(PageContext.Consumer, null, function (context) {
    return /*#__PURE__*/React.createElement(TextLayerInternal, _extends({}, context, props));
  });
}