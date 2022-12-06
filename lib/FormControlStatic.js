"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inheritsLoose"));
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireDefault(require("react"));
var _elementType = _interopRequireDefault(require("prop-types-extra/lib/elementType"));
var _bootstrapUtils = require("./utils/bootstrapUtils");
var _excluded = ["componentClass", "className"];
var propTypes = {
  componentClass: _elementType["default"]
};
var defaultProps = {
  componentClass: 'p'
};
var FormControlStatic = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(FormControlStatic, _React$Component);
  function FormControlStatic() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = FormControlStatic.prototype;
  _proto.render = function render() {
    var _this$props = this.props,
      Component = _this$props.componentClass,
      className = _this$props.className,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, _excluded);
    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];
    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);
    return /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({}, elementProps, {
      className: (0, _classnames["default"])(className, classes)
    }));
  };
  return FormControlStatic;
}(_react["default"].Component);
FormControlStatic.propTypes = propTypes;
FormControlStatic.defaultProps = defaultProps;
var _default = (0, _bootstrapUtils.bsClass)('form-control-static', FormControlStatic);
exports["default"] = _default;
module.exports = exports["default"];