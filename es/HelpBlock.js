import _extends from "@babel/runtime-corejs3/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime-corejs3/helpers/esm/inheritsLoose";
var _excluded = ["className"];
import classNames from 'classnames';
import React from 'react';
import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils';
var HelpBlock = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(HelpBlock, _React$Component);
  function HelpBlock() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = HelpBlock.prototype;
  _proto.render = function render() {
    var _this$props = this.props,
      className = _this$props.className,
      props = _objectWithoutPropertiesLoose(_this$props, _excluded);
    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];
    var classes = getClassSet(bsProps);
    return /*#__PURE__*/React.createElement("span", _extends({}, elementProps, {
      className: classNames(className, classes)
    }));
  };
  return HelpBlock;
}(React.Component);
export default bsClass('help-block', HelpBlock);