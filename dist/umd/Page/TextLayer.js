"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TextLayer;
exports.TextLayerInternal = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _makeCancellablePromise = _interopRequireDefault(require("make-cancellable-promise"));

var _PageContext = _interopRequireDefault(require("../PageContext"));

var _TextLayerItem = _interopRequireDefault(require("./TextLayerItem"));

var _EndOfContent = _interopRequireDefault(require("./EndOfContent"));

var _utils = require("../shared/utils");

var _propTypes2 = require("../shared/propTypes");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DEFAULT_END_OF_CONTENT_TOP = '100%';

var TextLayerInternal = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(TextLayerInternal, _PureComponent);

  var _super = _createSuper(TextLayerInternal);

  function TextLayerInternal() {
    var _this;

    (0, _classCallCheck2["default"])(this, TextLayerInternal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      textItems: null,
      endOfContentTop: DEFAULT_END_OF_CONTENT_TOP
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "endOfContentRef", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "textLayerRef", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "loadTextItems", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var page, cancellable, _yield$cancellable$pr, textItems;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              page = _this.props.page;
              _context.prev = 1;
              cancellable = (0, _makeCancellablePromise["default"])(page.getTextContent());
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onLoadSuccess", function () {
      var onGetTextSuccess = _this.props.onGetTextSuccess;
      var textItems = _this.state.textItems;
      if (onGetTextSuccess) onGetTextSuccess(textItems);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onLoadError", function (error) {
      _this.setState({
        textItems: false
      });

      (0, _utils.errorOnDev)(error);
      var onGetTextError = _this.props.onGetTextError;
      if (onGetTextError) onGetTextError(error);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onMouseDown", function (evt) {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onMouseUp", function () {
      _this.setState({
        endOfContentTop: DEFAULT_END_OF_CONTENT_TOP
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(TextLayerInternal, [{
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
      (0, _utils.cancelRunningTask)(this.runningTask);
    }
  }, {
    key: "renderTextItems",
    value: function renderTextItems() {
      var textItems = this.state.textItems;

      if (!textItems) {
        return null;
      }

      return textItems.map(function (textItem, itemIndex) {
        return /*#__PURE__*/_react["default"].createElement(_TextLayerItem["default"] // eslint-disable-next-line react/no-array-index-key
        , (0, _extends2["default"])({
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
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
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
      }, this.renderTextItems(), textItems && /*#__PURE__*/_react["default"].createElement(_EndOfContent["default"], {
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
}(_react.PureComponent);

exports.TextLayerInternal = TextLayerInternal;
TextLayerInternal.propTypes = {
  onGetTextError: _propTypes["default"].func,
  onGetTextSuccess: _propTypes["default"].func,
  page: _propTypes2.isPage.isRequired,
  rotate: _propTypes2.isRotate,
  scale: _propTypes["default"].number
};

function TextLayer(props) {
  return /*#__PURE__*/_react["default"].createElement(_PageContext["default"].Consumer, null, function (context) {
    return /*#__PURE__*/_react["default"].createElement(TextLayerInternal, (0, _extends2["default"])({}, context, props));
  });
}