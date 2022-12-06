"use strict";

var _WeakMap = require("@babel/runtime-corejs3/core-js-stable/weak-map");
var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inheritsLoose"));
var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Overlay = _interopRequireDefault(require("react-overlays/lib/Overlay"));
var _elementType = _interopRequireDefault(require("prop-types-extra/lib/elementType"));
var _Fade = _interopRequireDefault(require("./Fade"));
var _excluded = ["animation", "children"];
function _getRequireWildcardCache(nodeInterop) { if (typeof _WeakMap !== "function") return null; var cacheBabelInterop = new _WeakMap(); var cacheNodeInterop = new _WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { _Object$defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var propTypes = (0, _extends2["default"])({}, _Overlay["default"].propTypes, {
  /**
   * Set the visibility of the Overlay
   */
  show: _propTypes["default"].bool,
  /**
   * Specify whether the overlay should trigger onHide when the user clicks outside the overlay
   */
  rootClose: _propTypes["default"].bool,
  /**
   * A callback invoked by the overlay when it wishes to be hidden. Required if
   * `rootClose` is specified.
   */
  onHide: _propTypes["default"].func,
  /**
   * Use animation
   */
  animation: _propTypes["default"].oneOfType([_propTypes["default"].bool, _elementType["default"]]),
  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: _propTypes["default"].func,
  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: _propTypes["default"].func,
  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: _propTypes["default"].func,
  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: _propTypes["default"].func,
  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: _propTypes["default"].func,
  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: _propTypes["default"].func,
  /**
   * Sets the direction of the Overlay.
   */
  placement: _propTypes["default"].oneOf(['top', 'right', 'bottom', 'left'])
});
var defaultProps = {
  animation: _Fade["default"],
  rootClose: false,
  show: false,
  placement: 'right'
};
var Overlay = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(Overlay, _React$Component);
  function Overlay() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Overlay.prototype;
  _proto.render = function render() {
    var _this$props = this.props,
      animation = _this$props.animation,
      children = _this$props.children,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, _excluded);
    var transition = animation === true ? _Fade["default"] : animation || null;
    var child;
    if (!transition) {
      child = /*#__PURE__*/(0, _react.cloneElement)(children, {
        className: (0, _classnames["default"])(children.props.className, 'in')
      });
    } else {
      child = children;
    }
    return /*#__PURE__*/_react["default"].createElement(_Overlay["default"], (0, _extends2["default"])({}, props, {
      transition: transition
    }), child);
  };
  return Overlay;
}(_react["default"].Component);
Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;
var _default = Overlay;
exports["default"] = _default;
module.exports = exports["default"];