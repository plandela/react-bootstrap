import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/esm/objectWithoutPropertiesLoose";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/esm/assertThisInitialized";
import _inheritsLoose from "@babel/runtime-corejs3/helpers/esm/inheritsLoose";
import _extends from "@babel/runtime-corejs3/helpers/esm/extends";
var _excluded = ["trigger", "overlay", "children", "onBlur", "onClick", "onFocus", "onMouseOut", "onMouseOver"];
import _Array$isArray from "@babel/runtime-corejs3/core-js-stable/array/is-array";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/index-of";
import _bindInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/bind";
import _setTimeout from "@babel/runtime-corejs3/core-js-stable/set-timeout";
import contains from 'dom-helpers/query/contains';
import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import warning from 'warning';
import Overlay from './Overlay';
import createChainedFunction from './utils/createChainedFunction';

/**
 * Check if value one is inside or equal to the of value
 *
 * @param {string} one
 * @param {string|array} of
 * @returns {boolean}
 */
function isOneOf(one, of) {
  if (_Array$isArray(of)) {
    return _indexOfInstanceProperty(of).call(of, one) >= 0;
  }
  return one === of;
}
var triggerType = PropTypes.oneOf(['click', 'hover', 'focus']);
var propTypes = _extends({}, Overlay.propTypes, {
  /**
   * Specify which action or actions trigger Overlay visibility
   */
  trigger: PropTypes.oneOfType([triggerType, PropTypes.arrayOf(triggerType)]),
  /**
   * A millisecond delay amount to show and hide the Overlay once triggered
   */
  delay: PropTypes.number,
  /**
   * A millisecond delay amount before showing the Overlay once triggered.
   */
  delayShow: PropTypes.number,
  /**
   * A millisecond delay amount before hiding the Overlay once triggered.
   */
  delayHide: PropTypes.number,
  // FIXME: This should be `defaultShow`.
  /**
   * The initial visibility state of the Overlay. For more nuanced visibility
   * control, consider using the Overlay component directly.
   */
  defaultOverlayShown: PropTypes.bool,
  /**
   * An element or text to overlay next to the target.
   */
  overlay: PropTypes.node.isRequired,
  /**
   * @private
   */
  onBlur: PropTypes.func,
  /**
   * @private
   */
  onClick: PropTypes.func,
  /**
   * @private
   */
  onFocus: PropTypes.func,
  /**
   * @private
   */
  onMouseOut: PropTypes.func,
  /**
   * @private
   */
  onMouseOver: PropTypes.func,
  // Overridden props from `<Overlay>`.
  /**
   * @private
   */
  target: PropTypes.oneOf([null]),
  /**
   * @private
   */
  onHide: PropTypes.oneOf([null]),
  /**
   * @private
   */
  show: PropTypes.oneOf([null])
});
var defaultProps = {
  defaultOverlayShown: false,
  trigger: ['hover', 'focus']
};
var OverlayTrigger = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(OverlayTrigger, _React$Component);
  function OverlayTrigger(props, context) {
    var _context, _context2, _context3, _context4;
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    _this.handleToggle = _bindInstanceProperty(_context = _this.handleToggle).call(_context, _assertThisInitialized(_this));
    _this.handleDelayedShow = _bindInstanceProperty(_context2 = _this.handleDelayedShow).call(_context2, _assertThisInitialized(_this));
    _this.handleDelayedHide = _bindInstanceProperty(_context3 = _this.handleDelayedHide).call(_context3, _assertThisInitialized(_this));
    _this.handleHide = _bindInstanceProperty(_context4 = _this.handleHide).call(_context4, _assertThisInitialized(_this));
    _this.handleMouseOver = function (e) {
      return _this.handleMouseOverOut(_this.handleDelayedShow, e, 'fromElement');
    };
    _this.handleMouseOut = function (e) {
      return _this.handleMouseOverOut(_this.handleDelayedHide, e, 'toElement');
    };
    _this._mountNode = null;
    _this.state = {
      show: props.defaultOverlayShown
    };
    return _this;
  }
  var _proto = OverlayTrigger.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this._mountNode = document.createElement('div');
    this.renderOverlay();
  };
  _proto.componentDidUpdate = function componentDidUpdate() {
    this.renderOverlay();
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this._mountNode);
    this._mountNode = null;
    clearTimeout(this._hoverShowDelay);
    clearTimeout(this._hoverHideDelay);
  };
  _proto.handleDelayedHide = function handleDelayedHide() {
    var _this2 = this;
    if (this._hoverShowDelay != null) {
      clearTimeout(this._hoverShowDelay);
      this._hoverShowDelay = null;
      return;
    }
    if (!this.state.show || this._hoverHideDelay != null) {
      return;
    }
    var delay = this.props.delayHide != null ? this.props.delayHide : this.props.delay;
    if (!delay) {
      this.hide();
      return;
    }
    this._hoverHideDelay = _setTimeout(function () {
      _this2._hoverHideDelay = null;
      _this2.hide();
    }, delay);
  };
  _proto.handleDelayedShow = function handleDelayedShow() {
    var _this3 = this;
    if (this._hoverHideDelay != null) {
      clearTimeout(this._hoverHideDelay);
      this._hoverHideDelay = null;
      return;
    }
    if (this.state.show || this._hoverShowDelay != null) {
      return;
    }
    var delay = this.props.delayShow != null ? this.props.delayShow : this.props.delay;
    if (!delay) {
      this.show();
      return;
    }
    this._hoverShowDelay = _setTimeout(function () {
      _this3._hoverShowDelay = null;
      _this3.show();
    }, delay);
  };
  _proto.handleHide = function handleHide() {
    this.hide();
  }

  // Simple implementation of mouseEnter and mouseLeave.
  // React's built version is broken: https://github.com/facebook/react/issues/4251
  // for cases when the trigger is disabled and mouseOut/Over can cause flicker
  // moving from one child element to another.
  ;
  _proto.handleMouseOverOut = function handleMouseOverOut(handler, e, relatedNative) {
    var target = e.currentTarget;
    var related = e.relatedTarget || e.nativeEvent[relatedNative];
    if ((!related || related !== target) && !contains(target, related)) {
      handler(e);
    }
  };
  _proto.handleToggle = function handleToggle() {
    if (this.state.show) {
      this.hide();
    } else {
      this.show();
    }
  };
  _proto.hide = function hide() {
    this.setState({
      show: false
    });
  };
  _proto.makeOverlay = function makeOverlay(overlay, props) {
    return /*#__PURE__*/React.createElement(Overlay, _extends({}, props, {
      show: this.state.show,
      onHide: this.handleHide,
      target: this
    }), overlay);
  };
  _proto.show = function show() {
    this.setState({
      show: true
    });
  };
  _proto.renderOverlay = function renderOverlay() {
    ReactDOM.unstable_renderSubtreeIntoContainer(this, this._overlay, this._mountNode);
  };
  _proto.render = function render() {
    var _this$props = this.props,
      trigger = _this$props.trigger,
      overlay = _this$props.overlay,
      children = _this$props.children,
      onBlur = _this$props.onBlur,
      onClick = _this$props.onClick,
      onFocus = _this$props.onFocus,
      onMouseOut = _this$props.onMouseOut,
      onMouseOver = _this$props.onMouseOver,
      props = _objectWithoutPropertiesLoose(_this$props, _excluded);
    delete props.delay;
    delete props.delayShow;
    delete props.delayHide;
    delete props.defaultOverlayShown;
    var child = React.Children.only(children);
    var childProps = child.props;
    var triggerProps = {};
    if (this.state.show) {
      triggerProps['aria-describedby'] = overlay.props.id;
    }

    // FIXME: The logic here for passing through handlers on this component is
    // inconsistent. We shouldn't be passing any of these props through.

    triggerProps.onClick = createChainedFunction(childProps.onClick, onClick);
    if (isOneOf('click', trigger)) {
      triggerProps.onClick = createChainedFunction(triggerProps.onClick, this.handleToggle);
    }
    if (isOneOf('hover', trigger)) {
      process.env.NODE_ENV !== "production" ? warning(!(trigger === 'hover'), '[react-bootstrap] Specifying only the `"hover"` trigger limits the ' + 'visibility of the overlay to just mouse users. Consider also ' + 'including the `"focus"` trigger so that touch and keyboard only ' + 'users can see the overlay as well.') : void 0;
      triggerProps.onMouseOver = createChainedFunction(childProps.onMouseOver, onMouseOver, this.handleMouseOver);
      triggerProps.onMouseOut = createChainedFunction(childProps.onMouseOut, onMouseOut, this.handleMouseOut);
    }
    if (isOneOf('focus', trigger)) {
      triggerProps.onFocus = createChainedFunction(childProps.onFocus, onFocus, this.handleDelayedShow);
      triggerProps.onBlur = createChainedFunction(childProps.onBlur, onBlur, this.handleDelayedHide);
    }
    this._overlay = this.makeOverlay(overlay, props);
    return /*#__PURE__*/cloneElement(child, triggerProps);
  };
  return OverlayTrigger;
}(React.Component);
OverlayTrigger.propTypes = propTypes;
OverlayTrigger.defaultProps = defaultProps;
export default OverlayTrigger;