import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime-corejs3/helpers/esm/inheritsLoose";
import _extends from "@babel/runtime-corejs3/helpers/esm/extends";
var _excluded = ["bsSize", "bsStyle", "title", "toggleLabel", "children"];
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Dropdown from './Dropdown';
import SplitToggle from './SplitToggle';
import splitComponentProps from './utils/splitComponentProps';
var propTypes = _extends({}, Dropdown.propTypes, {
  // Toggle props.
  bsStyle: PropTypes.string,
  bsSize: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  /**
   * The content of the split button.
   */
  title: PropTypes.node.isRequired,
  /**
   * Accessible label for the toggle; the value of `title` if not specified.
   */
  toggleLabel: PropTypes.string,
  // Override generated docs from <Dropdown>.
  /**
   * @private
   */
  children: PropTypes.node
});
var SplitButton = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(SplitButton, _React$Component);
  function SplitButton() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = SplitButton.prototype;
  _proto.render = function render() {
    var _this$props = this.props,
      bsSize = _this$props.bsSize,
      bsStyle = _this$props.bsStyle,
      title = _this$props.title,
      toggleLabel = _this$props.toggleLabel,
      children = _this$props.children,
      props = _objectWithoutPropertiesLoose(_this$props, _excluded);
    var _splitComponentProps = splitComponentProps(props, Dropdown.ControlledComponent),
      dropdownProps = _splitComponentProps[0],
      buttonProps = _splitComponentProps[1];
    return /*#__PURE__*/React.createElement(Dropdown, _extends({}, dropdownProps, {
      bsSize: bsSize,
      bsStyle: bsStyle
    }), /*#__PURE__*/React.createElement(Button, _extends({}, buttonProps, {
      disabled: props.disabled,
      bsSize: bsSize,
      bsStyle: bsStyle
    }), title), /*#__PURE__*/React.createElement(SplitToggle, {
      "aria-label": toggleLabel || title,
      bsSize: bsSize,
      bsStyle: bsStyle
    }), /*#__PURE__*/React.createElement(Dropdown.Menu, null, children));
  };
  return SplitButton;
}(React.Component);
SplitButton.propTypes = propTypes;
SplitButton.Toggle = SplitToggle;
export default SplitButton;