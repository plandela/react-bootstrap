"use strict";

var _WeakMap = require("@babel/runtime-corejs3/core-js-stable/weak-map");
var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _values = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/values"));
var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inheritsLoose"));
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bootstrapUtils = require("./utils/bootstrapUtils");
var _StyleConfig = require("./utils/StyleConfig");
var _excluded = ["active", "disabled", "className", "header", "listItem", "children"];
function _getRequireWildcardCache(nodeInterop) { if (typeof _WeakMap !== "function") return null; var cacheBabelInterop = new _WeakMap(); var cacheNodeInterop = new _WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { _Object$defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var propTypes = {
  active: _propTypes["default"].any,
  disabled: _propTypes["default"].any,
  header: _propTypes["default"].node,
  listItem: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  href: _propTypes["default"].string,
  type: _propTypes["default"].string
};
var defaultProps = {
  listItem: false
};
var ListGroupItem = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(ListGroupItem, _React$Component);
  function ListGroupItem() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = ListGroupItem.prototype;
  _proto.renderHeader = function renderHeader(header, headingClassName) {
    if ( /*#__PURE__*/_react["default"].isValidElement(header)) {
      return /*#__PURE__*/(0, _react.cloneElement)(header, {
        className: (0, _classnames["default"])(header.props.className, headingClassName)
      });
    }
    return /*#__PURE__*/_react["default"].createElement("h4", {
      className: headingClassName
    }, header);
  };
  _proto.render = function render() {
    var _this$props = this.props,
      active = _this$props.active,
      disabled = _this$props.disabled,
      className = _this$props.className,
      header = _this$props.header,
      listItem = _this$props.listItem,
      children = _this$props.children,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, _excluded);
    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];
    var classes = (0, _extends2["default"])({}, (0, _bootstrapUtils.getClassSet)(bsProps), {
      active: active,
      disabled: disabled
    });
    var Component;
    if (elementProps.href) {
      Component = 'a';
    } else if (elementProps.onClick) {
      Component = 'button';
      elementProps.type = elementProps.type || 'button';
    } else if (listItem) {
      Component = 'li';
    } else {
      Component = 'span';
    }
    elementProps.className = (0, _classnames["default"])(className, classes);

    // TODO: Deprecate `header` prop.
    if (header) {
      return /*#__PURE__*/_react["default"].createElement(Component, elementProps, this.renderHeader(header, (0, _bootstrapUtils.prefix)(bsProps, 'heading')), /*#__PURE__*/_react["default"].createElement("p", {
        className: (0, _bootstrapUtils.prefix)(bsProps, 'text')
      }, children));
    }
    return /*#__PURE__*/_react["default"].createElement(Component, elementProps, children);
  };
  return ListGroupItem;
}(_react["default"].Component);
ListGroupItem.propTypes = propTypes;
ListGroupItem.defaultProps = defaultProps;
var _default = (0, _bootstrapUtils.bsClass)('list-group-item', (0, _bootstrapUtils.bsStyles)((0, _values["default"])(_StyleConfig.State), ListGroupItem));
exports["default"] = _default;
module.exports = exports["default"];