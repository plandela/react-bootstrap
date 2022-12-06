"use strict";

var _WeakMap = require("@babel/runtime-corejs3/core-js-stable/weak-map");
var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose"));
var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));
var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));
var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inheritsLoose"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _uncontrollable = require("uncontrollable");
var _bootstrapUtils = require("./utils/bootstrapUtils");
var _ValidComponentChildren = _interopRequireDefault(require("./utils/ValidComponentChildren"));
var _PropTypes = require("./utils/PropTypes");
var _excluded = ["accordion", "className", "children"];
function _getRequireWildcardCache(nodeInterop) { if (typeof _WeakMap !== "function") return null; var cacheBabelInterop = new _WeakMap(); var cacheNodeInterop = new _WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { _Object$defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var propTypes = {
  accordion: _propTypes["default"].bool,
  /**
   * When `accordion` is enabled, `activeKey` controls the which child `Panel` is expanded. `activeKey` should
   * match a child Panel `eventKey` prop exactly.
   *
   * @controllable onSelect
   */
  activeKey: _propTypes["default"].any,
  /**
   * A callback fired when a child Panel collapse state changes. It's called with the next expanded `activeKey`
   *
   * @controllable activeKey
   */
  onSelect: _propTypes["default"].func,
  /**
   * An HTML role attribute
   */
  role: _propTypes["default"].string,
  /**
   * A function that takes an eventKey and type and returns a
   * unique id for each Panel heading and Panel Collapse. The function _must_ be a pure function,
   * meaning it should always return the _same_ id for the same set of inputs. The default
   * value requires that an `id` to be set for the PanelGroup.
   *
   * The `type` argument will either be `"body"` or `"heading"`.
   *
   * @defaultValue (eventKey, type) => `${this.props.id}-${type}-${key}`
   */
  generateChildId: _propTypes["default"].func,
  /**
   * HTML id attribute, required if no `generateChildId` prop
   * is specified.
   */
  id: (0, _PropTypes.generatedId)('PanelGroup')
};
var defaultProps = {
  accordion: false
};
var childContextTypes = {
  $bs_panelGroup: _propTypes["default"].shape({
    getId: _propTypes["default"].func,
    headerRole: _propTypes["default"].string,
    panelRole: _propTypes["default"].string,
    activeKey: _propTypes["default"].any,
    onToggle: _propTypes["default"].func
  })
};
var PanelGroup = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(PanelGroup, _React$Component);
  function PanelGroup() {
    var _context;
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, (0, _concat["default"])(_context = [this]).call(_context, args)) || this;
    _this.handleSelect = function (key, expanded, e) {
      if (expanded) {
        _this.props.onSelect(key, e);
      } else if (_this.props.activeKey === key) {
        _this.props.onSelect(null, e);
      }
    };
    return _this;
  }
  var _proto = PanelGroup.prototype;
  _proto.getChildContext = function getChildContext() {
    var _this$props = this.props,
      activeKey = _this$props.activeKey,
      accordion = _this$props.accordion,
      generateChildId = _this$props.generateChildId,
      id = _this$props.id;
    var getId = null;
    if (accordion) {
      getId = generateChildId || function (key, type) {
        return id ? id + "-" + type + "-" + key : null;
      };
    }
    return {
      $bs_panelGroup: (0, _extends2["default"])({
        getId: getId,
        headerRole: 'tab',
        panelRole: 'tabpanel'
      }, accordion && {
        activeKey: activeKey,
        onToggle: this.handleSelect
      })
    };
  };
  _proto.render = function render() {
    var _this$props2 = this.props,
      accordion = _this$props2.accordion,
      className = _this$props2.className,
      children = _this$props2.children,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_this$props2, _excluded);
    var _splitBsPropsAndOmit = (0, _bootstrapUtils.splitBsPropsAndOmit)(props, ['onSelect', 'activeKey']),
      bsProps = _splitBsPropsAndOmit[0],
      elementProps = _splitBsPropsAndOmit[1];
    if (accordion) {
      elementProps.role = elementProps.role || 'tablist';
    }
    var classes = (0, _bootstrapUtils.getClassSet)(bsProps);
    return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, elementProps, {
      className: (0, _classnames["default"])(className, classes)
    }), (0, _map["default"])(_ValidComponentChildren["default"]).call(_ValidComponentChildren["default"], children, function (child) {
      return /*#__PURE__*/(0, _react.cloneElement)(child, {
        bsStyle: child.props.bsStyle || bsProps.bsStyle
      });
    }));
  };
  return PanelGroup;
}(_react["default"].Component);
PanelGroup.propTypes = propTypes;
PanelGroup.defaultProps = defaultProps;
PanelGroup.childContextTypes = childContextTypes;
var _default = (0, _uncontrollable.uncontrollable)((0, _bootstrapUtils.bsClass)('panel-group', PanelGroup), {
  activeKey: 'onSelect'
});
exports["default"] = _default;
module.exports = exports["default"];