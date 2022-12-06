"use strict";

var _WeakMap = require("@babel/runtime-corejs3/core-js-stable/weak-map");
var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));
var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inheritsLoose"));
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _PagerItem = _interopRequireDefault(require("./PagerItem"));
var _bootstrapUtils = require("./utils/bootstrapUtils");
var _createChainedFunction = _interopRequireDefault(require("./utils/createChainedFunction"));
var _ValidComponentChildren = _interopRequireDefault(require("./utils/ValidComponentChildren"));
var _excluded = ["onSelect", "className", "children"];
function _getRequireWildcardCache(nodeInterop) { if (typeof _WeakMap !== "function") return null; var cacheBabelInterop = new _WeakMap(); var cacheNodeInterop = new _WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { _Object$defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var propTypes = {
  onSelect: _propTypes["default"].func
};
var Pager = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(Pager, _React$Component);
  function Pager() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Pager.prototype;
  _proto.render = function render() {
    var _this$props = this.props,
      onSelect = _this$props.onSelect,
      className = _this$props.className,
      children = _this$props.children,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, _excluded);
    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];
    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);
    return /*#__PURE__*/_react["default"].createElement("ul", (0, _extends2["default"])({}, elementProps, {
      className: (0, _classnames["default"])(className, classes)
    }), (0, _map["default"])(_ValidComponentChildren["default"]).call(_ValidComponentChildren["default"], children, function (child) {
      return /*#__PURE__*/(0, _react.cloneElement)(child, {
        onSelect: (0, _createChainedFunction["default"])(child.props.onSelect, onSelect)
      });
    }));
  };
  return Pager;
}(_react["default"].Component);
Pager.propTypes = propTypes;
Pager.Item = _PagerItem["default"];
var _default = (0, _bootstrapUtils.bsClass)('pager', Pager);
exports["default"] = _default;
module.exports = exports["default"];