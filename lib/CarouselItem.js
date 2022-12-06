"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose"));
var _bind = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/bind"));
var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inheritsLoose"));
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _transition = _interopRequireDefault(require("dom-helpers/transition"));
var _excluded = ["direction", "active", "animateIn", "animateOut", "className"];
var propTypes = {
  direction: _propTypes["default"].oneOf(['prev', 'next']),
  onAnimateOutEnd: _propTypes["default"].func,
  active: _propTypes["default"].bool,
  animateIn: _propTypes["default"].bool,
  animateOut: _propTypes["default"].bool,
  index: _propTypes["default"].number
};
var defaultProps = {
  active: false,
  animateIn: false,
  animateOut: false
};
var CarouselItem = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(CarouselItem, _React$Component);
  function CarouselItem(props, context) {
    var _context;
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    _this.handleAnimateOutEnd = (0, _bind["default"])(_context = _this.handleAnimateOutEnd).call(_context, (0, _assertThisInitialized2["default"])(_this));
    _this.state = {
      direction: null
    };
    _this.isUnmounted = false;
    return _this;
  }
  var _proto = CarouselItem.prototype;
  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    // eslint-disable-line
    if (this.props.active !== nextProps.active) {
      this.setState({
        direction: null
      });
    }
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;
    var active = this.props.active;
    var prevActive = prevProps.active;
    if (!active && prevActive) {
      _transition["default"].end(_reactDom["default"].findDOMNode(this), this.handleAnimateOutEnd);
    }
    if (active !== prevActive) {
      (0, _setTimeout2["default"])(function () {
        return _this2.startAnimation();
      }, 20);
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.isUnmounted = true;
  };
  _proto.handleAnimateOutEnd = function handleAnimateOutEnd() {
    if (this.isUnmounted) {
      return;
    }
    if (this.props.onAnimateOutEnd) {
      this.props.onAnimateOutEnd(this.props.index);
    }
  };
  _proto.startAnimation = function startAnimation() {
    if (this.isUnmounted) {
      return;
    }
    this.setState({
      direction: this.props.direction === 'prev' ? 'right' : 'left'
    });
  };
  _proto.render = function render() {
    var _this$props = this.props,
      direction = _this$props.direction,
      active = _this$props.active,
      animateIn = _this$props.animateIn,
      animateOut = _this$props.animateOut,
      className = _this$props.className,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, _excluded);
    delete props.onAnimateOutEnd;
    delete props.index;
    var classes = {
      item: true,
      active: active && !animateIn || animateOut
    };
    if (direction && active && animateIn) {
      classes[direction] = true;
    }
    if (this.state.direction && (animateIn || animateOut)) {
      classes[this.state.direction] = true;
    }
    return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, props, {
      className: (0, _classnames["default"])(className, classes)
    }));
  };
  return CarouselItem;
}(_react["default"].Component);
CarouselItem.propTypes = propTypes;
CarouselItem.defaultProps = defaultProps;
var _default = CarouselItem;
exports["default"] = _default;
module.exports = exports["default"];