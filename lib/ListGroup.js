"use strict";

var _WeakMap = require("@babel/runtime-corejs3/core-js-stable/weak-map");
var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inheritsLoose"));
var _some = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/some"));
var _every = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/every"));
var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _elementType = _interopRequireDefault(require("prop-types-extra/lib/elementType"));
var _ListGroupItem = _interopRequireDefault(require("./ListGroupItem"));
var _bootstrapUtils = require("./utils/bootstrapUtils");
var _ValidComponentChildren = _interopRequireDefault(require("./utils/ValidComponentChildren"));
var _excluded = ["children", "componentClass", "className"];
function _getRequireWildcardCache(nodeInterop) { if (typeof _WeakMap !== "function") return null; var cacheBabelInterop = new _WeakMap(); var cacheNodeInterop = new _WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { _Object$defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var propTypes = {
  /**
   * You can use a custom element type for this component.
   *
   * If not specified, it will be treated as `'li'` if every child is a
   * non-actionable `<ListGroupItem>`, and `'div'` otherwise.
   */
  componentClass: _elementType["default"]
};
function getDefaultComponent(children) {
  if (!children) {
    // FIXME: This is the old behavior. Is this right?
    return 'div';
  }
  if ((0, _some["default"])(_ValidComponentChildren["default"]).call(_ValidComponentChildren["default"], children, function (child) {
    return child.type !== _ListGroupItem["default"] || child.props.href || child.props.onClick;
  })) {
    return 'div';
  }
  return 'ul';
}
var ListGroup = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(ListGroup, _React$Component);
  function ListGroup() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = ListGroup.prototype;
  _proto.render = function render() {
    var _this$props = this.props,
      children = _this$props.children,
      _this$props$component = _this$props.componentClass,
      Component = _this$props$component === void 0 ? getDefaultComponent(children) : _this$props$component,
      className = _this$props.className,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, _excluded);
    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];
    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);
    var useListItem = Component === 'ul' && (0, _every["default"])(_ValidComponentChildren["default"]).call(_ValidComponentChildren["default"], children, function (child) {
      return child.type === _ListGroupItem["default"];
    });
    return /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({}, elementProps, {
      className: (0, _classnames["default"])(className, classes)
    }), useListItem ? (0, _map["default"])(_ValidComponentChildren["default"]).call(_ValidComponentChildren["default"], children, function (child) {
      return /*#__PURE__*/(0, _react.cloneElement)(child, {
        listItem: true
      });
    }) : children);
  };
  return ListGroup;
}(_react["default"].Component);
ListGroup.propTypes = propTypes;
var _default = (0, _bootstrapUtils.bsClass)('list-group', ListGroup);
exports["default"] = _default;
module.exports = exports["default"];