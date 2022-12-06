import _extends from "@babel/runtime-corejs3/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime-corejs3/helpers/esm/inheritsLoose";
var _excluded = ["className", "children"];
import classNames from 'classnames';
import React from 'react';
import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils';
var PageHeader = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(PageHeader, _React$Component);
  function PageHeader() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = PageHeader.prototype;
  _proto.render = function render() {
    var _this$props = this.props,
      className = _this$props.className,
      children = _this$props.children,
      props = _objectWithoutPropertiesLoose(_this$props, _excluded);
    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];
    var classes = getClassSet(bsProps);
    return /*#__PURE__*/React.createElement("div", _extends({}, elementProps, {
      className: classNames(className, classes)
    }), /*#__PURE__*/React.createElement("h1", null, children));
  };
  return PageHeader;
}(React.Component);
export default bsClass('page-header', PageHeader);