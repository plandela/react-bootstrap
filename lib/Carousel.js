"use strict";

var _WeakMap = require("@babel/runtime-corejs3/core-js-stable/weak-map");
var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose"));
var _bind = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/bind"));
var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));
var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));
var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inheritsLoose"));
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _CarouselCaption = _interopRequireDefault(require("./CarouselCaption"));
var _CarouselItem = _interopRequireDefault(require("./CarouselItem"));
var _Glyphicon = _interopRequireDefault(require("./Glyphicon"));
var _SafeAnchor = _interopRequireDefault(require("./SafeAnchor"));
var _bootstrapUtils = require("./utils/bootstrapUtils");
var _ValidComponentChildren = _interopRequireDefault(require("./utils/ValidComponentChildren"));
var _excluded = ["slide", "indicators", "controls", "wrap", "prevIcon", "prevLabel", "nextIcon", "nextLabel", "className", "children"];
function _getRequireWildcardCache(nodeInterop) { if (typeof _WeakMap !== "function") return null; var cacheBabelInterop = new _WeakMap(); var cacheNodeInterop = new _WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { _Object$defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// TODO: `slide` should be `animate`.

// TODO: Use uncontrollable.

var propTypes = {
  slide: _propTypes["default"].bool,
  indicators: _propTypes["default"].bool,
  /**
   * The amount of time to delay between automatically cycling an item.
   * If `null`, carousel will not automatically cycle.
   */
  interval: _propTypes["default"].number,
  controls: _propTypes["default"].bool,
  pauseOnHover: _propTypes["default"].bool,
  wrap: _propTypes["default"].bool,
  /**
   * Callback fired when the active item changes.
   *
   * ```js
   * (eventKey: any, ?event: Object) => any
   * ```
   *
   * If this callback takes two or more arguments, the second argument will
   * be a persisted event object with `direction` set to the direction of the
   * transition.
   */
  onSelect: _propTypes["default"].func,
  onSlideEnd: _propTypes["default"].func,
  activeIndex: _propTypes["default"].number,
  defaultActiveIndex: _propTypes["default"].number,
  direction: _propTypes["default"].oneOf(['prev', 'next']),
  prevIcon: _propTypes["default"].node,
  /**
   * Label shown to screen readers only, can be used to show the previous element
   * in the carousel.
   * Set to null to deactivate.
   */
  prevLabel: _propTypes["default"].string,
  nextIcon: _propTypes["default"].node,
  /**
   * Label shown to screen readers only, can be used to show the next element
   * in the carousel.
   * Set to null to deactivate.
   */
  nextLabel: _propTypes["default"].string
};
var defaultProps = {
  slide: true,
  interval: 5000,
  pauseOnHover: true,
  wrap: true,
  indicators: true,
  controls: true,
  prevIcon: /*#__PURE__*/_react["default"].createElement(_Glyphicon["default"], {
    glyph: "chevron-left"
  }),
  prevLabel: 'Previous',
  nextIcon: /*#__PURE__*/_react["default"].createElement(_Glyphicon["default"], {
    glyph: "chevron-right"
  }),
  nextLabel: 'Next'
};
var Carousel = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(Carousel, _React$Component);
  function Carousel(props, context) {
    var _context, _context2, _context3, _context4, _context5;
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    _this.handleMouseOver = (0, _bind["default"])(_context = _this.handleMouseOver).call(_context, (0, _assertThisInitialized2["default"])(_this));
    _this.handleMouseOut = (0, _bind["default"])(_context2 = _this.handleMouseOut).call(_context2, (0, _assertThisInitialized2["default"])(_this));
    _this.handlePrev = (0, _bind["default"])(_context3 = _this.handlePrev).call(_context3, (0, _assertThisInitialized2["default"])(_this));
    _this.handleNext = (0, _bind["default"])(_context4 = _this.handleNext).call(_context4, (0, _assertThisInitialized2["default"])(_this));
    _this.handleItemAnimateOutEnd = (0, _bind["default"])(_context5 = _this.handleItemAnimateOutEnd).call(_context5, (0, _assertThisInitialized2["default"])(_this));
    var defaultActiveIndex = props.defaultActiveIndex;
    _this.state = {
      activeIndex: defaultActiveIndex != null ? defaultActiveIndex : 0,
      previousActiveIndex: null,
      direction: null
    };
    _this.isUnmounted = false;
    return _this;
  }
  var _proto = Carousel.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.waitForNext();
  };
  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    // eslint-disable-line
    var activeIndex = this.getActiveIndex();
    if (nextProps.activeIndex != null && nextProps.activeIndex !== activeIndex) {
      clearTimeout(this.timeout);
      this.setState({
        previousActiveIndex: activeIndex,
        direction: nextProps.direction != null ? nextProps.direction : this.getDirection(activeIndex, nextProps.activeIndex)
      });
    }
    if (nextProps.activeIndex == null && this.state.activeIndex >= nextProps.children.length) {
      this.setState({
        activeIndex: 0,
        previousActiveIndex: null,
        direction: null
      });
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timeout);
    this.isUnmounted = true;
  };
  _proto.getActiveIndex = function getActiveIndex() {
    var activeIndexProp = this.props.activeIndex;
    return activeIndexProp != null ? activeIndexProp : this.state.activeIndex;
  };
  _proto.getDirection = function getDirection(prevIndex, index) {
    if (prevIndex === index) {
      return null;
    }
    return prevIndex > index ? 'prev' : 'next';
  };
  _proto.handleItemAnimateOutEnd = function handleItemAnimateOutEnd() {
    var _this2 = this;
    this.setState({
      previousActiveIndex: null,
      direction: null
    }, function () {
      _this2.waitForNext();
      if (_this2.props.onSlideEnd) {
        _this2.props.onSlideEnd();
      }
    });
  };
  _proto.handleMouseOut = function handleMouseOut() {
    if (this.isPaused) {
      this.play();
    }
  };
  _proto.handleMouseOver = function handleMouseOver() {
    if (this.props.pauseOnHover) {
      this.pause();
    }
  };
  _proto.handleNext = function handleNext(e) {
    var index = this.getActiveIndex() + 1;
    var count = _ValidComponentChildren["default"].count(this.props.children);
    if (index > count - 1) {
      if (!this.props.wrap) {
        return;
      }
      index = 0;
    }
    this.select(index, e, 'next');
  };
  _proto.handlePrev = function handlePrev(e) {
    var index = this.getActiveIndex() - 1;
    if (index < 0) {
      if (!this.props.wrap) {
        return;
      }
      index = _ValidComponentChildren["default"].count(this.props.children) - 1;
    }
    this.select(index, e, 'prev');
  }

  // This might be a public API.
  ;
  _proto.pause = function pause() {
    this.isPaused = true;
    clearTimeout(this.timeout);
  }

  // This might be a public API.
  ;
  _proto.play = function play() {
    this.isPaused = false;
    this.waitForNext();
  };
  _proto.select = function select(index, e, direction) {
    clearTimeout(this.timeout);

    // TODO: Is this necessary? Seems like the only risk is if the component
    // unmounts while handleItemAnimateOutEnd fires.
    if (this.isUnmounted) {
      return;
    }
    var previousActiveIndex = this.props.slide ? this.getActiveIndex() : null;
    direction = direction || this.getDirection(previousActiveIndex, index);
    var onSelect = this.props.onSelect;
    if (onSelect) {
      if (onSelect.length > 1) {
        // React SyntheticEvents are pooled, so we need to remove this event
        // from the pool to add a custom property. To avoid unnecessarily
        // removing objects from the pool, only do this when the listener
        // actually wants the event.
        if (e) {
          e.persist();
          e.direction = direction;
        } else {
          e = {
            direction: direction
          };
        }
        onSelect(index, e);
      } else {
        onSelect(index);
      }
    }
    if (this.props.activeIndex == null && index !== previousActiveIndex) {
      if (this.state.previousActiveIndex != null) {
        // If currently animating don't activate the new index.
        // TODO: look into queueing this canceled call and
        // animating after the current animation has ended.
        return;
      }
      this.setState({
        activeIndex: index,
        previousActiveIndex: previousActiveIndex,
        direction: direction
      });
    }
  };
  _proto.waitForNext = function waitForNext() {
    var _this$props = this.props,
      slide = _this$props.slide,
      interval = _this$props.interval,
      activeIndexProp = _this$props.activeIndex;
    if (!this.isPaused && slide && interval && activeIndexProp == null) {
      this.timeout = (0, _setTimeout2["default"])(this.handleNext, interval);
    }
  };
  _proto.renderControls = function renderControls(properties) {
    var wrap = properties.wrap,
      children = properties.children,
      activeIndex = properties.activeIndex,
      prevIcon = properties.prevIcon,
      nextIcon = properties.nextIcon,
      bsProps = properties.bsProps,
      prevLabel = properties.prevLabel,
      nextLabel = properties.nextLabel;
    var controlClassName = (0, _bootstrapUtils.prefix)(bsProps, 'control');
    var count = _ValidComponentChildren["default"].count(children);
    return [(wrap || activeIndex !== 0) && /*#__PURE__*/_react["default"].createElement(_SafeAnchor["default"], {
      key: "prev",
      className: (0, _classnames["default"])(controlClassName, 'left'),
      onClick: this.handlePrev
    }, prevIcon, prevLabel && /*#__PURE__*/_react["default"].createElement("span", {
      className: "sr-only"
    }, prevLabel)), (wrap || activeIndex !== count - 1) && /*#__PURE__*/_react["default"].createElement(_SafeAnchor["default"], {
      key: "next",
      className: (0, _classnames["default"])(controlClassName, 'right'),
      onClick: this.handleNext
    }, nextIcon, nextLabel && /*#__PURE__*/_react["default"].createElement("span", {
      className: "sr-only"
    }, nextLabel))];
  };
  _proto.renderIndicators = function renderIndicators(children, activeIndex, bsProps) {
    var _this3 = this;
    var indicators = [];
    (0, _forEach["default"])(_ValidComponentChildren["default"]).call(_ValidComponentChildren["default"], children, function (child, index) {
      indicators.push( /*#__PURE__*/_react["default"].createElement("li", {
        key: index,
        className: index === activeIndex ? 'active' : null,
        onClick: function onClick(e) {
          return _this3.select(index, e);
        }
      }),
      // Force whitespace between indicator elements. Bootstrap requires
      // this for correct spacing of elements.
      ' ');
    });
    return /*#__PURE__*/_react["default"].createElement("ol", {
      className: (0, _bootstrapUtils.prefix)(bsProps, 'indicators')
    }, indicators);
  };
  _proto.render = function render() {
    var _this4 = this;
    var _this$props2 = this.props,
      slide = _this$props2.slide,
      indicators = _this$props2.indicators,
      controls = _this$props2.controls,
      wrap = _this$props2.wrap,
      prevIcon = _this$props2.prevIcon,
      prevLabel = _this$props2.prevLabel,
      nextIcon = _this$props2.nextIcon,
      nextLabel = _this$props2.nextLabel,
      className = _this$props2.className,
      children = _this$props2.children,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_this$props2, _excluded);
    var _this$state = this.state,
      previousActiveIndex = _this$state.previousActiveIndex,
      direction = _this$state.direction;
    var _splitBsPropsAndOmit = (0, _bootstrapUtils.splitBsPropsAndOmit)(props, ['interval', 'pauseOnHover', 'onSelect', 'onSlideEnd', 'activeIndex',
      // Accessed via this.getActiveIndex().
      'defaultActiveIndex', 'direction']),
      bsProps = _splitBsPropsAndOmit[0],
      elementProps = _splitBsPropsAndOmit[1];
    var activeIndex = this.getActiveIndex();
    var classes = (0, _extends2["default"])({}, (0, _bootstrapUtils.getClassSet)(bsProps), {
      slide: slide
    });
    return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, elementProps, {
      className: (0, _classnames["default"])(className, classes),
      onMouseOver: this.handleMouseOver,
      onMouseOut: this.handleMouseOut
    }), indicators && this.renderIndicators(children, activeIndex, bsProps), /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _bootstrapUtils.prefix)(bsProps, 'inner')
    }, (0, _map["default"])(_ValidComponentChildren["default"]).call(_ValidComponentChildren["default"], children, function (child, index) {
      var active = index === activeIndex;
      var previousActive = slide && index === previousActiveIndex;
      return /*#__PURE__*/(0, _react.cloneElement)(child, {
        active: active,
        index: index,
        animateOut: previousActive,
        animateIn: active && previousActiveIndex != null && slide,
        direction: direction,
        onAnimateOutEnd: previousActive ? _this4.handleItemAnimateOutEnd : null
      });
    })), controls && this.renderControls({
      wrap: wrap,
      children: children,
      activeIndex: activeIndex,
      prevIcon: prevIcon,
      prevLabel: prevLabel,
      nextIcon: nextIcon,
      nextLabel: nextLabel,
      bsProps: bsProps
    }));
  };
  return Carousel;
}(_react["default"].Component);
Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;
Carousel.Caption = _CarouselCaption["default"];
Carousel.Item = _CarouselItem["default"];
var _default = (0, _bootstrapUtils.bsClass)('carousel', Carousel);
exports["default"] = _default;
module.exports = exports["default"];