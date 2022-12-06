"use strict";

var _WeakMap = require("@babel/runtime-corejs3/core-js-stable/weak-map");
var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inheritsLoose"));
var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));
var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));
var _values = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/values"));
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bootstrapUtils = require("./utils/bootstrapUtils");
var _StyleConfig = require("./utils/StyleConfig");
var _ValidComponentChildren = _interopRequireDefault(require("./utils/ValidComponentChildren"));
var _excluded = ["min", "now", "max", "label", "srOnly", "striped", "active", "className", "style"],
  _excluded2 = ["isChild"],
  _excluded3 = ["min", "now", "max", "label", "srOnly", "striped", "active", "bsClass", "bsStyle", "className", "children"];
function _getRequireWildcardCache(nodeInterop) { if (typeof _WeakMap !== "function") return null; var cacheBabelInterop = new _WeakMap(); var cacheNodeInterop = new _WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { _Object$defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ROUND_PRECISION = 1000;

/**
 * Validate that children, if any, are instances of `<ProgressBar>`.
 */
function onlyProgressBar(props, propName, componentName) {
  var _context;
  var children = props[propName];
  if (!children) {
    return null;
  }
  var error = null;
  (0, _forEach["default"])(_context = _react["default"].Children).call(_context, children, function (child) {
    if (error) {
      return;
    }

    /**
     * Compare types in a way that works with libraries that patch and proxy
     * components like react-hot-loader.
     *
     * see https://github.com/gaearon/react-hot-loader#checking-element-types
     */
    var element = /*#__PURE__*/_react["default"].createElement(ProgressBar, null);
    if (child.type === element.type) return;
    var childIdentifier = /*#__PURE__*/_react["default"].isValidElement(child) ? child.type.displayName || child.type.name || child.type : child;
    error = new Error("Children of " + componentName + " can contain only ProgressBar " + ("components. Found " + childIdentifier + "."));
  });
  return error;
}
var propTypes = {
  min: _propTypes["default"].number,
  now: _propTypes["default"].number,
  max: _propTypes["default"].number,
  label: _propTypes["default"].node,
  srOnly: _propTypes["default"].bool,
  striped: _propTypes["default"].bool,
  active: _propTypes["default"].bool,
  children: onlyProgressBar,
  /**
   * @private
   */
  isChild: _propTypes["default"].bool
};
var defaultProps = {
  min: 0,
  max: 100,
  active: false,
  isChild: false,
  srOnly: false,
  striped: false
};
function getPercentage(now, min, max) {
  var percentage = (now - min) / (max - min) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}
var ProgressBar = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(ProgressBar, _React$Component);
  function ProgressBar() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = ProgressBar.prototype;
  _proto.renderProgressBar = function renderProgressBar(_ref) {
    var _extends2;
    var min = _ref.min,
      now = _ref.now,
      max = _ref.max,
      label = _ref.label,
      srOnly = _ref.srOnly,
      striped = _ref.striped,
      active = _ref.active,
      className = _ref.className,
      style = _ref.style,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];
    var classes = (0, _extends3["default"])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {
      active: active
    }, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'striped')] = active || striped, _extends2));
    return /*#__PURE__*/_react["default"].createElement("div", (0, _extends3["default"])({}, elementProps, {
      role: "progressbar",
      className: (0, _classnames["default"])(className, classes),
      style: (0, _extends3["default"])({
        width: getPercentage(now, min, max) + "%"
      }, style),
      "aria-valuenow": now,
      "aria-valuemin": min,
      "aria-valuemax": max
    }), srOnly ? /*#__PURE__*/_react["default"].createElement("span", {
      className: "sr-only"
    }, label) : label);
  };
  _proto.render = function render() {
    var _this$props = this.props,
      isChild = _this$props.isChild,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, _excluded2);
    if (isChild) {
      return this.renderProgressBar(props);
    }
    var min = props.min,
      now = props.now,
      max = props.max,
      label = props.label,
      srOnly = props.srOnly,
      striped = props.striped,
      active = props.active,
      bsClass = props.bsClass,
      bsStyle = props.bsStyle,
      className = props.className,
      children = props.children,
      wrapperProps = (0, _objectWithoutPropertiesLoose2["default"])(props, _excluded3);
    return /*#__PURE__*/_react["default"].createElement("div", (0, _extends3["default"])({}, wrapperProps, {
      className: (0, _classnames["default"])(className, 'progress')
    }), children ? (0, _map["default"])(_ValidComponentChildren["default"]).call(_ValidComponentChildren["default"], children, function (child) {
      return /*#__PURE__*/(0, _react.cloneElement)(child, {
        isChild: true
      });
    }) : this.renderProgressBar({
      min: min,
      now: now,
      max: max,
      label: label,
      srOnly: srOnly,
      striped: striped,
      active: active,
      bsClass: bsClass,
      bsStyle: bsStyle
    }));
  };
  return ProgressBar;
}(_react["default"].Component);
ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;
var _default = (0, _bootstrapUtils.bsClass)('progress-bar', (0, _bootstrapUtils.bsStyles)((0, _values["default"])(_StyleConfig.State), ProgressBar));
exports["default"] = _default;
module.exports = exports["default"];