import _extends from "@babel/runtime-corejs3/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime-corejs3/helpers/esm/inheritsLoose";
var _excluded = ["className"];
import classNames from 'classnames';
import React from 'react';
import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils';
var ButtonToolbar = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ButtonToolbar, _React$Component);
  function ButtonToolbar() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = ButtonToolbar.prototype;
  _proto.render = function render() {
    var _this$props = this.props,
      className = _this$props.className,
      props = _objectWithoutPropertiesLoose(_this$props, _excluded);
    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];
    var classes = getClassSet(bsProps);
    return /*#__PURE__*/React.createElement("div", _extends({}, elementProps, {
      role: "toolbar",
      className: classNames(className, classes)
    }));
  };
  return ButtonToolbar;
}(React.Component);
export default bsClass('btn-toolbar', ButtonToolbar);