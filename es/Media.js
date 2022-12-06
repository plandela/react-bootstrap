import _extends from "@babel/runtime-corejs3/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime-corejs3/helpers/esm/inheritsLoose";
var _excluded = ["componentClass", "className"];
import classNames from 'classnames';
import React from 'react';
import elementType from 'prop-types-extra/lib/elementType';
import MediaBody from './MediaBody';
import MediaHeading from './MediaHeading';
import MediaLeft from './MediaLeft';
import MediaList from './MediaList';
import MediaListItem from './MediaListItem';
import MediaRight from './MediaRight';
import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils';
var propTypes = {
  componentClass: elementType
};
var defaultProps = {
  componentClass: 'div'
};
var Media = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Media, _React$Component);
  function Media() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Media.prototype;
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
  return Media;
}(React.Component);
Media.propTypes = propTypes;
Media.defaultProps = defaultProps;
Media.Heading = MediaHeading;
Media.Body = MediaBody;
Media.Left = MediaLeft;
Media.Right = MediaRight;
Media.List = MediaList;
Media.ListItem = MediaListItem;
export default bsClass('media', Media);