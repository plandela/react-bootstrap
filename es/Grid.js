import _extends from "@babel/runtime-corejs3/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime-corejs3/helpers/esm/inheritsLoose";
var _excluded = ["fluid", "componentClass", "className"];
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import { bsClass, prefix, splitBsProps } from './utils/bootstrapUtils';
var propTypes = {
  /**
   * Turn any fixed-width grid layout into a full-width layout by this property.
   *
   * Adds `container-fluid` class.
   */
  fluid: PropTypes.bool,
  /**
   * You can use a custom element for this component
   */
  componentClass: elementType
};
var defaultProps = {
  componentClass: 'div',
  fluid: false
};
var Grid = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Grid, _React$Component);
  function Grid() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Grid.prototype;
  _proto.render = function render() {
    var _this$props = this.props,
      fluid = _this$props.fluid,
      Component = _this$props.componentClass,
      className = _this$props.className,
      props = _objectWithoutPropertiesLoose(_this$props, _excluded);
    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];
    var classes = prefix(bsProps, fluid && 'fluid');
    return /*#__PURE__*/React.createElement(Component, _extends({}, elementProps, {
      className: classNames(className, classes)
    }));
  };
  return Grid;
}(React.Component);
Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;
export default bsClass('container', Grid);