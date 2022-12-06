import _extends from "@babel/runtime-corejs3/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime-corejs3/helpers/esm/inheritsLoose";
var _excluded = ["children", "componentClass", "className"];
import _someInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/some";
import _everyInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/every";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
import classNames from 'classnames';
import React, { cloneElement } from 'react';
import elementType from 'prop-types-extra/lib/elementType';
import ListGroupItem from './ListGroupItem';
import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils';
import ValidComponentChildren from './utils/ValidComponentChildren';
var propTypes = {
  /**
   * You can use a custom element type for this component.
   *
   * If not specified, it will be treated as `'li'` if every child is a
   * non-actionable `<ListGroupItem>`, and `'div'` otherwise.
   */
  componentClass: elementType
};
function getDefaultComponent(children) {
  if (!children) {
    // FIXME: This is the old behavior. Is this right?
    return 'div';
  }
  if (_someInstanceProperty(ValidComponentChildren).call(ValidComponentChildren, children, function (child) {
    return child.type !== ListGroupItem || child.props.href || child.props.onClick;
  })) {
    return 'div';
  }
  return 'ul';
}
var ListGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ListGroup, _React$Component);
  function ListGroup() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = ListGroup.prototype;
  _proto.render = function render() {
    var _this$props = this.props,
      children = _this$props.children,
      _this$props$component = _this$props.componentClass,
      Component = _this$props$component === void 0 ? getDefaultComponent(children) : _this$props$component,
      className = _this$props.className,
      props = _objectWithoutPropertiesLoose(_this$props, _excluded);
    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];
    var classes = getClassSet(bsProps);
    var useListItem = Component === 'ul' && _everyInstanceProperty(ValidComponentChildren).call(ValidComponentChildren, children, function (child) {
      return child.type === ListGroupItem;
    });
    return /*#__PURE__*/React.createElement(Component, _extends({}, elementProps, {
      className: classNames(className, classes)
    }), useListItem ? _mapInstanceProperty(ValidComponentChildren).call(ValidComponentChildren, children, function (child) {
      return /*#__PURE__*/cloneElement(child, {
        listItem: true
      });
    }) : children);
  };
  return ListGroup;
}(React.Component);
ListGroup.propTypes = propTypes;
export default bsClass('list-group', ListGroup);