"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TextLayerItem;
exports.TextLayerItemInternal = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PageContext = _interopRequireDefault(require("../PageContext"));

var _propTypes2 = require("../shared/propTypes");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TextLayerItemInternal = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(TextLayerItemInternal, _PureComponent);

  var _super = _createSuper(TextLayerItemInternal);

  function TextLayerItemInternal() {
    (0, _classCallCheck2["default"])(this, TextLayerItemInternal);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TextLayerItemInternal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.alignTextItem();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.alignTextItem();
    }
  }, {
    key: "getFontData",
    value: function () {
      var _getFontData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(fontName) {
        var page, font;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                page = this.props.page;
                _context.next = 3;
                return new Promise(function (resolve) {
                  page.commonObjs.get(fontName, resolve);
                });

              case 3:
                font = _context.sent;
                return _context.abrupt("return", font);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getFontData(_x) {
        return _getFontData.apply(this, arguments);
      }

      return getFontData;
    }()
  }, {
    key: "alignTextItem",
    value: function () {
      var _alignTextItem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var element, fontName, fontData, fallbackFontName;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                element = this.item;

                if (element) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                element.style.transform = '';
                fontName = this.props.fontName;
                element.style.fontFamily = "".concat(fontName, ", sans-serif");
                _context2.next = 8;
                return this.getFontData(fontName);

              case 8:
                fontData = _context2.sent;
                fallbackFontName = fontData ? fontData.fallbackName : 'sans-serif';
                element.style.fontFamily = "".concat(fontName, ", ").concat(fallbackFontName);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function alignTextItem() {
        return _alignTextItem.apply(this, arguments);
      }

      return alignTextItem;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var fontSize = this.fontSize,
          top = this.top,
          left = this.left;
      var _this$props = this.props,
          customTextRenderer = _this$props.customTextRenderer,
          scale = _this$props.scale,
          text = _this$props.str;
      return /*#__PURE__*/_react["default"].createElement("span", {
        ref: function ref(_ref) {
          _this.item = _ref;
        },
        style: {
          height: '1em',
          fontFamily: 'sans-serif',
          fontSize: "".concat(fontSize * scale, "px"),
          position: 'absolute',
          top: "".concat(top * scale, "px"),
          left: "".concat(left * scale, "px"),
          transformOrigin: '0 0',
          whiteSpace: 'pre',
          pointerEvents: 'all'
        }
      }, customTextRenderer ? customTextRenderer(this.props) : text);
    }
  }, {
    key: "unrotatedViewport",
    get: function get() {
      var _this$props2 = this.props,
          page = _this$props2.page,
          scale = _this$props2.scale;
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
      var _this$props3 = this.props,
          page = _this$props3.page,
          rotate = _this$props3.rotate;
      return rotate - page.rotate;
    }
  }, {
    key: "sideways",
    get: function get() {
      var rotate = this.rotate;
      return rotate % 180 !== 0;
    }
  }, {
    key: "defaultSideways",
    get: function get() {
      var rotation = this.unrotatedViewport.rotation;
      return rotation % 180 !== 0;
    }
  }, {
    key: "fontSize",
    get: function get() {
      var transform = this.props.transform;
      var defaultSideways = this.defaultSideways;

      var _transform = (0, _slicedToArray2["default"])(transform, 2),
          fontHeightPx = _transform[0],
          fontWidthPx = _transform[1];

      return defaultSideways ? fontWidthPx : fontHeightPx;
    }
  }, {
    key: "top",
    get: function get() {
      var transform = this.props.transform;
      var viewport = this.unrotatedViewport,
          defaultSideways = this.defaultSideways;

      var _transform2 = (0, _slicedToArray2["default"])(transform, 6),

      /* fontHeightPx */

      /* fontWidthPx */
      offsetX = _transform2[2],
          offsetY = _transform2[3],
          x = _transform2[4],
          y = _transform2[5];

      var _viewport$viewBox = (0, _slicedToArray2["default"])(viewport.viewBox, 4),

      /* xMin */
      yMin = _viewport$viewBox[1],

      /* xMax */
      yMax = _viewport$viewBox[3];

      return defaultSideways ? x + offsetX + yMin : yMax - (y + offsetY);
    }
  }, {
    key: "left",
    get: function get() {
      var transform = this.props.transform;
      var viewport = this.unrotatedViewport,
          defaultSideways = this.defaultSideways;

      var _transform3 = (0, _slicedToArray2["default"])(transform, 6),

      /* fontHeightPx */

      /* fontWidthPx */

      /* offsetX */

      /* offsetY */
      x = _transform3[4],
          y = _transform3[5];

      var _viewport$viewBox2 = (0, _slicedToArray2["default"])(viewport.viewBox, 1),
          xMin = _viewport$viewBox2[0];

      return defaultSideways ? y - xMin : x - xMin;
    }
  }]);
  return TextLayerItemInternal;
}(_react.PureComponent);

exports.TextLayerItemInternal = TextLayerItemInternal;
TextLayerItemInternal.propTypes = {
  customTextRenderer: _propTypes["default"].func,
  fontName: _propTypes["default"].string.isRequired,
  itemIndex: _propTypes["default"].number.isRequired,
  // eslint-disable-line react/no-unused-prop-types
  page: _propTypes2.isPage.isRequired,
  rotate: _propTypes2.isRotate,
  scale: _propTypes["default"].number,
  str: _propTypes["default"].string.isRequired,
  transform: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired
};

function TextLayerItem(props) {
  return /*#__PURE__*/_react["default"].createElement(_PageContext["default"].Consumer, null, function (context) {
    return /*#__PURE__*/_react["default"].createElement(TextLayerItemInternal, (0, _extends2["default"])({}, context, props));
  });
}