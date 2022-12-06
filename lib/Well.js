"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inheritsLoose"));
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireDefault(require("react"));
var _bootstrapUtils = require("./utils/bootstrapUtils");
var _StyleConfig = require("./utils/StyleConfig");
var _excluded = ["className"];
var Well = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(Well, _React$Component);
  function Well() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Well.prototype;
  _proto.render = function render() {
    var _this$props = this.props,
      className = _this$props.className,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, _excluded);
    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];
    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);
    return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, elementProps, {
      className: (0, _classnames["default"])(className, classes)
    }));
  };
  return Well;
}(_react["default"].Component);
var _default = (0, _bootstrapUtils.bsClass)('well', (0, _bootstrapUtils.bsSizes)([_StyleConfig.Size.LARGE, _StyleConfig.Size.SMALL], Well));
exports["default"] = _default;
module.exports = exports["default"];