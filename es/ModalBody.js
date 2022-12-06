import _extends from "@babel/runtime-corejs3/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime-corejs3/helpers/esm/inheritsLoose";
var _excluded = ["componentClass", "className"];
import classNames from 'classnames';
import React from 'react';
import elementType from 'prop-types-extra/lib/elementType';
import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils';
var propTypes = {
  componentClass: elementType
};
var defaultProps = {
  componentClass: 'div'
};
var ModalBody = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ModalBody, _React$Component);
  function ModalBody() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = ModalBody.prototype;
  _proto.render = function render() {
    var _this$props = this.props,
      Component = _this$props.componentClass,
      className = _this$props.className,
      props = _objectWithoutPropertiesLoose(_this$props, _excluded);
    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];
    var classes = getClassSet(bsProps);
    return /*#__PURE__*/React.createElement(Component, _extends({}, elementProps, {
      className: classNames(className, classes)
    }));
  };
  return ModalBody;
}(React.Component);
ModalBody.propTypes = propTypes;
ModalBody.defaultProps = defaultProps;
export default bsClass('modal-body', ModalBody);