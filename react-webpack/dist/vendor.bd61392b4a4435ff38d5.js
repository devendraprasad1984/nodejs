"use strict";
(self["webpackChunkreact_webpack"] = self["webpackChunkreact_webpack"] || []).push([["vendor"],{

/***/ "./node_modules/semantic-ui-react/dist/es/addons/Portal/Portal.js":
/*!************************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/addons/Portal/Portal.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var lodash_es_invoke__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es/invoke */ "./node_modules/lodash-es/invoke.js");
/* harmony import */ var _semantic_ui_react_event_stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @semantic-ui-react/event-stack */ "./node_modules/@semantic-ui-react/event-stack/lib/index.js");
/* harmony import */ var _semantic_ui_react_event_stack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_semantic_ui_react_event_stack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fluentui_react_component_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-component-ref */ "./node_modules/@fluentui/react-component-ref/dist/es/utils.js");
/* harmony import */ var _fluentui_react_component_ref__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react-component-ref */ "./node_modules/@fluentui/react-component-ref/dist/es/Ref.js");
/* harmony import */ var keyboard_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! keyboard-key */ "./node_modules/keyboard-key/src/keyboardKey.js");
/* harmony import */ var keyboard_key__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(keyboard_key__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/doesNodeContainClick.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/ModernAutoControlledComponent.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js");
/* harmony import */ var _utils_validateTrigger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/validateTrigger */ "./node_modules/semantic-ui-react/dist/es/addons/Portal/utils/validateTrigger.js");
/* harmony import */ var _PortalInner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PortalInner */ "./node_modules/semantic-ui-react/dist/es/addons/Portal/PortalInner.js");












/**
 * A component that allows you to render children outside their parent.
 * @see Modal
 * @see Popup
 * @see Dimmer
 * @see Confirm
 */
var Portal = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Portal, _Component);

  function Portal() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.contentRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createRef();
    _this.triggerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createRef();
    _this.latestDocumentMouseDownEvent = null;

    _this.handleDocumentMouseDown = function (e) {
      _this.latestDocumentMouseDownEvent = e;
    };

    _this.handleDocumentClick = function (e) {
      var closeOnDocumentClick = _this.props.closeOnDocumentClick;
      var currentMouseDownEvent = _this.latestDocumentMouseDownEvent;
      _this.latestDocumentMouseDownEvent = null;

      if (!_this.contentRef.current || // no portal
      (0,_lib__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.triggerRef.current, e) || // event happened in trigger (delegate to trigger handlers)
      currentMouseDownEvent && (0,_lib__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.contentRef.current, currentMouseDownEvent) || // event originated in the portal but was ended outside
      (0,_lib__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.contentRef.current, e) // event happened in the portal
      ) {
          return;
        } // ignore the click


      if (closeOnDocumentClick) {
        _this.close(e);
      }
    };

    _this.handleEscape = function (e) {
      if (!_this.props.closeOnEscape) return;
      if (keyboard_key__WEBPACK_IMPORTED_MODULE_3___default().getCode(e) !== (keyboard_key__WEBPACK_IMPORTED_MODULE_3___default().Escape)) return;

      _this.close(e);
    };

    _this.handlePortalMouseLeave = function (e) {
      var _this$props = _this.props,
          closeOnPortalMouseLeave = _this$props.closeOnPortalMouseLeave,
          mouseLeaveDelay = _this$props.mouseLeaveDelay;
      if (!closeOnPortalMouseLeave) return; // Do not close the portal when 'mouseleave' is triggered by children

      if (e.target !== _this.contentRef.current) return;
      _this.mouseLeaveTimer = _this.closeWithTimeout(e, mouseLeaveDelay);
    };

    _this.handlePortalMouseEnter = function () {
      // In order to enable mousing from the trigger to the portal, we need to
      // clear the mouseleave timer that was set when leaving the trigger.
      var closeOnPortalMouseLeave = _this.props.closeOnPortalMouseLeave;
      if (!closeOnPortalMouseLeave) return;
      clearTimeout(_this.mouseLeaveTimer);
    };

    _this.handleTriggerBlur = function (e) {
      var _this$props2 = _this.props,
          trigger = _this$props2.trigger,
          closeOnTriggerBlur = _this$props2.closeOnTriggerBlur; // Call original event handler

      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }

      lodash_es_invoke__WEBPACK_IMPORTED_MODULE_6__["default"].apply(void 0, [trigger, 'props.onBlur', e].concat(rest)); // IE 11 doesn't work with relatedTarget in blur events


      var target = e.relatedTarget || document.activeElement; // do not close if focus is given to the portal

      var didFocusPortal = (0,lodash_es_invoke__WEBPACK_IMPORTED_MODULE_6__["default"])(_this.contentRef.current, 'contains', target);

      if (!closeOnTriggerBlur || didFocusPortal) return;

      _this.close(e);
    };

    _this.handleTriggerClick = function (e) {
      var _this$props3 = _this.props,
          trigger = _this$props3.trigger,
          closeOnTriggerClick = _this$props3.closeOnTriggerClick,
          openOnTriggerClick = _this$props3.openOnTriggerClick;
      var open = _this.state.open; // Call original event handler

      for (var _len3 = arguments.length, rest = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        rest[_key3 - 1] = arguments[_key3];
      }

      lodash_es_invoke__WEBPACK_IMPORTED_MODULE_6__["default"].apply(void 0, [trigger, 'props.onClick', e].concat(rest));

      if (open && closeOnTriggerClick) {
        _this.close(e);
      } else if (!open && openOnTriggerClick) {
        _this.open(e);
      }
    };

    _this.handleTriggerFocus = function (e) {
      var _this$props4 = _this.props,
          trigger = _this$props4.trigger,
          openOnTriggerFocus = _this$props4.openOnTriggerFocus; // Call original event handler

      for (var _len4 = arguments.length, rest = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        rest[_key4 - 1] = arguments[_key4];
      }

      lodash_es_invoke__WEBPACK_IMPORTED_MODULE_6__["default"].apply(void 0, [trigger, 'props.onFocus', e].concat(rest));

      if (!openOnTriggerFocus) return;

      _this.open(e);
    };

    _this.handleTriggerMouseLeave = function (e) {
      clearTimeout(_this.mouseEnterTimer);
      var _this$props5 = _this.props,
          trigger = _this$props5.trigger,
          closeOnTriggerMouseLeave = _this$props5.closeOnTriggerMouseLeave,
          mouseLeaveDelay = _this$props5.mouseLeaveDelay; // Call original event handler

      for (var _len5 = arguments.length, rest = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        rest[_key5 - 1] = arguments[_key5];
      }

      lodash_es_invoke__WEBPACK_IMPORTED_MODULE_6__["default"].apply(void 0, [trigger, 'props.onMouseLeave', e].concat(rest));

      if (!closeOnTriggerMouseLeave) return;
      _this.mouseLeaveTimer = _this.closeWithTimeout(e, mouseLeaveDelay);
    };

    _this.handleTriggerMouseEnter = function (e) {
      clearTimeout(_this.mouseLeaveTimer);
      var _this$props6 = _this.props,
          trigger = _this$props6.trigger,
          mouseEnterDelay = _this$props6.mouseEnterDelay,
          openOnTriggerMouseEnter = _this$props6.openOnTriggerMouseEnter; // Call original event handler

      for (var _len6 = arguments.length, rest = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        rest[_key6 - 1] = arguments[_key6];
      }

      lodash_es_invoke__WEBPACK_IMPORTED_MODULE_6__["default"].apply(void 0, [trigger, 'props.onMouseEnter', e].concat(rest));

      if (!openOnTriggerMouseEnter) return;
      _this.mouseEnterTimer = _this.openWithTimeout(e, mouseEnterDelay);
    };

    _this.open = function (e) {
      (0,lodash_es_invoke__WEBPACK_IMPORTED_MODULE_6__["default"])(_this.props, 'onOpen', e, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.props, {
        open: true
      }));

      _this.setState({
        open: true
      });
    };

    _this.openWithTimeout = function (e, delay) {
      // React wipes the entire event object and suggests using e.persist() if
      // you need the event for async access. However, even with e.persist
      // certain required props (e.g. currentTarget) are null so we're forced to clone.
      var eventClone = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e);

      return setTimeout(function () {
        return _this.open(eventClone);
      }, delay || 0);
    };

    _this.close = function (e) {
      _this.setState({
        open: false
      });

      (0,lodash_es_invoke__WEBPACK_IMPORTED_MODULE_6__["default"])(_this.props, 'onClose', e, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.props, {
        open: false
      }));
    };

    _this.closeWithTimeout = function (e, delay) {
      // React wipes the entire event object and suggests using e.persist() if
      // you need the event for async access. However, even with e.persist
      // certain required props (e.g. currentTarget) are null so we're forced to clone.
      var eventClone = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e);

      return setTimeout(function () {
        return _this.close(eventClone);
      }, delay || 0);
    };

    _this.handleMount = function () {
      (0,lodash_es_invoke__WEBPACK_IMPORTED_MODULE_6__["default"])(_this.props, 'onMount', null, _this.props);
    };

    _this.handleUnmount = function () {
      (0,lodash_es_invoke__WEBPACK_IMPORTED_MODULE_6__["default"])(_this.props, 'onUnmount', null, _this.props);
    };

    _this.handleTriggerRef = function (c) {
      _this.triggerRef.current = c;
      (0,_fluentui_react_component_ref__WEBPACK_IMPORTED_MODULE_7__.handleRef)(_this.props.triggerRef, c);
    };

    return _this;
  }

  var _proto = Portal.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    // Clean up timers
    clearTimeout(this.mouseEnterTimer);
    clearTimeout(this.mouseLeaveTimer);
  } // ----------------------------------------
  // Document Event Handlers
  // ----------------------------------------
  ;

  _proto.render = function render() {
    var _this$props7 = this.props,
        children = _this$props7.children,
        eventPool = _this$props7.eventPool,
        mountNode = _this$props7.mountNode,
        trigger = _this$props7.trigger;
    var open = this.state.open;
    /* istanbul ignore else */

    if (true) {
      (0,_utils_validateTrigger__WEBPACK_IMPORTED_MODULE_8__["default"])(trigger);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, open && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_PortalInner__WEBPACK_IMPORTED_MODULE_9__["default"], {
      innerRef: this.contentRef,
      mountNode: mountNode,
      onMount: this.handleMount,
      onUnmount: this.handleUnmount
    }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement((_semantic_ui_react_event_stack__WEBPACK_IMPORTED_MODULE_2___default()), {
      name: "mouseleave",
      on: this.handlePortalMouseLeave,
      pool: eventPool,
      target: this.contentRef
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement((_semantic_ui_react_event_stack__WEBPACK_IMPORTED_MODULE_2___default()), {
      name: "mouseenter",
      on: this.handlePortalMouseEnter,
      pool: eventPool,
      target: this.contentRef
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement((_semantic_ui_react_event_stack__WEBPACK_IMPORTED_MODULE_2___default()), {
      name: "mousedown",
      on: this.handleDocumentMouseDown,
      pool: eventPool
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement((_semantic_ui_react_event_stack__WEBPACK_IMPORTED_MODULE_2___default()), {
      name: "click",
      on: this.handleDocumentClick,
      pool: eventPool
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement((_semantic_ui_react_event_stack__WEBPACK_IMPORTED_MODULE_2___default()), {
      name: "keydown",
      on: this.handleEscape,
      pool: eventPool
    })), trigger && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_fluentui_react_component_ref__WEBPACK_IMPORTED_MODULE_10__.Ref, {
      innerRef: this.handleTriggerRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.cloneElement(trigger, {
      onBlur: this.handleTriggerBlur,
      onClick: this.handleTriggerClick,
      onFocus: this.handleTriggerFocus,
      onMouseLeave: this.handleTriggerMouseLeave,
      onMouseEnter: this.handleTriggerMouseEnter
    })));
  };

  return Portal;
}(_lib__WEBPACK_IMPORTED_MODULE_11__["default"]);

Portal.handledProps = ["children", "closeOnDocumentClick", "closeOnEscape", "closeOnPortalMouseLeave", "closeOnTriggerBlur", "closeOnTriggerClick", "closeOnTriggerMouseLeave", "defaultOpen", "eventPool", "mountNode", "mouseEnterDelay", "mouseLeaveDelay", "onClose", "onMount", "onOpen", "onUnmount", "open", "openOnTriggerClick", "openOnTriggerFocus", "openOnTriggerMouseEnter", "trigger", "triggerRef"];
Portal.propTypes =  true ? {
  /** Primary content. */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().node.isRequired),

  /** Controls whether or not the portal should close when the document is clicked. */
  closeOnDocumentClick: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /** Controls whether or not the portal should close when escape is pressed is displayed. */
  closeOnEscape: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /**
   * Controls whether or not the portal should close when mousing out of the portal.
   * NOTE: This will prevent `closeOnTriggerMouseLeave` when mousing over the
   * gap from the trigger to the portal.
   */
  closeOnPortalMouseLeave: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /** Controls whether or not the portal should close on blur of the trigger. */
  closeOnTriggerBlur: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /** Controls whether or not the portal should close on click of the trigger. */
  closeOnTriggerClick: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /** Controls whether or not the portal should close when mousing out of the trigger. */
  closeOnTriggerMouseLeave: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /** Initial value of open. */
  defaultOpen: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /** Event pool namespace that is used to handle component events */
  eventPool: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),

  /** The node where the portal should mount. */
  mountNode: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().any),

  /** Milliseconds to wait before opening on mouse over */
  mouseEnterDelay: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number),

  /** Milliseconds to wait before closing on mouse leave */
  mouseLeaveDelay: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number),

  /**
   * Called when a close event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func),

  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func),

  /**
   * Called when an open event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func),

  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func),

  /** Controls whether or not the portal is displayed. */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /** Controls whether or not the portal should open when the trigger is clicked. */
  openOnTriggerClick: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /** Controls whether or not the portal should open on focus of the trigger. */
  openOnTriggerFocus: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /** Controls whether or not the portal should open when mousing over the trigger. */
  openOnTriggerMouseEnter: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /** Element to be rendered in-place where the portal is defined. */
  trigger: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().node),

  /** Called with a ref to the trigger node. */
  triggerRef: _lib__WEBPACK_IMPORTED_MODULE_13__.ref
} : 0;
Portal.defaultProps = {
  closeOnDocumentClick: true,
  closeOnEscape: true,
  eventPool: 'default',
  openOnTriggerClick: true
};
Portal.autoControlledProps = ['open'];
Portal.Inner = _PortalInner__WEBPACK_IMPORTED_MODULE_9__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portal);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/addons/Portal/PortalInner.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/addons/Portal/PortalInner.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var lodash_es_invoke__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es/invoke */ "./node_modules/lodash-es/invoke.js");
/* harmony import */ var _fluentui_react_component_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-component-ref */ "./node_modules/@fluentui/react-component-ref/dist/es/utils.js");
/* harmony import */ var _fluentui_react_component_ref__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-component-ref */ "./node_modules/@fluentui/react-component-ref/dist/es/Ref.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/isBrowser.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js");








/**
 * An inner component that allows you to render children outside their parent.
 */
var PortalInner = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PortalInner, _Component);

  function PortalInner() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleRef = function (c) {
      (0,_fluentui_react_component_ref__WEBPACK_IMPORTED_MODULE_3__.handleRef)(_this.props.innerRef, c);
    };

    return _this;
  }

  var _proto = PortalInner.prototype;

  _proto.componentDidMount = function componentDidMount() {
    (0,lodash_es_invoke__WEBPACK_IMPORTED_MODULE_4__["default"])(this.props, 'onMount', null, this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0,lodash_es_invoke__WEBPACK_IMPORTED_MODULE_4__["default"])(this.props, 'onUnmount', null, this.props);
  };

  _proto.render = function render() {
    if (!(0,_lib__WEBPACK_IMPORTED_MODULE_5__["default"])()) return null;
    var _this$props = this.props,
        children = _this$props.children,
        _this$props$mountNode = _this$props.mountNode,
        mountNode = _this$props$mountNode === void 0 ? document.body : _this$props$mountNode;
    return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_fluentui_react_component_ref__WEBPACK_IMPORTED_MODULE_6__.Ref, {
      innerRef: this.handleRef
    }, children), mountNode);
  };

  return PortalInner;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

PortalInner.handledProps = ["children", "innerRef", "mountNode", "onMount", "onUnmount"];
PortalInner.propTypes =  true ? {
  /** Primary content. */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().node.isRequired),

  /** Called with a ref to the inner node. */
  innerRef: _lib__WEBPACK_IMPORTED_MODULE_8__.ref,

  /** The node where the portal should mount. */
  mountNode: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().any),

  /**
   * Called when the portal is mounted on the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Called when the portal is unmounted from the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PortalInner);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/addons/Portal/utils/validateTrigger.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/addons/Portal/utils/validateTrigger.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateTrigger)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");


/**
 * Asserts that a passed element can be used cloned a props will be applied properly.
 */

function validateTrigger(element) {
  if (element) {
    react__WEBPACK_IMPORTED_MODULE_0__.Children.only(element);

    if (react_is__WEBPACK_IMPORTED_MODULE_1__.isFragment(element)) {
      throw new Error('An "React.Fragment" cannot be used as a `trigger`.');
    }
  }
}

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/elements/Container/Container.js":
/*!********************************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/elements/Container/Container.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getElementType.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/SUI.js");





/**
 * A container limits content to a maximum width.
 */

function Container(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      fluid = props.fluid,
      text = props.text,
      textAlign = props.textAlign;
  var classes = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('ui', (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(text, 'text'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(fluid, 'fluid'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useTextAlignProp)(textAlign), 'container', className);
  var rest = (0,_lib__WEBPACK_IMPORTED_MODULE_4__["default"])(Container, props);
  var ElementType = (0,_lib__WEBPACK_IMPORTED_MODULE_5__["default"])(Container, props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ElementType, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    className: classes
  }), _lib__WEBPACK_IMPORTED_MODULE_6__.isNil(children) ? content : children);
}

Container.handledProps = ["as", "children", "className", "content", "fluid", "text", "textAlign"];
Container.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().elementType),

  /** Primary content. */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().node),

  /** Additional classes. */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),

  /** Shorthand for primary content. */
  content: _lib__WEBPACK_IMPORTED_MODULE_8__.contentShorthand,

  /** Container has no maximum width. */
  fluid: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /** Reduce maximum width to more naturally accommodate text. */
  text: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /** Align container text. */
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(_lib__WEBPACK_IMPORTED_MODULE_9__.TEXT_ALIGNMENTS)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/elements/Divider/Divider.js":
/*!****************************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/elements/Divider/Divider.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getElementType.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js");





/**
 * A divider visually segments content into groups.
 */

function Divider(props) {
  var children = props.children,
      className = props.className,
      clearing = props.clearing,
      content = props.content,
      fitted = props.fitted,
      hidden = props.hidden,
      horizontal = props.horizontal,
      inverted = props.inverted,
      section = props.section,
      vertical = props.vertical;
  var classes = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('ui', (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(clearing, 'clearing'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(fitted, 'fitted'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(hidden, 'hidden'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(horizontal, 'horizontal'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(inverted, 'inverted'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(section, 'section'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(vertical, 'vertical'), 'divider', className);
  var rest = (0,_lib__WEBPACK_IMPORTED_MODULE_4__["default"])(Divider, props);
  var ElementType = (0,_lib__WEBPACK_IMPORTED_MODULE_5__["default"])(Divider, props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ElementType, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    className: classes
  }), _lib__WEBPACK_IMPORTED_MODULE_6__.isNil(children) ? content : children);
}

Divider.handledProps = ["as", "children", "className", "clearing", "content", "fitted", "hidden", "horizontal", "inverted", "section", "vertical"];
Divider.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().elementType),

  /** Primary content. */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().node),

  /** Additional classes. */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),

  /** Divider can clear the content above it. */
  clearing: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /** Shorthand for primary content. */
  content: _lib__WEBPACK_IMPORTED_MODULE_8__.contentShorthand,

  /** Divider can be fitted without any space above or below it. */
  fitted: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /** Divider can divide content without creating a dividing line. */
  hidden: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /** Divider can segment content horizontally. */
  horizontal: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /** Divider can have its colours inverted. */
  inverted: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /** Divider can provide greater margins to divide sections of content. */
  section: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /** Divider can segment content vertically. */
  vertical: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Divider);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/elements/Header/Header.js":
/*!**************************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/elements/Header/Header.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var lodash_es_without__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash-es/without */ "./node_modules/lodash-es/without.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getElementType.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/SUI.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Icon */ "./node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Image */ "./node_modules/semantic-ui-react/dist/es/elements/Image/Image.js");
/* harmony import */ var _HeaderSubheader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HeaderSubheader */ "./node_modules/semantic-ui-react/dist/es/elements/Header/HeaderSubheader.js");
/* harmony import */ var _HeaderContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HeaderContent */ "./node_modules/semantic-ui-react/dist/es/elements/Header/HeaderContent.js");










/**
 * A header provides a short summary of content
 */

function Header(props) {
  var attached = props.attached,
      block = props.block,
      children = props.children,
      className = props.className,
      color = props.color,
      content = props.content,
      disabled = props.disabled,
      dividing = props.dividing,
      floated = props.floated,
      icon = props.icon,
      image = props.image,
      inverted = props.inverted,
      size = props.size,
      sub = props.sub,
      subheader = props.subheader,
      textAlign = props.textAlign;
  var classes = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('ui', color, size, (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(block, 'block'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(disabled, 'disabled'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(dividing, 'dividing'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useValueAndKey)(floated, 'floated'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(icon === true, 'icon'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(image === true, 'image'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(inverted, 'inverted'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(sub, 'sub'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOrValueAndKey)(attached, 'attached'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useTextAlignProp)(textAlign), 'header', className);
  var rest = (0,_lib__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, props);
  var ElementType = (0,_lib__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, props);

  if (!_lib__WEBPACK_IMPORTED_MODULE_6__.isNil(children)) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ElementType, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
      className: classes
    }), children);
  }

  var iconElement = _Icon__WEBPACK_IMPORTED_MODULE_7__["default"].create(icon, {
    autoGenerateKey: false
  });
  var imageElement = _Image__WEBPACK_IMPORTED_MODULE_8__["default"].create(image, {
    autoGenerateKey: false
  });
  var subheaderElement = _HeaderSubheader__WEBPACK_IMPORTED_MODULE_9__["default"].create(subheader, {
    autoGenerateKey: false
  });

  if (iconElement || imageElement) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ElementType, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
      className: classes
    }), iconElement || imageElement, (content || subheaderElement) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_HeaderContent__WEBPACK_IMPORTED_MODULE_10__["default"], null, content, subheaderElement));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ElementType, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    className: classes
  }), content, subheaderElement);
}

Header.handledProps = ["as", "attached", "block", "children", "className", "color", "content", "disabled", "dividing", "floated", "icon", "image", "inverted", "size", "sub", "subheader", "textAlign"];
Header.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().elementType),

  /** Attach header  to other content, like a segment. */
  attached: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool), prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(['top', 'bottom'])]),

  /** Format header to appear inside a content block. */
  block: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /** Primary content. */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().node),

  /** Additional classes. */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),

  /** Color of the header. */
  color: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(_lib__WEBPACK_IMPORTED_MODULE_12__.COLORS),

  /** Shorthand for primary content. */
  content: _lib__WEBPACK_IMPORTED_MODULE_13__.contentShorthand,

  /** Show that the header is inactive. */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /** Divide header from the content below it. */
  dividing: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /** Header can sit to the left or right of other content. */
  floated: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(_lib__WEBPACK_IMPORTED_MODULE_12__.FLOATS),

  /** Add an icon by icon name or pass an Icon. */
  icon: _lib__WEBPACK_IMPORTED_MODULE_13__.every([_lib__WEBPACK_IMPORTED_MODULE_13__.disallow(['image']), prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool), _lib__WEBPACK_IMPORTED_MODULE_13__.itemShorthand])]),

  /** Add an image by img src or pass an Image. */
  image: _lib__WEBPACK_IMPORTED_MODULE_13__.every([_lib__WEBPACK_IMPORTED_MODULE_13__.disallow(['icon']), prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool), _lib__WEBPACK_IMPORTED_MODULE_13__.itemShorthand])]),

  /** Inverts the color of the header for dark backgrounds. */
  inverted: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /** Content headings are sized with em and are based on the font-size of their container. */
  size: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf((0,lodash_es_without__WEBPACK_IMPORTED_MODULE_14__["default"])(_lib__WEBPACK_IMPORTED_MODULE_12__.SIZES, 'big', 'massive', 'mini')),

  /** Headers may be formatted to label smaller or de-emphasized content. */
  sub: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /** Shorthand for Header.Subheader. */
  subheader: _lib__WEBPACK_IMPORTED_MODULE_13__.itemShorthand,

  /** Align header content. */
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(_lib__WEBPACK_IMPORTED_MODULE_12__.TEXT_ALIGNMENTS)
} : 0;
Header.Content = _HeaderContent__WEBPACK_IMPORTED_MODULE_10__["default"];
Header.Subheader = _HeaderSubheader__WEBPACK_IMPORTED_MODULE_9__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/elements/Header/HeaderContent.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/elements/Header/HeaderContent.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getElementType.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js");





/**
 * Header content wraps the main content when there is an adjacent Icon or Image.
 */

function HeaderContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('content', className);
  var rest = (0,_lib__WEBPACK_IMPORTED_MODULE_3__["default"])(HeaderContent, props);
  var ElementType = (0,_lib__WEBPACK_IMPORTED_MODULE_4__["default"])(HeaderContent, props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ElementType, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    className: classes
  }), _lib__WEBPACK_IMPORTED_MODULE_5__.isNil(children) ? content : children);
}

HeaderContent.handledProps = ["as", "children", "className", "content"];
HeaderContent.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().elementType),

  /** Primary content. */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),

  /** Additional classes. */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),

  /** Shorthand for primary content. */
  content: _lib__WEBPACK_IMPORTED_MODULE_7__.contentShorthand
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderContent);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/elements/Header/HeaderSubheader.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/elements/Header/HeaderSubheader.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getElementType.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/factories.js");





/**
 * Headers may contain subheaders.
 */

function HeaderSubheader(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('sub header', className);
  var rest = (0,_lib__WEBPACK_IMPORTED_MODULE_3__["default"])(HeaderSubheader, props);
  var ElementType = (0,_lib__WEBPACK_IMPORTED_MODULE_4__["default"])(HeaderSubheader, props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ElementType, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    className: classes
  }), _lib__WEBPACK_IMPORTED_MODULE_5__.isNil(children) ? content : children);
}

HeaderSubheader.handledProps = ["as", "children", "className", "content"];
HeaderSubheader.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().elementType),

  /** Primary content. */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),

  /** Additional classes. */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),

  /** Shorthand for primary content. */
  content: _lib__WEBPACK_IMPORTED_MODULE_7__.contentShorthand
} : 0;
HeaderSubheader.create = (0,_lib__WEBPACK_IMPORTED_MODULE_8__.createShorthandFactory)(HeaderSubheader, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderSubheader);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var lodash_es_without__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash-es/without */ "./node_modules/lodash-es/without.js");
/* harmony import */ var lodash_es_invoke__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es/invoke */ "./node_modules/lodash-es/invoke.js");
/* harmony import */ var lodash_es_isNil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es/isNil */ "./node_modules/lodash-es/isNil.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getElementType.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/SUI.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/factories.js");
/* harmony import */ var _IconGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./IconGroup */ "./node_modules/semantic-ui-react/dist/es/elements/Icon/IconGroup.js");










/**
 * An icon is a glyph used to represent something else.
 * @see Image
 */

var Icon = /*#__PURE__*/function (_PureComponent) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Icon, _PureComponent);

  function Icon() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    _this.handleClick = function (e) {
      var disabled = _this.props.disabled;

      if (disabled) {
        e.preventDefault();
        return;
      }

      (0,lodash_es_invoke__WEBPACK_IMPORTED_MODULE_4__["default"])(_this.props, 'onClick', e, _this.props);
    };

    return _this;
  }

  var _proto = Icon.prototype;

  _proto.getIconAriaOptions = function getIconAriaOptions() {
    var ariaOptions = {};
    var _this$props = this.props,
        ariaLabel = _this$props['aria-label'],
        ariaHidden = _this$props['aria-hidden'];

    if ((0,lodash_es_isNil__WEBPACK_IMPORTED_MODULE_5__["default"])(ariaLabel)) {
      ariaOptions['aria-hidden'] = 'true';
    } else {
      ariaOptions['aria-label'] = ariaLabel;
    }

    if (!(0,lodash_es_isNil__WEBPACK_IMPORTED_MODULE_5__["default"])(ariaHidden)) {
      ariaOptions['aria-hidden'] = ariaHidden;
    }

    return ariaOptions;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        bordered = _this$props2.bordered,
        circular = _this$props2.circular,
        className = _this$props2.className,
        color = _this$props2.color,
        corner = _this$props2.corner,
        disabled = _this$props2.disabled,
        fitted = _this$props2.fitted,
        flipped = _this$props2.flipped,
        inverted = _this$props2.inverted,
        link = _this$props2.link,
        loading = _this$props2.loading,
        name = _this$props2.name,
        rotated = _this$props2.rotated,
        size = _this$props2.size;
    var classes = (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(color, name, size, (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useKeyOnly)(bordered, 'bordered'), (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useKeyOnly)(circular, 'circular'), (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useKeyOnly)(disabled, 'disabled'), (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useKeyOnly)(fitted, 'fitted'), (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useKeyOnly)(inverted, 'inverted'), (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useKeyOnly)(link, 'link'), (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useKeyOnly)(loading, 'loading'), (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useKeyOrValueAndKey)(corner, 'corner'), (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useValueAndKey)(flipped, 'flipped'), (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useValueAndKey)(rotated, 'rotated'), 'icon', className);
    var rest = (0,_lib__WEBPACK_IMPORTED_MODULE_7__["default"])(Icon, this.props);
    var ElementType = (0,_lib__WEBPACK_IMPORTED_MODULE_8__["default"])(Icon, this.props);
    var ariaOptions = this.getIconAriaOptions();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(ElementType, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, ariaOptions, {
      className: classes,
      onClick: this.handleClick
    }));
  };

  return Icon;
}(react__WEBPACK_IMPORTED_MODULE_3__.PureComponent);

Icon.handledProps = ["aria-hidden", "aria-label", "as", "bordered", "circular", "className", "color", "corner", "disabled", "fitted", "flipped", "inverted", "link", "loading", "name", "rotated", "size"];
Icon.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().elementType),

  /** Formatted to appear bordered. */
  bordered: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),

  /** Icon can formatted to appear circular. */
  circular: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),

  /** Additional classes. */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),

  /** Color of the icon. */
  color: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(_lib__WEBPACK_IMPORTED_MODULE_10__.COLORS),

  /** Icons can display a smaller corner icon. */
  corner: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool), prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(['top left', 'top right', 'bottom left', 'bottom right'])]),

  /** Show that the icon is inactive. */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),

  /** Fitted, without space to left or right of Icon. */
  fitted: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),

  /** Icon can be flipped. */
  flipped: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(['horizontally', 'vertically']),

  /** Formatted to have its colors inverted for contrast. */
  inverted: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),

  /** Icon can be formatted as a link. */
  link: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),

  /** Icon can be used as a simple loader. */
  loading: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),

  /** Name of the icon. */
  name: _lib__WEBPACK_IMPORTED_MODULE_11__.suggest(_lib__WEBPACK_IMPORTED_MODULE_10__.ALL_ICONS_IN_ALL_CONTEXTS),

  /** Icon can rotated. */
  rotated: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(['clockwise', 'counterclockwise']),

  /** Size of the icon. */
  size: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf((0,lodash_es_without__WEBPACK_IMPORTED_MODULE_12__["default"])(_lib__WEBPACK_IMPORTED_MODULE_10__.SIZES, 'medium')),

  /** Icon can have an aria label. */
  'aria-hidden': (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),

  /** Icon can have an aria label. */
  'aria-label': (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string)
} : 0;
Icon.defaultProps = {
  as: 'i'
};
Icon.Group = _IconGroup__WEBPACK_IMPORTED_MODULE_13__["default"];
Icon.create = (0,_lib__WEBPACK_IMPORTED_MODULE_14__.createShorthandFactory)(Icon, function (value) {
  return {
    name: value
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/elements/Icon/IconGroup.js":
/*!***************************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/elements/Icon/IconGroup.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var lodash_es_without__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es/without */ "./node_modules/lodash-es/without.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getElementType.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/SUI.js");






/**
 * Several icons can be used together as a group.
 */

function IconGroup(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      size = props.size;
  var classes = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(size, 'icons', className);
  var rest = (0,_lib__WEBPACK_IMPORTED_MODULE_3__["default"])(IconGroup, props);
  var ElementType = (0,_lib__WEBPACK_IMPORTED_MODULE_4__["default"])(IconGroup, props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ElementType, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    className: classes
  }), _lib__WEBPACK_IMPORTED_MODULE_5__.isNil(children) ? content : children);
}

IconGroup.handledProps = ["as", "children", "className", "content", "size"];
IconGroup.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().elementType),

  /** Primary content. */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),

  /** Additional classes. */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),

  /** Shorthand for primary content. */
  content: _lib__WEBPACK_IMPORTED_MODULE_7__.contentShorthand,

  /** Size of the icon group. */
  size: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf((0,lodash_es_without__WEBPACK_IMPORTED_MODULE_8__["default"])(_lib__WEBPACK_IMPORTED_MODULE_9__.SIZES, 'medium'))
} : 0;
IconGroup.defaultProps = {
  as: 'i'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconGroup);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/elements/Image/Image.js":
/*!************************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/elements/Image/Image.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var lodash_es_isNil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es/isNil */ "./node_modules/lodash-es/isNil.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/htmlPropsUtils.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getElementType.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/SUI.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/factories.js");
/* harmony import */ var _modules_Dimmer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modules/Dimmer */ "./node_modules/semantic-ui-react/dist/es/modules/Dimmer/Dimmer.js");
/* harmony import */ var _Label_Label__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Label/Label */ "./node_modules/semantic-ui-react/dist/es/elements/Label/Label.js");
/* harmony import */ var _ImageGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ImageGroup */ "./node_modules/semantic-ui-react/dist/es/elements/Image/ImageGroup.js");









/**
 * An image is a graphic representation of something.
 * @see Icon
 */

function Image(props) {
  var avatar = props.avatar,
      bordered = props.bordered,
      centered = props.centered,
      children = props.children,
      circular = props.circular,
      className = props.className,
      content = props.content,
      dimmer = props.dimmer,
      disabled = props.disabled,
      floated = props.floated,
      fluid = props.fluid,
      hidden = props.hidden,
      href = props.href,
      inline = props.inline,
      label = props.label,
      rounded = props.rounded,
      size = props.size,
      spaced = props.spaced,
      verticalAlign = props.verticalAlign,
      wrapped = props.wrapped,
      ui = props.ui;
  var classes = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(ui, 'ui'), size, (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(avatar, 'avatar'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(bordered, 'bordered'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(circular, 'circular'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(centered, 'centered'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(disabled, 'disabled'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(fluid, 'fluid'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(hidden, 'hidden'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(inline, 'inline'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(rounded, 'rounded'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOrValueAndKey)(spaced, 'spaced'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useValueAndKey)(floated, 'floated'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useVerticalAlignProp)(verticalAlign, 'aligned'), 'image', className);
  var rest = (0,_lib__WEBPACK_IMPORTED_MODULE_4__["default"])(Image, props);

  var _partitionHTMLProps = (0,_lib__WEBPACK_IMPORTED_MODULE_5__.partitionHTMLProps)(rest, {
    htmlProps: _lib__WEBPACK_IMPORTED_MODULE_5__.htmlImageProps
  }),
      imgTagProps = _partitionHTMLProps[0],
      rootProps = _partitionHTMLProps[1];

  var ElementType = (0,_lib__WEBPACK_IMPORTED_MODULE_6__["default"])(Image, props, function () {
    if (!(0,lodash_es_isNil__WEBPACK_IMPORTED_MODULE_7__["default"])(dimmer) || !(0,lodash_es_isNil__WEBPACK_IMPORTED_MODULE_7__["default"])(label) || !(0,lodash_es_isNil__WEBPACK_IMPORTED_MODULE_7__["default"])(wrapped) || !_lib__WEBPACK_IMPORTED_MODULE_8__.isNil(children)) {
      return 'div';
    }
  });

  if (!_lib__WEBPACK_IMPORTED_MODULE_8__.isNil(children)) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ElementType, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
      className: classes
    }), children);
  }

  if (!_lib__WEBPACK_IMPORTED_MODULE_8__.isNil(content)) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ElementType, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
      className: classes
    }), content);
  }

  if (ElementType === 'img') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ElementType, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rootProps, imgTagProps, {
      className: classes
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ElementType, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rootProps, {
    className: classes,
    href: href
  }), _modules_Dimmer__WEBPACK_IMPORTED_MODULE_9__["default"].create(dimmer, {
    autoGenerateKey: false
  }), _Label_Label__WEBPACK_IMPORTED_MODULE_10__["default"].create(label, {
    autoGenerateKey: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("img", imgTagProps));
}

Image.handledProps = ["as", "avatar", "bordered", "centered", "children", "circular", "className", "content", "dimmer", "disabled", "floated", "fluid", "hidden", "href", "inline", "label", "rounded", "size", "spaced", "ui", "verticalAlign", "wrapped"];
Image.Group = _ImageGroup__WEBPACK_IMPORTED_MODULE_11__["default"];
Image.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().elementType),

  /** An image may be formatted to appear inline with text as an avatar. */
  avatar: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /** An image may include a border to emphasize the edges of white or transparent content. */
  bordered: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /** An image can appear centered in a content block. */
  centered: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /** Primary content. */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().node),

  /** An image may appear circular. */
  circular: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /** Additional classes. */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),

  /** Shorthand for primary content. */
  content: _lib__WEBPACK_IMPORTED_MODULE_13__.contentShorthand,

  /** An image can show that it is disabled and cannot be selected. */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /** Shorthand for Dimmer. */
  dimmer: _lib__WEBPACK_IMPORTED_MODULE_13__.itemShorthand,

  /** An image can sit to the left or right of other content. */
  floated: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(_lib__WEBPACK_IMPORTED_MODULE_14__.FLOATS),

  /** An image can take up the width of its container. */
  fluid: _lib__WEBPACK_IMPORTED_MODULE_13__.every([(prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool), _lib__WEBPACK_IMPORTED_MODULE_13__.disallow(['size'])]),

  /** An image can be hidden. */
  hidden: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /** Renders the Image as an <a> tag with this href. */
  href: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),

  /** An image may appear inline. */
  inline: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /** Shorthand for Label. */
  label: _lib__WEBPACK_IMPORTED_MODULE_13__.itemShorthand,

  /** An image may appear rounded. */
  rounded: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /** An image may appear at different sizes. */
  size: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(_lib__WEBPACK_IMPORTED_MODULE_14__.SIZES),

  /** An image can specify that it needs an additional spacing to separate it from nearby content. */
  spaced: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool), prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['left', 'right'])]),

  /** Whether or not to add the ui className. */
  ui: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /** An image can specify its vertical alignment. */
  verticalAlign: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(_lib__WEBPACK_IMPORTED_MODULE_14__.VERTICAL_ALIGNMENTS),

  /** An image can render wrapped in a `div.ui.image` as alternative HTML markup. */
  wrapped: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool)
} : 0;
Image.defaultProps = {
  as: 'img',
  ui: true
};
Image.create = (0,_lib__WEBPACK_IMPORTED_MODULE_15__.createShorthandFactory)(Image, function (value) {
  return {
    src: value
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/elements/Image/ImageGroup.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/elements/Image/ImageGroup.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getElementType.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/SUI.js");





/**
 * A group of images.
 */

function ImageGroup(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      size = props.size;
  var classes = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('ui', size, className, 'images');
  var rest = (0,_lib__WEBPACK_IMPORTED_MODULE_3__["default"])(ImageGroup, props);
  var ElementType = (0,_lib__WEBPACK_IMPORTED_MODULE_4__["default"])(ImageGroup, props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ElementType, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    className: classes
  }), _lib__WEBPACK_IMPORTED_MODULE_5__.isNil(children) ? content : children);
}

ImageGroup.handledProps = ["as", "children", "className", "content", "size"];
ImageGroup.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().elementType),

  /** Primary content. */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),

  /** Additional classes. */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),

  /** Shorthand for primary content. */
  content: _lib__WEBPACK_IMPORTED_MODULE_7__.contentShorthand,

  /** A group of images can be formatted to have the same size. */
  size: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(_lib__WEBPACK_IMPORTED_MODULE_8__.SIZES)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageGroup);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/elements/Label/Label.js":
/*!************************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/elements/Label/Label.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var lodash_es_isUndefined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es/isUndefined */ "./node_modules/lodash-es/isUndefined.js");
/* harmony import */ var lodash_es_invoke__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es/invoke */ "./node_modules/lodash-es/invoke.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getElementType.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/SUI.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/factories.js");
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Icon/Icon */ "./node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js");
/* harmony import */ var _Image_Image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Image/Image */ "./node_modules/semantic-ui-react/dist/es/elements/Image/Image.js");
/* harmony import */ var _LabelDetail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LabelDetail */ "./node_modules/semantic-ui-react/dist/es/elements/Label/LabelDetail.js");
/* harmony import */ var _LabelGroup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LabelGroup */ "./node_modules/semantic-ui-react/dist/es/elements/Label/LabelGroup.js");












/**
 * A label displays content classification.
 */

var Label = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Label, _Component);

  function Label() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleClick = function (e) {
      var onClick = _this.props.onClick;
      if (onClick) onClick(e, _this.props);
    };

    _this.handleIconOverrides = function (predefinedProps) {
      return {
        onClick: function onClick(e) {
          (0,lodash_es_invoke__WEBPACK_IMPORTED_MODULE_4__["default"])(predefinedProps, 'onClick', e);

          (0,lodash_es_invoke__WEBPACK_IMPORTED_MODULE_4__["default"])(_this.props, 'onRemove', e, _this.props);
        }
      };
    };

    return _this;
  }

  var _proto = Label.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        attached = _this$props.attached,
        basic = _this$props.basic,
        children = _this$props.children,
        circular = _this$props.circular,
        className = _this$props.className,
        color = _this$props.color,
        content = _this$props.content,
        corner = _this$props.corner,
        detail = _this$props.detail,
        empty = _this$props.empty,
        floating = _this$props.floating,
        horizontal = _this$props.horizontal,
        icon = _this$props.icon,
        image = _this$props.image,
        onRemove = _this$props.onRemove,
        pointing = _this$props.pointing,
        prompt = _this$props.prompt,
        removeIcon = _this$props.removeIcon,
        ribbon = _this$props.ribbon,
        size = _this$props.size,
        tag = _this$props.tag;
    var pointingClass = pointing === true && 'pointing' || (pointing === 'left' || pointing === 'right') && pointing + " pointing" || (pointing === 'above' || pointing === 'below') && "pointing " + pointing;
    var classes = (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('ui', color, pointingClass, size, (0,_lib__WEBPACK_IMPORTED_MODULE_5__.useKeyOnly)(active, 'active'), (0,_lib__WEBPACK_IMPORTED_MODULE_5__.useKeyOnly)(basic, 'basic'), (0,_lib__WEBPACK_IMPORTED_MODULE_5__.useKeyOnly)(circular, 'circular'), (0,_lib__WEBPACK_IMPORTED_MODULE_5__.useKeyOnly)(empty, 'empty'), (0,_lib__WEBPACK_IMPORTED_MODULE_5__.useKeyOnly)(floating, 'floating'), (0,_lib__WEBPACK_IMPORTED_MODULE_5__.useKeyOnly)(horizontal, 'horizontal'), (0,_lib__WEBPACK_IMPORTED_MODULE_5__.useKeyOnly)(image === true, 'image'), (0,_lib__WEBPACK_IMPORTED_MODULE_5__.useKeyOnly)(prompt, 'prompt'), (0,_lib__WEBPACK_IMPORTED_MODULE_5__.useKeyOnly)(tag, 'tag'), (0,_lib__WEBPACK_IMPORTED_MODULE_5__.useKeyOrValueAndKey)(corner, 'corner'), (0,_lib__WEBPACK_IMPORTED_MODULE_5__.useKeyOrValueAndKey)(ribbon, 'ribbon'), (0,_lib__WEBPACK_IMPORTED_MODULE_5__.useValueAndKey)(attached, 'attached'), 'label', className);
    var rest = (0,_lib__WEBPACK_IMPORTED_MODULE_6__["default"])(Label, this.props);
    var ElementType = (0,_lib__WEBPACK_IMPORTED_MODULE_7__["default"])(Label, this.props);

    if (!_lib__WEBPACK_IMPORTED_MODULE_8__.isNil(children)) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(ElementType, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
        className: classes,
        onClick: this.handleClick
      }), children);
    }

    var removeIconShorthand = (0,lodash_es_isUndefined__WEBPACK_IMPORTED_MODULE_9__["default"])(removeIcon) ? 'delete' : removeIcon;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(ElementType, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: classes,
      onClick: this.handleClick
    }, rest), _Icon_Icon__WEBPACK_IMPORTED_MODULE_10__["default"].create(icon, {
      autoGenerateKey: false
    }), typeof image !== 'boolean' && _Image_Image__WEBPACK_IMPORTED_MODULE_11__["default"].create(image, {
      autoGenerateKey: false
    }), content, _LabelDetail__WEBPACK_IMPORTED_MODULE_12__["default"].create(detail, {
      autoGenerateKey: false
    }), onRemove && _Icon_Icon__WEBPACK_IMPORTED_MODULE_10__["default"].create(removeIconShorthand, {
      autoGenerateKey: false,
      overrideProps: this.handleIconOverrides
    }));
  };

  return Label;
}(react__WEBPACK_IMPORTED_MODULE_3__.Component);

Label.handledProps = ["active", "as", "attached", "basic", "children", "circular", "className", "color", "content", "corner", "detail", "empty", "floating", "horizontal", "icon", "image", "onClick", "onRemove", "pointing", "prompt", "removeIcon", "ribbon", "size", "tag"];

Label.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().elementType),

  /** A label can be active. */
  active: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /** A label can attach to a content segment. */
  attached: prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOf(['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right']),

  /** A label can reduce its complexity. */
  basic: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /** Primary content. */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().node),

  /** A label can be circular. */
  circular: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /** Additional classes. */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string),

  /** Color of the label. */
  color: prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOf(_lib__WEBPACK_IMPORTED_MODULE_14__.COLORS),

  /** Shorthand for primary content. */
  content: _lib__WEBPACK_IMPORTED_MODULE_15__.contentShorthand,

  /** A label can position itself in the corner of an element. */
  corner: prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool), prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOf(['left', 'right'])]),

  /** Shorthand for LabelDetail. */
  detail: _lib__WEBPACK_IMPORTED_MODULE_15__.itemShorthand,

  /** Formats the label as a dot. */
  empty: _lib__WEBPACK_IMPORTED_MODULE_15__.every([(prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool), _lib__WEBPACK_IMPORTED_MODULE_15__.demand(['circular'])]),

  /** Float above another element in the upper right corner. */
  floating: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /** A horizontal label is formatted to label content along-side it horizontally. */
  horizontal: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /** Shorthand for Icon. */
  icon: _lib__WEBPACK_IMPORTED_MODULE_15__.itemShorthand,

  /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
  image: prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool), _lib__WEBPACK_IMPORTED_MODULE_15__.itemShorthand]),

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func),

  /**
   * Adds an "x" icon, called when "x" is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onRemove: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func),

  /** A label can point to content next to it. */
  pointing: prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool), prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOf(['above', 'below', 'left', 'right'])]),

  /** A label can prompt for an error in your forms. */
  prompt: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool),

  /** Shorthand for Icon to appear as the last child and trigger onRemove. */
  removeIcon: _lib__WEBPACK_IMPORTED_MODULE_15__.itemShorthand,

  /** A label can appear as a ribbon attaching itself to an element. */
  ribbon: prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool), prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOf(['right'])]),

  /** A label can have different sizes. */
  size: prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOf(_lib__WEBPACK_IMPORTED_MODULE_14__.SIZES),

  /** A label can appear as a tag. */
  tag: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool)
} : 0;
Label.Detail = _LabelDetail__WEBPACK_IMPORTED_MODULE_12__["default"];
Label.Group = _LabelGroup__WEBPACK_IMPORTED_MODULE_16__["default"];
Label.create = (0,_lib__WEBPACK_IMPORTED_MODULE_17__.createShorthandFactory)(Label, function (value) {
  return {
    content: value
  };
});

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/elements/Label/LabelDetail.js":
/*!******************************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/elements/Label/LabelDetail.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getElementType.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/factories.js");






function LabelDetail(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('detail', className);
  var rest = (0,_lib__WEBPACK_IMPORTED_MODULE_3__["default"])(LabelDetail, props);
  var ElementType = (0,_lib__WEBPACK_IMPORTED_MODULE_4__["default"])(LabelDetail, props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ElementType, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    className: classes
  }), _lib__WEBPACK_IMPORTED_MODULE_5__.isNil(children) ? content : children);
}

LabelDetail.handledProps = ["as", "children", "className", "content"];
LabelDetail.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().elementType),

  /** Primary content. */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),

  /** Additional classes. */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),

  /** Shorthand for primary content. */
  content: _lib__WEBPACK_IMPORTED_MODULE_7__.contentShorthand
} : 0;
LabelDetail.create = (0,_lib__WEBPACK_IMPORTED_MODULE_8__.createShorthandFactory)(LabelDetail, function (val) {
  return {
    content: val
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LabelDetail);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/elements/Label/LabelGroup.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/elements/Label/LabelGroup.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getElementType.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/SUI.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js");





/**
 * A label can be grouped.
 */

function LabelGroup(props) {
  var children = props.children,
      circular = props.circular,
      className = props.className,
      color = props.color,
      content = props.content,
      size = props.size,
      tag = props.tag;
  var classes = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('ui', color, size, (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(circular, 'circular'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(tag, 'tag'), 'labels', className);
  var rest = (0,_lib__WEBPACK_IMPORTED_MODULE_4__["default"])(LabelGroup, props);
  var ElementType = (0,_lib__WEBPACK_IMPORTED_MODULE_5__["default"])(LabelGroup, props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ElementType, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    className: classes
  }), _lib__WEBPACK_IMPORTED_MODULE_6__.isNil(children) ? content : children);
}

LabelGroup.handledProps = ["as", "children", "circular", "className", "color", "content", "size", "tag"];
LabelGroup.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().elementType),

  /** Primary content. */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().node),

  /** Labels can share shapes. */
  circular: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /** Additional classes. */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),

  /** Label group can share colors together. */
  color: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(_lib__WEBPACK_IMPORTED_MODULE_8__.COLORS),

  /** Shorthand for primary content. */
  content: _lib__WEBPACK_IMPORTED_MODULE_9__.contentShorthand,

  /** Label group can share sizes together. */
  size: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(_lib__WEBPACK_IMPORTED_MODULE_8__.SIZES),

  /** Label group can share tag formatting. */
  tag: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LabelGroup);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/lib/ModernAutoControlledComponent.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/lib/ModernAutoControlledComponent.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModernAutoControlledComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var lodash_es_isUndefined__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash-es/isUndefined */ "./node_modules/lodash-es/isUndefined.js");
/* harmony import */ var lodash_es_startsWith__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash-es/startsWith */ "./node_modules/lodash-es/startsWith.js");
/* harmony import */ var lodash_es_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-es/filter */ "./node_modules/lodash-es/filter.js");
/* harmony import */ var lodash_es_isEmpty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es/isEmpty */ "./node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es/keys */ "./node_modules/lodash-es/keys.js");
/* harmony import */ var lodash_es_intersection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es/intersection */ "./node_modules/lodash-es/intersection.js");
/* harmony import */ var lodash_es_has__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es/has */ "./node_modules/lodash-es/has.js");
/* harmony import */ var lodash_es_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es/each */ "./node_modules/lodash-es/forEach.js");
/* harmony import */ var lodash_es_invoke__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es/invoke */ "./node_modules/lodash-es/invoke.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");














var getDefaultPropName = function getDefaultPropName(prop) {
  return "default" + (prop[0].toUpperCase() + prop.slice(1));
};
/**
 * Return the auto controlled state value for a give prop. The initial value is chosen in this order:
 *  - regular props
 *  - then, default props
 *  - then, initial state
 *  - then, `checked` defaults to false
 *  - then, `value` defaults to '' or [] if props.multiple
 *  - else, undefined
 *
 *  @param {string} propName A prop name
 *  @param {object} [props] A props object
 *  @param {object} [state] A state object
 *  @param {boolean} [includeDefaults=false] Whether or not to heed the default props or initial state
 */


var getAutoControlledStateValue = function getAutoControlledStateValue(propName, props, state, includeDefaults) {
  if (includeDefaults === void 0) {
    includeDefaults = false;
  }

  // regular props
  var propValue = props[propName];
  if (propValue !== undefined) return propValue;

  if (includeDefaults) {
    // defaultProps
    var defaultProp = props[getDefaultPropName(propName)];
    if (defaultProp !== undefined) return defaultProp; // initial state - state may be null or undefined

    if (state) {
      var initialState = state[propName];
      if (initialState !== undefined) return initialState;
    }
  } // React doesn't allow changing from uncontrolled to controlled components,
  // default checked/value if they were not present.


  if (propName === 'checked') return false;
  if (propName === 'value') return props.multiple ? [] : ''; // otherwise, undefined
};

var ModernAutoControlledComponent = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ModernAutoControlledComponent, _React$Component);

  function ModernAutoControlledComponent() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    var _this$constructor = _this.constructor,
        autoControlledProps = _this$constructor.autoControlledProps,
        getAutoControlledStateFromProps = _this$constructor.getAutoControlledStateFromProps;
    var state = (0,lodash_es_invoke__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), 'getInitialAutoControlledState', _this.props) || {};

    if (true) {
      var _this$constructor2 = _this.constructor,
          defaultProps = _this$constructor2.defaultProps,
          name = _this$constructor2.name,
          propTypes = _this$constructor2.propTypes,
          getDerivedStateFromProps = _this$constructor2.getDerivedStateFromProps; // require usage of getAutoControlledStateFromProps()

      if (getDerivedStateFromProps !== ModernAutoControlledComponent.getDerivedStateFromProps) {
        /* eslint-disable-next-line no-console */
        console.error("Auto controlled " + name + " must specify a static getAutoControlledStateFromProps() instead of getDerivedStateFromProps().");
      } // require propTypes


      (0,lodash_es_each__WEBPACK_IMPORTED_MODULE_5__["default"])(autoControlledProps, function (prop) {
        var defaultProp = getDefaultPropName(prop); // regular prop

        if (!(0,lodash_es_has__WEBPACK_IMPORTED_MODULE_6__["default"])(propTypes, defaultProp)) {
          console.error(name + " is missing \"" + defaultProp + "\" propTypes validation for auto controlled prop \"" + prop + "\".");
        } // its default prop


        if (!(0,lodash_es_has__WEBPACK_IMPORTED_MODULE_6__["default"])(propTypes, prop)) {
          console.error(name + " is missing propTypes validation for auto controlled prop \"" + prop + "\".");
        }
      }); // prevent autoControlledProps in defaultProps
      //
      // When setting state, auto controlled props values always win (so the parent can manage them).
      // It is not reasonable to decipher the difference between props from the parent and defaultProps.
      // Allowing defaultProps results in trySetState always deferring to the defaultProp value.
      // Auto controlled props also listed in defaultProps can never be updated.
      //
      // To set defaults for an AutoControlled prop, you can set the initial state in the
      // constructor or by using an ES7 property initializer:
      // https://babeljs.io/blog/2015/06/07/react-on-es6-plus#property-initializers


      var illegalDefaults = (0,lodash_es_intersection__WEBPACK_IMPORTED_MODULE_7__["default"])(autoControlledProps, (0,lodash_es_keys__WEBPACK_IMPORTED_MODULE_8__["default"])(defaultProps));

      if (!(0,lodash_es_isEmpty__WEBPACK_IMPORTED_MODULE_9__["default"])(illegalDefaults)) {
        console.error(['Do not set defaultProps for autoControlledProps. You can set defaults by', 'setting state in the constructor or using an ES7 property initializer', '(https://babeljs.io/blog/2015/06/07/react-on-es6-plus#property-initializers)', "See " + name + " props: \"" + illegalDefaults + "\"."].join(' '));
      } // prevent listing defaultProps in autoControlledProps
      //
      // Default props are automatically handled.
      // Listing defaults in autoControlledProps would result in allowing defaultDefaultValue props.


      var illegalAutoControlled = (0,lodash_es_filter__WEBPACK_IMPORTED_MODULE_10__["default"])(autoControlledProps, function (prop) {
        return (0,lodash_es_startsWith__WEBPACK_IMPORTED_MODULE_11__["default"])(prop, 'default');
      });

      if (!(0,lodash_es_isEmpty__WEBPACK_IMPORTED_MODULE_9__["default"])(illegalAutoControlled)) {
        console.error(['Do not add default props to autoControlledProps.', 'Default props are automatically handled.', "See " + name + " autoControlledProps: \"" + illegalAutoControlled + "\"."].join(' '));
      }
    } // Auto controlled props are copied to state.
    // Set initial state by copying auto controlled props to state.
    // Also look for the default prop for any auto controlled props (foo => defaultFoo)
    // so we can set initial values from defaults.


    var initialAutoControlledState = autoControlledProps.reduce(function (acc, prop) {
      acc[prop] = getAutoControlledStateValue(prop, _this.props, state, true);

      if (true) {
        var defaultPropName = getDefaultPropName(prop);
        var _name = _this.constructor.name; // prevent defaultFoo={} along side foo={}

        if (!(0,lodash_es_isUndefined__WEBPACK_IMPORTED_MODULE_12__["default"])(_this.props[defaultPropName]) && !(0,lodash_es_isUndefined__WEBPACK_IMPORTED_MODULE_12__["default"])(_this.props[prop])) {
          console.error(_name + " prop \"" + prop + "\" is auto controlled. Specify either " + defaultPropName + " or " + prop + ", but not both.");
        }
      }

      return acc;
    }, {});
    _this.state = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, initialAutoControlledState, {
      autoControlledProps: autoControlledProps,
      getAutoControlledStateFromProps: getAutoControlledStateFromProps
    });
    return _this;
  }

  ModernAutoControlledComponent.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var autoControlledProps = state.autoControlledProps,
        getAutoControlledStateFromProps = state.getAutoControlledStateFromProps; // Solve the next state for autoControlledProps

    var newStateFromProps = autoControlledProps.reduce(function (acc, prop) {
      var isNextDefined = !(0,lodash_es_isUndefined__WEBPACK_IMPORTED_MODULE_12__["default"])(props[prop]); // if next is defined then use its value

      if (isNextDefined) acc[prop] = props[prop];
      return acc;
    }, {}); // Due to the inheritance of the AutoControlledComponent we should call its
    // getAutoControlledStateFromProps() and merge it with the existing state

    if (getAutoControlledStateFromProps) {
      var computedState = getAutoControlledStateFromProps(props, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, newStateFromProps), state); // We should follow the idea of getDerivedStateFromProps() and return only modified state

      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, newStateFromProps, computedState);
    }

    return newStateFromProps;
  }
  /**
   * Override this method to use getDerivedStateFromProps() in child components.
   */
  ;

  ModernAutoControlledComponent.getAutoControlledStateFromProps = function getAutoControlledStateFromProps() {
    return null;
  };

  return ModernAutoControlledComponent;
}(react__WEBPACK_IMPORTED_MODULE_3__.Component);



/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/lib/SUI.js":
/*!***********************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/lib/SUI.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COLORS": () => (/* binding */ COLORS),
/* harmony export */   "FLOATS": () => (/* binding */ FLOATS),
/* harmony export */   "SIZES": () => (/* binding */ SIZES),
/* harmony export */   "TEXT_ALIGNMENTS": () => (/* binding */ TEXT_ALIGNMENTS),
/* harmony export */   "VERTICAL_ALIGNMENTS": () => (/* binding */ VERTICAL_ALIGNMENTS),
/* harmony export */   "VISIBILITY": () => (/* binding */ VISIBILITY),
/* harmony export */   "WIDTHS": () => (/* binding */ WIDTHS),
/* harmony export */   "DIRECTIONAL_TRANSITIONS": () => (/* binding */ DIRECTIONAL_TRANSITIONS),
/* harmony export */   "STATIC_TRANSITIONS": () => (/* binding */ STATIC_TRANSITIONS),
/* harmony export */   "TRANSITIONS": () => (/* binding */ TRANSITIONS),
/* harmony export */   "ACCESSIBILITY": () => (/* binding */ ACCESSIBILITY),
/* harmony export */   "ARROWS": () => (/* binding */ ARROWS),
/* harmony export */   "AUDIO_VIDEO": () => (/* binding */ AUDIO_VIDEO),
/* harmony export */   "BUSINESS": () => (/* binding */ BUSINESS),
/* harmony export */   "CHESS": () => (/* binding */ CHESS),
/* harmony export */   "CODE": () => (/* binding */ CODE),
/* harmony export */   "COMMUNICATION": () => (/* binding */ COMMUNICATION),
/* harmony export */   "COMPUTERS": () => (/* binding */ COMPUTERS),
/* harmony export */   "CURRENCY": () => (/* binding */ CURRENCY),
/* harmony export */   "DATE_TIME": () => (/* binding */ DATE_TIME),
/* harmony export */   "DESIGN": () => (/* binding */ DESIGN),
/* harmony export */   "EDITORS": () => (/* binding */ EDITORS),
/* harmony export */   "FILES": () => (/* binding */ FILES),
/* harmony export */   "GENDERS": () => (/* binding */ GENDERS),
/* harmony export */   "HANDS_GESTURES": () => (/* binding */ HANDS_GESTURES),
/* harmony export */   "HEALTH": () => (/* binding */ HEALTH),
/* harmony export */   "IMAGES": () => (/* binding */ IMAGES),
/* harmony export */   "INTERFACES": () => (/* binding */ INTERFACES),
/* harmony export */   "LOGISTICS": () => (/* binding */ LOGISTICS),
/* harmony export */   "MAPS": () => (/* binding */ MAPS),
/* harmony export */   "MEDICAL": () => (/* binding */ MEDICAL),
/* harmony export */   "OBJECTS": () => (/* binding */ OBJECTS),
/* harmony export */   "PAYMENTS_SHOPPING": () => (/* binding */ PAYMENTS_SHOPPING),
/* harmony export */   "SHAPES": () => (/* binding */ SHAPES),
/* harmony export */   "SPINNERS": () => (/* binding */ SPINNERS),
/* harmony export */   "SPORTS": () => (/* binding */ SPORTS),
/* harmony export */   "STATUS": () => (/* binding */ STATUS),
/* harmony export */   "USERS_PEOPLE": () => (/* binding */ USERS_PEOPLE),
/* harmony export */   "VEHICLES": () => (/* binding */ VEHICLES),
/* harmony export */   "WRITING": () => (/* binding */ WRITING),
/* harmony export */   "BRANDS": () => (/* binding */ BRANDS),
/* harmony export */   "ICONS": () => (/* binding */ ICONS),
/* harmony export */   "ICON_ALIASES": () => (/* binding */ ICON_ALIASES),
/* harmony export */   "ICONS_AND_ALIASES": () => (/* binding */ ICONS_AND_ALIASES),
/* harmony export */   "COMPONENT_CONTEXT_SPECIFIC_ICONS": () => (/* binding */ COMPONENT_CONTEXT_SPECIFIC_ICONS),
/* harmony export */   "ALL_ICONS_IN_ALL_CONTEXTS": () => (/* binding */ ALL_ICONS_IN_ALL_CONTEXTS)
/* harmony export */ });
/* harmony import */ var lodash_es_uniq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/uniq */ "./node_modules/lodash-es/uniq.js");
/* harmony import */ var lodash_es_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/values */ "./node_modules/lodash-es/values.js");
/* harmony import */ var lodash_es_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/keys */ "./node_modules/lodash-es/keys.js");
/* harmony import */ var _numberToWord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numberToWord */ "./node_modules/semantic-ui-react/dist/es/lib/numberToWord.js");




var COLORS = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];
var FLOATS = ['left', 'right'];
var SIZES = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'];
var TEXT_ALIGNMENTS = ['left', 'center', 'right', 'justified'];
var VERTICAL_ALIGNMENTS = ['bottom', 'middle', 'top'];
var VISIBILITY = ['mobile', 'tablet', 'computer', 'large screen', 'widescreen'];
var WIDTHS = [].concat((0,lodash_es_keys__WEBPACK_IMPORTED_MODULE_0__["default"])(_numberToWord__WEBPACK_IMPORTED_MODULE_1__.numberToWordMap), (0,lodash_es_keys__WEBPACK_IMPORTED_MODULE_0__["default"])(_numberToWord__WEBPACK_IMPORTED_MODULE_1__.numberToWordMap).map(Number), (0,lodash_es_values__WEBPACK_IMPORTED_MODULE_2__["default"])(_numberToWord__WEBPACK_IMPORTED_MODULE_1__.numberToWordMap));
var DIRECTIONAL_TRANSITIONS = ['browse', 'browse right', 'drop', 'fade', 'fade up', 'fade down', 'fade left', 'fade right', 'fly up', 'fly down', 'fly left', 'fly right', 'horizontal flip', 'vertical flip', 'scale', 'slide up', 'slide down', 'slide left', 'slide right', 'swing up', 'swing down', 'swing left', 'swing right', 'zoom'];
var STATIC_TRANSITIONS = ['jiggle', 'flash', 'shake', 'pulse', 'tada', 'bounce', 'glow'];
var TRANSITIONS = [].concat(DIRECTIONAL_TRANSITIONS, STATIC_TRANSITIONS); // Generated from:
// https://github.com/Semantic-Org/Semantic-UI/blob/master/dist/components/icon.css

var ACCESSIBILITY = ['american sign language interpreting', 'assistive listening systems', 'audio description', 'blind', 'braille', 'closed captioning', 'closed captioning outline', 'deaf', 'low vision', 'phone volume', 'question circle', 'question circle outline', 'sign language', 'tty', 'universal access', 'wheelchair'];
var ARROWS = ['angle double down', 'angle double left', 'angle double right', 'angle double up', 'angle down', 'angle left', 'angle right', 'angle up', 'arrow alternate circle down', 'arrow alternate circle down outline', 'arrow alternate circle left', 'arrow alternate circle left outline', 'arrow alternate circle right', 'arrow alternate circle right outline', 'arrow alternate circle up', 'arrow alternate circle up outline', 'arrow circle down', 'arrow circle left', 'arrow circle right', 'arrow circle up', 'arrow down', 'arrow left', 'arrow right', 'arrow up', 'arrows alternate', 'arrows alternate horizontal', 'arrows alternate vertical', 'caret down', 'caret left', 'caret right', 'caret square down', 'caret square down outline', 'caret square left', 'caret square left outline', 'caret square right', 'caret square right outline', 'caret square up', 'caret square up outline', 'caret up', 'cart arrow down', 'chart line', 'chevron circle down', 'chevron circle left', 'chevron circle right', 'chevron circle up', 'chevron down', 'chevron left', 'chevron right', 'chevron up', 'cloud download', 'cloud upload', 'download', 'exchange', 'expand arrows alternate', 'external alternate', 'external square alternate', 'hand point down', 'hand point down outline', 'hand point left', 'hand point left outline', 'hand point right', 'hand point right outline', 'hand point up', 'hand point up outline', 'hand pointer', 'hand pointer outline', 'history', 'level down alternate', 'level up alternate', 'location arrow', 'long arrow alternate down', 'long arrow alternate left', 'long arrow alternate right', 'long arrow alternate up', 'mouse pointer', 'play', 'random', 'recycle', 'redo', 'redo alternate', 'reply', 'reply all', 'retweet', 'share', 'share square', 'share square outline', 'sign-in', 'sign-out', 'sign-in alternate', 'sign-out alternate', 'sort', 'sort alphabet down', 'sort alphabet up', 'sort amount down', 'sort amount up', 'sort down', 'sort numeric down', 'sort numeric up', 'sort up', 'sync', 'sync alternate', 'text height', 'text width', 'undo', 'undo alternate', 'upload', 'zoom-in', 'zoom-out'];
var AUDIO_VIDEO = ['audio description', 'backward', 'circle', 'circle outline', 'closed captioning', 'closed captioning outline', 'compress', 'eject', 'expand', 'expand arrows alternate', 'fast backward', 'fast forward', 'file audio', 'file audio outline', 'file video', 'file video outline', 'film', 'forward', 'headphones', 'microphone', 'microphone slash', 'music', 'pause', 'pause circle', 'pause circle outline', 'phone volume', 'play', 'play circle', 'play circle outline', 'podcast', 'random', 'redo', 'redo alternate', 'rss', 'rss square', 'step backward', 'step forward', 'stop', 'stop circle', 'stop circle outline', 'sync', 'sync alternate', 'undo', 'undo alternate', 'video', 'volume down', 'volume off', 'volume up'];
var BUSINESS = ['address book', 'address book outline', 'address card', 'address card outline', 'archive', 'balance scale', 'birthday cake', 'book', 'briefcase', 'building', 'building outline', 'bullhorn', 'bullseye', 'calculator', 'calendar', 'calendar outline', 'calendar alternate', 'calendar alternate outline', 'certificate', 'chart area', 'chart bar', 'chart bar outline', 'chart line', 'chart pie', 'clipboard', 'clipboard outline', 'coffee', 'columns', 'compass', 'compass outline', 'copy', 'copy outline', 'copyright', 'copyright outline', 'cut', 'edit', 'edit outline', 'envelope', 'envelope outline', 'envelope open', 'envelope open outline', 'envelope square', 'eraser', 'fax', 'file', 'file outline', 'file alternate', 'file alternate outline', 'folder', 'folder outline', 'folder open', 'folder open outline', 'globe', 'industry', 'paperclip', 'paste', 'pen square', 'pencil alternate', 'percent', 'phone', 'phone square', 'phone volume', 'registered', 'registered outline', 'save', 'save outline', 'sitemap', 'sticky note', 'sticky note outline', 'suitcase', 'table', 'tag', 'tags', 'tasks', 'thumbtack', 'trademark'];
var CHESS = ['chess', 'chess bishop', 'chess board', 'chess king', 'chess knight', 'chess pawn', 'chess queen', 'chess rook', 'square full'];
var CODE = ['archive', 'barcode', 'bath', 'bug', 'code', 'code branch', 'coffee', 'file', 'file outline', 'file alternate', 'file alternate outline', 'file code', 'file code outline', 'filter', 'fire extinguisher', 'folder', 'folder outline', 'folder open', 'folder open outline', 'keyboard', 'keyboard outline', 'microchip', 'qrcode', 'shield alternate', 'sitemap', 'terminal', 'user secret', 'window close', 'window close outline', 'window maximize', 'window maximize outline', 'window minimize', 'window minimize outline', 'window restore', 'window restore outline'];
var COMMUNICATION = ['address book', 'address book outline', 'address card', 'address card outline', 'american sign language interpreting', 'assistive listening systems', 'at', 'bell', 'bell outline', 'bell slash', 'bell slash outline', 'bullhorn', 'comment', 'comment outline', 'comment alternate', 'comment alternate outline', 'comments', 'comments outline', 'envelope', 'envelope outline', 'envelope open', 'envelope open outline', 'envelope square', 'fax', 'inbox', 'language', 'microphone', 'microphone slash', 'mobile', 'mobile alternate', 'paper plane', 'paper plane outline', 'phone', 'phone square', 'phone volume', 'rss', 'rss square', 'tty', 'wifi'];
var COMPUTERS = ['desktop', 'download', 'hdd', 'hdd outline', 'headphones', 'keyboard', 'keyboard outline', 'laptop', 'microchip', 'mobile', 'mobile alternate', 'plug', 'power off', 'print', 'save', 'save outline', 'server', 'tablet', 'tablet alternate', 'tv', 'upload'];
var CURRENCY = ['dollar sign', 'euro sign', 'lira sign', 'money bill alternate', 'money bill alternate outline', 'pound sign', 'ruble sign', 'rupee sign', 'shekel sign', 'won sign', 'yen sign'];
var DATE_TIME = ['bell', 'bell outline', 'bell slash', 'bell slash outline', 'calendar', 'calendar outline', 'calendar alternate', 'calendar alternate outline', 'calendar check', 'calendar check outline', 'calendar minus', 'calendar minus outline', 'calendar plus', 'calendar plus outline', 'calendar times', 'calendar times outline', 'clock', 'clock outline', 'hourglass', 'hourglass outline', 'hourglass end', 'hourglass half', 'hourglass start', 'stopwatch'];
var DESIGN = ['adjust', 'clone', 'clone outline', 'copy', 'copy outline', 'crop', 'crosshairs', 'cut', 'edit', 'edit outline', 'eraser', 'eye', 'eye dropper', 'eye slash', 'eye slash outline', 'object group', 'object group outline', 'object ungroup', 'object ungroup outline', 'paint brush', 'paste', 'pencil alternate', 'save', 'save outline', 'tint'];
var EDITORS = ['align center', 'align justify', 'align left', 'align right', 'bold', 'clipboard', 'clipboard outline', 'clone', 'clone outline', 'columns', 'copy', 'copy outline', 'cut', 'edit', 'edit outline', 'eraser', 'file', 'file outline', 'file alternate', 'file alternate outline', 'font', 'heading', 'i cursor', 'indent', 'italic', 'linkify', 'list', 'list alternate', 'list alternate outline', 'list ol', 'list ul', 'outdent', 'paper plane', 'paper plane outline', 'paperclip', 'paragraph', 'paste', 'pencil alternate', 'print', 'quote left', 'quote right', 'redo', 'redo alternate', 'reply', 'reply all', 'share', 'strikethrough', 'subscript', 'superscript', 'sync', 'sync alternate', 'table', 'tasks', 'text height', 'text width', 'th', 'th large', 'th list', 'trash', 'trash alternate', 'trash alternate outline', 'underline', 'undo', 'undo alternate', 'unlink'];
var FILES = ['archive', 'clone', 'clone outline', 'copy', 'copy outline', 'cut', 'file', 'file outline', 'file alternate', 'file alternate outline', 'file archive', 'file archive outline', 'file audio', 'file audio outline', 'file code', 'file code outline', 'file excel', 'file excel outline', 'file image', 'file image outline', 'file pdf', 'file pdf outline', 'file powerpoint', 'file powerpoint outline', 'file video', 'file video outline', 'file word', 'file word outline', 'folder', 'folder outline', 'folder open', 'folder open outline', 'paste', 'save', 'save outline', 'sticky note', 'sticky note outline'];
var GENDERS = ['genderless', 'mars', 'mars double', 'mars stroke', 'mars stroke horizontal', 'mars stroke vertical', 'mercury', 'neuter', 'transgender', 'transgender alternate', 'venus', 'venus double', 'venus mars'];
var HANDS_GESTURES = ['hand lizard', 'hand lizard outline', 'hand paper', 'hand paper outline', 'hand peace', 'hand peace outline', 'hand point down', 'hand point down outline', 'hand point left', 'hand point left outline', 'hand point right', 'hand point right outline', 'hand point up', 'hand point up outline', 'hand pointer', 'hand pointer outline', 'hand rock', 'hand rock outline', 'hand scissors', 'hand scissors outline', 'hand spock', 'hand spock outline', 'handshake', 'handshake outline', 'thumbs down', 'thumbs down outline', 'thumbs up', 'thumbs up outline'];
var HEALTH = ['ambulance', 'h square', 'heart', 'heart outline', 'heartbeat', 'hospital', 'hospital outline', 'medkit', 'plus square', 'plus square outline', 'stethoscope', 'user md', 'wheelchair'];
var IMAGES = ['adjust', 'bolt', 'camera', 'camera retro', 'clone', 'clone outline', 'compress', 'expand', 'eye', 'eye dropper', 'eye slash', 'eye slash outline', 'file image', 'file image outline', 'film', 'id badge', 'id badge outline', 'id card', 'id card outline', 'image', 'image outline', 'images', 'images outline', 'sliders horizontal', 'tint'];
var INTERFACES = ['ban', 'barcode', 'bars', 'beer', 'bell', 'bell outline', 'bell slash', 'bell slash outline', 'bug', 'bullhorn', 'bullseye', 'calculator', 'calendar', 'calendar outline', 'calendar alternate', 'calendar alternate outline', 'calendar check', 'calendar check outline', 'calendar minus', 'calendar minus outline', 'calendar plus', 'calendar plus outline', 'calendar times', 'calendar times outline', 'certificate', 'check', 'check circle', 'check circle outline', 'check square', 'check square outline', 'circle', 'circle outline', 'clipboard', 'clipboard outline', 'clone', 'clone outline', 'cloud', 'cloud download', 'cloud upload', 'coffee', 'cog', 'cogs', 'copy', 'copy outline', 'cut', 'database', 'dot circle', 'dot circle outline', 'download', 'edit', 'edit outline', 'ellipsis horizontal', 'ellipsis vertical', 'envelope', 'envelope outline', 'envelope open', 'envelope open outline', 'eraser', 'exclamation', 'exclamation circle', 'exclamation triangle', 'external alternate', 'external square alternate', 'eye', 'eye slash', 'eye slash outline', 'file', 'file outline', 'file alternate', 'file alternate outline', 'filter', 'flag', 'flag outline', 'flag checkered', 'folder', 'folder outline', 'folder open', 'folder open outline', 'frown', 'frown outline', 'hashtag', 'heart', 'heart outline', 'history', 'home', 'i cursor', 'info', 'info circle', 'language', 'magic', 'meh', 'meh outline', 'microphone', 'microphone slash', 'minus', 'minus circle', 'minus square', 'minus square outline', 'paste', 'pencil alternate', 'plus', 'plus circle', 'plus square', 'plus square outline', 'qrcode', 'question', 'question circle', 'question circle outline', 'quote left', 'quote right', 'redo', 'redo alternate', 'reply', 'reply all', 'rss', 'rss square', 'save', 'save outline', 'search', 'search minus', 'search plus', 'share', 'share alternate', 'share alternate square', 'share square', 'share square outline', 'shield alternate', 'sign-in', 'sign-out', 'signal', 'sitemap', 'sliders horizontal', 'smile', 'smile outline', 'sort', 'sort alphabet down', 'sort alphabet up', 'sort amount down', 'sort amount up', 'sort down', 'sort numeric down', 'sort numeric up', 'sort up', 'star', 'star outline', 'star half', 'star half outline', 'sync', 'sync alternate', 'thumbs down', 'thumbs down outline', 'thumbs up', 'thumbs up outline', 'times', 'times circle', 'times circle outline', 'toggle off', 'toggle on', 'trash', 'trash alternate', 'trash alternate outline', 'trophy', 'undo', 'undo alternate', 'upload', 'user', 'user outline', 'user circle', 'user circle outline', 'wifi'];
var LOGISTICS = ['box', 'boxes', 'clipboard check', 'clipboard list', 'dolly', 'dolly flatbed', 'pallet', 'shipping fast', 'truck', 'warehouse'];
var MAPS = ['ambulance', 'anchor', 'balance scale', 'bath', 'bed', 'beer', 'bell', 'bell outline', 'bell slash', 'bell slash outline', 'bicycle', 'binoculars', 'birthday cake', 'blind', 'bomb', 'book', 'bookmark', 'bookmark outline', 'briefcase', 'building', 'building outline', 'car', 'coffee', 'crosshairs', 'dollar sign', 'eye', 'eye slash', 'eye slash outline', 'fighter jet', 'fire', 'fire extinguisher', 'flag', 'flag outline', 'flag checkered', 'flask', 'gamepad', 'gavel', 'gift', 'glass martini', 'globe', 'graduation cap', 'h square', 'heart', 'heart outline', 'heartbeat', 'home', 'hospital', 'hospital outline', 'image', 'image outline', 'images', 'images outline', 'industry', 'info', 'info circle', 'key', 'leaf', 'lemon', 'lemon outline', 'life ring', 'life ring outline', 'lightbulb', 'lightbulb outline', 'location arrow', 'low vision', 'magnet', 'male', 'map', 'map outline', 'map marker', 'map marker alternate', 'map pin', 'map signs', 'medkit', 'money bill alternate', 'money bill alternate outline', 'motorcycle', 'music', 'newspaper', 'newspaper outline', 'paw', 'phone', 'phone square', 'phone volume', 'plane', 'plug', 'plus', 'plus square', 'plus square outline', 'print', 'recycle', 'road', 'rocket', 'search', 'search minus', 'search plus', 'ship', 'shopping bag', 'shopping basket', 'shopping cart', 'shower', 'street view', 'subway', 'suitcase', 'tag', 'tags', 'taxi', 'thumbtack', 'ticket alternate', 'tint', 'train', 'tree', 'trophy', 'truck', 'tty', 'umbrella', 'university', 'utensil spoon', 'utensils', 'wheelchair', 'wifi', 'wrench'];
var MEDICAL = ['ambulance', 'band aid', 'dna', 'first aid', 'heart', 'heart outline', 'heartbeat', 'hospital', 'hospital outline', 'hospital symbol', 'pills', 'plus', 'stethoscope', 'syringe', 'thermometer', 'user md', 'weight'];
var OBJECTS = ['ambulance', 'anchor', 'archive', 'balance scale', 'bath', 'bed', 'beer', 'bell', 'bell outline', 'bicycle', 'binoculars', 'birthday cake', 'bomb', 'book', 'bookmark', 'bookmark outline', 'briefcase', 'bug', 'building', 'building outline', 'bullhorn', 'bullseye', 'bus', 'calculator', 'calendar', 'calendar outline', 'calendar alternate', 'calendar alternate outline', 'camera', 'camera retro', 'car', 'clipboard', 'clipboard outline', 'cloud', 'coffee', 'cog', 'cogs', 'compass', 'compass outline', 'copy', 'copy outline', 'cube', 'cubes', 'cut', 'envelope', 'envelope outline', 'envelope open', 'envelope open outline', 'eraser', 'eye', 'eye dropper', 'fax', 'fighter jet', 'file', 'file outline', 'file alternate', 'file alternate outline', 'film', 'fire', 'fire extinguisher', 'flag', 'flag outline', 'flag checkered', 'flask', 'futbol', 'futbol outline', 'gamepad', 'gavel', 'gem', 'gem outline', 'gift', 'glass martini', 'globe', 'graduation cap', 'hdd', 'hdd outline', 'headphones', 'heart', 'heart outline', 'home', 'hospital', 'hospital outline', 'hourglass', 'hourglass outline', 'image', 'image outline', 'images', 'images outline', 'industry', 'key', 'keyboard', 'keyboard outline', 'laptop', 'leaf', 'lemon', 'lemon outline', 'life ring', 'life ring outline', 'lightbulb', 'lightbulb outline', 'lock', 'lock open', 'magic', 'magnet', 'map', 'map outline', 'map marker', 'map marker alternate', 'map pin', 'map signs', 'medkit', 'microchip', 'microphone', 'mobile', 'mobile alternate', 'money bill alternate', 'money bill alternate outline', 'moon', 'moon outline', 'motorcycle', 'newspaper', 'newspaper outline', 'paint brush', 'paper plane', 'paper plane outline', 'paperclip', 'paste', 'paw', 'pencil alternate', 'phone', 'plane', 'plug', 'print', 'puzzle piece', 'road', 'rocket', 'save', 'save outline', 'search', 'shield alternate', 'shopping bag', 'shopping basket', 'shopping cart', 'shower', 'snowflake', 'snowflake outline', 'space shuttle', 'star', 'star outline', 'sticky note', 'sticky note outline', 'stopwatch', 'subway', 'suitcase', 'sun', 'sun outline', 'tablet', 'tablet alternate', 'tachometer alternate', 'tag', 'tags', 'taxi', 'thumbtack', 'ticket alternate', 'train', 'trash', 'trash alternate', 'trash alternate outline', 'tree', 'trophy', 'truck', 'tv', 'umbrella', 'university', 'unlock', 'unlock alternate', 'utensil spoon', 'utensils', 'wheelchair', 'wrench'];
var PAYMENTS_SHOPPING = ['bell', 'bell outline', 'bookmark', 'bookmark outline', 'bullhorn', 'camera', 'camera retro', 'cart arrow down', 'cart plus', 'certificate', 'credit card', 'credit card outline', 'gem', 'gem outline', 'gift', 'handshake', 'handshake outline', 'heart', 'heart outline', 'key', 'shopping bag', 'shopping basket', 'shopping cart', 'star', 'star outline', 'tag', 'tags', 'thumbs down', 'thumbs down outline', 'thumbs up', 'thumbs up outline', 'trophy'];
var SHAPES = ['bookmark', 'bookmark outline', 'calendar', 'calendar outline', 'certificate', 'circle', 'circle outline', 'cloud', 'comment', 'comment outline', 'file', 'file outline', 'folder', 'folder outline', 'heart', 'heart outline', 'map marker', 'play', 'square', 'square outline', 'star', 'star outline'];
var SPINNERS = ['asterisk', 'certificate', 'circle notch', 'cog', 'compass', 'compass outline', 'crosshairs', 'life ring', 'life ring outline', 'snowflake', 'snowflake outline', 'spinner', 'sun', 'sun outline', 'sync'];
var SPORTS = ['baseball ball', 'basketball ball', 'bowling ball', 'football ball', 'futbol', 'futbol outline', 'golf ball', 'hockey puck', 'quidditch', 'table tennis', 'volleyball ball'];
var STATUS = ['ban', 'battery empty', 'battery full', 'battery half', 'battery quarter', 'battery three quarters', 'bell', 'bell outline', 'bell slash', 'bell slash outline', 'calendar', 'calendar outline', 'calendar alternate', 'calendar alternate outline', 'calendar check', 'calendar check outline', 'calendar minus', 'calendar minus outline', 'calendar plus', 'calendar plus outline', 'calendar times', 'calendar times outline', 'cart arrow down', 'cart plus', 'exclamation', 'exclamation circle', 'exclamation triangle', 'eye', 'eye slash', 'eye slash outline', 'file', 'file outline', 'file alternate', 'file alternate outline', 'folder', 'folder outline', 'folder open', 'folder open outline', 'info', 'info circle', 'lock', 'lock open', 'minus', 'minus circle', 'minus square', 'minus square outline', 'plus', 'plus circle', 'plus square', 'plus square outline', 'question', 'question circle', 'question circle outline', 'shield alternate', 'shopping cart', 'sign in alternate', 'sign out alternate', 'thermometer empty', 'thermometer full', 'thermometer half', 'thermometer quarter', 'thermometer three quarters', 'thumbs down', 'thumbs down outline', 'thumbs up', 'thumbs up outline', 'toggle off', 'toggle on', 'unlock', 'unlock alternate'];
var USERS_PEOPLE = ['address book', 'address book outline', 'address card', 'address card outline', 'bed', 'blind', 'child', 'female', 'frown', 'frown outline', 'id badge', 'id badge outline', 'id card', 'id card outline', 'male', 'meh', 'meh outline', 'power off', 'smile', 'smile outline', 'street view', 'user', 'user outline', 'user circle', 'user circle outline', 'user md', 'user plus', 'user secret', 'user times', 'users', 'wheelchair'];
var VEHICLES = ['ambulance', 'bicycle', 'bus', 'car', 'fighter jet', 'motorcycle', 'paper plane', 'paper plane outline', 'plane', 'rocket', 'ship', 'shopping cart', 'space shuttle', 'subway', 'taxi', 'train', 'truck', 'wheelchair'];
var WRITING = ['archive', 'book', 'bookmark', 'bookmark outline', 'edit', 'edit outline', 'envelope', 'envelope outline', 'envelope open', 'envelope open outline', 'eraser', 'file', 'file outline', 'file alternate', 'file alternate outline', 'folder', 'folder outline', 'folder open', 'folder open outline', 'keyboard', 'keyboard outline', 'newspaper', 'newspaper outline', 'paper plane', 'paper plane outline', 'paperclip', 'paragraph', 'pen square', 'pencil alternate', 'quote left', 'quote right', 'sticky note', 'sticky note outline', 'thumbtack'];
var BRANDS = ['500px', 'accessible', 'accusoft', 'adn', 'adversal', 'affiliatetheme', 'algolia', 'amazon', 'amazon pay', 'amilia', 'android', 'angellist', 'angrycreative', 'angular', 'app store', 'app store ios', 'apper', 'apple', 'apple pay', 'asymmetrik', 'audible', 'autoprefixer', 'avianex', 'aviato', 'aws', 'bandcamp', 'behance', 'behance square', 'bimobject', 'bitbucket', 'bitcoin', 'bity', 'black tie', 'blackberry', 'blogger', 'blogger b', 'bluetooth', 'bluetooth b', 'btc', 'buromobelexperte', 'buysellads', 'cc amazon pay', 'cc amex', 'cc apple pay', 'cc diners club', 'cc discover', 'cc jcb', 'cc mastercard', 'cc paypal', 'cc stripe', 'cc visa', 'centercode', 'chrome', 'cloudscale', 'cloudsmith', 'cloudversify', 'codepen', 'codiepie', 'connectdevelop', 'contao', 'cpanel', 'creative commons', 'css3', 'css3 alternate', 'cuttlefish', 'd and d', 'dashcube', 'delicious', 'deploydog', 'deskpro', 'deviantart', 'digg', 'digital ocean', 'discord', 'discourse', 'dochub', 'docker', 'draft2digital', 'dribbble', 'dribbble square', 'dropbox', 'drupal', 'dyalog', 'earlybirds', 'edge', 'elementor', 'ember', 'empire', 'envira', 'erlang', 'ethereum', 'etsy', 'expeditedssl', 'facebook', 'facebook f', 'facebook messenger', 'facebook square', 'firefox', 'first order', 'firstdraft', 'flickr', 'flipboard', 'fly', 'font awesome', 'font awesome alternate', 'font awesome flag', 'fonticons', 'fonticons fi', 'fort awesome', 'fort awesome alternate', 'forumbee', 'foursquare', 'free code camp', 'freebsd', 'get pocket', 'gg', 'gg circle', 'git', 'git square', 'github', 'github alternate', 'github square', 'gitkraken', 'gitlab', 'gitter', 'glide', 'glide g', 'gofore', 'goodreads', 'goodreads g', 'google', 'google drive', 'google play', 'google plus', 'google plus g', 'google plus square', 'google wallet', 'gratipay', 'grav', 'gripfire', 'grunt', 'gulp', 'hacker news', 'hacker news square', 'hips', 'hire a helper', 'hooli', 'hotjar', 'houzz', 'html5', 'hubspot', 'imdb', 'instagram', 'internet explorer', 'ioxhost', 'itunes', 'itunes note', 'jenkins', 'joget', 'joomla', 'js', 'js square', 'jsfiddle', 'keycdn', 'kickstarter', 'kickstarter k', 'korvue', 'laravel', 'lastfm', 'lastfm square', 'leanpub', 'less', 'linechat', 'linkedin', 'linkedin alternate', 'linode', 'linux', 'lyft', 'magento', 'maxcdn', 'medapps', 'medium', 'medium m', 'medrt', 'meetup', 'microsoft', 'mix', 'mixcloud', 'mizuni', 'modx', 'monero', 'napster', 'nintendo switch', 'node', 'node js', 'npm', 'ns8', 'nutritionix', 'odnoklassniki', 'odnoklassniki square', 'opencart', 'openid', 'opera', 'optin monster', 'osi', 'page4', 'pagelines', 'palfed', 'patreon', 'paypal', 'periscope', 'phabricator', 'phoenix framework', 'php', 'pied piper', 'pied piper alternate', 'pied piper pp', 'pinterest', 'pinterest p', 'pinterest square', 'playstation', 'product hunt', 'pushed', 'python', 'qq', 'quinscape', 'quora', 'ravelry', 'react', 'rebel', 'redriver', 'reddit', 'reddit alien', 'reddit square', 'rendact', 'renren', 'replyd', 'resolving', 'rocketchat', 'rockrms', 'safari', 'sass', 'schlix', 'scribd', 'searchengin', 'sellcast', 'sellsy', 'servicestack', 'shirtsinbulk', 'simplybuilt', 'sistrix', 'skyatlas', 'skype', 'slack', 'slack hash', 'slideshare', 'snapchat', 'snapchat ghost', 'snapchat square', 'soundcloud', 'speakap', 'spotify', 'stack exchange', 'stack overflow', 'staylinked', 'steam', 'steam square', 'steam symbol', 'sticker mule', 'strava', 'stripe', 'stripe s', 'studiovinari', 'stumbleupon', 'stumbleupon circle', 'superpowers', 'supple', 'telegram', 'telegram plane', 'tencent weibo', 'themeisle', 'trello', 'tripadvisor', 'tumblr', 'tumblr square', 'twitch', 'twitter', 'twitter square', 'typo3', 'uber', 'uikit', 'uniregistry', 'untappd', 'usb', 'ussunnah', 'vaadin', 'viacoin', 'viadeo', 'viadeo square', 'viber', 'vimeo', 'vimeo square', 'vimeo v', 'vine', 'vk', 'vnv', 'vuejs', 'wechat', 'weibo', 'weixin', 'whatsapp', 'whatsapp square', 'whmcs', 'wikipedia w', 'windows', 'wordpress', 'wordpress simple', 'wpbeginner', 'wpexplorer', 'wpforms', 'xbox', 'xing', 'xing square', 'y combinator', 'yahoo', 'yandex', 'yandex international', 'yelp', 'yoast', 'youtube', 'youtube square'];
var ICONS = (0,lodash_es_uniq__WEBPACK_IMPORTED_MODULE_3__["default"])([].concat(ACCESSIBILITY, ARROWS, AUDIO_VIDEO, BUSINESS, CHESS, CODE, COMMUNICATION, COMPUTERS, CURRENCY, DATE_TIME, DESIGN, EDITORS, FILES, GENDERS, HANDS_GESTURES, HEALTH, IMAGES, INTERFACES, LOGISTICS, MAPS, MEDICAL, OBJECTS, PAYMENTS_SHOPPING, SHAPES, SPINNERS, SPORTS, STATUS, USERS_PEOPLE, VEHICLES, WRITING, BRANDS));
var ICON_ALIASES = ['chess rock', 'ordered list', 'unordered list', 'user doctor', 'shield', 'puzzle', 'add circle', 'add square', 'add to calendar', 'add to cart', 'add user', 'add', 'alarm mute', 'alarm', 'ald', 'als', 'announcement', 'area chart', 'area graph', 'arrow down cart', 'asexual', 'asl interpreting', 'asl', 'assistive listening devices', 'attach', 'attention', 'balance', 'bar', 'bathtub', 'battery four', 'battery high', 'battery low', 'battery one', 'battery three', 'battery two', 'battery zero', 'birthday', 'block layout', 'bluetooth alternative', 'broken chain', 'browser', 'call square', 'call', 'cancel', 'cart', 'cc', 'chain', 'chat', 'checked calendar', 'checkmark', 'circle notched', 'close', 'cny', 'cocktail', 'commenting', 'computer', 'configure', 'content', 'deafness', 'delete calendar', 'delete', 'detective', 'discussions', 'doctor', 'dollar', 'dont', 'drivers license', 'dropdown', 'emergency', 'envira gallery', 'erase', 'eur', 'euro', 'eyedropper', 'factory', 'favorite', 'feed', 'female homosexual', 'file text', 'file text outline', 'find', 'first aid', 'fork', 'game', 'gay', 'gbp', 'google plus circle', 'google plus official', 'grab', 'graduation', 'grid layout', 'group', 'h', 'hand victory', 'handicap', 'hard of hearing', 'header', 'help circle', 'help', 'heterosexual', 'hide', 'hotel', 'hourglass four', 'hourglass full', 'hourglass one', 'hourglass three', 'hourglass two', 'idea', 'ils', 'in cart', 'inr', 'intergender', 'intersex', 'jpy', 'krw', 'lab', 'law', 'legal', 'lesbian', 'lightning', 'like', 'line graph', 'linkedin square', 'linkify', 'lira', 'list layout', 'magnify', 'mail forward', 'mail outline', 'mail square', 'mail', 'male homosexual', 'man', 'marker', 'mars alternate', 'mars horizontal', 'mars vertical', 'microsoft edge', 'military', 'ms edge', 'mute', 'new pied piper', 'non binary transgender', 'numbered list', 'options', 'other gender horizontal', 'other gender vertical', 'other gender', 'payment', 'paypal card', 'pencil square', 'photo', 'picture', 'pie chart', 'pie graph', 'pied piper hat', 'pin', 'plus cart', 'point', 'pointing down', 'pointing left', 'pointing right', 'pointing up', 'pound', 'power cord', 'power', 'privacy', 'r circle', 'rain', 'record', 'refresh', 'remove circle', 'remove from calendar', 'remove user', 'remove', 'repeat', 'rmb', 'rouble', 'rub', 'ruble', 'rupee', 's15', 'selected radio', 'send', 'setting', 'settings', 'shekel', 'sheqel', 'shipping', 'shop', 'shuffle', 'shutdown', 'sidebar', 'signing', 'signup', 'sliders', 'soccer', 'sort alphabet ascending', 'sort alphabet descending', 'sort ascending', 'sort content ascending', 'sort content descending', 'sort descending', 'sort numeric ascending', 'sort numeric descending', 'sound', 'spy', 'stripe card', 'student', 'talk', 'target', 'teletype', 'television', 'text cursor', 'text telephone', 'theme', 'thermometer', 'thumb tack', 'time', 'tm', 'toggle down', 'toggle left', 'toggle right', 'toggle up', 'translate', 'travel', 'treatment', 'triangle down', 'triangle left', 'triangle right', 'triangle up', 'try', 'unhide', 'unlinkify', 'unmute', 'usd', 'user cancel', 'user close', 'user delete', 'user x', 'vcard', 'video camera', 'video play', 'volume control phone', 'wait', 'warning circle', 'warning sign', 'warning', 'wi-fi', 'winner', 'wizard', 'woman', 'won', 'wordpress beginner', 'wordpress forms', 'world', 'write square', 'x', 'yen', 'zip', 'zoom in', 'zoom out', 'zoom', 'bitbucket square', 'checkmark box', 'circle thin', 'cloud download', 'cloud upload', 'compose', 'conversation', 'credit card alternative', 'currency', 'dashboard', 'diamond', 'disk', 'exchange', 'external share', 'external square', 'external', 'facebook official', 'food', 'hourglass zero', 'level down', 'level up', 'log out', 'meanpath', 'money', 'move', 'pencil', 'protect', 'radio', 'remove bookmark', 'resize horizontal', 'resize vertical', 'sign in', 'sign out', 'spoon', 'star half empty', 'star half full', 'ticket', 'times rectangle', 'write', 'youtube play'];
var ICONS_AND_ALIASES = (0,lodash_es_uniq__WEBPACK_IMPORTED_MODULE_3__["default"])([].concat(ICONS, ICON_ALIASES)); // Some icon names are not part of icons.css.
// These are only valid as children of other components.
// Their CSS rules are defined by a specific component's CSS.
// We don't want to show name warnings for those usages so we add them as valid names here.

var COMPONENT_CONTEXT_SPECIFIC_ICONS = ['left dropdown' // nested dropdown menu direction icon
];
var ALL_ICONS_IN_ALL_CONTEXTS = (0,lodash_es_uniq__WEBPACK_IMPORTED_MODULE_3__["default"])([].concat(ICONS_AND_ALIASES, COMPONENT_CONTEXT_SPECIFIC_ICONS));

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js":
/*!*********************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "someByType": () => (/* binding */ someByType),
/* harmony export */   "findByType": () => (/* binding */ findByType),
/* harmony export */   "isNil": () => (/* binding */ isNil)
/* harmony export */ });
/* harmony import */ var lodash_es_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/find */ "./node_modules/lodash-es/find.js");
/* harmony import */ var lodash_es_some__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/some */ "./node_modules/lodash-es/some.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



/**
 * Determine if child by type exists in children.
 * @param {Object} children The children prop of a component.
 * @param {string|Function} type An html tag name string or React component.
 * @returns {Boolean}
 */

var someByType = function someByType(children, type) {
  return (0,lodash_es_some__WEBPACK_IMPORTED_MODULE_1__["default"])(react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children), {
    type: type
  });
};
/**
 * Find child by type.
 * @param {Object} children The children prop of a component.
 * @param {string|Function} type An html tag name string or React component.
 * @returns {undefined|Object}
 */

var findByType = function findByType(children, type) {
  return (0,lodash_es_find__WEBPACK_IMPORTED_MODULE_2__["default"])(react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children), {
    type: type
  });
};
/**
 * Tests if children are nil in React and Preact.
 * @param {Object} children The children prop of a component.
 * @returns {Boolean}
 */

var isNil = function isNil(children) {
  return children === null || children === undefined || Array.isArray(children) && children.length === 0;
};

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js":
/*!*************************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useKeyOnly": () => (/* binding */ useKeyOnly),
/* harmony export */   "useValueAndKey": () => (/* binding */ useValueAndKey),
/* harmony export */   "useKeyOrValueAndKey": () => (/* binding */ useKeyOrValueAndKey),
/* harmony export */   "useMultipleProp": () => (/* binding */ useMultipleProp),
/* harmony export */   "useTextAlignProp": () => (/* binding */ useTextAlignProp),
/* harmony export */   "useVerticalAlignProp": () => (/* binding */ useVerticalAlignProp),
/* harmony export */   "useWidthProp": () => (/* binding */ useWidthProp)
/* harmony export */ });
/* harmony import */ var _numberToWord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numberToWord */ "./node_modules/semantic-ui-react/dist/es/lib/numberToWord.js");

/*
 * There are 3 prop patterns used to build up the className for a component.
 * Each utility here is meant for use in a classnames() argument.
 *
 * There is no util for valueOnly() because it would simply return val.
 * Use the prop value inline instead.
 *   <Label size='big' />
 *   <div class="ui big label"></div>
 */

/**
 * Props where only the prop key is used in the className.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example
 * <Label tag />
 * <div class="ui tag label"></div>
 */

var useKeyOnly = function useKeyOnly(val, key) {
  return val && key;
};
/**
 * Props that require both a key and value to create a className.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example
 * <Label corner='left' />
 * <div class="ui left corner label"></div>
 */

var useValueAndKey = function useValueAndKey(val, key) {
  return val && val !== true && val + " " + key;
};
/**
 * Props whose key will be used in className, or value and key.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example Key Only
 * <Label pointing />
 * <div class="ui pointing label"></div>
 *
 * @example Key and Value
 * <Label pointing='left' />
 * <div class="ui left pointing label"></div>
 */

var useKeyOrValueAndKey = function useKeyOrValueAndKey(val, key) {
  return val && (val === true ? key : val + " " + key);
}; //
// Prop to className exceptions
//

/**
 * The "multiple" prop implements control of visibility and reserved classes for Grid subcomponents.
 *
 * @param {*} val The value of the "multiple" prop
 * @param {*} key A props key
 *
 * @example
 * <Grid.Row only='mobile' />
 * <Grid.Row only='mobile tablet' />
 * <div class="mobile only row"></div>
 * <div class="mobile only tablet only row"></div>
 */

var useMultipleProp = function useMultipleProp(val, key) {
  if (!val || val === true) return null;
  return val.replace('large screen', 'large-screen').replace(/ vertically/g, '-vertically').split(' ').map(function (prop) {
    return prop.replace('-', ' ') + " " + key;
  }).join(' ');
};
/**
 * The "textAlign" prop follows the useValueAndKey except when the value is "justified'.
 * In this case, only the class "justified" is used, ignoring the "aligned" class.
 * @param {*} val The value of the "textAlign" prop
 *
 * @example
 * <Container textAlign='justified' />
 * <div class="ui justified container"></div>
 *
 * @example
 * <Container textAlign='left' />
 * <div class="ui left aligned container"></div>
 */

var useTextAlignProp = function useTextAlignProp(val) {
  return val === 'justified' ? 'justified' : useValueAndKey(val, 'aligned');
};
/**
 * The "verticalAlign" prop follows the useValueAndKey.
 *
 * @param {*} val The value of the "verticalAlign" prop
 *
 * @example
 * <Grid verticalAlign='middle' />
 * <div class="ui middle aligned grid"></div>
 */

var useVerticalAlignProp = function useVerticalAlignProp(val) {
  return useValueAndKey(val, 'aligned');
};
/**
 * Create "X", "X wide" and "equal width" classNames.
 * "X" is a numberToWord value and "wide" is configurable.
 * @param {*} val The prop value
 * @param {string} [widthClass=''] The class
 * @param {boolean} [canEqual=false] Flag that indicates possibility of "equal" value
 *
 * @example
 * <Grid columns='equal' />
 * <div class="ui equal width grid"></div>
 *
 * <Form widths='equal' />
 * <div class="ui equal width form"></div>
 *
 * <FieldGroup widths='equal' />
 * <div class="equal width fields"></div>
 *
 * @example
 * <Grid columns={4} />
 * <div class="ui four column grid"></div>
 */

var useWidthProp = function useWidthProp(val, widthClass, canEqual) {
  if (widthClass === void 0) {
    widthClass = '';
  }

  if (canEqual === void 0) {
    canEqual = false;
  }

  if (canEqual && val === 'equal') {
    return 'equal width';
  }

  var valType = typeof val;

  if ((valType === 'string' || valType === 'number') && widthClass) {
    return (0,_numberToWord__WEBPACK_IMPORTED_MODULE_0__.numberToWord)(val) + " " + widthClass;
  }

  return (0,_numberToWord__WEBPACK_IMPORTED_MODULE_0__.numberToWord)(val);
};

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js":
/*!***********************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domNode": () => (/* binding */ domNode),
/* harmony export */   "suggest": () => (/* binding */ suggest),
/* harmony export */   "disallow": () => (/* binding */ disallow),
/* harmony export */   "every": () => (/* binding */ every),
/* harmony export */   "givenProps": () => (/* binding */ givenProps),
/* harmony export */   "demand": () => (/* binding */ demand),
/* harmony export */   "multipleProp": () => (/* binding */ multipleProp),
/* harmony export */   "contentShorthand": () => (/* binding */ contentShorthand),
/* harmony export */   "itemShorthand": () => (/* binding */ itemShorthand),
/* harmony export */   "collectionShorthand": () => (/* binding */ collectionShorthand),
/* harmony export */   "deprecate": () => (/* binding */ deprecate),
/* harmony export */   "refObject": () => (/* binding */ refObject),
/* harmony export */   "ref": () => (/* binding */ ref)
/* harmony export */ });
/* harmony import */ var lodash_es_difference__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash-es/difference */ "./node_modules/lodash-es/difference.js");
/* harmony import */ var lodash_es_trim__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash-es/trim */ "./node_modules/lodash-es/trim.js");
/* harmony import */ var lodash_es_isObject__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash-es/isObject */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var lodash_es_pick__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-es/pick */ "./node_modules/lodash-es/pick.js");
/* harmony import */ var lodash_es_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es/keys */ "./node_modules/lodash-es/keys.js");
/* harmony import */ var lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es/isPlainObject */ "./node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var lodash_es_isNil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es/isNil */ "./node_modules/lodash-es/isNil.js");
/* harmony import */ var lodash_es_min__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es/min */ "./node_modules/lodash-es/min.js");
/* harmony import */ var lodash_es_sum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es/sum */ "./node_modules/lodash-es/sum.js");
/* harmony import */ var lodash_es_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/map */ "./node_modules/lodash-es/map.js");
/* harmony import */ var lodash_es_sortBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/sortBy */ "./node_modules/lodash-es/sortBy.js");
/* harmony import */ var lodash_es_take__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/take */ "./node_modules/lodash-es/take.js");
/* harmony import */ var lodash_es_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/memoize */ "./node_modules/lodash-es/memoize.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _leven__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./leven */ "./node_modules/semantic-ui-react/dist/es/lib/leven.js");
















var typeOf = function typeOf() {
  var _Object$prototype$toS;

  return (_Object$prototype$toS = Object.prototype.toString).call.apply(_Object$prototype$toS, arguments);
};
/**
 * Ensure a prop is a valid DOM node.
 */


var domNode = function domNode(props, propName) {
  // skip if prop is undefined
  if (props[propName] === undefined) return; // short circle for SSR env

  if (typeof Element === 'undefined') return; // skip if prop is valid

  if (props[propName] instanceof Element) return;
  return new Error("Invalid prop \"" + propName + "\" supplied, expected a DOM node.");
};
/**
 * Similar to PropTypes.oneOf but shows closest matches.
 * Word order is ignored allowing `left chevron` to match `chevron left`.
 * Useful for very large lists of options (e.g. Icon name, Flag name, etc.)
 * @param {string[]} suggestions An array of allowed values.
 */

var suggest = function suggest(suggestions) {
  if (!Array.isArray(suggestions)) {
    throw new Error('Invalid argument supplied to suggest, expected an instance of array.');
  }
  /* eslint-disable max-nested-callbacks */


  var findBestSuggestions = (0,lodash_es_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (str) {
    var propValueWords = str.split(' ');
    return (0,lodash_es_take__WEBPACK_IMPORTED_MODULE_1__["default"])((0,lodash_es_sortBy__WEBPACK_IMPORTED_MODULE_2__["default"])((0,lodash_es_map__WEBPACK_IMPORTED_MODULE_3__["default"])(suggestions, function (suggestion) {
      var suggestionWords = suggestion.split(' ');

      var propValueScore = (0,lodash_es_sum__WEBPACK_IMPORTED_MODULE_4__["default"])((0,lodash_es_map__WEBPACK_IMPORTED_MODULE_3__["default"])((0,lodash_es_map__WEBPACK_IMPORTED_MODULE_3__["default"])(propValueWords, function (x) {
        return (0,lodash_es_map__WEBPACK_IMPORTED_MODULE_3__["default"])(suggestionWords, function (y) {
          return (0,_leven__WEBPACK_IMPORTED_MODULE_5__["default"])(x, y);
        });
      }), lodash_es_min__WEBPACK_IMPORTED_MODULE_6__["default"]));

      var suggestionScore = (0,lodash_es_sum__WEBPACK_IMPORTED_MODULE_4__["default"])((0,lodash_es_map__WEBPACK_IMPORTED_MODULE_3__["default"])((0,lodash_es_map__WEBPACK_IMPORTED_MODULE_3__["default"])(suggestionWords, function (x) {
        return (0,lodash_es_map__WEBPACK_IMPORTED_MODULE_3__["default"])(propValueWords, function (y) {
          return (0,_leven__WEBPACK_IMPORTED_MODULE_5__["default"])(x, y);
        });
      }), lodash_es_min__WEBPACK_IMPORTED_MODULE_6__["default"]));

      return {
        suggestion: suggestion,
        score: propValueScore + suggestionScore
      };
    }), ['score', 'suggestion']), 3);
  });
  /* eslint-enable max-nested-callbacks */
  // Convert the suggestions list into a hash map for O(n) lookup times. Ensure
  // the words in each key are sorted alphabetically so that we have a consistent
  // way of looking up a value in the map, i.e. we can sort the words in the
  // incoming propValue and look that up without having to check all permutations.


  var suggestionsLookup = suggestions.reduce(function (acc, key) {
    acc[key.split(' ').sort().join(' ')] = true;
    return acc;
  }, {});
  return function (props, propName, componentName) {
    var propValue = props[propName]; // skip if prop is undefined or is included in the suggestions

    if (!propValue || suggestionsLookup[propValue]) return; // check if the words were correct but ordered differently.
    // Since we're matching for classNames we need to allow any word order
    // to pass validation, e.g. `left chevron` vs `chevron left`.

    var propValueSorted = propValue.split(' ').sort().join(' ');
    if (suggestionsLookup[propValueSorted]) return; // find best suggestions

    var bestMatches = findBestSuggestions(propValue); // skip if a match scored 0

    if (bestMatches.some(function (x) {
      return x.score === 0;
    })) return;
    return new Error(["Invalid prop `" + propName + "` of value `" + propValue + "` supplied to `" + componentName + "`.", "\n\nInstead of `" + propValue + "`, did you mean:", bestMatches.map(function (x) {
      return "\n  - " + x.suggestion;
    }).join(''), '\n'].join(''));
  };
};
/**
 * Disallow other props from being defined with this prop.
 * @param {string[]} disallowedProps An array of props that cannot be used with this prop.
 */

var disallow = function disallow(disallowedProps) {
  return function (props, propName, componentName) {
    if (!Array.isArray(disallowedProps)) {
      throw new Error(['Invalid argument supplied to disallow, expected an instance of array.', " See `" + propName + "` prop in `" + componentName + "`."].join(''));
    } // skip if prop is undefined


    if ((0,lodash_es_isNil__WEBPACK_IMPORTED_MODULE_7__["default"])(props[propName]) || props[propName] === false) {
      return;
    } // find disallowed props with values


    var disallowed = disallowedProps.reduce(function (acc, disallowedProp) {
      if (!(0,lodash_es_isNil__WEBPACK_IMPORTED_MODULE_7__["default"])(props[disallowedProp]) && props[disallowedProp] !== false) {
        return [].concat(acc, [disallowedProp]);
      }

      return acc;
    }, []);

    if (disallowed.length > 0) {
      return new Error(["Prop `" + propName + "` in `" + componentName + "` conflicts with props: `" + disallowed.join('`, `') + "`.", 'They cannot be defined together, choose one or the other.'].join(' '));
    }
  };
};
/**
 * Ensure a prop adherers to multiple prop type validators.
 * @param {function[]} validators An array of propType functions.
 */

var every = function every(validators) {
  return function (props, propName, componentName) {
    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    if (!Array.isArray(validators)) {
      throw new Error(['Invalid argument supplied to every, expected an instance of array.', "See `" + propName + "` prop in `" + componentName + "`."].join(' '));
    }

    var errors = [];
    validators.forEach(function (validator) {
      if (typeof validator !== 'function') {
        throw new Error("every() argument \"validators\" should contain functions, found: " + typeOf(validator) + ".");
      }

      var error = validator.apply(void 0, [props, propName, componentName].concat(rest));

      if (error) {
        errors.push(error);
      }
    }); // we can only return one error at a time

    return errors[0];
  };
};
/**
 * Ensure a validator passes only when a component has a given propsShape.
 * @param {object} propsShape An object describing the prop shape.
 * @param {function} validator A propType function.
 */

var givenProps = function givenProps(propsShape, validator) {
  return function (props, propName, componentName) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    if (!(0,lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_8__["default"])(propsShape)) {
      throw new Error(['Invalid argument supplied to givenProps, expected an object.', "See `" + propName + "` prop in `" + componentName + "`."].join(' '));
    }

    if (typeof validator !== 'function') {
      throw new Error(['Invalid argument supplied to givenProps, expected a function.', "See `" + propName + "` prop in `" + componentName + "`."].join(' '));
    }

    var shouldValidate = (0,lodash_es_keys__WEBPACK_IMPORTED_MODULE_9__["default"])(propsShape).every(function (key) {
      var val = propsShape[key]; // require propShape validators to pass or prop values to match

      return typeof val === 'function' ? !val.apply(void 0, [props, key, componentName].concat(rest)) : val === props[propName];
    });

    if (!shouldValidate) return;
    var error = validator.apply(void 0, [props, propName, componentName].concat(rest));

    if (error) {
      // poor mans shallow pretty print, prevents JSON circular reference errors
      var prettyProps = "{ " + (0,lodash_es_keys__WEBPACK_IMPORTED_MODULE_9__["default"])((0,lodash_es_pick__WEBPACK_IMPORTED_MODULE_10__["default"])((0,lodash_es_keys__WEBPACK_IMPORTED_MODULE_9__["default"])(propsShape), props)).map(function (key) {
        var val = props[key];
        var renderedValue = val;
        if (typeof val === 'string') renderedValue = "\"" + val + "\"";else if (Array.isArray(val)) renderedValue = "[" + val.join(', ') + "]";else if ((0,lodash_es_isObject__WEBPACK_IMPORTED_MODULE_11__["default"])(val)) renderedValue = '{...}';
        return key + ": " + renderedValue;
      }).join(', ') + " }";
      error.message = "Given props " + prettyProps + ": " + error.message;
      return error;
    }
  };
};
/**
 * Define prop dependencies by requiring other props.
 * @param {string[]} requiredProps An array of required prop names.
 */

var demand = function demand(requiredProps) {
  return function (props, propName, componentName) {
    if (!Array.isArray(requiredProps)) {
      throw new Error(['Invalid `requiredProps` argument supplied to require, expected an instance of array.', " See `" + propName + "` prop in `" + componentName + "`."].join(''));
    } // skip if prop is undefined


    if (props[propName] === undefined) return;
    var missingRequired = requiredProps.filter(function (requiredProp) {
      return props[requiredProp] === undefined;
    });

    if (missingRequired.length > 0) {
      return new Error("`" + propName + "` prop in `" + componentName + "` requires props: `" + missingRequired.join('`, `') + "`.");
    }
  };
};
/**
 * Ensure an multiple prop contains a string with only possible values.
 * @param {string[]} possible An array of possible values to prop.
 */

var multipleProp = function multipleProp(possible) {
  return function (props, propName, componentName) {
    if (!Array.isArray(possible)) {
      throw new Error(['Invalid argument supplied to some, expected an instance of array.', "See `" + propName + "` prop in `" + componentName + "`."].join(' '));
    }

    var propValue = props[propName]; // skip if prop is undefined

    if ((0,lodash_es_isNil__WEBPACK_IMPORTED_MODULE_7__["default"])(propValue) || propValue === false) return;
    var values = propValue.replace('large screen', 'large-screen').replace(/ vertically/g, '-vertically').split(' ').map(function (val) {
      return (0,lodash_es_trim__WEBPACK_IMPORTED_MODULE_12__["default"])(val).replace('-', ' ');
    });

    var invalid = (0,lodash_es_difference__WEBPACK_IMPORTED_MODULE_13__["default"])(values, possible); // fail only if there are invalid values


    if (invalid.length > 0) {
      return new Error("`" + propName + "` prop in `" + componentName + "` has invalid values: `" + invalid.join('`, `') + "`.");
    }
  };
};
/**
 * Ensure a component can render as a node passed as a prop value in place of children.
 */

var contentShorthand = function contentShorthand() {
  return every([disallow(['children']), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().node)]).apply(void 0, arguments);
};
/**
 * Item shorthand is a description of a component that can be a literal,
 * a props object, or an element.
 */

var itemShorthand = function itemShorthand() {
  return every([disallow(['children']), prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().node), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object), prop_types__WEBPACK_IMPORTED_MODULE_14___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().node), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object)]))])]).apply(void 0, arguments);
};
/**
 * Collection shorthand ensures a prop is an array of item shorthand.
 */

var collectionShorthand = function collectionShorthand() {
  return every([disallow(['children']), prop_types__WEBPACK_IMPORTED_MODULE_14___default().arrayOf(itemShorthand)]).apply(void 0, arguments);
};
/**
 * Show a deprecated warning for component props with a help message and optional validator.
 * @param {string} help A help message to display with the deprecation warning.
 * @param {function} [validator] A propType function.
 */

var deprecate = function deprecate(help, validator) {
  return function (props, propName, componentName) {
    if (typeof help !== 'string') {
      throw new Error(['Invalid `help` argument supplied to deprecate, expected a string.', "See `" + propName + "` prop in `" + componentName + "`."].join(' '));
    } // skip if prop is undefined


    if (props[propName] === undefined) return; // deprecation error and help

    var error = new Error("The `" + propName + "` prop in `" + componentName + "` is deprecated.");
    if (help) error.message += " " + help; // add optional validation error message

    if (validator) {
      if (typeof validator === 'function') {
        for (var _len3 = arguments.length, args = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
          args[_key3 - 3] = arguments[_key3];
        }

        var validationError = validator.apply(void 0, [props, propName, componentName].concat(args));

        if (validationError) {
          error.message = error.message + " " + validationError.message;
        }
      } else {
        throw new Error(['Invalid argument supplied to deprecate, expected a function.', "See `" + propName + "` prop in `" + componentName + "`."].join(' '));
      }
    }

    return error;
  };
};
/** A checker that matches the React.RefObject type. */

var refObject = prop_types__WEBPACK_IMPORTED_MODULE_14___default().shape({
  current: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object)
});
/** A checker that matches the React.Ref type. */

var ref = prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().func), refObject]);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/lib/doesNodeContainClick.js":
/*!****************************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/lib/doesNodeContainClick.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_inRange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es/inRange */ "./node_modules/lodash-es/inRange.js");
/* harmony import */ var lodash_es_first__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/first */ "./node_modules/lodash-es/head.js");
/* harmony import */ var lodash_es_invoke__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/invoke */ "./node_modules/lodash-es/invoke.js");
/* harmony import */ var lodash_es_isNil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/isNil */ "./node_modules/lodash-es/isNil.js");
/* harmony import */ var lodash_es_some__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/some */ "./node_modules/lodash-es/some.js");






/**
 * Determines if a click's coordinates are within the bounds of a node.
 *
 * @see https://github.com/Semantic-Org/Semantic-UI-React/pull/2384
 *
 * @param {object} node - A DOM node.
 * @param {object} e - A SyntheticEvent or DOM Event.
 * @returns {boolean}
 */
var doesNodeContainClick = function doesNodeContainClick(node, e) {
  if ((0,lodash_es_some__WEBPACK_IMPORTED_MODULE_0__["default"])([e, node], lodash_es_isNil__WEBPACK_IMPORTED_MODULE_1__["default"])) return false; // if there is an e.target and it is in the document, use a simple node.contains() check

  if (e.target) {
    (0,lodash_es_invoke__WEBPACK_IMPORTED_MODULE_2__["default"])(e.target, 'setAttribute', 'data-suir-click-target', true);

    if (document.querySelector('[data-suir-click-target=true]')) {
      (0,lodash_es_invoke__WEBPACK_IMPORTED_MODULE_2__["default"])(e.target, 'removeAttribute', 'data-suir-click-target');

      return node.contains(e.target);
    }
  } // Below logic handles cases where the e.target is no longer in the document.
  // The result of the click likely has removed the e.target node.
  // Instead of node.contains(), we'll identify the click by X/Y position.
  // return early if the event properties aren't available
  // prevent measuring the node and repainting if we don't need to


  var clientX = e.clientX,
      clientY = e.clientY;
  if ((0,lodash_es_some__WEBPACK_IMPORTED_MODULE_0__["default"])([clientX, clientY], lodash_es_isNil__WEBPACK_IMPORTED_MODULE_1__["default"])) return false; // false if the node is not visible

  var clientRects = node.getClientRects(); // Heads Up!
  // getClientRects returns a DOMRectList, not an array nor a plain object
  // We explicitly avoid _.isEmpty and check .length to cover all possible shapes

  if (!node.offsetWidth || !node.offsetHeight || !clientRects || !clientRects.length) return false; // false if the node doesn't have a valid bounding rect

  var _first2 = (0,lodash_es_first__WEBPACK_IMPORTED_MODULE_3__["default"])(clientRects),
      top = _first2.top,
      bottom = _first2.bottom,
      left = _first2.left,
      right = _first2.right;

  if ((0,lodash_es_some__WEBPACK_IMPORTED_MODULE_0__["default"])([top, bottom, left, right], lodash_es_isNil__WEBPACK_IMPORTED_MODULE_1__["default"])) return false; // we add a small decimal to the upper bound just to make it inclusive
  // don't add an whole pixel (1) as the event/node values may be decimal sensitive

  return (0,lodash_es_inRange__WEBPACK_IMPORTED_MODULE_4__["default"])(clientY, top, bottom + 0.001) && (0,lodash_es_inRange__WEBPACK_IMPORTED_MODULE_4__["default"])(clientX, left, right + 0.001);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (doesNodeContainClick);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/lib/factories.js":
/*!*****************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/lib/factories.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createShorthand": () => (/* binding */ createShorthand),
/* harmony export */   "createShorthandFactory": () => (/* binding */ createShorthandFactory),
/* harmony export */   "createHTMLDivision": () => (/* binding */ createHTMLDivision),
/* harmony export */   "createHTMLIframe": () => (/* binding */ createHTMLIframe),
/* harmony export */   "createHTMLImage": () => (/* binding */ createHTMLImage),
/* harmony export */   "createHTMLInput": () => (/* binding */ createHTMLInput),
/* harmony export */   "createHTMLLabel": () => (/* binding */ createHTMLLabel),
/* harmony export */   "createHTMLParagraph": () => (/* binding */ createHTMLParagraph)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var lodash_es_uniq__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-es/uniq */ "./node_modules/lodash-es/uniq.js");
/* harmony import */ var lodash_es_isArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es/isArray */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es/isPlainObject */ "./node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es/isFunction */ "./node_modules/lodash-es/isFunction.js");
/* harmony import */ var lodash_es_isNumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es/isNumber */ "./node_modules/lodash-es/isNumber.js");
/* harmony import */ var lodash_es_isString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es/isString */ "./node_modules/lodash-es/isString.js");
/* harmony import */ var lodash_es_isBoolean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es/isBoolean */ "./node_modules/lodash-es/isBoolean.js");
/* harmony import */ var lodash_es_isNil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/isNil */ "./node_modules/lodash-es/isNil.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");











var DEPRECATED_CALLS = {}; // ============================================================
// Factories
// ============================================================

/**
 * A more robust React.createElement. It can create elements from primitive values.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @param {string|object|function} val The value to create a ReactElement from
 * @param {Object} [options={}]
 * @param {object} [options.defaultProps={}] Default props object
 * @param {object|function} [options.overrideProps={}] Override props object or function (called with regular props)
 * @param {boolean} [options.autoGenerateKey=true] Whether or not automatic key generation is allowed
 * @returns {object|null}
 */

function createShorthand(Component, mapValueToProps, val, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthand() Component must be a string or function.');
  } // short circuit noop values


  if ((0,lodash_es_isNil__WEBPACK_IMPORTED_MODULE_3__["default"])(val) || (0,lodash_es_isBoolean__WEBPACK_IMPORTED_MODULE_4__["default"])(val)) {
    return null;
  }

  var valIsString = (0,lodash_es_isString__WEBPACK_IMPORTED_MODULE_5__["default"])(val);

  var valIsNumber = (0,lodash_es_isNumber__WEBPACK_IMPORTED_MODULE_6__["default"])(val);

  var valIsFunction = (0,lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_7__["default"])(val);

  var valIsReactElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.isValidElement(val);

  var valIsPropsObject = (0,lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_8__["default"])(val);

  var valIsPrimitiveValue = valIsString || valIsNumber || (0,lodash_es_isArray__WEBPACK_IMPORTED_MODULE_9__["default"])(val); // unhandled type return null

  /* eslint-disable no-console */


  if (!valIsFunction && !valIsReactElement && !valIsPropsObject && !valIsPrimitiveValue) {
    if (true) {
      console.error(['Shorthand value must be a string|number|array|object|ReactElement|function.', ' Use null|undefined|boolean for none', " Received " + typeof val + "."].join(''));
    }

    return null;
  }
  /* eslint-enable no-console */
  // ----------------------------------------
  // Build up props
  // ----------------------------------------


  var _options = options,
      _options$defaultProps = _options.defaultProps,
      defaultProps = _options$defaultProps === void 0 ? {} : _options$defaultProps; // User's props

  var usersProps = valIsReactElement && val.props || valIsPropsObject && val || valIsPrimitiveValue && mapValueToProps(val); // Override props

  var _options2 = options,
      _options2$overridePro = _options2.overrideProps,
      overrideProps = _options2$overridePro === void 0 ? {} : _options2$overridePro;
  overrideProps = (0,lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_7__["default"])(overrideProps) ? overrideProps((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, usersProps)) : overrideProps; // Merge props

  /* eslint-disable react/prop-types */

  var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, usersProps, overrideProps); // Merge className


  if (defaultProps.className || overrideProps.className || usersProps.className) {
    var mergedClassesNames = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(defaultProps.className, overrideProps.className, usersProps.className);
    props.className = (0,lodash_es_uniq__WEBPACK_IMPORTED_MODULE_10__["default"])(mergedClassesNames.split(' ')).join(' ');
  } // Merge style


  if (defaultProps.style || overrideProps.style || usersProps.style) {
    props.style = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps.style, usersProps.style, overrideProps.style);
  } // ----------------------------------------
  // Get key
  // ----------------------------------------
  // Use key, childKey, or generate key


  if ((0,lodash_es_isNil__WEBPACK_IMPORTED_MODULE_3__["default"])(props.key)) {
    var childKey = props.childKey;
    var _options3 = options,
        _options3$autoGenerat = _options3.autoGenerateKey,
        autoGenerateKey = _options3$autoGenerat === void 0 ? true : _options3$autoGenerat;

    if (!(0,lodash_es_isNil__WEBPACK_IMPORTED_MODULE_3__["default"])(childKey)) {
      // apply and consume the childKey
      props.key = typeof childKey === 'function' ? childKey(props) : childKey;
      delete props.childKey;
    } else if (autoGenerateKey && (valIsString || valIsNumber)) {
      // use string/number shorthand values as the key
      props.key = val;
    }
  } // ----------------------------------------
  // Create Element
  // ----------------------------------------
  // Clone ReactElements


  if (valIsReactElement) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(val, props);
  }

  if (typeof props.children === 'function') {
    return props.children(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      children: undefined
    }));
  } // Create ReactElements from built up props


  if (valIsPrimitiveValue || valIsPropsObject) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, props);
  } // Call functions with args similar to createElement()
  // TODO: V3 remove the implementation


  if (valIsFunction) {
    if (true) {
      if (!DEPRECATED_CALLS[Component]) {
        DEPRECATED_CALLS[Component] = true; // eslint-disable-next-line no-console

        console.warn("Warning: There is a deprecated shorthand function usage for \"" + Component + "\". It is deprecated and will be removed in v3 release. Please follow our upgrade guide: https://github.com/Semantic-Org/Semantic-UI-React/pull/4029");
      }
    }

    return val(Component, props, props.children);
  }
  /* eslint-enable react/prop-types */

} // ============================================================
// Factory Creators
// ============================================================

/**
 * Creates a `createShorthand` function that is waiting for a value and options.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @returns {function} A shorthand factory function waiting for `val` and `defaultProps`.
 */

function createShorthandFactory(Component, mapValueToProps) {
  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthandFactory() Component must be a string or function.');
  }

  return function (val, options) {
    return createShorthand(Component, mapValueToProps, val, options);
  };
} // ============================================================
// HTML Factories
// ============================================================

var createHTMLDivision = /* #__PURE__ */createShorthandFactory('div', function (val) {
  return {
    children: val
  };
});
var createHTMLIframe = /* #__PURE__ */createShorthandFactory('iframe', function (src) {
  return {
    src: src
  };
});
var createHTMLImage = /* #__PURE__ */createShorthandFactory('img', function (val) {
  return {
    src: val
  };
});
var createHTMLInput = /* #__PURE__ */createShorthandFactory('input', function (val) {
  return {
    type: val
  };
});
var createHTMLLabel = /* #__PURE__ */createShorthandFactory('label', function (val) {
  return {
    children: val
  };
});
var createHTMLParagraph = /* #__PURE__ */createShorthandFactory('p', function (val) {
  return {
    children: val
  };
});

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/lib/getElementType.js":
/*!**********************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/lib/getElementType.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Returns a createElement() type based on the props of the Component.
 * Useful for calculating what type a component should render as.
 *
 * @param {function} Component A function or ReactClass.
 * @param {object} props A ReactElement props object
 * @param {function} [getDefault] A function that returns a default element type.
 * @returns {string|function} A ReactElement type
 */
function getElementType(Component, props, getDefault) {
  var _Component$defaultPro = Component.defaultProps,
      defaultProps = _Component$defaultPro === void 0 ? {} : _Component$defaultPro; // ----------------------------------------
  // user defined "as" element type

  if (props.as && props.as !== defaultProps.as) return props.as; // ----------------------------------------
  // computed default element type

  if (getDefault) {
    var computedDefault = getDefault();
    if (computedDefault) return computedDefault;
  } // ----------------------------------------
  // infer anchor links


  if (props.href) return 'a'; // ----------------------------------------
  // use defaultProp or 'div'

  return defaultProps.as || 'div';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getElementType);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js":
/*!*************************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Returns an object consisting of props beyond the scope of the Component.
 * Useful for getting and spreading unknown props from the user.
 * @param {function} Component A function or ReactClass.
 * @param {object} props A ReactElement props object
 * @returns {{}} A shallow copy of the prop object
 */
var getUnhandledProps = function getUnhandledProps(Component, props) {
  // Note that `handledProps` are generated automatically during build with `babel-plugin-transform-react-handled-props`
  var _Component$handledPro = Component.handledProps,
      handledProps = _Component$handledPro === void 0 ? [] : _Component$handledPro;
  return Object.keys(props).reduce(function (acc, prop) {
    if (prop === 'childKey') return acc;
    if (handledProps.indexOf(prop) === -1) acc[prop] = props[prop];
    return acc;
  }, {});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUnhandledProps);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/lib/htmlPropsUtils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/lib/htmlPropsUtils.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "htmlInputAttrs": () => (/* binding */ htmlInputAttrs),
/* harmony export */   "htmlInputEvents": () => (/* binding */ htmlInputEvents),
/* harmony export */   "htmlInputProps": () => (/* binding */ htmlInputProps),
/* harmony export */   "htmlImageProps": () => (/* binding */ htmlImageProps),
/* harmony export */   "partitionHTMLProps": () => (/* binding */ partitionHTMLProps)
/* harmony export */ });
/* harmony import */ var lodash_es_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/includes */ "./node_modules/lodash-es/includes.js");
/* harmony import */ var lodash_es_forEach__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/forEach */ "./node_modules/lodash-es/forEach.js");


var htmlInputAttrs = [// REACT
'selected', 'defaultValue', 'defaultChecked', // LIMITED HTML PROPS
'accept', 'autoCapitalize', 'autoComplete', 'autoCorrect', 'autoFocus', 'checked', 'disabled', 'form', 'id', 'inputMode', 'lang', 'list', 'max', 'maxLength', 'min', 'minLength', 'multiple', 'name', 'pattern', 'placeholder', 'readOnly', 'required', 'step', 'title', 'type', 'value'];
var htmlInputEvents = [// EVENTS
// keyboard
'onKeyDown', 'onKeyPress', 'onKeyUp', // focus
'onFocus', 'onBlur', // form
'onChange', 'onInput', // mouse
'onClick', 'onContextMenu', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', // selection
'onSelect', // touch
'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart'];
var htmlInputProps = [].concat(htmlInputAttrs, htmlInputEvents);
var htmlImageProps = ['alt', 'height', 'src', 'srcSet', 'width', 'loading'];
/**
 * Returns an array of objects consisting of: props of html input element and rest.
 * @param {object} props A ReactElement props object
 * @param {Object} [options={}]
 * @param {Array} [options.htmlProps] An array of html input props
 * @param {boolean} [options.includeAria] Includes all input props that starts with "aria-"
 * @returns {[{}, {}]} An array of objects
 */

var partitionHTMLProps = function partitionHTMLProps(props, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$htmlProps = _options.htmlProps,
      htmlProps = _options$htmlProps === void 0 ? htmlInputProps : _options$htmlProps,
      _options$includeAria = _options.includeAria,
      includeAria = _options$includeAria === void 0 ? true : _options$includeAria;
  var inputProps = {};
  var rest = {};

  (0,lodash_es_forEach__WEBPACK_IMPORTED_MODULE_0__["default"])(props, function (val, prop) {
    var possibleAria = includeAria && (/^aria-.*$/.test(prop) || prop === 'role');
    var target = (0,lodash_es_includes__WEBPACK_IMPORTED_MODULE_1__["default"])(htmlProps, prop) || possibleAria ? inputProps : rest;
    target[prop] = val;
  });

  return [inputProps, rest];
};

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/lib/isBrowser.js":
/*!*****************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/lib/isBrowser.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_isNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/isNil */ "./node_modules/lodash-es/isNil.js");

var hasDocument = typeof document === 'object' && document !== null;
var hasWindow = typeof window === 'object' && window !== null && window.self === window; // eslint-disable-next-line no-confusing-arrow

var isBrowser = function isBrowser() {
  return !(0,lodash_es_isNil__WEBPACK_IMPORTED_MODULE_0__["default"])(isBrowser.override) ? isBrowser.override : hasDocument && hasWindow;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBrowser);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/lib/leven.js":
/*!*************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/lib/leven.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copy of sindre's leven, wrapped in dead code elimination for production
// https://github.com/sindresorhus/leven/blob/master/index.js

/* eslint-disable complexity, import/no-mutable-exports, no-multi-assign, no-nested-ternary, no-plusplus */
var leven = function leven() {
  return 0;
};

if (true) {
  var arr = [];
  var charCodeCache = [];

  leven = function leven(a, b) {
    if (a === b) return 0;
    var aLen = a.length;
    var bLen = b.length;
    if (aLen === 0) return bLen;
    if (bLen === 0) return aLen;
    var bCharCode;
    var ret;
    var tmp;
    var tmp2;
    var i = 0;
    var j = 0;

    while (i < aLen) {
      charCodeCache[i] = a.charCodeAt(i);
      arr[i] = ++i;
    }

    while (j < bLen) {
      bCharCode = b.charCodeAt(j);
      tmp = j++;
      ret = j;

      for (i = 0; i < aLen; i++) {
        tmp2 = bCharCode === charCodeCache[i] ? tmp : tmp + 1;
        tmp = arr[i];
        ret = arr[i] = tmp > ret ? tmp2 > ret ? ret + 1 : tmp2 : tmp2 > tmp ? tmp + 1 : tmp2;
      }
    }

    return ret;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (leven);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/lib/numberToWord.js":
/*!********************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/lib/numberToWord.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "numberToWordMap": () => (/* binding */ numberToWordMap),
/* harmony export */   "numberToWord": () => (/* binding */ numberToWord)
/* harmony export */ });
var numberToWordMap = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen'
};
/**
 * Return the number word for numbers 1-16.
 * Returns strings or numbers as is if there is no corresponding word.
 * Returns an empty string if value is not a string or number.
 * @param {string|number} value The value to convert to a word.
 * @returns {string}
 */

function numberToWord(value) {
  var type = typeof value;

  if (type === 'string' || type === 'number') {
    return numberToWordMap[value] || value;
  }

  return '';
}

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/modules/Dimmer/Dimmer.js":
/*!*************************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/modules/Dimmer/Dimmer.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dimmer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/isBrowser.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/factories.js");
/* harmony import */ var _addons_Portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../addons/Portal */ "./node_modules/semantic-ui-react/dist/es/addons/Portal/Portal.js");
/* harmony import */ var _DimmerDimmable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DimmerDimmable */ "./node_modules/semantic-ui-react/dist/es/modules/Dimmer/DimmerDimmable.js");
/* harmony import */ var _DimmerInner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DimmerInner */ "./node_modules/semantic-ui-react/dist/es/modules/Dimmer/DimmerInner.js");








/**
 * A dimmer hides distractions to focus attention on particular content.
 */

var Dimmer = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Dimmer, _Component);

  function Dimmer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handlePortalMount = function () {
      if (!(0,_lib__WEBPACK_IMPORTED_MODULE_3__["default"])()) return; // Heads up, IE doesn't support second argument in add()

      document.body.classList.add('dimmed');
      document.body.classList.add('dimmable');
    };

    _this.handlePortalUnmount = function () {
      if (!(0,_lib__WEBPACK_IMPORTED_MODULE_3__["default"])()) return; // Heads up, IE doesn't support second argument in add()

      document.body.classList.remove('dimmed');
      document.body.classList.remove('dimmable');
    };

    return _this;
  }

  var _proto = Dimmer.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        page = _this$props.page;
    var rest = (0,_lib__WEBPACK_IMPORTED_MODULE_4__["default"])(Dimmer, this.props);

    if (page) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_addons_Portal__WEBPACK_IMPORTED_MODULE_5__["default"], {
        closeOnEscape: false,
        closeOnDocumentClick: false,
        onMount: this.handlePortalMount,
        onUnmount: this.handlePortalUnmount,
        open: active,
        openOnTriggerClick: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_DimmerInner__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
        active: active,
        page: page
      })));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_DimmerInner__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
      active: active,
      page: page
    }));
  };

  return Dimmer;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

Dimmer.handledProps = ["active", "page"];

Dimmer.propTypes =  true ? {
  /** An active dimmer will dim its parent container. */
  active: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /** A dimmer can be formatted to be fixed to the page. */
  page: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool)
} : 0;
Dimmer.Dimmable = _DimmerDimmable__WEBPACK_IMPORTED_MODULE_8__["default"];
Dimmer.Inner = _DimmerInner__WEBPACK_IMPORTED_MODULE_6__["default"];
Dimmer.create = (0,_lib__WEBPACK_IMPORTED_MODULE_9__.createShorthandFactory)(Dimmer, function (value) {
  return {
    content: value
  };
});

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/modules/Dimmer/DimmerDimmable.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/modules/Dimmer/DimmerDimmable.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getElementType.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js");





/**
 * A dimmable sub-component for Dimmer.
 */

function DimmerDimmable(props) {
  var blurring = props.blurring,
      className = props.className,
      children = props.children,
      content = props.content,
      dimmed = props.dimmed;
  var classes = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(blurring, 'blurring'), (0,_lib__WEBPACK_IMPORTED_MODULE_3__.useKeyOnly)(dimmed, 'dimmed'), 'dimmable', className);
  var rest = (0,_lib__WEBPACK_IMPORTED_MODULE_4__["default"])(DimmerDimmable, props);
  var ElementType = (0,_lib__WEBPACK_IMPORTED_MODULE_5__["default"])(DimmerDimmable, props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ElementType, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    className: classes
  }), _lib__WEBPACK_IMPORTED_MODULE_6__.isNil(children) ? content : children);
}

DimmerDimmable.handledProps = ["as", "blurring", "children", "className", "content", "dimmed"];
DimmerDimmable.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().elementType),

  /** A dimmable element can blur its contents. */
  blurring: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /** Primary content. */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().node),

  /** Additional classes. */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),

  /** Shorthand for primary content. */
  content: _lib__WEBPACK_IMPORTED_MODULE_8__.contentShorthand,

  /** Controls whether or not the dim is displayed. */
  dimmed: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DimmerDimmable);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/modules/Dimmer/DimmerInner.js":
/*!******************************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/modules/Dimmer/DimmerInner.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DimmerInner)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var lodash_es_invoke__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es/invoke */ "./node_modules/lodash-es/invoke.js");
/* harmony import */ var _fluentui_react_component_ref__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react-component-ref */ "./node_modules/@fluentui/react-component-ref/dist/es/Ref.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/doesNodeContainClick.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getElementType.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js");








/**
 * An inner element for a Dimmer.
 */

var DimmerInner = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(DimmerInner, _Component);

  function DimmerInner() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.containerRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createRef)();
    _this.contentRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createRef)();

    _this.handleClick = function (e) {
      var contentRef = _this.contentRef.current;

      (0,lodash_es_invoke__WEBPACK_IMPORTED_MODULE_4__["default"])(_this.props, 'onClick', e, _this.props);

      if (contentRef && contentRef !== e.target && (0,_lib__WEBPACK_IMPORTED_MODULE_5__["default"])(contentRef, e)) {
        return;
      }

      (0,lodash_es_invoke__WEBPACK_IMPORTED_MODULE_4__["default"])(_this.props, 'onClickOutside', e, _this.props);
    };

    return _this;
  }

  var _proto = DimmerInner.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var active = this.props.active;
    this.toggleStyles(active);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var currentActive = this.props.active;
    var prevActive = prevProps.active;
    if (prevActive !== currentActive) this.toggleStyles(currentActive);
  };

  _proto.toggleStyles = function toggleStyles(active) {
    var containerRef = this.containerRef.current;
    if (!containerRef || !containerRef.style) return;

    if (active) {
      containerRef.style.setProperty('display', 'flex', 'important');
    } else {
      containerRef.style.removeProperty('display');
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        children = _this$props.children,
        className = _this$props.className,
        content = _this$props.content,
        disabled = _this$props.disabled,
        inverted = _this$props.inverted,
        page = _this$props.page,
        simple = _this$props.simple,
        verticalAlign = _this$props.verticalAlign;
    var classes = (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('ui', (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useKeyOnly)(active, 'active transition visible'), (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useKeyOnly)(disabled, 'disabled'), (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useKeyOnly)(inverted, 'inverted'), (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useKeyOnly)(page, 'page'), (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useKeyOnly)(simple, 'simple'), (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useVerticalAlignProp)(verticalAlign), 'dimmer', className);
    var rest = (0,_lib__WEBPACK_IMPORTED_MODULE_7__["default"])(DimmerInner, this.props);
    var ElementType = (0,_lib__WEBPACK_IMPORTED_MODULE_8__["default"])(DimmerInner, this.props);
    var childrenContent = _lib__WEBPACK_IMPORTED_MODULE_9__.isNil(children) ? content : children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_fluentui_react_component_ref__WEBPACK_IMPORTED_MODULE_10__.Ref, {
      innerRef: this.containerRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(ElementType, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
      className: classes,
      onClick: this.handleClick
    }), childrenContent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      className: "content",
      ref: this.contentRef
    }, childrenContent)));
  };

  return DimmerInner;
}(react__WEBPACK_IMPORTED_MODULE_3__.Component);

DimmerInner.handledProps = ["active", "as", "children", "className", "content", "disabled", "inverted", "onClick", "onClickOutside", "page", "simple", "verticalAlign"];

DimmerInner.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().elementType),

  /** An active dimmer will dim its parent container. */
  active: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /** Primary content. */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().node),

  /** Additional classes. */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),

  /** Shorthand for primary content. */
  content: _lib__WEBPACK_IMPORTED_MODULE_12__.contentShorthand,

  /** A disabled dimmer cannot be activated */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),

  /**
   * Handles click outside Dimmer's content, but inside Dimmer area.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClickOutside: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),

  /** A dimmer can be formatted to have its colors inverted. */
  inverted: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /** A dimmer can be formatted to be fixed to the page. */
  page: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /** A dimmer can be controlled with simple prop. */
  simple: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /** A dimmer can have its content top or bottom aligned. */
  verticalAlign: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(['bottom', 'top'])
} : 0;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLGFBQWEsZ0JBQWdCO0FBQzdCLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGtCQUFrQix5REFBYzs7QUFFaEM7QUFDQSxZQUFZLHlEQUFjOztBQUUxQjtBQUNBLFFBQVEseURBQWM7O0FBRXRCO0FBQ0EsVUFBVSx5REFBYzs7QUFFeEI7QUFDQSxpQkFBaUIsd0RBQWU7QUFDaEMsRUFBRSxFQUFFLENBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3NlbWFudGljLXVpLXJlYWN0L2Rpc3QvZXMvYWRkb25zL1BvcnRhbC9Qb3J0YWwuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zZW1hbnRpYy11aS1yZWFjdC9kaXN0L2VzL2FkZG9ucy9Qb3J0YWwvUG9ydGFsSW5uZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zZW1hbnRpYy11aS1yZWFjdC9kaXN0L2VzL2FkZG9ucy9Qb3J0YWwvdXRpbHMvdmFsaWRhdGVUcmlnZ2VyLmpzIiwid2VicGFjazovL3JlYWN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc2VtYW50aWMtdWktcmVhY3QvZGlzdC9lcy9lbGVtZW50cy9Db250YWluZXIvQ29udGFpbmVyLmpzIiwid2VicGFjazovL3JlYWN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc2VtYW50aWMtdWktcmVhY3QvZGlzdC9lcy9lbGVtZW50cy9EaXZpZGVyL0RpdmlkZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zZW1hbnRpYy11aS1yZWFjdC9kaXN0L2VzL2VsZW1lbnRzL0hlYWRlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zZW1hbnRpYy11aS1yZWFjdC9kaXN0L2VzL2VsZW1lbnRzL0hlYWRlci9IZWFkZXJDb250ZW50LmpzIiwid2VicGFjazovL3JlYWN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc2VtYW50aWMtdWktcmVhY3QvZGlzdC9lcy9lbGVtZW50cy9IZWFkZXIvSGVhZGVyU3ViaGVhZGVyLmpzIiwid2VicGFjazovL3JlYWN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc2VtYW50aWMtdWktcmVhY3QvZGlzdC9lcy9lbGVtZW50cy9JY29uL0ljb24uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zZW1hbnRpYy11aS1yZWFjdC9kaXN0L2VzL2VsZW1lbnRzL0ljb24vSWNvbkdyb3VwLmpzIiwid2VicGFjazovL3JlYWN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc2VtYW50aWMtdWktcmVhY3QvZGlzdC9lcy9lbGVtZW50cy9JbWFnZS9JbWFnZS5qcyIsIndlYnBhY2s6Ly9yZWFjdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3NlbWFudGljLXVpLXJlYWN0L2Rpc3QvZXMvZWxlbWVudHMvSW1hZ2UvSW1hZ2VHcm91cC5qcyIsIndlYnBhY2s6Ly9yZWFjdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3NlbWFudGljLXVpLXJlYWN0L2Rpc3QvZXMvZWxlbWVudHMvTGFiZWwvTGFiZWwuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zZW1hbnRpYy11aS1yZWFjdC9kaXN0L2VzL2VsZW1lbnRzL0xhYmVsL0xhYmVsRGV0YWlsLmpzIiwid2VicGFjazovL3JlYWN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc2VtYW50aWMtdWktcmVhY3QvZGlzdC9lcy9lbGVtZW50cy9MYWJlbC9MYWJlbEdyb3VwLmpzIiwid2VicGFjazovL3JlYWN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc2VtYW50aWMtdWktcmVhY3QvZGlzdC9lcy9saWIvTW9kZXJuQXV0b0NvbnRyb2xsZWRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zZW1hbnRpYy11aS1yZWFjdC9kaXN0L2VzL2xpYi9TVUkuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zZW1hbnRpYy11aS1yZWFjdC9kaXN0L2VzL2xpYi9jaGlsZHJlblV0aWxzLmpzIiwid2VicGFjazovL3JlYWN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc2VtYW50aWMtdWktcmVhY3QvZGlzdC9lcy9saWIvY2xhc3NOYW1lQnVpbGRlcnMuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zZW1hbnRpYy11aS1yZWFjdC9kaXN0L2VzL2xpYi9jdXN0b21Qcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zZW1hbnRpYy11aS1yZWFjdC9kaXN0L2VzL2xpYi9kb2VzTm9kZUNvbnRhaW5DbGljay5qcyIsIndlYnBhY2s6Ly9yZWFjdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3NlbWFudGljLXVpLXJlYWN0L2Rpc3QvZXMvbGliL2ZhY3Rvcmllcy5qcyIsIndlYnBhY2s6Ly9yZWFjdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3NlbWFudGljLXVpLXJlYWN0L2Rpc3QvZXMvbGliL2dldEVsZW1lbnRUeXBlLmpzIiwid2VicGFjazovL3JlYWN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc2VtYW50aWMtdWktcmVhY3QvZGlzdC9lcy9saWIvZ2V0VW5oYW5kbGVkUHJvcHMuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zZW1hbnRpYy11aS1yZWFjdC9kaXN0L2VzL2xpYi9odG1sUHJvcHNVdGlscy5qcyIsIndlYnBhY2s6Ly9yZWFjdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3NlbWFudGljLXVpLXJlYWN0L2Rpc3QvZXMvbGliL2lzQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3NlbWFudGljLXVpLXJlYWN0L2Rpc3QvZXMvbGliL2xldmVuLmpzIiwid2VicGFjazovL3JlYWN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc2VtYW50aWMtdWktcmVhY3QvZGlzdC9lcy9saWIvbnVtYmVyVG9Xb3JkLmpzIiwid2VicGFjazovL3JlYWN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc2VtYW50aWMtdWktcmVhY3QvZGlzdC9lcy9tb2R1bGVzL0RpbW1lci9EaW1tZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zZW1hbnRpYy11aS1yZWFjdC9kaXN0L2VzL21vZHVsZXMvRGltbWVyL0RpbW1lckRpbW1hYmxlLmpzIiwid2VicGFjazovL3JlYWN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc2VtYW50aWMtdWktcmVhY3QvZGlzdC9lcy9tb2R1bGVzL0RpbW1lci9EaW1tZXJJbm5lci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IF9pbnZva2UgZnJvbSBcImxvZGFzaC1lcy9pbnZva2VcIjtcbmltcG9ydCBFdmVudFN0YWNrIGZyb20gJ0BzZW1hbnRpYy11aS1yZWFjdC9ldmVudC1zdGFjayc7XG5pbXBvcnQgeyBoYW5kbGVSZWYsIFJlZiB9IGZyb20gJ0BmbHVlbnR1aS9yZWFjdC1jb21wb25lbnQtcmVmJztcbmltcG9ydCBrZXlib2FyZEtleSBmcm9tICdrZXlib2FyZC1rZXknO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2Rlcm5BdXRvQ29udHJvbGxlZENvbXBvbmVudCBhcyBDb21wb25lbnQsIGN1c3RvbVByb3BUeXBlcywgZG9lc05vZGVDb250YWluQ2xpY2sgfSBmcm9tICcuLi8uLi9saWInO1xuaW1wb3J0IHZhbGlkYXRlVHJpZ2dlciBmcm9tICcuL3V0aWxzL3ZhbGlkYXRlVHJpZ2dlcic7XG5pbXBvcnQgUG9ydGFsSW5uZXIgZnJvbSAnLi9Qb3J0YWxJbm5lcic7XG5cbi8qKlxuICogQSBjb21wb25lbnQgdGhhdCBhbGxvd3MgeW91IHRvIHJlbmRlciBjaGlsZHJlbiBvdXRzaWRlIHRoZWlyIHBhcmVudC5cbiAqIEBzZWUgTW9kYWxcbiAqIEBzZWUgUG9wdXBcbiAqIEBzZWUgRGltbWVyXG4gKiBAc2VlIENvbmZpcm1cbiAqL1xudmFyIFBvcnRhbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShQb3J0YWwsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBvcnRhbCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcbiAgICBfdGhpcy5jb250ZW50UmVmID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZVJlZigpO1xuICAgIF90aGlzLnRyaWdnZXJSZWYgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgX3RoaXMubGF0ZXN0RG9jdW1lbnRNb3VzZURvd25FdmVudCA9IG51bGw7XG5cbiAgICBfdGhpcy5oYW5kbGVEb2N1bWVudE1vdXNlRG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBfdGhpcy5sYXRlc3REb2N1bWVudE1vdXNlRG93bkV2ZW50ID0gZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlRG9jdW1lbnRDbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgY2xvc2VPbkRvY3VtZW50Q2xpY2sgPSBfdGhpcy5wcm9wcy5jbG9zZU9uRG9jdW1lbnRDbGljaztcbiAgICAgIHZhciBjdXJyZW50TW91c2VEb3duRXZlbnQgPSBfdGhpcy5sYXRlc3REb2N1bWVudE1vdXNlRG93bkV2ZW50O1xuICAgICAgX3RoaXMubGF0ZXN0RG9jdW1lbnRNb3VzZURvd25FdmVudCA9IG51bGw7XG5cbiAgICAgIGlmICghX3RoaXMuY29udGVudFJlZi5jdXJyZW50IHx8IC8vIG5vIHBvcnRhbFxuICAgICAgZG9lc05vZGVDb250YWluQ2xpY2soX3RoaXMudHJpZ2dlclJlZi5jdXJyZW50LCBlKSB8fCAvLyBldmVudCBoYXBwZW5lZCBpbiB0cmlnZ2VyIChkZWxlZ2F0ZSB0byB0cmlnZ2VyIGhhbmRsZXJzKVxuICAgICAgY3VycmVudE1vdXNlRG93bkV2ZW50ICYmIGRvZXNOb2RlQ29udGFpbkNsaWNrKF90aGlzLmNvbnRlbnRSZWYuY3VycmVudCwgY3VycmVudE1vdXNlRG93bkV2ZW50KSB8fCAvLyBldmVudCBvcmlnaW5hdGVkIGluIHRoZSBwb3J0YWwgYnV0IHdhcyBlbmRlZCBvdXRzaWRlXG4gICAgICBkb2VzTm9kZUNvbnRhaW5DbGljayhfdGhpcy5jb250ZW50UmVmLmN1cnJlbnQsIGUpIC8vIGV2ZW50IGhhcHBlbmVkIGluIHRoZSBwb3J0YWxcbiAgICAgICkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBpZ25vcmUgdGhlIGNsaWNrXG5cblxuICAgICAgaWYgKGNsb3NlT25Eb2N1bWVudENsaWNrKSB7XG4gICAgICAgIF90aGlzLmNsb3NlKGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVFc2NhcGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5jbG9zZU9uRXNjYXBlKSByZXR1cm47XG4gICAgICBpZiAoa2V5Ym9hcmRLZXkuZ2V0Q29kZShlKSAhPT0ga2V5Ym9hcmRLZXkuRXNjYXBlKSByZXR1cm47XG5cbiAgICAgIF90aGlzLmNsb3NlKGUpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVQb3J0YWxNb3VzZUxlYXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGNsb3NlT25Qb3J0YWxNb3VzZUxlYXZlID0gX3RoaXMkcHJvcHMuY2xvc2VPblBvcnRhbE1vdXNlTGVhdmUsXG4gICAgICAgICAgbW91c2VMZWF2ZURlbGF5ID0gX3RoaXMkcHJvcHMubW91c2VMZWF2ZURlbGF5O1xuICAgICAgaWYgKCFjbG9zZU9uUG9ydGFsTW91c2VMZWF2ZSkgcmV0dXJuOyAvLyBEbyBub3QgY2xvc2UgdGhlIHBvcnRhbCB3aGVuICdtb3VzZWxlYXZlJyBpcyB0cmlnZ2VyZWQgYnkgY2hpbGRyZW5cblxuICAgICAgaWYgKGUudGFyZ2V0ICE9PSBfdGhpcy5jb250ZW50UmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICAgIF90aGlzLm1vdXNlTGVhdmVUaW1lciA9IF90aGlzLmNsb3NlV2l0aFRpbWVvdXQoZSwgbW91c2VMZWF2ZURlbGF5KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlUG9ydGFsTW91c2VFbnRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEluIG9yZGVyIHRvIGVuYWJsZSBtb3VzaW5nIGZyb20gdGhlIHRyaWdnZXIgdG8gdGhlIHBvcnRhbCwgd2UgbmVlZCB0b1xuICAgICAgLy8gY2xlYXIgdGhlIG1vdXNlbGVhdmUgdGltZXIgdGhhdCB3YXMgc2V0IHdoZW4gbGVhdmluZyB0aGUgdHJpZ2dlci5cbiAgICAgIHZhciBjbG9zZU9uUG9ydGFsTW91c2VMZWF2ZSA9IF90aGlzLnByb3BzLmNsb3NlT25Qb3J0YWxNb3VzZUxlYXZlO1xuICAgICAgaWYgKCFjbG9zZU9uUG9ydGFsTW91c2VMZWF2ZSkgcmV0dXJuO1xuICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLm1vdXNlTGVhdmVUaW1lcik7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZVRyaWdnZXJCbHVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICB0cmlnZ2VyID0gX3RoaXMkcHJvcHMyLnRyaWdnZXIsXG4gICAgICAgICAgY2xvc2VPblRyaWdnZXJCbHVyID0gX3RoaXMkcHJvcHMyLmNsb3NlT25UcmlnZ2VyQmx1cjsgLy8gQ2FsbCBvcmlnaW5hbCBldmVudCBoYW5kbGVyXG5cbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIHJlc3RbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIF9pbnZva2UuYXBwbHkodm9pZCAwLCBbdHJpZ2dlciwgJ3Byb3BzLm9uQmx1cicsIGVdLmNvbmNhdChyZXN0KSk7IC8vIElFIDExIGRvZXNuJ3Qgd29yayB3aXRoIHJlbGF0ZWRUYXJnZXQgaW4gYmx1ciBldmVudHNcblxuXG4gICAgICB2YXIgdGFyZ2V0ID0gZS5yZWxhdGVkVGFyZ2V0IHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7IC8vIGRvIG5vdCBjbG9zZSBpZiBmb2N1cyBpcyBnaXZlbiB0byB0aGUgcG9ydGFsXG5cbiAgICAgIHZhciBkaWRGb2N1c1BvcnRhbCA9IF9pbnZva2UoX3RoaXMuY29udGVudFJlZi5jdXJyZW50LCAnY29udGFpbnMnLCB0YXJnZXQpO1xuXG4gICAgICBpZiAoIWNsb3NlT25UcmlnZ2VyQmx1ciB8fCBkaWRGb2N1c1BvcnRhbCkgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5jbG9zZShlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlVHJpZ2dlckNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICB0cmlnZ2VyID0gX3RoaXMkcHJvcHMzLnRyaWdnZXIsXG4gICAgICAgICAgY2xvc2VPblRyaWdnZXJDbGljayA9IF90aGlzJHByb3BzMy5jbG9zZU9uVHJpZ2dlckNsaWNrLFxuICAgICAgICAgIG9wZW5PblRyaWdnZXJDbGljayA9IF90aGlzJHByb3BzMy5vcGVuT25UcmlnZ2VyQ2xpY2s7XG4gICAgICB2YXIgb3BlbiA9IF90aGlzLnN0YXRlLm9wZW47IC8vIENhbGwgb3JpZ2luYWwgZXZlbnQgaGFuZGxlclxuXG4gICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbjMgPiAxID8gX2xlbjMgLSAxIDogMCksIF9rZXkzID0gMTsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICByZXN0W19rZXkzIC0gMV0gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgfVxuXG4gICAgICBfaW52b2tlLmFwcGx5KHZvaWQgMCwgW3RyaWdnZXIsICdwcm9wcy5vbkNsaWNrJywgZV0uY29uY2F0KHJlc3QpKTtcblxuICAgICAgaWYgKG9wZW4gJiYgY2xvc2VPblRyaWdnZXJDbGljaykge1xuICAgICAgICBfdGhpcy5jbG9zZShlKTtcbiAgICAgIH0gZWxzZSBpZiAoIW9wZW4gJiYgb3Blbk9uVHJpZ2dlckNsaWNrKSB7XG4gICAgICAgIF90aGlzLm9wZW4oZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZVRyaWdnZXJGb2N1cyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgdHJpZ2dlciA9IF90aGlzJHByb3BzNC50cmlnZ2VyLFxuICAgICAgICAgIG9wZW5PblRyaWdnZXJGb2N1cyA9IF90aGlzJHByb3BzNC5vcGVuT25UcmlnZ2VyRm9jdXM7IC8vIENhbGwgb3JpZ2luYWwgZXZlbnQgaGFuZGxlclxuXG4gICAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbjQgPiAxID8gX2xlbjQgLSAxIDogMCksIF9rZXk0ID0gMTsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgICAgICByZXN0W19rZXk0IC0gMV0gPSBhcmd1bWVudHNbX2tleTRdO1xuICAgICAgfVxuXG4gICAgICBfaW52b2tlLmFwcGx5KHZvaWQgMCwgW3RyaWdnZXIsICdwcm9wcy5vbkZvY3VzJywgZV0uY29uY2F0KHJlc3QpKTtcblxuICAgICAgaWYgKCFvcGVuT25UcmlnZ2VyRm9jdXMpIHJldHVybjtcblxuICAgICAgX3RoaXMub3BlbihlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlVHJpZ2dlck1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLm1vdXNlRW50ZXJUaW1lcik7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgdHJpZ2dlciA9IF90aGlzJHByb3BzNS50cmlnZ2VyLFxuICAgICAgICAgIGNsb3NlT25UcmlnZ2VyTW91c2VMZWF2ZSA9IF90aGlzJHByb3BzNS5jbG9zZU9uVHJpZ2dlck1vdXNlTGVhdmUsXG4gICAgICAgICAgbW91c2VMZWF2ZURlbGF5ID0gX3RoaXMkcHJvcHM1Lm1vdXNlTGVhdmVEZWxheTsgLy8gQ2FsbCBvcmlnaW5hbCBldmVudCBoYW5kbGVyXG5cbiAgICAgIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IG5ldyBBcnJheShfbGVuNSA+IDEgPyBfbGVuNSAtIDEgOiAwKSwgX2tleTUgPSAxOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgICAgIHJlc3RbX2tleTUgLSAxXSA9IGFyZ3VtZW50c1tfa2V5NV07XG4gICAgICB9XG5cbiAgICAgIF9pbnZva2UuYXBwbHkodm9pZCAwLCBbdHJpZ2dlciwgJ3Byb3BzLm9uTW91c2VMZWF2ZScsIGVdLmNvbmNhdChyZXN0KSk7XG5cbiAgICAgIGlmICghY2xvc2VPblRyaWdnZXJNb3VzZUxlYXZlKSByZXR1cm47XG4gICAgICBfdGhpcy5tb3VzZUxlYXZlVGltZXIgPSBfdGhpcy5jbG9zZVdpdGhUaW1lb3V0KGUsIG1vdXNlTGVhdmVEZWxheSk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZVRyaWdnZXJNb3VzZUVudGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNsZWFyVGltZW91dChfdGhpcy5tb3VzZUxlYXZlVGltZXIpO1xuICAgICAgdmFyIF90aGlzJHByb3BzNiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHRyaWdnZXIgPSBfdGhpcyRwcm9wczYudHJpZ2dlcixcbiAgICAgICAgICBtb3VzZUVudGVyRGVsYXkgPSBfdGhpcyRwcm9wczYubW91c2VFbnRlckRlbGF5LFxuICAgICAgICAgIG9wZW5PblRyaWdnZXJNb3VzZUVudGVyID0gX3RoaXMkcHJvcHM2Lm9wZW5PblRyaWdnZXJNb3VzZUVudGVyOyAvLyBDYWxsIG9yaWdpbmFsIGV2ZW50IGhhbmRsZXJcblxuICAgICAgZm9yICh2YXIgX2xlbjYgPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW42ID4gMSA/IF9sZW42IC0gMSA6IDApLCBfa2V5NiA9IDE7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICAgICAgcmVzdFtfa2V5NiAtIDFdID0gYXJndW1lbnRzW19rZXk2XTtcbiAgICAgIH1cblxuICAgICAgX2ludm9rZS5hcHBseSh2b2lkIDAsIFt0cmlnZ2VyLCAncHJvcHMub25Nb3VzZUVudGVyJywgZV0uY29uY2F0KHJlc3QpKTtcblxuICAgICAgaWYgKCFvcGVuT25UcmlnZ2VyTW91c2VFbnRlcikgcmV0dXJuO1xuICAgICAgX3RoaXMubW91c2VFbnRlclRpbWVyID0gX3RoaXMub3BlbldpdGhUaW1lb3V0KGUsIG1vdXNlRW50ZXJEZWxheSk7XG4gICAgfTtcblxuICAgIF90aGlzLm9wZW4gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgX2ludm9rZShfdGhpcy5wcm9wcywgJ29uT3BlbicsIGUsIF9leHRlbmRzKHt9LCBfdGhpcy5wcm9wcywge1xuICAgICAgICBvcGVuOiB0cnVlXG4gICAgICB9KSk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3BlbjogdHJ1ZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLm9wZW5XaXRoVGltZW91dCA9IGZ1bmN0aW9uIChlLCBkZWxheSkge1xuICAgICAgLy8gUmVhY3Qgd2lwZXMgdGhlIGVudGlyZSBldmVudCBvYmplY3QgYW5kIHN1Z2dlc3RzIHVzaW5nIGUucGVyc2lzdCgpIGlmXG4gICAgICAvLyB5b3UgbmVlZCB0aGUgZXZlbnQgZm9yIGFzeW5jIGFjY2Vzcy4gSG93ZXZlciwgZXZlbiB3aXRoIGUucGVyc2lzdFxuICAgICAgLy8gY2VydGFpbiByZXF1aXJlZCBwcm9wcyAoZS5nLiBjdXJyZW50VGFyZ2V0KSBhcmUgbnVsbCBzbyB3ZSdyZSBmb3JjZWQgdG8gY2xvbmUuXG4gICAgICB2YXIgZXZlbnRDbG9uZSA9IF9leHRlbmRzKHt9LCBlKTtcblxuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMub3BlbihldmVudENsb25lKTtcbiAgICAgIH0sIGRlbGF5IHx8IDApO1xuICAgIH07XG5cbiAgICBfdGhpcy5jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9wZW46IGZhbHNlXG4gICAgICB9KTtcblxuICAgICAgX2ludm9rZShfdGhpcy5wcm9wcywgJ29uQ2xvc2UnLCBlLCBfZXh0ZW5kcyh7fSwgX3RoaXMucHJvcHMsIHtcbiAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuY2xvc2VXaXRoVGltZW91dCA9IGZ1bmN0aW9uIChlLCBkZWxheSkge1xuICAgICAgLy8gUmVhY3Qgd2lwZXMgdGhlIGVudGlyZSBldmVudCBvYmplY3QgYW5kIHN1Z2dlc3RzIHVzaW5nIGUucGVyc2lzdCgpIGlmXG4gICAgICAvLyB5b3UgbmVlZCB0aGUgZXZlbnQgZm9yIGFzeW5jIGFjY2Vzcy4gSG93ZXZlciwgZXZlbiB3aXRoIGUucGVyc2lzdFxuICAgICAgLy8gY2VydGFpbiByZXF1aXJlZCBwcm9wcyAoZS5nLiBjdXJyZW50VGFyZ2V0KSBhcmUgbnVsbCBzbyB3ZSdyZSBmb3JjZWQgdG8gY2xvbmUuXG4gICAgICB2YXIgZXZlbnRDbG9uZSA9IF9leHRlbmRzKHt9LCBlKTtcblxuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuY2xvc2UoZXZlbnRDbG9uZSk7XG4gICAgICB9LCBkZWxheSB8fCAwKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfaW52b2tlKF90aGlzLnByb3BzLCAnb25Nb3VudCcsIG51bGwsIF90aGlzLnByb3BzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlVW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF9pbnZva2UoX3RoaXMucHJvcHMsICdvblVubW91bnQnLCBudWxsLCBfdGhpcy5wcm9wcyk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZVRyaWdnZXJSZWYgPSBmdW5jdGlvbiAoYykge1xuICAgICAgX3RoaXMudHJpZ2dlclJlZi5jdXJyZW50ID0gYztcbiAgICAgIGhhbmRsZVJlZihfdGhpcy5wcm9wcy50cmlnZ2VyUmVmLCBjKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFBvcnRhbC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8gQ2xlYW4gdXAgdGltZXJzXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMubW91c2VFbnRlclRpbWVyKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5tb3VzZUxlYXZlVGltZXIpO1xuICB9IC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gRG9jdW1lbnQgRXZlbnQgSGFuZGxlcnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICA7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHM3ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczcuY2hpbGRyZW4sXG4gICAgICAgIGV2ZW50UG9vbCA9IF90aGlzJHByb3BzNy5ldmVudFBvb2wsXG4gICAgICAgIG1vdW50Tm9kZSA9IF90aGlzJHByb3BzNy5tb3VudE5vZGUsXG4gICAgICAgIHRyaWdnZXIgPSBfdGhpcyRwcm9wczcudHJpZ2dlcjtcbiAgICB2YXIgb3BlbiA9IHRoaXMuc3RhdGUub3BlbjtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhbGlkYXRlVHJpZ2dlcih0cmlnZ2VyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIG9wZW4gJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBvcnRhbElubmVyLCB7XG4gICAgICBpbm5lclJlZjogdGhpcy5jb250ZW50UmVmLFxuICAgICAgbW91bnROb2RlOiBtb3VudE5vZGUsXG4gICAgICBvbk1vdW50OiB0aGlzLmhhbmRsZU1vdW50LFxuICAgICAgb25Vbm1vdW50OiB0aGlzLmhhbmRsZVVubW91bnRcbiAgICB9LCBjaGlsZHJlbiksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEV2ZW50U3RhY2ssIHtcbiAgICAgIG5hbWU6IFwibW91c2VsZWF2ZVwiLFxuICAgICAgb246IHRoaXMuaGFuZGxlUG9ydGFsTW91c2VMZWF2ZSxcbiAgICAgIHBvb2w6IGV2ZW50UG9vbCxcbiAgICAgIHRhcmdldDogdGhpcy5jb250ZW50UmVmXG4gICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEV2ZW50U3RhY2ssIHtcbiAgICAgIG5hbWU6IFwibW91c2VlbnRlclwiLFxuICAgICAgb246IHRoaXMuaGFuZGxlUG9ydGFsTW91c2VFbnRlcixcbiAgICAgIHBvb2w6IGV2ZW50UG9vbCxcbiAgICAgIHRhcmdldDogdGhpcy5jb250ZW50UmVmXG4gICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEV2ZW50U3RhY2ssIHtcbiAgICAgIG5hbWU6IFwibW91c2Vkb3duXCIsXG4gICAgICBvbjogdGhpcy5oYW5kbGVEb2N1bWVudE1vdXNlRG93bixcbiAgICAgIHBvb2w6IGV2ZW50UG9vbFxuICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChFdmVudFN0YWNrLCB7XG4gICAgICBuYW1lOiBcImNsaWNrXCIsXG4gICAgICBvbjogdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrLFxuICAgICAgcG9vbDogZXZlbnRQb29sXG4gICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEV2ZW50U3RhY2ssIHtcbiAgICAgIG5hbWU6IFwia2V5ZG93blwiLFxuICAgICAgb246IHRoaXMuaGFuZGxlRXNjYXBlLFxuICAgICAgcG9vbDogZXZlbnRQb29sXG4gICAgfSkpLCB0cmlnZ2VyICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlZiwge1xuICAgICAgaW5uZXJSZWY6IHRoaXMuaGFuZGxlVHJpZ2dlclJlZlxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQodHJpZ2dlciwge1xuICAgICAgb25CbHVyOiB0aGlzLmhhbmRsZVRyaWdnZXJCbHVyLFxuICAgICAgb25DbGljazogdGhpcy5oYW5kbGVUcmlnZ2VyQ2xpY2ssXG4gICAgICBvbkZvY3VzOiB0aGlzLmhhbmRsZVRyaWdnZXJGb2N1cyxcbiAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5oYW5kbGVUcmlnZ2VyTW91c2VMZWF2ZSxcbiAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5oYW5kbGVUcmlnZ2VyTW91c2VFbnRlclxuICAgIH0pKSk7XG4gIH07XG5cbiAgcmV0dXJuIFBvcnRhbDtcbn0oQ29tcG9uZW50KTtcblxuUG9ydGFsLmhhbmRsZWRQcm9wcyA9IFtcImNoaWxkcmVuXCIsIFwiY2xvc2VPbkRvY3VtZW50Q2xpY2tcIiwgXCJjbG9zZU9uRXNjYXBlXCIsIFwiY2xvc2VPblBvcnRhbE1vdXNlTGVhdmVcIiwgXCJjbG9zZU9uVHJpZ2dlckJsdXJcIiwgXCJjbG9zZU9uVHJpZ2dlckNsaWNrXCIsIFwiY2xvc2VPblRyaWdnZXJNb3VzZUxlYXZlXCIsIFwiZGVmYXVsdE9wZW5cIiwgXCJldmVudFBvb2xcIiwgXCJtb3VudE5vZGVcIiwgXCJtb3VzZUVudGVyRGVsYXlcIiwgXCJtb3VzZUxlYXZlRGVsYXlcIiwgXCJvbkNsb3NlXCIsIFwib25Nb3VudFwiLCBcIm9uT3BlblwiLCBcIm9uVW5tb3VudFwiLCBcIm9wZW5cIiwgXCJvcGVuT25UcmlnZ2VyQ2xpY2tcIiwgXCJvcGVuT25UcmlnZ2VyRm9jdXNcIiwgXCJvcGVuT25UcmlnZ2VyTW91c2VFbnRlclwiLCBcInRyaWdnZXJcIiwgXCJ0cmlnZ2VyUmVmXCJdO1xuUG9ydGFsLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqIFByaW1hcnkgY29udGVudC4gKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgLyoqIENvbnRyb2xzIHdoZXRoZXIgb3Igbm90IHRoZSBwb3J0YWwgc2hvdWxkIGNsb3NlIHdoZW4gdGhlIGRvY3VtZW50IGlzIGNsaWNrZWQuICovXG4gIGNsb3NlT25Eb2N1bWVudENsaWNrOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQ29udHJvbHMgd2hldGhlciBvciBub3QgdGhlIHBvcnRhbCBzaG91bGQgY2xvc2Ugd2hlbiBlc2NhcGUgaXMgcHJlc3NlZCBpcyBkaXNwbGF5ZWQuICovXG4gIGNsb3NlT25Fc2NhcGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBDb250cm9scyB3aGV0aGVyIG9yIG5vdCB0aGUgcG9ydGFsIHNob3VsZCBjbG9zZSB3aGVuIG1vdXNpbmcgb3V0IG9mIHRoZSBwb3J0YWwuXG4gICAqIE5PVEU6IFRoaXMgd2lsbCBwcmV2ZW50IGBjbG9zZU9uVHJpZ2dlck1vdXNlTGVhdmVgIHdoZW4gbW91c2luZyBvdmVyIHRoZVxuICAgKiBnYXAgZnJvbSB0aGUgdHJpZ2dlciB0byB0aGUgcG9ydGFsLlxuICAgKi9cbiAgY2xvc2VPblBvcnRhbE1vdXNlTGVhdmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBDb250cm9scyB3aGV0aGVyIG9yIG5vdCB0aGUgcG9ydGFsIHNob3VsZCBjbG9zZSBvbiBibHVyIG9mIHRoZSB0cmlnZ2VyLiAqL1xuICBjbG9zZU9uVHJpZ2dlckJsdXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBDb250cm9scyB3aGV0aGVyIG9yIG5vdCB0aGUgcG9ydGFsIHNob3VsZCBjbG9zZSBvbiBjbGljayBvZiB0aGUgdHJpZ2dlci4gKi9cbiAgY2xvc2VPblRyaWdnZXJDbGljazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIENvbnRyb2xzIHdoZXRoZXIgb3Igbm90IHRoZSBwb3J0YWwgc2hvdWxkIGNsb3NlIHdoZW4gbW91c2luZyBvdXQgb2YgdGhlIHRyaWdnZXIuICovXG4gIGNsb3NlT25UcmlnZ2VyTW91c2VMZWF2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEluaXRpYWwgdmFsdWUgb2Ygb3Blbi4gKi9cbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBFdmVudCBwb29sIG5hbWVzcGFjZSB0aGF0IGlzIHVzZWQgdG8gaGFuZGxlIGNvbXBvbmVudCBldmVudHMgKi9cbiAgZXZlbnRQb29sOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBUaGUgbm9kZSB3aGVyZSB0aGUgcG9ydGFsIHNob3VsZCBtb3VudC4gKi9cbiAgbW91bnROb2RlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKiBNaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmUgb3BlbmluZyBvbiBtb3VzZSBvdmVyICovXG4gIG1vdXNlRW50ZXJEZWxheTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKiogTWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIGNsb3Npbmcgb24gbW91c2UgbGVhdmUgKi9cbiAgbW91c2VMZWF2ZURlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIGNsb3NlIGV2ZW50IGhhcHBlbnNcbiAgICpcbiAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnQgLSBSZWFjdCdzIG9yaWdpbmFsIFN5bnRoZXRpY0V2ZW50LlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIEFsbCBwcm9wcy5cbiAgICovXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgcG9ydGFsIGlzIG1vdW50ZWQgb24gdGhlIERPTS5cbiAgICpcbiAgICogQHBhcmFtIHtudWxsfVxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIEFsbCBwcm9wcy5cbiAgICovXG4gIG9uTW91bnQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhbiBvcGVuIGV2ZW50IGhhcHBlbnNcbiAgICpcbiAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnQgLSBSZWFjdCdzIG9yaWdpbmFsIFN5bnRoZXRpY0V2ZW50LlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIEFsbCBwcm9wcy5cbiAgICovXG4gIG9uT3BlbjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBwb3J0YWwgaXMgdW5tb3VudGVkIGZyb20gdGhlIERPTS5cbiAgICpcbiAgICogQHBhcmFtIHtudWxsfVxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIEFsbCBwcm9wcy5cbiAgICovXG4gIG9uVW5tb3VudDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqIENvbnRyb2xzIHdoZXRoZXIgb3Igbm90IHRoZSBwb3J0YWwgaXMgZGlzcGxheWVkLiAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQ29udHJvbHMgd2hldGhlciBvciBub3QgdGhlIHBvcnRhbCBzaG91bGQgb3BlbiB3aGVuIHRoZSB0cmlnZ2VyIGlzIGNsaWNrZWQuICovXG4gIG9wZW5PblRyaWdnZXJDbGljazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIENvbnRyb2xzIHdoZXRoZXIgb3Igbm90IHRoZSBwb3J0YWwgc2hvdWxkIG9wZW4gb24gZm9jdXMgb2YgdGhlIHRyaWdnZXIuICovXG4gIG9wZW5PblRyaWdnZXJGb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIENvbnRyb2xzIHdoZXRoZXIgb3Igbm90IHRoZSBwb3J0YWwgc2hvdWxkIG9wZW4gd2hlbiBtb3VzaW5nIG92ZXIgdGhlIHRyaWdnZXIuICovXG4gIG9wZW5PblRyaWdnZXJNb3VzZUVudGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogRWxlbWVudCB0byBiZSByZW5kZXJlZCBpbi1wbGFjZSB3aGVyZSB0aGUgcG9ydGFsIGlzIGRlZmluZWQuICovXG4gIHRyaWdnZXI6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKiBDYWxsZWQgd2l0aCBhIHJlZiB0byB0aGUgdHJpZ2dlciBub2RlLiAqL1xuICB0cmlnZ2VyUmVmOiBjdXN0b21Qcm9wVHlwZXMucmVmXG59IDoge307XG5Qb3J0YWwuZGVmYXVsdFByb3BzID0ge1xuICBjbG9zZU9uRG9jdW1lbnRDbGljazogdHJ1ZSxcbiAgY2xvc2VPbkVzY2FwZTogdHJ1ZSxcbiAgZXZlbnRQb29sOiAnZGVmYXVsdCcsXG4gIG9wZW5PblRyaWdnZXJDbGljazogdHJ1ZVxufTtcblBvcnRhbC5hdXRvQ29udHJvbGxlZFByb3BzID0gWydvcGVuJ107XG5Qb3J0YWwuSW5uZXIgPSBQb3J0YWxJbm5lcjtcbmV4cG9ydCBkZWZhdWx0IFBvcnRhbDsiLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBfaW52b2tlIGZyb20gXCJsb2Rhc2gtZXMvaW52b2tlXCI7XG5pbXBvcnQgeyBoYW5kbGVSZWYsIFJlZiB9IGZyb20gJ0BmbHVlbnR1aS9yZWFjdC1jb21wb25lbnQtcmVmJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGN1c3RvbVByb3BUeXBlcywgaXNCcm93c2VyIH0gZnJvbSAnLi4vLi4vbGliJztcblxuLyoqXG4gKiBBbiBpbm5lciBjb21wb25lbnQgdGhhdCBhbGxvd3MgeW91IHRvIHJlbmRlciBjaGlsZHJlbiBvdXRzaWRlIHRoZWlyIHBhcmVudC5cbiAqL1xudmFyIFBvcnRhbElubmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFBvcnRhbElubmVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQb3J0YWxJbm5lcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcblxuICAgIF90aGlzLmhhbmRsZVJlZiA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICBoYW5kbGVSZWYoX3RoaXMucHJvcHMuaW5uZXJSZWYsIGMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUG9ydGFsSW5uZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIF9pbnZva2UodGhpcy5wcm9wcywgJ29uTW91bnQnLCBudWxsLCB0aGlzLnByb3BzKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBfaW52b2tlKHRoaXMucHJvcHMsICdvblVubW91bnQnLCBudWxsLCB0aGlzLnByb3BzKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGlmICghaXNCcm93c2VyKCkpIHJldHVybiBudWxsO1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIF90aGlzJHByb3BzJG1vdW50Tm9kZSA9IF90aGlzJHByb3BzLm1vdW50Tm9kZSxcbiAgICAgICAgbW91bnROb2RlID0gX3RoaXMkcHJvcHMkbW91bnROb2RlID09PSB2b2lkIDAgPyBkb2N1bWVudC5ib2R5IDogX3RoaXMkcHJvcHMkbW91bnROb2RlO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlUG9ydGFsKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWYsIHtcbiAgICAgIGlubmVyUmVmOiB0aGlzLmhhbmRsZVJlZlxuICAgIH0sIGNoaWxkcmVuKSwgbW91bnROb2RlKTtcbiAgfTtcblxuICByZXR1cm4gUG9ydGFsSW5uZXI7XG59KENvbXBvbmVudCk7XG5cblBvcnRhbElubmVyLmhhbmRsZWRQcm9wcyA9IFtcImNoaWxkcmVuXCIsIFwiaW5uZXJSZWZcIiwgXCJtb3VudE5vZGVcIiwgXCJvbk1vdW50XCIsIFwib25Vbm1vdW50XCJdO1xuUG9ydGFsSW5uZXIucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKiogUHJpbWFyeSBjb250ZW50LiAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcblxuICAvKiogQ2FsbGVkIHdpdGggYSByZWYgdG8gdGhlIGlubmVyIG5vZGUuICovXG4gIGlubmVyUmVmOiBjdXN0b21Qcm9wVHlwZXMucmVmLFxuXG4gIC8qKiBUaGUgbm9kZSB3aGVyZSB0aGUgcG9ydGFsIHNob3VsZCBtb3VudC4gKi9cbiAgbW91bnROb2RlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgcG9ydGFsIGlzIG1vdW50ZWQgb24gdGhlIERPTVxuICAgKlxuICAgKiBAcGFyYW0ge251bGx9XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gQWxsIHByb3BzLlxuICAgKi9cbiAgb25Nb3VudDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBwb3J0YWwgaXMgdW5tb3VudGVkIGZyb20gdGhlIERPTVxuICAgKlxuICAgKiBAcGFyYW0ge251bGx9XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gQWxsIHByb3BzLlxuICAgKi9cbiAgb25Vbm1vdW50OiBQcm9wVHlwZXMuZnVuY1xufSA6IHt9O1xuZXhwb3J0IGRlZmF1bHQgUG9ydGFsSW5uZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0SXMgZnJvbSAncmVhY3QtaXMnO1xuLyoqXG4gKiBBc3NlcnRzIHRoYXQgYSBwYXNzZWQgZWxlbWVudCBjYW4gYmUgdXNlZCBjbG9uZWQgYSBwcm9wcyB3aWxsIGJlIGFwcGxpZWQgcHJvcGVybHkuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVUcmlnZ2VyKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQpIHtcbiAgICBSZWFjdC5DaGlsZHJlbi5vbmx5KGVsZW1lbnQpO1xuXG4gICAgaWYgKFJlYWN0SXMuaXNGcmFnbWVudChlbGVtZW50KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbiBcIlJlYWN0LkZyYWdtZW50XCIgY2Fubm90IGJlIHVzZWQgYXMgYSBgdHJpZ2dlcmAuJyk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgY3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNoaWxkcmVuVXRpbHMsIGN1c3RvbVByb3BUeXBlcywgZ2V0RWxlbWVudFR5cGUsIGdldFVuaGFuZGxlZFByb3BzLCBTVUksIHVzZUtleU9ubHksIHVzZVRleHRBbGlnblByb3AgfSBmcm9tICcuLi8uLi9saWInO1xuLyoqXG4gKiBBIGNvbnRhaW5lciBsaW1pdHMgY29udGVudCB0byBhIG1heGltdW0gd2lkdGguXG4gKi9cblxuZnVuY3Rpb24gQ29udGFpbmVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY29udGVudCA9IHByb3BzLmNvbnRlbnQsXG4gICAgICBmbHVpZCA9IHByb3BzLmZsdWlkLFxuICAgICAgdGV4dCA9IHByb3BzLnRleHQsXG4gICAgICB0ZXh0QWxpZ24gPSBwcm9wcy50ZXh0QWxpZ247XG4gIHZhciBjbGFzc2VzID0gY3goJ3VpJywgdXNlS2V5T25seSh0ZXh0LCAndGV4dCcpLCB1c2VLZXlPbmx5KGZsdWlkLCAnZmx1aWQnKSwgdXNlVGV4dEFsaWduUHJvcCh0ZXh0QWxpZ24pLCAnY29udGFpbmVyJywgY2xhc3NOYW1lKTtcbiAgdmFyIHJlc3QgPSBnZXRVbmhhbmRsZWRQcm9wcyhDb250YWluZXIsIHByb3BzKTtcbiAgdmFyIEVsZW1lbnRUeXBlID0gZ2V0RWxlbWVudFR5cGUoQ29udGFpbmVyLCBwcm9wcyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChFbGVtZW50VHlwZSwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSksIGNoaWxkcmVuVXRpbHMuaXNOaWwoY2hpbGRyZW4pID8gY29udGVudCA6IGNoaWxkcmVuKTtcbn1cblxuQ29udGFpbmVyLmhhbmRsZWRQcm9wcyA9IFtcImFzXCIsIFwiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJjb250ZW50XCIsIFwiZmx1aWRcIiwgXCJ0ZXh0XCIsIFwidGV4dEFsaWduXCJdO1xuQ29udGFpbmVyLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqIEFuIGVsZW1lbnQgdHlwZSB0byByZW5kZXIgYXMgKHN0cmluZyBvciBmdW5jdGlvbikuICovXG4gIGFzOiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqIFByaW1hcnkgY29udGVudC4gKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKiBBZGRpdGlvbmFsIGNsYXNzZXMuICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogU2hvcnRoYW5kIGZvciBwcmltYXJ5IGNvbnRlbnQuICovXG4gIGNvbnRlbnQ6IGN1c3RvbVByb3BUeXBlcy5jb250ZW50U2hvcnRoYW5kLFxuXG4gIC8qKiBDb250YWluZXIgaGFzIG5vIG1heGltdW0gd2lkdGguICovXG4gIGZsdWlkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogUmVkdWNlIG1heGltdW0gd2lkdGggdG8gbW9yZSBuYXR1cmFsbHkgYWNjb21tb2RhdGUgdGV4dC4gKi9cbiAgdGV4dDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEFsaWduIGNvbnRhaW5lciB0ZXh0LiAqL1xuICB0ZXh0QWxpZ246IFByb3BUeXBlcy5vbmVPZihTVUkuVEVYVF9BTElHTk1FTlRTKVxufSA6IHt9O1xuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IGN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjaGlsZHJlblV0aWxzLCBjdXN0b21Qcm9wVHlwZXMsIGdldEVsZW1lbnRUeXBlLCBnZXRVbmhhbmRsZWRQcm9wcywgdXNlS2V5T25seSB9IGZyb20gJy4uLy4uL2xpYic7XG4vKipcbiAqIEEgZGl2aWRlciB2aXN1YWxseSBzZWdtZW50cyBjb250ZW50IGludG8gZ3JvdXBzLlxuICovXG5cbmZ1bmN0aW9uIERpdmlkZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjbGVhcmluZyA9IHByb3BzLmNsZWFyaW5nLFxuICAgICAgY29udGVudCA9IHByb3BzLmNvbnRlbnQsXG4gICAgICBmaXR0ZWQgPSBwcm9wcy5maXR0ZWQsXG4gICAgICBoaWRkZW4gPSBwcm9wcy5oaWRkZW4sXG4gICAgICBob3Jpem9udGFsID0gcHJvcHMuaG9yaXpvbnRhbCxcbiAgICAgIGludmVydGVkID0gcHJvcHMuaW52ZXJ0ZWQsXG4gICAgICBzZWN0aW9uID0gcHJvcHMuc2VjdGlvbixcbiAgICAgIHZlcnRpY2FsID0gcHJvcHMudmVydGljYWw7XG4gIHZhciBjbGFzc2VzID0gY3goJ3VpJywgdXNlS2V5T25seShjbGVhcmluZywgJ2NsZWFyaW5nJyksIHVzZUtleU9ubHkoZml0dGVkLCAnZml0dGVkJyksIHVzZUtleU9ubHkoaGlkZGVuLCAnaGlkZGVuJyksIHVzZUtleU9ubHkoaG9yaXpvbnRhbCwgJ2hvcml6b250YWwnKSwgdXNlS2V5T25seShpbnZlcnRlZCwgJ2ludmVydGVkJyksIHVzZUtleU9ubHkoc2VjdGlvbiwgJ3NlY3Rpb24nKSwgdXNlS2V5T25seSh2ZXJ0aWNhbCwgJ3ZlcnRpY2FsJyksICdkaXZpZGVyJywgY2xhc3NOYW1lKTtcbiAgdmFyIHJlc3QgPSBnZXRVbmhhbmRsZWRQcm9wcyhEaXZpZGVyLCBwcm9wcyk7XG4gIHZhciBFbGVtZW50VHlwZSA9IGdldEVsZW1lbnRUeXBlKERpdmlkZXIsIHByb3BzKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEVsZW1lbnRUeXBlLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSwgY2hpbGRyZW5VdGlscy5pc05pbChjaGlsZHJlbikgPyBjb250ZW50IDogY2hpbGRyZW4pO1xufVxuXG5EaXZpZGVyLmhhbmRsZWRQcm9wcyA9IFtcImFzXCIsIFwiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJjbGVhcmluZ1wiLCBcImNvbnRlbnRcIiwgXCJmaXR0ZWRcIiwgXCJoaWRkZW5cIiwgXCJob3Jpem9udGFsXCIsIFwiaW52ZXJ0ZWRcIiwgXCJzZWN0aW9uXCIsIFwidmVydGljYWxcIl07XG5EaXZpZGVyLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqIEFuIGVsZW1lbnQgdHlwZSB0byByZW5kZXIgYXMgKHN0cmluZyBvciBmdW5jdGlvbikuICovXG4gIGFzOiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqIFByaW1hcnkgY29udGVudC4gKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKiBBZGRpdGlvbmFsIGNsYXNzZXMuICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogRGl2aWRlciBjYW4gY2xlYXIgdGhlIGNvbnRlbnQgYWJvdmUgaXQuICovXG4gIGNsZWFyaW5nOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogU2hvcnRoYW5kIGZvciBwcmltYXJ5IGNvbnRlbnQuICovXG4gIGNvbnRlbnQ6IGN1c3RvbVByb3BUeXBlcy5jb250ZW50U2hvcnRoYW5kLFxuXG4gIC8qKiBEaXZpZGVyIGNhbiBiZSBmaXR0ZWQgd2l0aG91dCBhbnkgc3BhY2UgYWJvdmUgb3IgYmVsb3cgaXQuICovXG4gIGZpdHRlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIERpdmlkZXIgY2FuIGRpdmlkZSBjb250ZW50IHdpdGhvdXQgY3JlYXRpbmcgYSBkaXZpZGluZyBsaW5lLiAqL1xuICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBEaXZpZGVyIGNhbiBzZWdtZW50IGNvbnRlbnQgaG9yaXpvbnRhbGx5LiAqL1xuICBob3Jpem9udGFsOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogRGl2aWRlciBjYW4gaGF2ZSBpdHMgY29sb3VycyBpbnZlcnRlZC4gKi9cbiAgaW52ZXJ0ZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBEaXZpZGVyIGNhbiBwcm92aWRlIGdyZWF0ZXIgbWFyZ2lucyB0byBkaXZpZGUgc2VjdGlvbnMgb2YgY29udGVudC4gKi9cbiAgc2VjdGlvbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIERpdmlkZXIgY2FuIHNlZ21lbnQgY29udGVudCB2ZXJ0aWNhbGx5LiAqL1xuICB2ZXJ0aWNhbDogUHJvcFR5cGVzLmJvb2xcbn0gOiB7fTtcbmV4cG9ydCBkZWZhdWx0IERpdmlkZXI7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX3dpdGhvdXQgZnJvbSBcImxvZGFzaC1lcy93aXRob3V0XCI7XG5pbXBvcnQgY3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNoaWxkcmVuVXRpbHMsIGN1c3RvbVByb3BUeXBlcywgZ2V0RWxlbWVudFR5cGUsIGdldFVuaGFuZGxlZFByb3BzLCBTVUksIHVzZVZhbHVlQW5kS2V5LCB1c2VUZXh0QWxpZ25Qcm9wLCB1c2VLZXlPclZhbHVlQW5kS2V5LCB1c2VLZXlPbmx5IH0gZnJvbSAnLi4vLi4vbGliJztcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24nO1xuaW1wb3J0IEltYWdlIGZyb20gJy4uL0ltYWdlJztcbmltcG9ydCBIZWFkZXJTdWJoZWFkZXIgZnJvbSAnLi9IZWFkZXJTdWJoZWFkZXInO1xuaW1wb3J0IEhlYWRlckNvbnRlbnQgZnJvbSAnLi9IZWFkZXJDb250ZW50Jztcbi8qKlxuICogQSBoZWFkZXIgcHJvdmlkZXMgYSBzaG9ydCBzdW1tYXJ5IG9mIGNvbnRlbnRcbiAqL1xuXG5mdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcbiAgdmFyIGF0dGFjaGVkID0gcHJvcHMuYXR0YWNoZWQsXG4gICAgICBibG9jayA9IHByb3BzLmJsb2NrLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBjb250ZW50ID0gcHJvcHMuY29udGVudCxcbiAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBkaXZpZGluZyA9IHByb3BzLmRpdmlkaW5nLFxuICAgICAgZmxvYXRlZCA9IHByb3BzLmZsb2F0ZWQsXG4gICAgICBpY29uID0gcHJvcHMuaWNvbixcbiAgICAgIGltYWdlID0gcHJvcHMuaW1hZ2UsXG4gICAgICBpbnZlcnRlZCA9IHByb3BzLmludmVydGVkLFxuICAgICAgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICBzdWIgPSBwcm9wcy5zdWIsXG4gICAgICBzdWJoZWFkZXIgPSBwcm9wcy5zdWJoZWFkZXIsXG4gICAgICB0ZXh0QWxpZ24gPSBwcm9wcy50ZXh0QWxpZ247XG4gIHZhciBjbGFzc2VzID0gY3goJ3VpJywgY29sb3IsIHNpemUsIHVzZUtleU9ubHkoYmxvY2ssICdibG9jaycpLCB1c2VLZXlPbmx5KGRpc2FibGVkLCAnZGlzYWJsZWQnKSwgdXNlS2V5T25seShkaXZpZGluZywgJ2RpdmlkaW5nJyksIHVzZVZhbHVlQW5kS2V5KGZsb2F0ZWQsICdmbG9hdGVkJyksIHVzZUtleU9ubHkoaWNvbiA9PT0gdHJ1ZSwgJ2ljb24nKSwgdXNlS2V5T25seShpbWFnZSA9PT0gdHJ1ZSwgJ2ltYWdlJyksIHVzZUtleU9ubHkoaW52ZXJ0ZWQsICdpbnZlcnRlZCcpLCB1c2VLZXlPbmx5KHN1YiwgJ3N1YicpLCB1c2VLZXlPclZhbHVlQW5kS2V5KGF0dGFjaGVkLCAnYXR0YWNoZWQnKSwgdXNlVGV4dEFsaWduUHJvcCh0ZXh0QWxpZ24pLCAnaGVhZGVyJywgY2xhc3NOYW1lKTtcbiAgdmFyIHJlc3QgPSBnZXRVbmhhbmRsZWRQcm9wcyhIZWFkZXIsIHByb3BzKTtcbiAgdmFyIEVsZW1lbnRUeXBlID0gZ2V0RWxlbWVudFR5cGUoSGVhZGVyLCBwcm9wcyk7XG5cbiAgaWYgKCFjaGlsZHJlblV0aWxzLmlzTmlsKGNoaWxkcmVuKSkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChFbGVtZW50VHlwZSwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICAgIH0pLCBjaGlsZHJlbik7XG4gIH1cblxuICB2YXIgaWNvbkVsZW1lbnQgPSBJY29uLmNyZWF0ZShpY29uLCB7XG4gICAgYXV0b0dlbmVyYXRlS2V5OiBmYWxzZVxuICB9KTtcbiAgdmFyIGltYWdlRWxlbWVudCA9IEltYWdlLmNyZWF0ZShpbWFnZSwge1xuICAgIGF1dG9HZW5lcmF0ZUtleTogZmFsc2VcbiAgfSk7XG4gIHZhciBzdWJoZWFkZXJFbGVtZW50ID0gSGVhZGVyU3ViaGVhZGVyLmNyZWF0ZShzdWJoZWFkZXIsIHtcbiAgICBhdXRvR2VuZXJhdGVLZXk6IGZhbHNlXG4gIH0pO1xuXG4gIGlmIChpY29uRWxlbWVudCB8fCBpbWFnZUVsZW1lbnQpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRWxlbWVudFR5cGUsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9KSwgaWNvbkVsZW1lbnQgfHwgaW1hZ2VFbGVtZW50LCAoY29udGVudCB8fCBzdWJoZWFkZXJFbGVtZW50KSAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJDb250ZW50LCBudWxsLCBjb250ZW50LCBzdWJoZWFkZXJFbGVtZW50KSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRWxlbWVudFR5cGUsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pLCBjb250ZW50LCBzdWJoZWFkZXJFbGVtZW50KTtcbn1cblxuSGVhZGVyLmhhbmRsZWRQcm9wcyA9IFtcImFzXCIsIFwiYXR0YWNoZWRcIiwgXCJibG9ja1wiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJjb250ZW50XCIsIFwiZGlzYWJsZWRcIiwgXCJkaXZpZGluZ1wiLCBcImZsb2F0ZWRcIiwgXCJpY29uXCIsIFwiaW1hZ2VcIiwgXCJpbnZlcnRlZFwiLCBcInNpemVcIiwgXCJzdWJcIiwgXCJzdWJoZWFkZXJcIiwgXCJ0ZXh0QWxpZ25cIl07XG5IZWFkZXIucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKiogQW4gZWxlbWVudCB0eXBlIHRvIHJlbmRlciBhcyAoc3RyaW5nIG9yIGZ1bmN0aW9uKS4gKi9cbiAgYXM6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKiogQXR0YWNoIGhlYWRlciAgdG8gb3RoZXIgY29udGVudCwgbGlrZSBhIHNlZ21lbnQuICovXG4gIGF0dGFjaGVkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLm9uZU9mKFsndG9wJywgJ2JvdHRvbSddKV0pLFxuXG4gIC8qKiBGb3JtYXQgaGVhZGVyIHRvIGFwcGVhciBpbnNpZGUgYSBjb250ZW50IGJsb2NrLiAqL1xuICBibG9jazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIFByaW1hcnkgY29udGVudC4gKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKiBBZGRpdGlvbmFsIGNsYXNzZXMuICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogQ29sb3Igb2YgdGhlIGhlYWRlci4gKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihTVUkuQ09MT1JTKSxcblxuICAvKiogU2hvcnRoYW5kIGZvciBwcmltYXJ5IGNvbnRlbnQuICovXG4gIGNvbnRlbnQ6IGN1c3RvbVByb3BUeXBlcy5jb250ZW50U2hvcnRoYW5kLFxuXG4gIC8qKiBTaG93IHRoYXQgdGhlIGhlYWRlciBpcyBpbmFjdGl2ZS4gKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBEaXZpZGUgaGVhZGVyIGZyb20gdGhlIGNvbnRlbnQgYmVsb3cgaXQuICovXG4gIGRpdmlkaW5nOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogSGVhZGVyIGNhbiBzaXQgdG8gdGhlIGxlZnQgb3IgcmlnaHQgb2Ygb3RoZXIgY29udGVudC4gKi9cbiAgZmxvYXRlZDogUHJvcFR5cGVzLm9uZU9mKFNVSS5GTE9BVFMpLFxuXG4gIC8qKiBBZGQgYW4gaWNvbiBieSBpY29uIG5hbWUgb3IgcGFzcyBhbiBJY29uLiAqL1xuICBpY29uOiBjdXN0b21Qcm9wVHlwZXMuZXZlcnkoW2N1c3RvbVByb3BUeXBlcy5kaXNhbGxvdyhbJ2ltYWdlJ10pLCBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgY3VzdG9tUHJvcFR5cGVzLml0ZW1TaG9ydGhhbmRdKV0pLFxuXG4gIC8qKiBBZGQgYW4gaW1hZ2UgYnkgaW1nIHNyYyBvciBwYXNzIGFuIEltYWdlLiAqL1xuICBpbWFnZTogY3VzdG9tUHJvcFR5cGVzLmV2ZXJ5KFtjdXN0b21Qcm9wVHlwZXMuZGlzYWxsb3coWydpY29uJ10pLCBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgY3VzdG9tUHJvcFR5cGVzLml0ZW1TaG9ydGhhbmRdKV0pLFxuXG4gIC8qKiBJbnZlcnRzIHRoZSBjb2xvciBvZiB0aGUgaGVhZGVyIGZvciBkYXJrIGJhY2tncm91bmRzLiAqL1xuICBpbnZlcnRlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIENvbnRlbnQgaGVhZGluZ3MgYXJlIHNpemVkIHdpdGggZW0gYW5kIGFyZSBiYXNlZCBvbiB0aGUgZm9udC1zaXplIG9mIHRoZWlyIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKF93aXRob3V0KFNVSS5TSVpFUywgJ2JpZycsICdtYXNzaXZlJywgJ21pbmknKSksXG5cbiAgLyoqIEhlYWRlcnMgbWF5IGJlIGZvcm1hdHRlZCB0byBsYWJlbCBzbWFsbGVyIG9yIGRlLWVtcGhhc2l6ZWQgY29udGVudC4gKi9cbiAgc3ViOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogU2hvcnRoYW5kIGZvciBIZWFkZXIuU3ViaGVhZGVyLiAqL1xuICBzdWJoZWFkZXI6IGN1c3RvbVByb3BUeXBlcy5pdGVtU2hvcnRoYW5kLFxuXG4gIC8qKiBBbGlnbiBoZWFkZXIgY29udGVudC4gKi9cbiAgdGV4dEFsaWduOiBQcm9wVHlwZXMub25lT2YoU1VJLlRFWFRfQUxJR05NRU5UUylcbn0gOiB7fTtcbkhlYWRlci5Db250ZW50ID0gSGVhZGVyQ29udGVudDtcbkhlYWRlci5TdWJoZWFkZXIgPSBIZWFkZXJTdWJoZWFkZXI7XG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgY3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNoaWxkcmVuVXRpbHMsIGN1c3RvbVByb3BUeXBlcywgZ2V0RWxlbWVudFR5cGUsIGdldFVuaGFuZGxlZFByb3BzIH0gZnJvbSAnLi4vLi4vbGliJztcbi8qKlxuICogSGVhZGVyIGNvbnRlbnQgd3JhcHMgdGhlIG1haW4gY29udGVudCB3aGVuIHRoZXJlIGlzIGFuIGFkamFjZW50IEljb24gb3IgSW1hZ2UuXG4gKi9cblxuZnVuY3Rpb24gSGVhZGVyQ29udGVudChwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNvbnRlbnQgPSBwcm9wcy5jb250ZW50O1xuICB2YXIgY2xhc3NlcyA9IGN4KCdjb250ZW50JywgY2xhc3NOYW1lKTtcbiAgdmFyIHJlc3QgPSBnZXRVbmhhbmRsZWRQcm9wcyhIZWFkZXJDb250ZW50LCBwcm9wcyk7XG4gIHZhciBFbGVtZW50VHlwZSA9IGdldEVsZW1lbnRUeXBlKEhlYWRlckNvbnRlbnQsIHByb3BzKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEVsZW1lbnRUeXBlLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSwgY2hpbGRyZW5VdGlscy5pc05pbChjaGlsZHJlbikgPyBjb250ZW50IDogY2hpbGRyZW4pO1xufVxuXG5IZWFkZXJDb250ZW50LmhhbmRsZWRQcm9wcyA9IFtcImFzXCIsIFwiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJjb250ZW50XCJdO1xuSGVhZGVyQ29udGVudC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKiBBbiBlbGVtZW50IHR5cGUgdG8gcmVuZGVyIGFzIChzdHJpbmcgb3IgZnVuY3Rpb24pLiAqL1xuICBhczogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKiBQcmltYXJ5IGNvbnRlbnQuICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKiogQWRkaXRpb25hbCBjbGFzc2VzLiAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqIFNob3J0aGFuZCBmb3IgcHJpbWFyeSBjb250ZW50LiAqL1xuICBjb250ZW50OiBjdXN0b21Qcm9wVHlwZXMuY29udGVudFNob3J0aGFuZFxufSA6IHt9O1xuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQ29udGVudDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBjeCBmcm9tICdjbHN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY2hpbGRyZW5VdGlscywgY3JlYXRlU2hvcnRoYW5kRmFjdG9yeSwgY3VzdG9tUHJvcFR5cGVzLCBnZXRFbGVtZW50VHlwZSwgZ2V0VW5oYW5kbGVkUHJvcHMgfSBmcm9tICcuLi8uLi9saWInO1xuLyoqXG4gKiBIZWFkZXJzIG1heSBjb250YWluIHN1YmhlYWRlcnMuXG4gKi9cblxuZnVuY3Rpb24gSGVhZGVyU3ViaGVhZGVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY29udGVudCA9IHByb3BzLmNvbnRlbnQ7XG4gIHZhciBjbGFzc2VzID0gY3goJ3N1YiBoZWFkZXInLCBjbGFzc05hbWUpO1xuICB2YXIgcmVzdCA9IGdldFVuaGFuZGxlZFByb3BzKEhlYWRlclN1YmhlYWRlciwgcHJvcHMpO1xuICB2YXIgRWxlbWVudFR5cGUgPSBnZXRFbGVtZW50VHlwZShIZWFkZXJTdWJoZWFkZXIsIHByb3BzKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEVsZW1lbnRUeXBlLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSwgY2hpbGRyZW5VdGlscy5pc05pbChjaGlsZHJlbikgPyBjb250ZW50IDogY2hpbGRyZW4pO1xufVxuXG5IZWFkZXJTdWJoZWFkZXIuaGFuZGxlZFByb3BzID0gW1wiYXNcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcImNvbnRlbnRcIl07XG5IZWFkZXJTdWJoZWFkZXIucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKiogQW4gZWxlbWVudCB0eXBlIHRvIHJlbmRlciBhcyAoc3RyaW5nIG9yIGZ1bmN0aW9uKS4gKi9cbiAgYXM6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKiogUHJpbWFyeSBjb250ZW50LiAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqIEFkZGl0aW9uYWwgY2xhc3Nlcy4gKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBTaG9ydGhhbmQgZm9yIHByaW1hcnkgY29udGVudC4gKi9cbiAgY29udGVudDogY3VzdG9tUHJvcFR5cGVzLmNvbnRlbnRTaG9ydGhhbmRcbn0gOiB7fTtcbkhlYWRlclN1YmhlYWRlci5jcmVhdGUgPSBjcmVhdGVTaG9ydGhhbmRGYWN0b3J5KEhlYWRlclN1YmhlYWRlciwgZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBjb250ZW50OiBjb250ZW50XG4gIH07XG59KTtcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclN1YmhlYWRlcjsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IF93aXRob3V0IGZyb20gXCJsb2Rhc2gtZXMvd2l0aG91dFwiO1xuaW1wb3J0IF9pbnZva2UgZnJvbSBcImxvZGFzaC1lcy9pbnZva2VcIjtcbmltcG9ydCBfaXNOaWwgZnJvbSBcImxvZGFzaC1lcy9pc05pbFwiO1xuaW1wb3J0IGN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU2hvcnRoYW5kRmFjdG9yeSwgY3VzdG9tUHJvcFR5cGVzLCBnZXRFbGVtZW50VHlwZSwgZ2V0VW5oYW5kbGVkUHJvcHMsIFNVSSwgdXNlS2V5T25seSwgdXNlS2V5T3JWYWx1ZUFuZEtleSwgdXNlVmFsdWVBbmRLZXkgfSBmcm9tICcuLi8uLi9saWInO1xuaW1wb3J0IEljb25Hcm91cCBmcm9tICcuL0ljb25Hcm91cCc7XG4vKipcbiAqIEFuIGljb24gaXMgYSBnbHlwaCB1c2VkIHRvIHJlcHJlc2VudCBzb21ldGhpbmcgZWxzZS5cbiAqIEBzZWUgSW1hZ2VcbiAqL1xuXG52YXIgSWNvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1B1cmVDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoSWNvbiwgX1B1cmVDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEljb24oKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1B1cmVDb21wb25lbnQuY2FsbC5hcHBseShfUHVyZUNvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcblxuICAgIF90aGlzLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBkaXNhYmxlZCA9IF90aGlzLnByb3BzLmRpc2FibGVkO1xuXG4gICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF9pbnZva2UoX3RoaXMucHJvcHMsICdvbkNsaWNrJywgZSwgX3RoaXMucHJvcHMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSWNvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldEljb25BcmlhT3B0aW9ucyA9IGZ1bmN0aW9uIGdldEljb25BcmlhT3B0aW9ucygpIHtcbiAgICB2YXIgYXJpYU9wdGlvbnMgPSB7fTtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBhcmlhTGFiZWwgPSBfdGhpcyRwcm9wc1snYXJpYS1sYWJlbCddLFxuICAgICAgICBhcmlhSGlkZGVuID0gX3RoaXMkcHJvcHNbJ2FyaWEtaGlkZGVuJ107XG5cbiAgICBpZiAoX2lzTmlsKGFyaWFMYWJlbCkpIHtcbiAgICAgIGFyaWFPcHRpb25zWydhcmlhLWhpZGRlbiddID0gJ3RydWUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcmlhT3B0aW9uc1snYXJpYS1sYWJlbCddID0gYXJpYUxhYmVsO1xuICAgIH1cblxuICAgIGlmICghX2lzTmlsKGFyaWFIaWRkZW4pKSB7XG4gICAgICBhcmlhT3B0aW9uc1snYXJpYS1oaWRkZW4nXSA9IGFyaWFIaWRkZW47XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyaWFPcHRpb25zO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGJvcmRlcmVkID0gX3RoaXMkcHJvcHMyLmJvcmRlcmVkLFxuICAgICAgICBjaXJjdWxhciA9IF90aGlzJHByb3BzMi5jaXJjdWxhcixcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMyLmNsYXNzTmFtZSxcbiAgICAgICAgY29sb3IgPSBfdGhpcyRwcm9wczIuY29sb3IsXG4gICAgICAgIGNvcm5lciA9IF90aGlzJHByb3BzMi5jb3JuZXIsXG4gICAgICAgIGRpc2FibGVkID0gX3RoaXMkcHJvcHMyLmRpc2FibGVkLFxuICAgICAgICBmaXR0ZWQgPSBfdGhpcyRwcm9wczIuZml0dGVkLFxuICAgICAgICBmbGlwcGVkID0gX3RoaXMkcHJvcHMyLmZsaXBwZWQsXG4gICAgICAgIGludmVydGVkID0gX3RoaXMkcHJvcHMyLmludmVydGVkLFxuICAgICAgICBsaW5rID0gX3RoaXMkcHJvcHMyLmxpbmssXG4gICAgICAgIGxvYWRpbmcgPSBfdGhpcyRwcm9wczIubG9hZGluZyxcbiAgICAgICAgbmFtZSA9IF90aGlzJHByb3BzMi5uYW1lLFxuICAgICAgICByb3RhdGVkID0gX3RoaXMkcHJvcHMyLnJvdGF0ZWQsXG4gICAgICAgIHNpemUgPSBfdGhpcyRwcm9wczIuc2l6ZTtcbiAgICB2YXIgY2xhc3NlcyA9IGN4KGNvbG9yLCBuYW1lLCBzaXplLCB1c2VLZXlPbmx5KGJvcmRlcmVkLCAnYm9yZGVyZWQnKSwgdXNlS2V5T25seShjaXJjdWxhciwgJ2NpcmN1bGFyJyksIHVzZUtleU9ubHkoZGlzYWJsZWQsICdkaXNhYmxlZCcpLCB1c2VLZXlPbmx5KGZpdHRlZCwgJ2ZpdHRlZCcpLCB1c2VLZXlPbmx5KGludmVydGVkLCAnaW52ZXJ0ZWQnKSwgdXNlS2V5T25seShsaW5rLCAnbGluaycpLCB1c2VLZXlPbmx5KGxvYWRpbmcsICdsb2FkaW5nJyksIHVzZUtleU9yVmFsdWVBbmRLZXkoY29ybmVyLCAnY29ybmVyJyksIHVzZVZhbHVlQW5kS2V5KGZsaXBwZWQsICdmbGlwcGVkJyksIHVzZVZhbHVlQW5kS2V5KHJvdGF0ZWQsICdyb3RhdGVkJyksICdpY29uJywgY2xhc3NOYW1lKTtcbiAgICB2YXIgcmVzdCA9IGdldFVuaGFuZGxlZFByb3BzKEljb24sIHRoaXMucHJvcHMpO1xuICAgIHZhciBFbGVtZW50VHlwZSA9IGdldEVsZW1lbnRUeXBlKEljb24sIHRoaXMucHJvcHMpO1xuICAgIHZhciBhcmlhT3B0aW9ucyA9IHRoaXMuZ2V0SWNvbkFyaWFPcHRpb25zKCk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEVsZW1lbnRUeXBlLCBfZXh0ZW5kcyh7fSwgcmVzdCwgYXJpYU9wdGlvbnMsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2tcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIEljb247XG59KFB1cmVDb21wb25lbnQpO1xuXG5JY29uLmhhbmRsZWRQcm9wcyA9IFtcImFyaWEtaGlkZGVuXCIsIFwiYXJpYS1sYWJlbFwiLCBcImFzXCIsIFwiYm9yZGVyZWRcIiwgXCJjaXJjdWxhclwiLCBcImNsYXNzTmFtZVwiLCBcImNvbG9yXCIsIFwiY29ybmVyXCIsIFwiZGlzYWJsZWRcIiwgXCJmaXR0ZWRcIiwgXCJmbGlwcGVkXCIsIFwiaW52ZXJ0ZWRcIiwgXCJsaW5rXCIsIFwibG9hZGluZ1wiLCBcIm5hbWVcIiwgXCJyb3RhdGVkXCIsIFwic2l6ZVwiXTtcbkljb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKiogQW4gZWxlbWVudCB0eXBlIHRvIHJlbmRlciBhcyAoc3RyaW5nIG9yIGZ1bmN0aW9uKS4gKi9cbiAgYXM6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKiogRm9ybWF0dGVkIHRvIGFwcGVhciBib3JkZXJlZC4gKi9cbiAgYm9yZGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBJY29uIGNhbiBmb3JtYXR0ZWQgdG8gYXBwZWFyIGNpcmN1bGFyLiAqL1xuICBjaXJjdWxhcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEFkZGl0aW9uYWwgY2xhc3Nlcy4gKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBDb2xvciBvZiB0aGUgaWNvbi4gKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihTVUkuQ09MT1JTKSxcblxuICAvKiogSWNvbnMgY2FuIGRpc3BsYXkgYSBzbWFsbGVyIGNvcm5lciBpY29uLiAqL1xuICBjb3JuZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMub25lT2YoWyd0b3AgbGVmdCcsICd0b3AgcmlnaHQnLCAnYm90dG9tIGxlZnQnLCAnYm90dG9tIHJpZ2h0J10pXSksXG5cbiAgLyoqIFNob3cgdGhhdCB0aGUgaWNvbiBpcyBpbmFjdGl2ZS4gKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBGaXR0ZWQsIHdpdGhvdXQgc3BhY2UgdG8gbGVmdCBvciByaWdodCBvZiBJY29uLiAqL1xuICBmaXR0ZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBJY29uIGNhbiBiZSBmbGlwcGVkLiAqL1xuICBmbGlwcGVkOiBQcm9wVHlwZXMub25lT2YoWydob3Jpem9udGFsbHknLCAndmVydGljYWxseSddKSxcblxuICAvKiogRm9ybWF0dGVkIHRvIGhhdmUgaXRzIGNvbG9ycyBpbnZlcnRlZCBmb3IgY29udHJhc3QuICovXG4gIGludmVydGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogSWNvbiBjYW4gYmUgZm9ybWF0dGVkIGFzIGEgbGluay4gKi9cbiAgbGluazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEljb24gY2FuIGJlIHVzZWQgYXMgYSBzaW1wbGUgbG9hZGVyLiAqL1xuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogTmFtZSBvZiB0aGUgaWNvbi4gKi9cbiAgbmFtZTogY3VzdG9tUHJvcFR5cGVzLnN1Z2dlc3QoU1VJLkFMTF9JQ09OU19JTl9BTExfQ09OVEVYVFMpLFxuXG4gIC8qKiBJY29uIGNhbiByb3RhdGVkLiAqL1xuICByb3RhdGVkOiBQcm9wVHlwZXMub25lT2YoWydjbG9ja3dpc2UnLCAnY291bnRlcmNsb2Nrd2lzZSddKSxcblxuICAvKiogU2l6ZSBvZiB0aGUgaWNvbi4gKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKF93aXRob3V0KFNVSS5TSVpFUywgJ21lZGl1bScpKSxcblxuICAvKiogSWNvbiBjYW4gaGF2ZSBhbiBhcmlhIGxhYmVsLiAqL1xuICAnYXJpYS1oaWRkZW4nOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBJY29uIGNhbiBoYXZlIGFuIGFyaWEgbGFiZWwuICovXG4gICdhcmlhLWxhYmVsJzogUHJvcFR5cGVzLnN0cmluZ1xufSA6IHt9O1xuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGFzOiAnaSdcbn07XG5JY29uLkdyb3VwID0gSWNvbkdyb3VwO1xuSWNvbi5jcmVhdGUgPSBjcmVhdGVTaG9ydGhhbmRGYWN0b3J5KEljb24sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IHZhbHVlXG4gIH07XG59KTtcbmV4cG9ydCBkZWZhdWx0IEljb247IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX3dpdGhvdXQgZnJvbSBcImxvZGFzaC1lcy93aXRob3V0XCI7XG5pbXBvcnQgY3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNoaWxkcmVuVXRpbHMsIGN1c3RvbVByb3BUeXBlcywgZ2V0RWxlbWVudFR5cGUsIGdldFVuaGFuZGxlZFByb3BzLCBTVUkgfSBmcm9tICcuLi8uLi9saWInO1xuLyoqXG4gKiBTZXZlcmFsIGljb25zIGNhbiBiZSB1c2VkIHRvZ2V0aGVyIGFzIGEgZ3JvdXAuXG4gKi9cblxuZnVuY3Rpb24gSWNvbkdyb3VwKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY29udGVudCA9IHByb3BzLmNvbnRlbnQsXG4gICAgICBzaXplID0gcHJvcHMuc2l6ZTtcbiAgdmFyIGNsYXNzZXMgPSBjeChzaXplLCAnaWNvbnMnLCBjbGFzc05hbWUpO1xuICB2YXIgcmVzdCA9IGdldFVuaGFuZGxlZFByb3BzKEljb25Hcm91cCwgcHJvcHMpO1xuICB2YXIgRWxlbWVudFR5cGUgPSBnZXRFbGVtZW50VHlwZShJY29uR3JvdXAsIHByb3BzKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEVsZW1lbnRUeXBlLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSwgY2hpbGRyZW5VdGlscy5pc05pbChjaGlsZHJlbikgPyBjb250ZW50IDogY2hpbGRyZW4pO1xufVxuXG5JY29uR3JvdXAuaGFuZGxlZFByb3BzID0gW1wiYXNcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcImNvbnRlbnRcIiwgXCJzaXplXCJdO1xuSWNvbkdyb3VwLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqIEFuIGVsZW1lbnQgdHlwZSB0byByZW5kZXIgYXMgKHN0cmluZyBvciBmdW5jdGlvbikuICovXG4gIGFzOiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqIFByaW1hcnkgY29udGVudC4gKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKiBBZGRpdGlvbmFsIGNsYXNzZXMuICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogU2hvcnRoYW5kIGZvciBwcmltYXJ5IGNvbnRlbnQuICovXG4gIGNvbnRlbnQ6IGN1c3RvbVByb3BUeXBlcy5jb250ZW50U2hvcnRoYW5kLFxuXG4gIC8qKiBTaXplIG9mIHRoZSBpY29uIGdyb3VwLiAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoX3dpdGhvdXQoU1VJLlNJWkVTLCAnbWVkaXVtJykpXG59IDoge307XG5JY29uR3JvdXAuZGVmYXVsdFByb3BzID0ge1xuICBhczogJ2knXG59O1xuZXhwb3J0IGRlZmF1bHQgSWNvbkdyb3VwOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9pc05pbCBmcm9tIFwibG9kYXNoLWVzL2lzTmlsXCI7XG5pbXBvcnQgY3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNoaWxkcmVuVXRpbHMsIGNyZWF0ZVNob3J0aGFuZEZhY3RvcnksIGN1c3RvbVByb3BUeXBlcywgZ2V0RWxlbWVudFR5cGUsIGdldFVuaGFuZGxlZFByb3BzLCBodG1sSW1hZ2VQcm9wcywgcGFydGl0aW9uSFRNTFByb3BzLCBTVUksIHVzZUtleU9ubHksIHVzZUtleU9yVmFsdWVBbmRLZXksIHVzZVZhbHVlQW5kS2V5LCB1c2VWZXJ0aWNhbEFsaWduUHJvcCB9IGZyb20gJy4uLy4uL2xpYic7XG5pbXBvcnQgRGltbWVyIGZyb20gJy4uLy4uL21vZHVsZXMvRGltbWVyJztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi9MYWJlbC9MYWJlbCc7XG5pbXBvcnQgSW1hZ2VHcm91cCBmcm9tICcuL0ltYWdlR3JvdXAnO1xuLyoqXG4gKiBBbiBpbWFnZSBpcyBhIGdyYXBoaWMgcmVwcmVzZW50YXRpb24gb2Ygc29tZXRoaW5nLlxuICogQHNlZSBJY29uXG4gKi9cblxuZnVuY3Rpb24gSW1hZ2UocHJvcHMpIHtcbiAgdmFyIGF2YXRhciA9IHByb3BzLmF2YXRhcixcbiAgICAgIGJvcmRlcmVkID0gcHJvcHMuYm9yZGVyZWQsXG4gICAgICBjZW50ZXJlZCA9IHByb3BzLmNlbnRlcmVkLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNpcmN1bGFyID0gcHJvcHMuY2lyY3VsYXIsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjb250ZW50ID0gcHJvcHMuY29udGVudCxcbiAgICAgIGRpbW1lciA9IHByb3BzLmRpbW1lcixcbiAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBmbG9hdGVkID0gcHJvcHMuZmxvYXRlZCxcbiAgICAgIGZsdWlkID0gcHJvcHMuZmx1aWQsXG4gICAgICBoaWRkZW4gPSBwcm9wcy5oaWRkZW4sXG4gICAgICBocmVmID0gcHJvcHMuaHJlZixcbiAgICAgIGlubGluZSA9IHByb3BzLmlubGluZSxcbiAgICAgIGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICByb3VuZGVkID0gcHJvcHMucm91bmRlZCxcbiAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgc3BhY2VkID0gcHJvcHMuc3BhY2VkLFxuICAgICAgdmVydGljYWxBbGlnbiA9IHByb3BzLnZlcnRpY2FsQWxpZ24sXG4gICAgICB3cmFwcGVkID0gcHJvcHMud3JhcHBlZCxcbiAgICAgIHVpID0gcHJvcHMudWk7XG4gIHZhciBjbGFzc2VzID0gY3godXNlS2V5T25seSh1aSwgJ3VpJyksIHNpemUsIHVzZUtleU9ubHkoYXZhdGFyLCAnYXZhdGFyJyksIHVzZUtleU9ubHkoYm9yZGVyZWQsICdib3JkZXJlZCcpLCB1c2VLZXlPbmx5KGNpcmN1bGFyLCAnY2lyY3VsYXInKSwgdXNlS2V5T25seShjZW50ZXJlZCwgJ2NlbnRlcmVkJyksIHVzZUtleU9ubHkoZGlzYWJsZWQsICdkaXNhYmxlZCcpLCB1c2VLZXlPbmx5KGZsdWlkLCAnZmx1aWQnKSwgdXNlS2V5T25seShoaWRkZW4sICdoaWRkZW4nKSwgdXNlS2V5T25seShpbmxpbmUsICdpbmxpbmUnKSwgdXNlS2V5T25seShyb3VuZGVkLCAncm91bmRlZCcpLCB1c2VLZXlPclZhbHVlQW5kS2V5KHNwYWNlZCwgJ3NwYWNlZCcpLCB1c2VWYWx1ZUFuZEtleShmbG9hdGVkLCAnZmxvYXRlZCcpLCB1c2VWZXJ0aWNhbEFsaWduUHJvcCh2ZXJ0aWNhbEFsaWduLCAnYWxpZ25lZCcpLCAnaW1hZ2UnLCBjbGFzc05hbWUpO1xuICB2YXIgcmVzdCA9IGdldFVuaGFuZGxlZFByb3BzKEltYWdlLCBwcm9wcyk7XG5cbiAgdmFyIF9wYXJ0aXRpb25IVE1MUHJvcHMgPSBwYXJ0aXRpb25IVE1MUHJvcHMocmVzdCwge1xuICAgIGh0bWxQcm9wczogaHRtbEltYWdlUHJvcHNcbiAgfSksXG4gICAgICBpbWdUYWdQcm9wcyA9IF9wYXJ0aXRpb25IVE1MUHJvcHNbMF0sXG4gICAgICByb290UHJvcHMgPSBfcGFydGl0aW9uSFRNTFByb3BzWzFdO1xuXG4gIHZhciBFbGVtZW50VHlwZSA9IGdldEVsZW1lbnRUeXBlKEltYWdlLCBwcm9wcywgZnVuY3Rpb24gKCkge1xuICAgIGlmICghX2lzTmlsKGRpbW1lcikgfHwgIV9pc05pbChsYWJlbCkgfHwgIV9pc05pbCh3cmFwcGVkKSB8fCAhY2hpbGRyZW5VdGlscy5pc05pbChjaGlsZHJlbikpIHtcbiAgICAgIHJldHVybiAnZGl2JztcbiAgICB9XG4gIH0pO1xuXG4gIGlmICghY2hpbGRyZW5VdGlscy5pc05pbChjaGlsZHJlbikpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRWxlbWVudFR5cGUsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9KSwgY2hpbGRyZW4pO1xuICB9XG5cbiAgaWYgKCFjaGlsZHJlblV0aWxzLmlzTmlsKGNvbnRlbnQpKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEVsZW1lbnRUeXBlLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gICAgfSksIGNvbnRlbnQpO1xuICB9XG5cbiAgaWYgKEVsZW1lbnRUeXBlID09PSAnaW1nJykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChFbGVtZW50VHlwZSwgX2V4dGVuZHMoe30sIHJvb3RQcm9wcywgaW1nVGFnUHJvcHMsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChFbGVtZW50VHlwZSwgX2V4dGVuZHMoe30sIHJvb3RQcm9wcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICBocmVmOiBocmVmXG4gIH0pLCBEaW1tZXIuY3JlYXRlKGRpbW1lciwge1xuICAgIGF1dG9HZW5lcmF0ZUtleTogZmFsc2VcbiAgfSksIExhYmVsLmNyZWF0ZShsYWJlbCwge1xuICAgIGF1dG9HZW5lcmF0ZUtleTogZmFsc2VcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIGltZ1RhZ1Byb3BzKSk7XG59XG5cbkltYWdlLmhhbmRsZWRQcm9wcyA9IFtcImFzXCIsIFwiYXZhdGFyXCIsIFwiYm9yZGVyZWRcIiwgXCJjZW50ZXJlZFwiLCBcImNoaWxkcmVuXCIsIFwiY2lyY3VsYXJcIiwgXCJjbGFzc05hbWVcIiwgXCJjb250ZW50XCIsIFwiZGltbWVyXCIsIFwiZGlzYWJsZWRcIiwgXCJmbG9hdGVkXCIsIFwiZmx1aWRcIiwgXCJoaWRkZW5cIiwgXCJocmVmXCIsIFwiaW5saW5lXCIsIFwibGFiZWxcIiwgXCJyb3VuZGVkXCIsIFwic2l6ZVwiLCBcInNwYWNlZFwiLCBcInVpXCIsIFwidmVydGljYWxBbGlnblwiLCBcIndyYXBwZWRcIl07XG5JbWFnZS5Hcm91cCA9IEltYWdlR3JvdXA7XG5JbWFnZS5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKiBBbiBlbGVtZW50IHR5cGUgdG8gcmVuZGVyIGFzIChzdHJpbmcgb3IgZnVuY3Rpb24pLiAqL1xuICBhczogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKiBBbiBpbWFnZSBtYXkgYmUgZm9ybWF0dGVkIHRvIGFwcGVhciBpbmxpbmUgd2l0aCB0ZXh0IGFzIGFuIGF2YXRhci4gKi9cbiAgYXZhdGFyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQW4gaW1hZ2UgbWF5IGluY2x1ZGUgYSBib3JkZXIgdG8gZW1waGFzaXplIHRoZSBlZGdlcyBvZiB3aGl0ZSBvciB0cmFuc3BhcmVudCBjb250ZW50LiAqL1xuICBib3JkZXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEFuIGltYWdlIGNhbiBhcHBlYXIgY2VudGVyZWQgaW4gYSBjb250ZW50IGJsb2NrLiAqL1xuICBjZW50ZXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIFByaW1hcnkgY29udGVudC4gKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKiBBbiBpbWFnZSBtYXkgYXBwZWFyIGNpcmN1bGFyLiAqL1xuICBjaXJjdWxhcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEFkZGl0aW9uYWwgY2xhc3Nlcy4gKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBTaG9ydGhhbmQgZm9yIHByaW1hcnkgY29udGVudC4gKi9cbiAgY29udGVudDogY3VzdG9tUHJvcFR5cGVzLmNvbnRlbnRTaG9ydGhhbmQsXG5cbiAgLyoqIEFuIGltYWdlIGNhbiBzaG93IHRoYXQgaXQgaXMgZGlzYWJsZWQgYW5kIGNhbm5vdCBiZSBzZWxlY3RlZC4gKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBTaG9ydGhhbmQgZm9yIERpbW1lci4gKi9cbiAgZGltbWVyOiBjdXN0b21Qcm9wVHlwZXMuaXRlbVNob3J0aGFuZCxcblxuICAvKiogQW4gaW1hZ2UgY2FuIHNpdCB0byB0aGUgbGVmdCBvciByaWdodCBvZiBvdGhlciBjb250ZW50LiAqL1xuICBmbG9hdGVkOiBQcm9wVHlwZXMub25lT2YoU1VJLkZMT0FUUyksXG5cbiAgLyoqIEFuIGltYWdlIGNhbiB0YWtlIHVwIHRoZSB3aWR0aCBvZiBpdHMgY29udGFpbmVyLiAqL1xuICBmbHVpZDogY3VzdG9tUHJvcFR5cGVzLmV2ZXJ5KFtQcm9wVHlwZXMuYm9vbCwgY3VzdG9tUHJvcFR5cGVzLmRpc2FsbG93KFsnc2l6ZSddKV0pLFxuXG4gIC8qKiBBbiBpbWFnZSBjYW4gYmUgaGlkZGVuLiAqL1xuICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBSZW5kZXJzIHRoZSBJbWFnZSBhcyBhbiA8YT4gdGFnIHdpdGggdGhpcyBocmVmLiAqL1xuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBBbiBpbWFnZSBtYXkgYXBwZWFyIGlubGluZS4gKi9cbiAgaW5saW5lOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogU2hvcnRoYW5kIGZvciBMYWJlbC4gKi9cbiAgbGFiZWw6IGN1c3RvbVByb3BUeXBlcy5pdGVtU2hvcnRoYW5kLFxuXG4gIC8qKiBBbiBpbWFnZSBtYXkgYXBwZWFyIHJvdW5kZWQuICovXG4gIHJvdW5kZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBBbiBpbWFnZSBtYXkgYXBwZWFyIGF0IGRpZmZlcmVudCBzaXplcy4gKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFNVSS5TSVpFUyksXG5cbiAgLyoqIEFuIGltYWdlIGNhbiBzcGVjaWZ5IHRoYXQgaXQgbmVlZHMgYW4gYWRkaXRpb25hbCBzcGFjaW5nIHRvIHNlcGFyYXRlIGl0IGZyb20gbmVhcmJ5IGNvbnRlbnQuICovXG4gIHNwYWNlZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnXSldKSxcblxuICAvKiogV2hldGhlciBvciBub3QgdG8gYWRkIHRoZSB1aSBjbGFzc05hbWUuICovXG4gIHVpOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQW4gaW1hZ2UgY2FuIHNwZWNpZnkgaXRzIHZlcnRpY2FsIGFsaWdubWVudC4gKi9cbiAgdmVydGljYWxBbGlnbjogUHJvcFR5cGVzLm9uZU9mKFNVSS5WRVJUSUNBTF9BTElHTk1FTlRTKSxcblxuICAvKiogQW4gaW1hZ2UgY2FuIHJlbmRlciB3cmFwcGVkIGluIGEgYGRpdi51aS5pbWFnZWAgYXMgYWx0ZXJuYXRpdmUgSFRNTCBtYXJrdXAuICovXG4gIHdyYXBwZWQ6IFByb3BUeXBlcy5ib29sXG59IDoge307XG5JbWFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFzOiAnaW1nJyxcbiAgdWk6IHRydWVcbn07XG5JbWFnZS5jcmVhdGUgPSBjcmVhdGVTaG9ydGhhbmRGYWN0b3J5KEltYWdlLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBzcmM6IHZhbHVlXG4gIH07XG59KTtcbmV4cG9ydCBkZWZhdWx0IEltYWdlOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IGN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjaGlsZHJlblV0aWxzLCBjdXN0b21Qcm9wVHlwZXMsIGdldEVsZW1lbnRUeXBlLCBnZXRVbmhhbmRsZWRQcm9wcywgU1VJIH0gZnJvbSAnLi4vLi4vbGliJztcbi8qKlxuICogQSBncm91cCBvZiBpbWFnZXMuXG4gKi9cblxuZnVuY3Rpb24gSW1hZ2VHcm91cChwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNvbnRlbnQgPSBwcm9wcy5jb250ZW50LFxuICAgICAgc2l6ZSA9IHByb3BzLnNpemU7XG4gIHZhciBjbGFzc2VzID0gY3goJ3VpJywgc2l6ZSwgY2xhc3NOYW1lLCAnaW1hZ2VzJyk7XG4gIHZhciByZXN0ID0gZ2V0VW5oYW5kbGVkUHJvcHMoSW1hZ2VHcm91cCwgcHJvcHMpO1xuICB2YXIgRWxlbWVudFR5cGUgPSBnZXRFbGVtZW50VHlwZShJbWFnZUdyb3VwLCBwcm9wcyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChFbGVtZW50VHlwZSwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSksIGNoaWxkcmVuVXRpbHMuaXNOaWwoY2hpbGRyZW4pID8gY29udGVudCA6IGNoaWxkcmVuKTtcbn1cblxuSW1hZ2VHcm91cC5oYW5kbGVkUHJvcHMgPSBbXCJhc1wiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29udGVudFwiLCBcInNpemVcIl07XG5JbWFnZUdyb3VwLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqIEFuIGVsZW1lbnQgdHlwZSB0byByZW5kZXIgYXMgKHN0cmluZyBvciBmdW5jdGlvbikuICovXG4gIGFzOiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqIFByaW1hcnkgY29udGVudC4gKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKiBBZGRpdGlvbmFsIGNsYXNzZXMuICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogU2hvcnRoYW5kIGZvciBwcmltYXJ5IGNvbnRlbnQuICovXG4gIGNvbnRlbnQ6IGN1c3RvbVByb3BUeXBlcy5jb250ZW50U2hvcnRoYW5kLFxuXG4gIC8qKiBBIGdyb3VwIG9mIGltYWdlcyBjYW4gYmUgZm9ybWF0dGVkIHRvIGhhdmUgdGhlIHNhbWUgc2l6ZS4gKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFNVSS5TSVpFUylcbn0gOiB7fTtcbmV4cG9ydCBkZWZhdWx0IEltYWdlR3JvdXA7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBfaXNVbmRlZmluZWQgZnJvbSBcImxvZGFzaC1lcy9pc1VuZGVmaW5lZFwiO1xuaW1wb3J0IF9pbnZva2UgZnJvbSBcImxvZGFzaC1lcy9pbnZva2VcIjtcbmltcG9ydCBjeCBmcm9tICdjbHN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY2hpbGRyZW5VdGlscywgY3JlYXRlU2hvcnRoYW5kRmFjdG9yeSwgY3VzdG9tUHJvcFR5cGVzLCBnZXRFbGVtZW50VHlwZSwgZ2V0VW5oYW5kbGVkUHJvcHMsIFNVSSwgdXNlS2V5T25seSwgdXNlS2V5T3JWYWx1ZUFuZEtleSwgdXNlVmFsdWVBbmRLZXkgfSBmcm9tICcuLi8uLi9saWInO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbi9JY29uJztcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9JbWFnZS9JbWFnZSc7XG5pbXBvcnQgTGFiZWxEZXRhaWwgZnJvbSAnLi9MYWJlbERldGFpbCc7XG5pbXBvcnQgTGFiZWxHcm91cCBmcm9tICcuL0xhYmVsR3JvdXAnO1xuLyoqXG4gKiBBIGxhYmVsIGRpc3BsYXlzIGNvbnRlbnQgY2xhc3NpZmljYXRpb24uXG4gKi9cblxudmFyIExhYmVsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKExhYmVsLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBMYWJlbCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcblxuICAgIF90aGlzLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBvbkNsaWNrID0gX3RoaXMucHJvcHMub25DbGljaztcbiAgICAgIGlmIChvbkNsaWNrKSBvbkNsaWNrKGUsIF90aGlzLnByb3BzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlSWNvbk92ZXJyaWRlcyA9IGZ1bmN0aW9uIChwcmVkZWZpbmVkUHJvcHMpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgIF9pbnZva2UocHJlZGVmaW5lZFByb3BzLCAnb25DbGljaycsIGUpO1xuXG4gICAgICAgICAgX2ludm9rZShfdGhpcy5wcm9wcywgJ29uUmVtb3ZlJywgZSwgX3RoaXMucHJvcHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTGFiZWwucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYWN0aXZlID0gX3RoaXMkcHJvcHMuYWN0aXZlLFxuICAgICAgICBhdHRhY2hlZCA9IF90aGlzJHByb3BzLmF0dGFjaGVkLFxuICAgICAgICBiYXNpYyA9IF90aGlzJHByb3BzLmJhc2ljLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBjaXJjdWxhciA9IF90aGlzJHByb3BzLmNpcmN1bGFyLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbG9yID0gX3RoaXMkcHJvcHMuY29sb3IsXG4gICAgICAgIGNvbnRlbnQgPSBfdGhpcyRwcm9wcy5jb250ZW50LFxuICAgICAgICBjb3JuZXIgPSBfdGhpcyRwcm9wcy5jb3JuZXIsXG4gICAgICAgIGRldGFpbCA9IF90aGlzJHByb3BzLmRldGFpbCxcbiAgICAgICAgZW1wdHkgPSBfdGhpcyRwcm9wcy5lbXB0eSxcbiAgICAgICAgZmxvYXRpbmcgPSBfdGhpcyRwcm9wcy5mbG9hdGluZyxcbiAgICAgICAgaG9yaXpvbnRhbCA9IF90aGlzJHByb3BzLmhvcml6b250YWwsXG4gICAgICAgIGljb24gPSBfdGhpcyRwcm9wcy5pY29uLFxuICAgICAgICBpbWFnZSA9IF90aGlzJHByb3BzLmltYWdlLFxuICAgICAgICBvblJlbW92ZSA9IF90aGlzJHByb3BzLm9uUmVtb3ZlLFxuICAgICAgICBwb2ludGluZyA9IF90aGlzJHByb3BzLnBvaW50aW5nLFxuICAgICAgICBwcm9tcHQgPSBfdGhpcyRwcm9wcy5wcm9tcHQsXG4gICAgICAgIHJlbW92ZUljb24gPSBfdGhpcyRwcm9wcy5yZW1vdmVJY29uLFxuICAgICAgICByaWJib24gPSBfdGhpcyRwcm9wcy5yaWJib24sXG4gICAgICAgIHNpemUgPSBfdGhpcyRwcm9wcy5zaXplLFxuICAgICAgICB0YWcgPSBfdGhpcyRwcm9wcy50YWc7XG4gICAgdmFyIHBvaW50aW5nQ2xhc3MgPSBwb2ludGluZyA9PT0gdHJ1ZSAmJiAncG9pbnRpbmcnIHx8IChwb2ludGluZyA9PT0gJ2xlZnQnIHx8IHBvaW50aW5nID09PSAncmlnaHQnKSAmJiBwb2ludGluZyArIFwiIHBvaW50aW5nXCIgfHwgKHBvaW50aW5nID09PSAnYWJvdmUnIHx8IHBvaW50aW5nID09PSAnYmVsb3cnKSAmJiBcInBvaW50aW5nIFwiICsgcG9pbnRpbmc7XG4gICAgdmFyIGNsYXNzZXMgPSBjeCgndWknLCBjb2xvciwgcG9pbnRpbmdDbGFzcywgc2l6ZSwgdXNlS2V5T25seShhY3RpdmUsICdhY3RpdmUnKSwgdXNlS2V5T25seShiYXNpYywgJ2Jhc2ljJyksIHVzZUtleU9ubHkoY2lyY3VsYXIsICdjaXJjdWxhcicpLCB1c2VLZXlPbmx5KGVtcHR5LCAnZW1wdHknKSwgdXNlS2V5T25seShmbG9hdGluZywgJ2Zsb2F0aW5nJyksIHVzZUtleU9ubHkoaG9yaXpvbnRhbCwgJ2hvcml6b250YWwnKSwgdXNlS2V5T25seShpbWFnZSA9PT0gdHJ1ZSwgJ2ltYWdlJyksIHVzZUtleU9ubHkocHJvbXB0LCAncHJvbXB0JyksIHVzZUtleU9ubHkodGFnLCAndGFnJyksIHVzZUtleU9yVmFsdWVBbmRLZXkoY29ybmVyLCAnY29ybmVyJyksIHVzZUtleU9yVmFsdWVBbmRLZXkocmliYm9uLCAncmliYm9uJyksIHVzZVZhbHVlQW5kS2V5KGF0dGFjaGVkLCAnYXR0YWNoZWQnKSwgJ2xhYmVsJywgY2xhc3NOYW1lKTtcbiAgICB2YXIgcmVzdCA9IGdldFVuaGFuZGxlZFByb3BzKExhYmVsLCB0aGlzLnByb3BzKTtcbiAgICB2YXIgRWxlbWVudFR5cGUgPSBnZXRFbGVtZW50VHlwZShMYWJlbCwgdGhpcy5wcm9wcyk7XG5cbiAgICBpZiAoIWNoaWxkcmVuVXRpbHMuaXNOaWwoY2hpbGRyZW4pKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRWxlbWVudFR5cGUsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDbGlja1xuICAgICAgfSksIGNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICB2YXIgcmVtb3ZlSWNvblNob3J0aGFuZCA9IF9pc1VuZGVmaW5lZChyZW1vdmVJY29uKSA/ICdkZWxldGUnIDogcmVtb3ZlSWNvbjtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRWxlbWVudFR5cGUsIF9leHRlbmRzKHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2tcbiAgICB9LCByZXN0KSwgSWNvbi5jcmVhdGUoaWNvbiwge1xuICAgICAgYXV0b0dlbmVyYXRlS2V5OiBmYWxzZVxuICAgIH0pLCB0eXBlb2YgaW1hZ2UgIT09ICdib29sZWFuJyAmJiBJbWFnZS5jcmVhdGUoaW1hZ2UsIHtcbiAgICAgIGF1dG9HZW5lcmF0ZUtleTogZmFsc2VcbiAgICB9KSwgY29udGVudCwgTGFiZWxEZXRhaWwuY3JlYXRlKGRldGFpbCwge1xuICAgICAgYXV0b0dlbmVyYXRlS2V5OiBmYWxzZVxuICAgIH0pLCBvblJlbW92ZSAmJiBJY29uLmNyZWF0ZShyZW1vdmVJY29uU2hvcnRoYW5kLCB7XG4gICAgICBhdXRvR2VuZXJhdGVLZXk6IGZhbHNlLFxuICAgICAgb3ZlcnJpZGVQcm9wczogdGhpcy5oYW5kbGVJY29uT3ZlcnJpZGVzXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBMYWJlbDtcbn0oQ29tcG9uZW50KTtcblxuTGFiZWwuaGFuZGxlZFByb3BzID0gW1wiYWN0aXZlXCIsIFwiYXNcIiwgXCJhdHRhY2hlZFwiLCBcImJhc2ljXCIsIFwiY2hpbGRyZW5cIiwgXCJjaXJjdWxhclwiLCBcImNsYXNzTmFtZVwiLCBcImNvbG9yXCIsIFwiY29udGVudFwiLCBcImNvcm5lclwiLCBcImRldGFpbFwiLCBcImVtcHR5XCIsIFwiZmxvYXRpbmdcIiwgXCJob3Jpem9udGFsXCIsIFwiaWNvblwiLCBcImltYWdlXCIsIFwib25DbGlja1wiLCBcIm9uUmVtb3ZlXCIsIFwicG9pbnRpbmdcIiwgXCJwcm9tcHRcIiwgXCJyZW1vdmVJY29uXCIsIFwicmliYm9uXCIsIFwic2l6ZVwiLCBcInRhZ1wiXTtcbmV4cG9ydCB7IExhYmVsIGFzIGRlZmF1bHQgfTtcbkxhYmVsLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqIEFuIGVsZW1lbnQgdHlwZSB0byByZW5kZXIgYXMgKHN0cmluZyBvciBmdW5jdGlvbikuICovXG4gIGFzOiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqIEEgbGFiZWwgY2FuIGJlIGFjdGl2ZS4gKi9cbiAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQSBsYWJlbCBjYW4gYXR0YWNoIHRvIGEgY29udGVudCBzZWdtZW50LiAqL1xuICBhdHRhY2hlZDogUHJvcFR5cGVzLm9uZU9mKFsndG9wJywgJ2JvdHRvbScsICd0b3AgcmlnaHQnLCAndG9wIGxlZnQnLCAnYm90dG9tIGxlZnQnLCAnYm90dG9tIHJpZ2h0J10pLFxuXG4gIC8qKiBBIGxhYmVsIGNhbiByZWR1Y2UgaXRzIGNvbXBsZXhpdHkuICovXG4gIGJhc2ljOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogUHJpbWFyeSBjb250ZW50LiAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqIEEgbGFiZWwgY2FuIGJlIGNpcmN1bGFyLiAqL1xuICBjaXJjdWxhcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEFkZGl0aW9uYWwgY2xhc3Nlcy4gKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBDb2xvciBvZiB0aGUgbGFiZWwuICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoU1VJLkNPTE9SUyksXG5cbiAgLyoqIFNob3J0aGFuZCBmb3IgcHJpbWFyeSBjb250ZW50LiAqL1xuICBjb250ZW50OiBjdXN0b21Qcm9wVHlwZXMuY29udGVudFNob3J0aGFuZCxcblxuICAvKiogQSBsYWJlbCBjYW4gcG9zaXRpb24gaXRzZWxmIGluIHRoZSBjb3JuZXIgb2YgYW4gZWxlbWVudC4gKi9cbiAgY29ybmVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCddKV0pLFxuXG4gIC8qKiBTaG9ydGhhbmQgZm9yIExhYmVsRGV0YWlsLiAqL1xuICBkZXRhaWw6IGN1c3RvbVByb3BUeXBlcy5pdGVtU2hvcnRoYW5kLFxuXG4gIC8qKiBGb3JtYXRzIHRoZSBsYWJlbCBhcyBhIGRvdC4gKi9cbiAgZW1wdHk6IGN1c3RvbVByb3BUeXBlcy5ldmVyeShbUHJvcFR5cGVzLmJvb2wsIGN1c3RvbVByb3BUeXBlcy5kZW1hbmQoWydjaXJjdWxhciddKV0pLFxuXG4gIC8qKiBGbG9hdCBhYm92ZSBhbm90aGVyIGVsZW1lbnQgaW4gdGhlIHVwcGVyIHJpZ2h0IGNvcm5lci4gKi9cbiAgZmxvYXRpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBBIGhvcml6b250YWwgbGFiZWwgaXMgZm9ybWF0dGVkIHRvIGxhYmVsIGNvbnRlbnQgYWxvbmctc2lkZSBpdCBob3Jpem9udGFsbHkuICovXG4gIGhvcml6b250YWw6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBTaG9ydGhhbmQgZm9yIEljb24uICovXG4gIGljb246IGN1c3RvbVByb3BUeXBlcy5pdGVtU2hvcnRoYW5kLFxuXG4gIC8qKiBBIGxhYmVsIGNhbiBiZSBmb3JtYXR0ZWQgdG8gZW1waGFzaXplIGFuIGltYWdlIG9yIHByb3AgY2FuIGJlIHVzZWQgYXMgc2hvcnRoYW5kIGZvciBJbWFnZS4gKi9cbiAgaW1hZ2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBjdXN0b21Qcm9wVHlwZXMuaXRlbVNob3J0aGFuZF0pLFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gY2xpY2suXG4gICAqXG4gICAqIEBwYXJhbSB7U3ludGhldGljRXZlbnR9IGV2ZW50IC0gUmVhY3QncyBvcmlnaW5hbCBTeW50aGV0aWNFdmVudC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBBbGwgcHJvcHMuXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQWRkcyBhbiBcInhcIiBpY29uLCBjYWxsZWQgd2hlbiBcInhcIiBpcyBjbGlja2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudCAtIFJlYWN0J3Mgb3JpZ2luYWwgU3ludGhldGljRXZlbnQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gQWxsIHByb3BzLlxuICAgKi9cbiAgb25SZW1vdmU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKiBBIGxhYmVsIGNhbiBwb2ludCB0byBjb250ZW50IG5leHQgdG8gaXQuICovXG4gIHBvaW50aW5nOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLm9uZU9mKFsnYWJvdmUnLCAnYmVsb3cnLCAnbGVmdCcsICdyaWdodCddKV0pLFxuXG4gIC8qKiBBIGxhYmVsIGNhbiBwcm9tcHQgZm9yIGFuIGVycm9yIGluIHlvdXIgZm9ybXMuICovXG4gIHByb21wdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIFNob3J0aGFuZCBmb3IgSWNvbiB0byBhcHBlYXIgYXMgdGhlIGxhc3QgY2hpbGQgYW5kIHRyaWdnZXIgb25SZW1vdmUuICovXG4gIHJlbW92ZUljb246IGN1c3RvbVByb3BUeXBlcy5pdGVtU2hvcnRoYW5kLFxuXG4gIC8qKiBBIGxhYmVsIGNhbiBhcHBlYXIgYXMgYSByaWJib24gYXR0YWNoaW5nIGl0c2VsZiB0byBhbiBlbGVtZW50LiAqL1xuICByaWJib246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMub25lT2YoWydyaWdodCddKV0pLFxuXG4gIC8qKiBBIGxhYmVsIGNhbiBoYXZlIGRpZmZlcmVudCBzaXplcy4gKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFNVSS5TSVpFUyksXG5cbiAgLyoqIEEgbGFiZWwgY2FuIGFwcGVhciBhcyBhIHRhZy4gKi9cbiAgdGFnOiBQcm9wVHlwZXMuYm9vbFxufSA6IHt9O1xuTGFiZWwuRGV0YWlsID0gTGFiZWxEZXRhaWw7XG5MYWJlbC5Hcm91cCA9IExhYmVsR3JvdXA7XG5MYWJlbC5jcmVhdGUgPSBjcmVhdGVTaG9ydGhhbmRGYWN0b3J5KExhYmVsLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBjb250ZW50OiB2YWx1ZVxuICB9O1xufSk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgY3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNoaWxkcmVuVXRpbHMsIGNyZWF0ZVNob3J0aGFuZEZhY3RvcnksIGN1c3RvbVByb3BUeXBlcywgZ2V0RWxlbWVudFR5cGUsIGdldFVuaGFuZGxlZFByb3BzIH0gZnJvbSAnLi4vLi4vbGliJztcblxuZnVuY3Rpb24gTGFiZWxEZXRhaWwocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjb250ZW50ID0gcHJvcHMuY29udGVudDtcbiAgdmFyIGNsYXNzZXMgPSBjeCgnZGV0YWlsJywgY2xhc3NOYW1lKTtcbiAgdmFyIHJlc3QgPSBnZXRVbmhhbmRsZWRQcm9wcyhMYWJlbERldGFpbCwgcHJvcHMpO1xuICB2YXIgRWxlbWVudFR5cGUgPSBnZXRFbGVtZW50VHlwZShMYWJlbERldGFpbCwgcHJvcHMpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRWxlbWVudFR5cGUsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pLCBjaGlsZHJlblV0aWxzLmlzTmlsKGNoaWxkcmVuKSA/IGNvbnRlbnQgOiBjaGlsZHJlbik7XG59XG5cbkxhYmVsRGV0YWlsLmhhbmRsZWRQcm9wcyA9IFtcImFzXCIsIFwiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJjb250ZW50XCJdO1xuTGFiZWxEZXRhaWwucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKiogQW4gZWxlbWVudCB0eXBlIHRvIHJlbmRlciBhcyAoc3RyaW5nIG9yIGZ1bmN0aW9uKS4gKi9cbiAgYXM6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKiogUHJpbWFyeSBjb250ZW50LiAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqIEFkZGl0aW9uYWwgY2xhc3Nlcy4gKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBTaG9ydGhhbmQgZm9yIHByaW1hcnkgY29udGVudC4gKi9cbiAgY29udGVudDogY3VzdG9tUHJvcFR5cGVzLmNvbnRlbnRTaG9ydGhhbmRcbn0gOiB7fTtcbkxhYmVsRGV0YWlsLmNyZWF0ZSA9IGNyZWF0ZVNob3J0aGFuZEZhY3RvcnkoTGFiZWxEZXRhaWwsIGZ1bmN0aW9uICh2YWwpIHtcbiAgcmV0dXJuIHtcbiAgICBjb250ZW50OiB2YWxcbiAgfTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgTGFiZWxEZXRhaWw7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgY3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNoaWxkcmVuVXRpbHMsIGN1c3RvbVByb3BUeXBlcywgZ2V0RWxlbWVudFR5cGUsIGdldFVuaGFuZGxlZFByb3BzLCBTVUksIHVzZUtleU9ubHkgfSBmcm9tICcuLi8uLi9saWInO1xuLyoqXG4gKiBBIGxhYmVsIGNhbiBiZSBncm91cGVkLlxuICovXG5cbmZ1bmN0aW9uIExhYmVsR3JvdXAocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjaXJjdWxhciA9IHByb3BzLmNpcmN1bGFyLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGNvbnRlbnQgPSBwcm9wcy5jb250ZW50LFxuICAgICAgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICB0YWcgPSBwcm9wcy50YWc7XG4gIHZhciBjbGFzc2VzID0gY3goJ3VpJywgY29sb3IsIHNpemUsIHVzZUtleU9ubHkoY2lyY3VsYXIsICdjaXJjdWxhcicpLCB1c2VLZXlPbmx5KHRhZywgJ3RhZycpLCAnbGFiZWxzJywgY2xhc3NOYW1lKTtcbiAgdmFyIHJlc3QgPSBnZXRVbmhhbmRsZWRQcm9wcyhMYWJlbEdyb3VwLCBwcm9wcyk7XG4gIHZhciBFbGVtZW50VHlwZSA9IGdldEVsZW1lbnRUeXBlKExhYmVsR3JvdXAsIHByb3BzKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEVsZW1lbnRUeXBlLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSwgY2hpbGRyZW5VdGlscy5pc05pbChjaGlsZHJlbikgPyBjb250ZW50IDogY2hpbGRyZW4pO1xufVxuXG5MYWJlbEdyb3VwLmhhbmRsZWRQcm9wcyA9IFtcImFzXCIsIFwiY2hpbGRyZW5cIiwgXCJjaXJjdWxhclwiLCBcImNsYXNzTmFtZVwiLCBcImNvbG9yXCIsIFwiY29udGVudFwiLCBcInNpemVcIiwgXCJ0YWdcIl07XG5MYWJlbEdyb3VwLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqIEFuIGVsZW1lbnQgdHlwZSB0byByZW5kZXIgYXMgKHN0cmluZyBvciBmdW5jdGlvbikuICovXG4gIGFzOiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqIFByaW1hcnkgY29udGVudC4gKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKiBMYWJlbHMgY2FuIHNoYXJlIHNoYXBlcy4gKi9cbiAgY2lyY3VsYXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBBZGRpdGlvbmFsIGNsYXNzZXMuICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogTGFiZWwgZ3JvdXAgY2FuIHNoYXJlIGNvbG9ycyB0b2dldGhlci4gKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihTVUkuQ09MT1JTKSxcblxuICAvKiogU2hvcnRoYW5kIGZvciBwcmltYXJ5IGNvbnRlbnQuICovXG4gIGNvbnRlbnQ6IGN1c3RvbVByb3BUeXBlcy5jb250ZW50U2hvcnRoYW5kLFxuXG4gIC8qKiBMYWJlbCBncm91cCBjYW4gc2hhcmUgc2l6ZXMgdG9nZXRoZXIuICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihTVUkuU0laRVMpLFxuXG4gIC8qKiBMYWJlbCBncm91cCBjYW4gc2hhcmUgdGFnIGZvcm1hdHRpbmcuICovXG4gIHRhZzogUHJvcFR5cGVzLmJvb2xcbn0gOiB7fTtcbmV4cG9ydCBkZWZhdWx0IExhYmVsR3JvdXA7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBfaXNVbmRlZmluZWQgZnJvbSBcImxvZGFzaC1lcy9pc1VuZGVmaW5lZFwiO1xuaW1wb3J0IF9zdGFydHNXaXRoIGZyb20gXCJsb2Rhc2gtZXMvc3RhcnRzV2l0aFwiO1xuaW1wb3J0IF9maWx0ZXIgZnJvbSBcImxvZGFzaC1lcy9maWx0ZXJcIjtcbmltcG9ydCBfaXNFbXB0eSBmcm9tIFwibG9kYXNoLWVzL2lzRW1wdHlcIjtcbmltcG9ydCBfa2V5cyBmcm9tIFwibG9kYXNoLWVzL2tleXNcIjtcbmltcG9ydCBfaW50ZXJzZWN0aW9uIGZyb20gXCJsb2Rhc2gtZXMvaW50ZXJzZWN0aW9uXCI7XG5pbXBvcnQgX2hhcyBmcm9tIFwibG9kYXNoLWVzL2hhc1wiO1xuaW1wb3J0IF9lYWNoIGZyb20gXCJsb2Rhc2gtZXMvZWFjaFwiO1xuaW1wb3J0IF9pbnZva2UgZnJvbSBcImxvZGFzaC1lcy9pbnZva2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnZhciBnZXREZWZhdWx0UHJvcE5hbWUgPSBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcE5hbWUocHJvcCkge1xuICByZXR1cm4gXCJkZWZhdWx0XCIgKyAocHJvcFswXS50b1VwcGVyQ2FzZSgpICsgcHJvcC5zbGljZSgxKSk7XG59O1xuLyoqXG4gKiBSZXR1cm4gdGhlIGF1dG8gY29udHJvbGxlZCBzdGF0ZSB2YWx1ZSBmb3IgYSBnaXZlIHByb3AuIFRoZSBpbml0aWFsIHZhbHVlIGlzIGNob3NlbiBpbiB0aGlzIG9yZGVyOlxuICogIC0gcmVndWxhciBwcm9wc1xuICogIC0gdGhlbiwgZGVmYXVsdCBwcm9wc1xuICogIC0gdGhlbiwgaW5pdGlhbCBzdGF0ZVxuICogIC0gdGhlbiwgYGNoZWNrZWRgIGRlZmF1bHRzIHRvIGZhbHNlXG4gKiAgLSB0aGVuLCBgdmFsdWVgIGRlZmF1bHRzIHRvICcnIG9yIFtdIGlmIHByb3BzLm11bHRpcGxlXG4gKiAgLSBlbHNlLCB1bmRlZmluZWRcbiAqXG4gKiAgQHBhcmFtIHtzdHJpbmd9IHByb3BOYW1lIEEgcHJvcCBuYW1lXG4gKiAgQHBhcmFtIHtvYmplY3R9IFtwcm9wc10gQSBwcm9wcyBvYmplY3RcbiAqICBAcGFyYW0ge29iamVjdH0gW3N0YXRlXSBBIHN0YXRlIG9iamVjdFxuICogIEBwYXJhbSB7Ym9vbGVhbn0gW2luY2x1ZGVEZWZhdWx0cz1mYWxzZV0gV2hldGhlciBvciBub3QgdG8gaGVlZCB0aGUgZGVmYXVsdCBwcm9wcyBvciBpbml0aWFsIHN0YXRlXG4gKi9cblxuXG52YXIgZ2V0QXV0b0NvbnRyb2xsZWRTdGF0ZVZhbHVlID0gZnVuY3Rpb24gZ2V0QXV0b0NvbnRyb2xsZWRTdGF0ZVZhbHVlKHByb3BOYW1lLCBwcm9wcywgc3RhdGUsIGluY2x1ZGVEZWZhdWx0cykge1xuICBpZiAoaW5jbHVkZURlZmF1bHRzID09PSB2b2lkIDApIHtcbiAgICBpbmNsdWRlRGVmYXVsdHMgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIHJlZ3VsYXIgcHJvcHNcbiAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgaWYgKHByb3BWYWx1ZSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gcHJvcFZhbHVlO1xuXG4gIGlmIChpbmNsdWRlRGVmYXVsdHMpIHtcbiAgICAvLyBkZWZhdWx0UHJvcHNcbiAgICB2YXIgZGVmYXVsdFByb3AgPSBwcm9wc1tnZXREZWZhdWx0UHJvcE5hbWUocHJvcE5hbWUpXTtcbiAgICBpZiAoZGVmYXVsdFByb3AgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGRlZmF1bHRQcm9wOyAvLyBpbml0aWFsIHN0YXRlIC0gc3RhdGUgbWF5IGJlIG51bGwgb3IgdW5kZWZpbmVkXG5cbiAgICBpZiAoc3RhdGUpIHtcbiAgICAgIHZhciBpbml0aWFsU3RhdGUgPSBzdGF0ZVtwcm9wTmFtZV07XG4gICAgICBpZiAoaW5pdGlhbFN0YXRlICE9PSB1bmRlZmluZWQpIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgfVxuICB9IC8vIFJlYWN0IGRvZXNuJ3QgYWxsb3cgY2hhbmdpbmcgZnJvbSB1bmNvbnRyb2xsZWQgdG8gY29udHJvbGxlZCBjb21wb25lbnRzLFxuICAvLyBkZWZhdWx0IGNoZWNrZWQvdmFsdWUgaWYgdGhleSB3ZXJlIG5vdCBwcmVzZW50LlxuXG5cbiAgaWYgKHByb3BOYW1lID09PSAnY2hlY2tlZCcpIHJldHVybiBmYWxzZTtcbiAgaWYgKHByb3BOYW1lID09PSAndmFsdWUnKSByZXR1cm4gcHJvcHMubXVsdGlwbGUgPyBbXSA6ICcnOyAvLyBvdGhlcndpc2UsIHVuZGVmaW5lZFxufTtcblxudmFyIE1vZGVybkF1dG9Db250cm9sbGVkQ29tcG9uZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKE1vZGVybkF1dG9Db250cm9sbGVkQ29tcG9uZW50LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBNb2Rlcm5BdXRvQ29udHJvbGxlZENvbXBvbmVudCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcbiAgICB2YXIgX3RoaXMkY29uc3RydWN0b3IgPSBfdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgYXV0b0NvbnRyb2xsZWRQcm9wcyA9IF90aGlzJGNvbnN0cnVjdG9yLmF1dG9Db250cm9sbGVkUHJvcHMsXG4gICAgICAgIGdldEF1dG9Db250cm9sbGVkU3RhdGVGcm9tUHJvcHMgPSBfdGhpcyRjb25zdHJ1Y3Rvci5nZXRBdXRvQ29udHJvbGxlZFN0YXRlRnJvbVByb3BzO1xuICAgIHZhciBzdGF0ZSA9IF9pbnZva2UoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksICdnZXRJbml0aWFsQXV0b0NvbnRyb2xsZWRTdGF0ZScsIF90aGlzLnByb3BzKSB8fCB7fTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgX3RoaXMkY29uc3RydWN0b3IyID0gX3RoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgZGVmYXVsdFByb3BzID0gX3RoaXMkY29uc3RydWN0b3IyLmRlZmF1bHRQcm9wcyxcbiAgICAgICAgICBuYW1lID0gX3RoaXMkY29uc3RydWN0b3IyLm5hbWUsXG4gICAgICAgICAgcHJvcFR5cGVzID0gX3RoaXMkY29uc3RydWN0b3IyLnByb3BUeXBlcyxcbiAgICAgICAgICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBfdGhpcyRjb25zdHJ1Y3RvcjIuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOyAvLyByZXF1aXJlIHVzYWdlIG9mIGdldEF1dG9Db250cm9sbGVkU3RhdGVGcm9tUHJvcHMoKVxuXG4gICAgICBpZiAoZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzICE9PSBNb2Rlcm5BdXRvQ29udHJvbGxlZENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgY29uc29sZS5lcnJvcihcIkF1dG8gY29udHJvbGxlZCBcIiArIG5hbWUgKyBcIiBtdXN0IHNwZWNpZnkgYSBzdGF0aWMgZ2V0QXV0b0NvbnRyb2xsZWRTdGF0ZUZyb21Qcm9wcygpIGluc3RlYWQgb2YgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKCkuXCIpO1xuICAgICAgfSAvLyByZXF1aXJlIHByb3BUeXBlc1xuXG5cbiAgICAgIF9lYWNoKGF1dG9Db250cm9sbGVkUHJvcHMsIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIHZhciBkZWZhdWx0UHJvcCA9IGdldERlZmF1bHRQcm9wTmFtZShwcm9wKTsgLy8gcmVndWxhciBwcm9wXG5cbiAgICAgICAgaWYgKCFfaGFzKHByb3BUeXBlcywgZGVmYXVsdFByb3ApKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihuYW1lICsgXCIgaXMgbWlzc2luZyBcXFwiXCIgKyBkZWZhdWx0UHJvcCArIFwiXFxcIiBwcm9wVHlwZXMgdmFsaWRhdGlvbiBmb3IgYXV0byBjb250cm9sbGVkIHByb3AgXFxcIlwiICsgcHJvcCArIFwiXFxcIi5cIik7XG4gICAgICAgIH0gLy8gaXRzIGRlZmF1bHQgcHJvcFxuXG5cbiAgICAgICAgaWYgKCFfaGFzKHByb3BUeXBlcywgcHJvcCkpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKG5hbWUgKyBcIiBpcyBtaXNzaW5nIHByb3BUeXBlcyB2YWxpZGF0aW9uIGZvciBhdXRvIGNvbnRyb2xsZWQgcHJvcCBcXFwiXCIgKyBwcm9wICsgXCJcXFwiLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7IC8vIHByZXZlbnQgYXV0b0NvbnRyb2xsZWRQcm9wcyBpbiBkZWZhdWx0UHJvcHNcbiAgICAgIC8vXG4gICAgICAvLyBXaGVuIHNldHRpbmcgc3RhdGUsIGF1dG8gY29udHJvbGxlZCBwcm9wcyB2YWx1ZXMgYWx3YXlzIHdpbiAoc28gdGhlIHBhcmVudCBjYW4gbWFuYWdlIHRoZW0pLlxuICAgICAgLy8gSXQgaXMgbm90IHJlYXNvbmFibGUgdG8gZGVjaXBoZXIgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBwcm9wcyBmcm9tIHRoZSBwYXJlbnQgYW5kIGRlZmF1bHRQcm9wcy5cbiAgICAgIC8vIEFsbG93aW5nIGRlZmF1bHRQcm9wcyByZXN1bHRzIGluIHRyeVNldFN0YXRlIGFsd2F5cyBkZWZlcnJpbmcgdG8gdGhlIGRlZmF1bHRQcm9wIHZhbHVlLlxuICAgICAgLy8gQXV0byBjb250cm9sbGVkIHByb3BzIGFsc28gbGlzdGVkIGluIGRlZmF1bHRQcm9wcyBjYW4gbmV2ZXIgYmUgdXBkYXRlZC5cbiAgICAgIC8vXG4gICAgICAvLyBUbyBzZXQgZGVmYXVsdHMgZm9yIGFuIEF1dG9Db250cm9sbGVkIHByb3AsIHlvdSBjYW4gc2V0IHRoZSBpbml0aWFsIHN0YXRlIGluIHRoZVxuICAgICAgLy8gY29uc3RydWN0b3Igb3IgYnkgdXNpbmcgYW4gRVM3IHByb3BlcnR5IGluaXRpYWxpemVyOlxuICAgICAgLy8gaHR0cHM6Ly9iYWJlbGpzLmlvL2Jsb2cvMjAxNS8wNi8wNy9yZWFjdC1vbi1lczYtcGx1cyNwcm9wZXJ0eS1pbml0aWFsaXplcnNcblxuXG4gICAgICB2YXIgaWxsZWdhbERlZmF1bHRzID0gX2ludGVyc2VjdGlvbihhdXRvQ29udHJvbGxlZFByb3BzLCBfa2V5cyhkZWZhdWx0UHJvcHMpKTtcblxuICAgICAgaWYgKCFfaXNFbXB0eShpbGxlZ2FsRGVmYXVsdHMpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoWydEbyBub3Qgc2V0IGRlZmF1bHRQcm9wcyBmb3IgYXV0b0NvbnRyb2xsZWRQcm9wcy4gWW91IGNhbiBzZXQgZGVmYXVsdHMgYnknLCAnc2V0dGluZyBzdGF0ZSBpbiB0aGUgY29uc3RydWN0b3Igb3IgdXNpbmcgYW4gRVM3IHByb3BlcnR5IGluaXRpYWxpemVyJywgJyhodHRwczovL2JhYmVsanMuaW8vYmxvZy8yMDE1LzA2LzA3L3JlYWN0LW9uLWVzNi1wbHVzI3Byb3BlcnR5LWluaXRpYWxpemVycyknLCBcIlNlZSBcIiArIG5hbWUgKyBcIiBwcm9wczogXFxcIlwiICsgaWxsZWdhbERlZmF1bHRzICsgXCJcXFwiLlwiXS5qb2luKCcgJykpO1xuICAgICAgfSAvLyBwcmV2ZW50IGxpc3RpbmcgZGVmYXVsdFByb3BzIGluIGF1dG9Db250cm9sbGVkUHJvcHNcbiAgICAgIC8vXG4gICAgICAvLyBEZWZhdWx0IHByb3BzIGFyZSBhdXRvbWF0aWNhbGx5IGhhbmRsZWQuXG4gICAgICAvLyBMaXN0aW5nIGRlZmF1bHRzIGluIGF1dG9Db250cm9sbGVkUHJvcHMgd291bGQgcmVzdWx0IGluIGFsbG93aW5nIGRlZmF1bHREZWZhdWx0VmFsdWUgcHJvcHMuXG5cblxuICAgICAgdmFyIGlsbGVnYWxBdXRvQ29udHJvbGxlZCA9IF9maWx0ZXIoYXV0b0NvbnRyb2xsZWRQcm9wcywgZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIF9zdGFydHNXaXRoKHByb3AsICdkZWZhdWx0Jyk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFfaXNFbXB0eShpbGxlZ2FsQXV0b0NvbnRyb2xsZWQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoWydEbyBub3QgYWRkIGRlZmF1bHQgcHJvcHMgdG8gYXV0b0NvbnRyb2xsZWRQcm9wcy4nLCAnRGVmYXVsdCBwcm9wcyBhcmUgYXV0b21hdGljYWxseSBoYW5kbGVkLicsIFwiU2VlIFwiICsgbmFtZSArIFwiIGF1dG9Db250cm9sbGVkUHJvcHM6IFxcXCJcIiArIGlsbGVnYWxBdXRvQ29udHJvbGxlZCArIFwiXFxcIi5cIl0uam9pbignICcpKTtcbiAgICAgIH1cbiAgICB9IC8vIEF1dG8gY29udHJvbGxlZCBwcm9wcyBhcmUgY29waWVkIHRvIHN0YXRlLlxuICAgIC8vIFNldCBpbml0aWFsIHN0YXRlIGJ5IGNvcHlpbmcgYXV0byBjb250cm9sbGVkIHByb3BzIHRvIHN0YXRlLlxuICAgIC8vIEFsc28gbG9vayBmb3IgdGhlIGRlZmF1bHQgcHJvcCBmb3IgYW55IGF1dG8gY29udHJvbGxlZCBwcm9wcyAoZm9vID0+IGRlZmF1bHRGb28pXG4gICAgLy8gc28gd2UgY2FuIHNldCBpbml0aWFsIHZhbHVlcyBmcm9tIGRlZmF1bHRzLlxuXG5cbiAgICB2YXIgaW5pdGlhbEF1dG9Db250cm9sbGVkU3RhdGUgPSBhdXRvQ29udHJvbGxlZFByb3BzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwcm9wKSB7XG4gICAgICBhY2NbcHJvcF0gPSBnZXRBdXRvQ29udHJvbGxlZFN0YXRlVmFsdWUocHJvcCwgX3RoaXMucHJvcHMsIHN0YXRlLCB0cnVlKTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRQcm9wTmFtZSA9IGdldERlZmF1bHRQcm9wTmFtZShwcm9wKTtcbiAgICAgICAgdmFyIF9uYW1lID0gX3RoaXMuY29uc3RydWN0b3IubmFtZTsgLy8gcHJldmVudCBkZWZhdWx0Rm9vPXt9IGFsb25nIHNpZGUgZm9vPXt9XG5cbiAgICAgICAgaWYgKCFfaXNVbmRlZmluZWQoX3RoaXMucHJvcHNbZGVmYXVsdFByb3BOYW1lXSkgJiYgIV9pc1VuZGVmaW5lZChfdGhpcy5wcm9wc1twcm9wXSkpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKF9uYW1lICsgXCIgcHJvcCBcXFwiXCIgKyBwcm9wICsgXCJcXFwiIGlzIGF1dG8gY29udHJvbGxlZC4gU3BlY2lmeSBlaXRoZXIgXCIgKyBkZWZhdWx0UHJvcE5hbWUgKyBcIiBvciBcIiArIHByb3AgKyBcIiwgYnV0IG5vdCBib3RoLlwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgICBfdGhpcy5zdGF0ZSA9IF9leHRlbmRzKHt9LCBzdGF0ZSwgaW5pdGlhbEF1dG9Db250cm9sbGVkU3RhdGUsIHtcbiAgICAgIGF1dG9Db250cm9sbGVkUHJvcHM6IGF1dG9Db250cm9sbGVkUHJvcHMsXG4gICAgICBnZXRBdXRvQ29udHJvbGxlZFN0YXRlRnJvbVByb3BzOiBnZXRBdXRvQ29udHJvbGxlZFN0YXRlRnJvbVByb3BzXG4gICAgfSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgTW9kZXJuQXV0b0NvbnRyb2xsZWRDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIHZhciBhdXRvQ29udHJvbGxlZFByb3BzID0gc3RhdGUuYXV0b0NvbnRyb2xsZWRQcm9wcyxcbiAgICAgICAgZ2V0QXV0b0NvbnRyb2xsZWRTdGF0ZUZyb21Qcm9wcyA9IHN0YXRlLmdldEF1dG9Db250cm9sbGVkU3RhdGVGcm9tUHJvcHM7IC8vIFNvbHZlIHRoZSBuZXh0IHN0YXRlIGZvciBhdXRvQ29udHJvbGxlZFByb3BzXG5cbiAgICB2YXIgbmV3U3RhdGVGcm9tUHJvcHMgPSBhdXRvQ29udHJvbGxlZFByb3BzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwcm9wKSB7XG4gICAgICB2YXIgaXNOZXh0RGVmaW5lZCA9ICFfaXNVbmRlZmluZWQocHJvcHNbcHJvcF0pOyAvLyBpZiBuZXh0IGlzIGRlZmluZWQgdGhlbiB1c2UgaXRzIHZhbHVlXG5cbiAgICAgIGlmIChpc05leHREZWZpbmVkKSBhY2NbcHJvcF0gPSBwcm9wc1twcm9wXTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pOyAvLyBEdWUgdG8gdGhlIGluaGVyaXRhbmNlIG9mIHRoZSBBdXRvQ29udHJvbGxlZENvbXBvbmVudCB3ZSBzaG91bGQgY2FsbCBpdHNcbiAgICAvLyBnZXRBdXRvQ29udHJvbGxlZFN0YXRlRnJvbVByb3BzKCkgYW5kIG1lcmdlIGl0IHdpdGggdGhlIGV4aXN0aW5nIHN0YXRlXG5cbiAgICBpZiAoZ2V0QXV0b0NvbnRyb2xsZWRTdGF0ZUZyb21Qcm9wcykge1xuICAgICAgdmFyIGNvbXB1dGVkU3RhdGUgPSBnZXRBdXRvQ29udHJvbGxlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBfZXh0ZW5kcyh7fSwgc3RhdGUsIG5ld1N0YXRlRnJvbVByb3BzKSwgc3RhdGUpOyAvLyBXZSBzaG91bGQgZm9sbG93IHRoZSBpZGVhIG9mIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcygpIGFuZCByZXR1cm4gb25seSBtb2RpZmllZCBzdGF0ZVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIG5ld1N0YXRlRnJvbVByb3BzLCBjb21wdXRlZFN0YXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3U3RhdGVGcm9tUHJvcHM7XG4gIH1cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHVzZSBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoKSBpbiBjaGlsZCBjb21wb25lbnRzLlxuICAgKi9cbiAgO1xuXG4gIE1vZGVybkF1dG9Db250cm9sbGVkQ29tcG9uZW50LmdldEF1dG9Db250cm9sbGVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXRBdXRvQ29udHJvbGxlZFN0YXRlRnJvbVByb3BzKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBNb2Rlcm5BdXRvQ29udHJvbGxlZENvbXBvbmVudDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IHsgTW9kZXJuQXV0b0NvbnRyb2xsZWRDb21wb25lbnQgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBfdW5pcSBmcm9tIFwibG9kYXNoLWVzL3VuaXFcIjtcbmltcG9ydCBfdmFsdWVzIGZyb20gXCJsb2Rhc2gtZXMvdmFsdWVzXCI7XG5pbXBvcnQgX2tleXMgZnJvbSBcImxvZGFzaC1lcy9rZXlzXCI7XG5pbXBvcnQgeyBudW1iZXJUb1dvcmRNYXAgfSBmcm9tICcuL251bWJlclRvV29yZCc7XG5leHBvcnQgdmFyIENPTE9SUyA9IFsncmVkJywgJ29yYW5nZScsICd5ZWxsb3cnLCAnb2xpdmUnLCAnZ3JlZW4nLCAndGVhbCcsICdibHVlJywgJ3Zpb2xldCcsICdwdXJwbGUnLCAncGluaycsICdicm93bicsICdncmV5JywgJ2JsYWNrJ107XG5leHBvcnQgdmFyIEZMT0FUUyA9IFsnbGVmdCcsICdyaWdodCddO1xuZXhwb3J0IHZhciBTSVpFUyA9IFsnbWluaScsICd0aW55JywgJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZScsICdiaWcnLCAnaHVnZScsICdtYXNzaXZlJ107XG5leHBvcnQgdmFyIFRFWFRfQUxJR05NRU5UUyA9IFsnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnLCAnanVzdGlmaWVkJ107XG5leHBvcnQgdmFyIFZFUlRJQ0FMX0FMSUdOTUVOVFMgPSBbJ2JvdHRvbScsICdtaWRkbGUnLCAndG9wJ107XG5leHBvcnQgdmFyIFZJU0lCSUxJVFkgPSBbJ21vYmlsZScsICd0YWJsZXQnLCAnY29tcHV0ZXInLCAnbGFyZ2Ugc2NyZWVuJywgJ3dpZGVzY3JlZW4nXTtcbmV4cG9ydCB2YXIgV0lEVEhTID0gW10uY29uY2F0KF9rZXlzKG51bWJlclRvV29yZE1hcCksIF9rZXlzKG51bWJlclRvV29yZE1hcCkubWFwKE51bWJlciksIF92YWx1ZXMobnVtYmVyVG9Xb3JkTWFwKSk7XG5leHBvcnQgdmFyIERJUkVDVElPTkFMX1RSQU5TSVRJT05TID0gWydicm93c2UnLCAnYnJvd3NlIHJpZ2h0JywgJ2Ryb3AnLCAnZmFkZScsICdmYWRlIHVwJywgJ2ZhZGUgZG93bicsICdmYWRlIGxlZnQnLCAnZmFkZSByaWdodCcsICdmbHkgdXAnLCAnZmx5IGRvd24nLCAnZmx5IGxlZnQnLCAnZmx5IHJpZ2h0JywgJ2hvcml6b250YWwgZmxpcCcsICd2ZXJ0aWNhbCBmbGlwJywgJ3NjYWxlJywgJ3NsaWRlIHVwJywgJ3NsaWRlIGRvd24nLCAnc2xpZGUgbGVmdCcsICdzbGlkZSByaWdodCcsICdzd2luZyB1cCcsICdzd2luZyBkb3duJywgJ3N3aW5nIGxlZnQnLCAnc3dpbmcgcmlnaHQnLCAnem9vbSddO1xuZXhwb3J0IHZhciBTVEFUSUNfVFJBTlNJVElPTlMgPSBbJ2ppZ2dsZScsICdmbGFzaCcsICdzaGFrZScsICdwdWxzZScsICd0YWRhJywgJ2JvdW5jZScsICdnbG93J107XG5leHBvcnQgdmFyIFRSQU5TSVRJT05TID0gW10uY29uY2F0KERJUkVDVElPTkFMX1RSQU5TSVRJT05TLCBTVEFUSUNfVFJBTlNJVElPTlMpOyAvLyBHZW5lcmF0ZWQgZnJvbTpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9TZW1hbnRpYy1PcmcvU2VtYW50aWMtVUkvYmxvYi9tYXN0ZXIvZGlzdC9jb21wb25lbnRzL2ljb24uY3NzXG5cbmV4cG9ydCB2YXIgQUNDRVNTSUJJTElUWSA9IFsnYW1lcmljYW4gc2lnbiBsYW5ndWFnZSBpbnRlcnByZXRpbmcnLCAnYXNzaXN0aXZlIGxpc3RlbmluZyBzeXN0ZW1zJywgJ2F1ZGlvIGRlc2NyaXB0aW9uJywgJ2JsaW5kJywgJ2JyYWlsbGUnLCAnY2xvc2VkIGNhcHRpb25pbmcnLCAnY2xvc2VkIGNhcHRpb25pbmcgb3V0bGluZScsICdkZWFmJywgJ2xvdyB2aXNpb24nLCAncGhvbmUgdm9sdW1lJywgJ3F1ZXN0aW9uIGNpcmNsZScsICdxdWVzdGlvbiBjaXJjbGUgb3V0bGluZScsICdzaWduIGxhbmd1YWdlJywgJ3R0eScsICd1bml2ZXJzYWwgYWNjZXNzJywgJ3doZWVsY2hhaXInXTtcbmV4cG9ydCB2YXIgQVJST1dTID0gWydhbmdsZSBkb3VibGUgZG93bicsICdhbmdsZSBkb3VibGUgbGVmdCcsICdhbmdsZSBkb3VibGUgcmlnaHQnLCAnYW5nbGUgZG91YmxlIHVwJywgJ2FuZ2xlIGRvd24nLCAnYW5nbGUgbGVmdCcsICdhbmdsZSByaWdodCcsICdhbmdsZSB1cCcsICdhcnJvdyBhbHRlcm5hdGUgY2lyY2xlIGRvd24nLCAnYXJyb3cgYWx0ZXJuYXRlIGNpcmNsZSBkb3duIG91dGxpbmUnLCAnYXJyb3cgYWx0ZXJuYXRlIGNpcmNsZSBsZWZ0JywgJ2Fycm93IGFsdGVybmF0ZSBjaXJjbGUgbGVmdCBvdXRsaW5lJywgJ2Fycm93IGFsdGVybmF0ZSBjaXJjbGUgcmlnaHQnLCAnYXJyb3cgYWx0ZXJuYXRlIGNpcmNsZSByaWdodCBvdXRsaW5lJywgJ2Fycm93IGFsdGVybmF0ZSBjaXJjbGUgdXAnLCAnYXJyb3cgYWx0ZXJuYXRlIGNpcmNsZSB1cCBvdXRsaW5lJywgJ2Fycm93IGNpcmNsZSBkb3duJywgJ2Fycm93IGNpcmNsZSBsZWZ0JywgJ2Fycm93IGNpcmNsZSByaWdodCcsICdhcnJvdyBjaXJjbGUgdXAnLCAnYXJyb3cgZG93bicsICdhcnJvdyBsZWZ0JywgJ2Fycm93IHJpZ2h0JywgJ2Fycm93IHVwJywgJ2Fycm93cyBhbHRlcm5hdGUnLCAnYXJyb3dzIGFsdGVybmF0ZSBob3Jpem9udGFsJywgJ2Fycm93cyBhbHRlcm5hdGUgdmVydGljYWwnLCAnY2FyZXQgZG93bicsICdjYXJldCBsZWZ0JywgJ2NhcmV0IHJpZ2h0JywgJ2NhcmV0IHNxdWFyZSBkb3duJywgJ2NhcmV0IHNxdWFyZSBkb3duIG91dGxpbmUnLCAnY2FyZXQgc3F1YXJlIGxlZnQnLCAnY2FyZXQgc3F1YXJlIGxlZnQgb3V0bGluZScsICdjYXJldCBzcXVhcmUgcmlnaHQnLCAnY2FyZXQgc3F1YXJlIHJpZ2h0IG91dGxpbmUnLCAnY2FyZXQgc3F1YXJlIHVwJywgJ2NhcmV0IHNxdWFyZSB1cCBvdXRsaW5lJywgJ2NhcmV0IHVwJywgJ2NhcnQgYXJyb3cgZG93bicsICdjaGFydCBsaW5lJywgJ2NoZXZyb24gY2lyY2xlIGRvd24nLCAnY2hldnJvbiBjaXJjbGUgbGVmdCcsICdjaGV2cm9uIGNpcmNsZSByaWdodCcsICdjaGV2cm9uIGNpcmNsZSB1cCcsICdjaGV2cm9uIGRvd24nLCAnY2hldnJvbiBsZWZ0JywgJ2NoZXZyb24gcmlnaHQnLCAnY2hldnJvbiB1cCcsICdjbG91ZCBkb3dubG9hZCcsICdjbG91ZCB1cGxvYWQnLCAnZG93bmxvYWQnLCAnZXhjaGFuZ2UnLCAnZXhwYW5kIGFycm93cyBhbHRlcm5hdGUnLCAnZXh0ZXJuYWwgYWx0ZXJuYXRlJywgJ2V4dGVybmFsIHNxdWFyZSBhbHRlcm5hdGUnLCAnaGFuZCBwb2ludCBkb3duJywgJ2hhbmQgcG9pbnQgZG93biBvdXRsaW5lJywgJ2hhbmQgcG9pbnQgbGVmdCcsICdoYW5kIHBvaW50IGxlZnQgb3V0bGluZScsICdoYW5kIHBvaW50IHJpZ2h0JywgJ2hhbmQgcG9pbnQgcmlnaHQgb3V0bGluZScsICdoYW5kIHBvaW50IHVwJywgJ2hhbmQgcG9pbnQgdXAgb3V0bGluZScsICdoYW5kIHBvaW50ZXInLCAnaGFuZCBwb2ludGVyIG91dGxpbmUnLCAnaGlzdG9yeScsICdsZXZlbCBkb3duIGFsdGVybmF0ZScsICdsZXZlbCB1cCBhbHRlcm5hdGUnLCAnbG9jYXRpb24gYXJyb3cnLCAnbG9uZyBhcnJvdyBhbHRlcm5hdGUgZG93bicsICdsb25nIGFycm93IGFsdGVybmF0ZSBsZWZ0JywgJ2xvbmcgYXJyb3cgYWx0ZXJuYXRlIHJpZ2h0JywgJ2xvbmcgYXJyb3cgYWx0ZXJuYXRlIHVwJywgJ21vdXNlIHBvaW50ZXInLCAncGxheScsICdyYW5kb20nLCAncmVjeWNsZScsICdyZWRvJywgJ3JlZG8gYWx0ZXJuYXRlJywgJ3JlcGx5JywgJ3JlcGx5IGFsbCcsICdyZXR3ZWV0JywgJ3NoYXJlJywgJ3NoYXJlIHNxdWFyZScsICdzaGFyZSBzcXVhcmUgb3V0bGluZScsICdzaWduLWluJywgJ3NpZ24tb3V0JywgJ3NpZ24taW4gYWx0ZXJuYXRlJywgJ3NpZ24tb3V0IGFsdGVybmF0ZScsICdzb3J0JywgJ3NvcnQgYWxwaGFiZXQgZG93bicsICdzb3J0IGFscGhhYmV0IHVwJywgJ3NvcnQgYW1vdW50IGRvd24nLCAnc29ydCBhbW91bnQgdXAnLCAnc29ydCBkb3duJywgJ3NvcnQgbnVtZXJpYyBkb3duJywgJ3NvcnQgbnVtZXJpYyB1cCcsICdzb3J0IHVwJywgJ3N5bmMnLCAnc3luYyBhbHRlcm5hdGUnLCAndGV4dCBoZWlnaHQnLCAndGV4dCB3aWR0aCcsICd1bmRvJywgJ3VuZG8gYWx0ZXJuYXRlJywgJ3VwbG9hZCcsICd6b29tLWluJywgJ3pvb20tb3V0J107XG5leHBvcnQgdmFyIEFVRElPX1ZJREVPID0gWydhdWRpbyBkZXNjcmlwdGlvbicsICdiYWNrd2FyZCcsICdjaXJjbGUnLCAnY2lyY2xlIG91dGxpbmUnLCAnY2xvc2VkIGNhcHRpb25pbmcnLCAnY2xvc2VkIGNhcHRpb25pbmcgb3V0bGluZScsICdjb21wcmVzcycsICdlamVjdCcsICdleHBhbmQnLCAnZXhwYW5kIGFycm93cyBhbHRlcm5hdGUnLCAnZmFzdCBiYWNrd2FyZCcsICdmYXN0IGZvcndhcmQnLCAnZmlsZSBhdWRpbycsICdmaWxlIGF1ZGlvIG91dGxpbmUnLCAnZmlsZSB2aWRlbycsICdmaWxlIHZpZGVvIG91dGxpbmUnLCAnZmlsbScsICdmb3J3YXJkJywgJ2hlYWRwaG9uZXMnLCAnbWljcm9waG9uZScsICdtaWNyb3Bob25lIHNsYXNoJywgJ211c2ljJywgJ3BhdXNlJywgJ3BhdXNlIGNpcmNsZScsICdwYXVzZSBjaXJjbGUgb3V0bGluZScsICdwaG9uZSB2b2x1bWUnLCAncGxheScsICdwbGF5IGNpcmNsZScsICdwbGF5IGNpcmNsZSBvdXRsaW5lJywgJ3BvZGNhc3QnLCAncmFuZG9tJywgJ3JlZG8nLCAncmVkbyBhbHRlcm5hdGUnLCAncnNzJywgJ3JzcyBzcXVhcmUnLCAnc3RlcCBiYWNrd2FyZCcsICdzdGVwIGZvcndhcmQnLCAnc3RvcCcsICdzdG9wIGNpcmNsZScsICdzdG9wIGNpcmNsZSBvdXRsaW5lJywgJ3N5bmMnLCAnc3luYyBhbHRlcm5hdGUnLCAndW5kbycsICd1bmRvIGFsdGVybmF0ZScsICd2aWRlbycsICd2b2x1bWUgZG93bicsICd2b2x1bWUgb2ZmJywgJ3ZvbHVtZSB1cCddO1xuZXhwb3J0IHZhciBCVVNJTkVTUyA9IFsnYWRkcmVzcyBib29rJywgJ2FkZHJlc3MgYm9vayBvdXRsaW5lJywgJ2FkZHJlc3MgY2FyZCcsICdhZGRyZXNzIGNhcmQgb3V0bGluZScsICdhcmNoaXZlJywgJ2JhbGFuY2Ugc2NhbGUnLCAnYmlydGhkYXkgY2FrZScsICdib29rJywgJ2JyaWVmY2FzZScsICdidWlsZGluZycsICdidWlsZGluZyBvdXRsaW5lJywgJ2J1bGxob3JuJywgJ2J1bGxzZXllJywgJ2NhbGN1bGF0b3InLCAnY2FsZW5kYXInLCAnY2FsZW5kYXIgb3V0bGluZScsICdjYWxlbmRhciBhbHRlcm5hdGUnLCAnY2FsZW5kYXIgYWx0ZXJuYXRlIG91dGxpbmUnLCAnY2VydGlmaWNhdGUnLCAnY2hhcnQgYXJlYScsICdjaGFydCBiYXInLCAnY2hhcnQgYmFyIG91dGxpbmUnLCAnY2hhcnQgbGluZScsICdjaGFydCBwaWUnLCAnY2xpcGJvYXJkJywgJ2NsaXBib2FyZCBvdXRsaW5lJywgJ2NvZmZlZScsICdjb2x1bW5zJywgJ2NvbXBhc3MnLCAnY29tcGFzcyBvdXRsaW5lJywgJ2NvcHknLCAnY29weSBvdXRsaW5lJywgJ2NvcHlyaWdodCcsICdjb3B5cmlnaHQgb3V0bGluZScsICdjdXQnLCAnZWRpdCcsICdlZGl0IG91dGxpbmUnLCAnZW52ZWxvcGUnLCAnZW52ZWxvcGUgb3V0bGluZScsICdlbnZlbG9wZSBvcGVuJywgJ2VudmVsb3BlIG9wZW4gb3V0bGluZScsICdlbnZlbG9wZSBzcXVhcmUnLCAnZXJhc2VyJywgJ2ZheCcsICdmaWxlJywgJ2ZpbGUgb3V0bGluZScsICdmaWxlIGFsdGVybmF0ZScsICdmaWxlIGFsdGVybmF0ZSBvdXRsaW5lJywgJ2ZvbGRlcicsICdmb2xkZXIgb3V0bGluZScsICdmb2xkZXIgb3BlbicsICdmb2xkZXIgb3BlbiBvdXRsaW5lJywgJ2dsb2JlJywgJ2luZHVzdHJ5JywgJ3BhcGVyY2xpcCcsICdwYXN0ZScsICdwZW4gc3F1YXJlJywgJ3BlbmNpbCBhbHRlcm5hdGUnLCAncGVyY2VudCcsICdwaG9uZScsICdwaG9uZSBzcXVhcmUnLCAncGhvbmUgdm9sdW1lJywgJ3JlZ2lzdGVyZWQnLCAncmVnaXN0ZXJlZCBvdXRsaW5lJywgJ3NhdmUnLCAnc2F2ZSBvdXRsaW5lJywgJ3NpdGVtYXAnLCAnc3RpY2t5IG5vdGUnLCAnc3RpY2t5IG5vdGUgb3V0bGluZScsICdzdWl0Y2FzZScsICd0YWJsZScsICd0YWcnLCAndGFncycsICd0YXNrcycsICd0aHVtYnRhY2snLCAndHJhZGVtYXJrJ107XG5leHBvcnQgdmFyIENIRVNTID0gWydjaGVzcycsICdjaGVzcyBiaXNob3AnLCAnY2hlc3MgYm9hcmQnLCAnY2hlc3Mga2luZycsICdjaGVzcyBrbmlnaHQnLCAnY2hlc3MgcGF3bicsICdjaGVzcyBxdWVlbicsICdjaGVzcyByb29rJywgJ3NxdWFyZSBmdWxsJ107XG5leHBvcnQgdmFyIENPREUgPSBbJ2FyY2hpdmUnLCAnYmFyY29kZScsICdiYXRoJywgJ2J1ZycsICdjb2RlJywgJ2NvZGUgYnJhbmNoJywgJ2NvZmZlZScsICdmaWxlJywgJ2ZpbGUgb3V0bGluZScsICdmaWxlIGFsdGVybmF0ZScsICdmaWxlIGFsdGVybmF0ZSBvdXRsaW5lJywgJ2ZpbGUgY29kZScsICdmaWxlIGNvZGUgb3V0bGluZScsICdmaWx0ZXInLCAnZmlyZSBleHRpbmd1aXNoZXInLCAnZm9sZGVyJywgJ2ZvbGRlciBvdXRsaW5lJywgJ2ZvbGRlciBvcGVuJywgJ2ZvbGRlciBvcGVuIG91dGxpbmUnLCAna2V5Ym9hcmQnLCAna2V5Ym9hcmQgb3V0bGluZScsICdtaWNyb2NoaXAnLCAncXJjb2RlJywgJ3NoaWVsZCBhbHRlcm5hdGUnLCAnc2l0ZW1hcCcsICd0ZXJtaW5hbCcsICd1c2VyIHNlY3JldCcsICd3aW5kb3cgY2xvc2UnLCAnd2luZG93IGNsb3NlIG91dGxpbmUnLCAnd2luZG93IG1heGltaXplJywgJ3dpbmRvdyBtYXhpbWl6ZSBvdXRsaW5lJywgJ3dpbmRvdyBtaW5pbWl6ZScsICd3aW5kb3cgbWluaW1pemUgb3V0bGluZScsICd3aW5kb3cgcmVzdG9yZScsICd3aW5kb3cgcmVzdG9yZSBvdXRsaW5lJ107XG5leHBvcnQgdmFyIENPTU1VTklDQVRJT04gPSBbJ2FkZHJlc3MgYm9vaycsICdhZGRyZXNzIGJvb2sgb3V0bGluZScsICdhZGRyZXNzIGNhcmQnLCAnYWRkcmVzcyBjYXJkIG91dGxpbmUnLCAnYW1lcmljYW4gc2lnbiBsYW5ndWFnZSBpbnRlcnByZXRpbmcnLCAnYXNzaXN0aXZlIGxpc3RlbmluZyBzeXN0ZW1zJywgJ2F0JywgJ2JlbGwnLCAnYmVsbCBvdXRsaW5lJywgJ2JlbGwgc2xhc2gnLCAnYmVsbCBzbGFzaCBvdXRsaW5lJywgJ2J1bGxob3JuJywgJ2NvbW1lbnQnLCAnY29tbWVudCBvdXRsaW5lJywgJ2NvbW1lbnQgYWx0ZXJuYXRlJywgJ2NvbW1lbnQgYWx0ZXJuYXRlIG91dGxpbmUnLCAnY29tbWVudHMnLCAnY29tbWVudHMgb3V0bGluZScsICdlbnZlbG9wZScsICdlbnZlbG9wZSBvdXRsaW5lJywgJ2VudmVsb3BlIG9wZW4nLCAnZW52ZWxvcGUgb3BlbiBvdXRsaW5lJywgJ2VudmVsb3BlIHNxdWFyZScsICdmYXgnLCAnaW5ib3gnLCAnbGFuZ3VhZ2UnLCAnbWljcm9waG9uZScsICdtaWNyb3Bob25lIHNsYXNoJywgJ21vYmlsZScsICdtb2JpbGUgYWx0ZXJuYXRlJywgJ3BhcGVyIHBsYW5lJywgJ3BhcGVyIHBsYW5lIG91dGxpbmUnLCAncGhvbmUnLCAncGhvbmUgc3F1YXJlJywgJ3Bob25lIHZvbHVtZScsICdyc3MnLCAncnNzIHNxdWFyZScsICd0dHknLCAnd2lmaSddO1xuZXhwb3J0IHZhciBDT01QVVRFUlMgPSBbJ2Rlc2t0b3AnLCAnZG93bmxvYWQnLCAnaGRkJywgJ2hkZCBvdXRsaW5lJywgJ2hlYWRwaG9uZXMnLCAna2V5Ym9hcmQnLCAna2V5Ym9hcmQgb3V0bGluZScsICdsYXB0b3AnLCAnbWljcm9jaGlwJywgJ21vYmlsZScsICdtb2JpbGUgYWx0ZXJuYXRlJywgJ3BsdWcnLCAncG93ZXIgb2ZmJywgJ3ByaW50JywgJ3NhdmUnLCAnc2F2ZSBvdXRsaW5lJywgJ3NlcnZlcicsICd0YWJsZXQnLCAndGFibGV0IGFsdGVybmF0ZScsICd0dicsICd1cGxvYWQnXTtcbmV4cG9ydCB2YXIgQ1VSUkVOQ1kgPSBbJ2RvbGxhciBzaWduJywgJ2V1cm8gc2lnbicsICdsaXJhIHNpZ24nLCAnbW9uZXkgYmlsbCBhbHRlcm5hdGUnLCAnbW9uZXkgYmlsbCBhbHRlcm5hdGUgb3V0bGluZScsICdwb3VuZCBzaWduJywgJ3J1YmxlIHNpZ24nLCAncnVwZWUgc2lnbicsICdzaGVrZWwgc2lnbicsICd3b24gc2lnbicsICd5ZW4gc2lnbiddO1xuZXhwb3J0IHZhciBEQVRFX1RJTUUgPSBbJ2JlbGwnLCAnYmVsbCBvdXRsaW5lJywgJ2JlbGwgc2xhc2gnLCAnYmVsbCBzbGFzaCBvdXRsaW5lJywgJ2NhbGVuZGFyJywgJ2NhbGVuZGFyIG91dGxpbmUnLCAnY2FsZW5kYXIgYWx0ZXJuYXRlJywgJ2NhbGVuZGFyIGFsdGVybmF0ZSBvdXRsaW5lJywgJ2NhbGVuZGFyIGNoZWNrJywgJ2NhbGVuZGFyIGNoZWNrIG91dGxpbmUnLCAnY2FsZW5kYXIgbWludXMnLCAnY2FsZW5kYXIgbWludXMgb3V0bGluZScsICdjYWxlbmRhciBwbHVzJywgJ2NhbGVuZGFyIHBsdXMgb3V0bGluZScsICdjYWxlbmRhciB0aW1lcycsICdjYWxlbmRhciB0aW1lcyBvdXRsaW5lJywgJ2Nsb2NrJywgJ2Nsb2NrIG91dGxpbmUnLCAnaG91cmdsYXNzJywgJ2hvdXJnbGFzcyBvdXRsaW5lJywgJ2hvdXJnbGFzcyBlbmQnLCAnaG91cmdsYXNzIGhhbGYnLCAnaG91cmdsYXNzIHN0YXJ0JywgJ3N0b3B3YXRjaCddO1xuZXhwb3J0IHZhciBERVNJR04gPSBbJ2FkanVzdCcsICdjbG9uZScsICdjbG9uZSBvdXRsaW5lJywgJ2NvcHknLCAnY29weSBvdXRsaW5lJywgJ2Nyb3AnLCAnY3Jvc3NoYWlycycsICdjdXQnLCAnZWRpdCcsICdlZGl0IG91dGxpbmUnLCAnZXJhc2VyJywgJ2V5ZScsICdleWUgZHJvcHBlcicsICdleWUgc2xhc2gnLCAnZXllIHNsYXNoIG91dGxpbmUnLCAnb2JqZWN0IGdyb3VwJywgJ29iamVjdCBncm91cCBvdXRsaW5lJywgJ29iamVjdCB1bmdyb3VwJywgJ29iamVjdCB1bmdyb3VwIG91dGxpbmUnLCAncGFpbnQgYnJ1c2gnLCAncGFzdGUnLCAncGVuY2lsIGFsdGVybmF0ZScsICdzYXZlJywgJ3NhdmUgb3V0bGluZScsICd0aW50J107XG5leHBvcnQgdmFyIEVESVRPUlMgPSBbJ2FsaWduIGNlbnRlcicsICdhbGlnbiBqdXN0aWZ5JywgJ2FsaWduIGxlZnQnLCAnYWxpZ24gcmlnaHQnLCAnYm9sZCcsICdjbGlwYm9hcmQnLCAnY2xpcGJvYXJkIG91dGxpbmUnLCAnY2xvbmUnLCAnY2xvbmUgb3V0bGluZScsICdjb2x1bW5zJywgJ2NvcHknLCAnY29weSBvdXRsaW5lJywgJ2N1dCcsICdlZGl0JywgJ2VkaXQgb3V0bGluZScsICdlcmFzZXInLCAnZmlsZScsICdmaWxlIG91dGxpbmUnLCAnZmlsZSBhbHRlcm5hdGUnLCAnZmlsZSBhbHRlcm5hdGUgb3V0bGluZScsICdmb250JywgJ2hlYWRpbmcnLCAnaSBjdXJzb3InLCAnaW5kZW50JywgJ2l0YWxpYycsICdsaW5raWZ5JywgJ2xpc3QnLCAnbGlzdCBhbHRlcm5hdGUnLCAnbGlzdCBhbHRlcm5hdGUgb3V0bGluZScsICdsaXN0IG9sJywgJ2xpc3QgdWwnLCAnb3V0ZGVudCcsICdwYXBlciBwbGFuZScsICdwYXBlciBwbGFuZSBvdXRsaW5lJywgJ3BhcGVyY2xpcCcsICdwYXJhZ3JhcGgnLCAncGFzdGUnLCAncGVuY2lsIGFsdGVybmF0ZScsICdwcmludCcsICdxdW90ZSBsZWZ0JywgJ3F1b3RlIHJpZ2h0JywgJ3JlZG8nLCAncmVkbyBhbHRlcm5hdGUnLCAncmVwbHknLCAncmVwbHkgYWxsJywgJ3NoYXJlJywgJ3N0cmlrZXRocm91Z2gnLCAnc3Vic2NyaXB0JywgJ3N1cGVyc2NyaXB0JywgJ3N5bmMnLCAnc3luYyBhbHRlcm5hdGUnLCAndGFibGUnLCAndGFza3MnLCAndGV4dCBoZWlnaHQnLCAndGV4dCB3aWR0aCcsICd0aCcsICd0aCBsYXJnZScsICd0aCBsaXN0JywgJ3RyYXNoJywgJ3RyYXNoIGFsdGVybmF0ZScsICd0cmFzaCBhbHRlcm5hdGUgb3V0bGluZScsICd1bmRlcmxpbmUnLCAndW5kbycsICd1bmRvIGFsdGVybmF0ZScsICd1bmxpbmsnXTtcbmV4cG9ydCB2YXIgRklMRVMgPSBbJ2FyY2hpdmUnLCAnY2xvbmUnLCAnY2xvbmUgb3V0bGluZScsICdjb3B5JywgJ2NvcHkgb3V0bGluZScsICdjdXQnLCAnZmlsZScsICdmaWxlIG91dGxpbmUnLCAnZmlsZSBhbHRlcm5hdGUnLCAnZmlsZSBhbHRlcm5hdGUgb3V0bGluZScsICdmaWxlIGFyY2hpdmUnLCAnZmlsZSBhcmNoaXZlIG91dGxpbmUnLCAnZmlsZSBhdWRpbycsICdmaWxlIGF1ZGlvIG91dGxpbmUnLCAnZmlsZSBjb2RlJywgJ2ZpbGUgY29kZSBvdXRsaW5lJywgJ2ZpbGUgZXhjZWwnLCAnZmlsZSBleGNlbCBvdXRsaW5lJywgJ2ZpbGUgaW1hZ2UnLCAnZmlsZSBpbWFnZSBvdXRsaW5lJywgJ2ZpbGUgcGRmJywgJ2ZpbGUgcGRmIG91dGxpbmUnLCAnZmlsZSBwb3dlcnBvaW50JywgJ2ZpbGUgcG93ZXJwb2ludCBvdXRsaW5lJywgJ2ZpbGUgdmlkZW8nLCAnZmlsZSB2aWRlbyBvdXRsaW5lJywgJ2ZpbGUgd29yZCcsICdmaWxlIHdvcmQgb3V0bGluZScsICdmb2xkZXInLCAnZm9sZGVyIG91dGxpbmUnLCAnZm9sZGVyIG9wZW4nLCAnZm9sZGVyIG9wZW4gb3V0bGluZScsICdwYXN0ZScsICdzYXZlJywgJ3NhdmUgb3V0bGluZScsICdzdGlja3kgbm90ZScsICdzdGlja3kgbm90ZSBvdXRsaW5lJ107XG5leHBvcnQgdmFyIEdFTkRFUlMgPSBbJ2dlbmRlcmxlc3MnLCAnbWFycycsICdtYXJzIGRvdWJsZScsICdtYXJzIHN0cm9rZScsICdtYXJzIHN0cm9rZSBob3Jpem9udGFsJywgJ21hcnMgc3Ryb2tlIHZlcnRpY2FsJywgJ21lcmN1cnknLCAnbmV1dGVyJywgJ3RyYW5zZ2VuZGVyJywgJ3RyYW5zZ2VuZGVyIGFsdGVybmF0ZScsICd2ZW51cycsICd2ZW51cyBkb3VibGUnLCAndmVudXMgbWFycyddO1xuZXhwb3J0IHZhciBIQU5EU19HRVNUVVJFUyA9IFsnaGFuZCBsaXphcmQnLCAnaGFuZCBsaXphcmQgb3V0bGluZScsICdoYW5kIHBhcGVyJywgJ2hhbmQgcGFwZXIgb3V0bGluZScsICdoYW5kIHBlYWNlJywgJ2hhbmQgcGVhY2Ugb3V0bGluZScsICdoYW5kIHBvaW50IGRvd24nLCAnaGFuZCBwb2ludCBkb3duIG91dGxpbmUnLCAnaGFuZCBwb2ludCBsZWZ0JywgJ2hhbmQgcG9pbnQgbGVmdCBvdXRsaW5lJywgJ2hhbmQgcG9pbnQgcmlnaHQnLCAnaGFuZCBwb2ludCByaWdodCBvdXRsaW5lJywgJ2hhbmQgcG9pbnQgdXAnLCAnaGFuZCBwb2ludCB1cCBvdXRsaW5lJywgJ2hhbmQgcG9pbnRlcicsICdoYW5kIHBvaW50ZXIgb3V0bGluZScsICdoYW5kIHJvY2snLCAnaGFuZCByb2NrIG91dGxpbmUnLCAnaGFuZCBzY2lzc29ycycsICdoYW5kIHNjaXNzb3JzIG91dGxpbmUnLCAnaGFuZCBzcG9jaycsICdoYW5kIHNwb2NrIG91dGxpbmUnLCAnaGFuZHNoYWtlJywgJ2hhbmRzaGFrZSBvdXRsaW5lJywgJ3RodW1icyBkb3duJywgJ3RodW1icyBkb3duIG91dGxpbmUnLCAndGh1bWJzIHVwJywgJ3RodW1icyB1cCBvdXRsaW5lJ107XG5leHBvcnQgdmFyIEhFQUxUSCA9IFsnYW1idWxhbmNlJywgJ2ggc3F1YXJlJywgJ2hlYXJ0JywgJ2hlYXJ0IG91dGxpbmUnLCAnaGVhcnRiZWF0JywgJ2hvc3BpdGFsJywgJ2hvc3BpdGFsIG91dGxpbmUnLCAnbWVka2l0JywgJ3BsdXMgc3F1YXJlJywgJ3BsdXMgc3F1YXJlIG91dGxpbmUnLCAnc3RldGhvc2NvcGUnLCAndXNlciBtZCcsICd3aGVlbGNoYWlyJ107XG5leHBvcnQgdmFyIElNQUdFUyA9IFsnYWRqdXN0JywgJ2JvbHQnLCAnY2FtZXJhJywgJ2NhbWVyYSByZXRybycsICdjbG9uZScsICdjbG9uZSBvdXRsaW5lJywgJ2NvbXByZXNzJywgJ2V4cGFuZCcsICdleWUnLCAnZXllIGRyb3BwZXInLCAnZXllIHNsYXNoJywgJ2V5ZSBzbGFzaCBvdXRsaW5lJywgJ2ZpbGUgaW1hZ2UnLCAnZmlsZSBpbWFnZSBvdXRsaW5lJywgJ2ZpbG0nLCAnaWQgYmFkZ2UnLCAnaWQgYmFkZ2Ugb3V0bGluZScsICdpZCBjYXJkJywgJ2lkIGNhcmQgb3V0bGluZScsICdpbWFnZScsICdpbWFnZSBvdXRsaW5lJywgJ2ltYWdlcycsICdpbWFnZXMgb3V0bGluZScsICdzbGlkZXJzIGhvcml6b250YWwnLCAndGludCddO1xuZXhwb3J0IHZhciBJTlRFUkZBQ0VTID0gWydiYW4nLCAnYmFyY29kZScsICdiYXJzJywgJ2JlZXInLCAnYmVsbCcsICdiZWxsIG91dGxpbmUnLCAnYmVsbCBzbGFzaCcsICdiZWxsIHNsYXNoIG91dGxpbmUnLCAnYnVnJywgJ2J1bGxob3JuJywgJ2J1bGxzZXllJywgJ2NhbGN1bGF0b3InLCAnY2FsZW5kYXInLCAnY2FsZW5kYXIgb3V0bGluZScsICdjYWxlbmRhciBhbHRlcm5hdGUnLCAnY2FsZW5kYXIgYWx0ZXJuYXRlIG91dGxpbmUnLCAnY2FsZW5kYXIgY2hlY2snLCAnY2FsZW5kYXIgY2hlY2sgb3V0bGluZScsICdjYWxlbmRhciBtaW51cycsICdjYWxlbmRhciBtaW51cyBvdXRsaW5lJywgJ2NhbGVuZGFyIHBsdXMnLCAnY2FsZW5kYXIgcGx1cyBvdXRsaW5lJywgJ2NhbGVuZGFyIHRpbWVzJywgJ2NhbGVuZGFyIHRpbWVzIG91dGxpbmUnLCAnY2VydGlmaWNhdGUnLCAnY2hlY2snLCAnY2hlY2sgY2lyY2xlJywgJ2NoZWNrIGNpcmNsZSBvdXRsaW5lJywgJ2NoZWNrIHNxdWFyZScsICdjaGVjayBzcXVhcmUgb3V0bGluZScsICdjaXJjbGUnLCAnY2lyY2xlIG91dGxpbmUnLCAnY2xpcGJvYXJkJywgJ2NsaXBib2FyZCBvdXRsaW5lJywgJ2Nsb25lJywgJ2Nsb25lIG91dGxpbmUnLCAnY2xvdWQnLCAnY2xvdWQgZG93bmxvYWQnLCAnY2xvdWQgdXBsb2FkJywgJ2NvZmZlZScsICdjb2cnLCAnY29ncycsICdjb3B5JywgJ2NvcHkgb3V0bGluZScsICdjdXQnLCAnZGF0YWJhc2UnLCAnZG90IGNpcmNsZScsICdkb3QgY2lyY2xlIG91dGxpbmUnLCAnZG93bmxvYWQnLCAnZWRpdCcsICdlZGl0IG91dGxpbmUnLCAnZWxsaXBzaXMgaG9yaXpvbnRhbCcsICdlbGxpcHNpcyB2ZXJ0aWNhbCcsICdlbnZlbG9wZScsICdlbnZlbG9wZSBvdXRsaW5lJywgJ2VudmVsb3BlIG9wZW4nLCAnZW52ZWxvcGUgb3BlbiBvdXRsaW5lJywgJ2VyYXNlcicsICdleGNsYW1hdGlvbicsICdleGNsYW1hdGlvbiBjaXJjbGUnLCAnZXhjbGFtYXRpb24gdHJpYW5nbGUnLCAnZXh0ZXJuYWwgYWx0ZXJuYXRlJywgJ2V4dGVybmFsIHNxdWFyZSBhbHRlcm5hdGUnLCAnZXllJywgJ2V5ZSBzbGFzaCcsICdleWUgc2xhc2ggb3V0bGluZScsICdmaWxlJywgJ2ZpbGUgb3V0bGluZScsICdmaWxlIGFsdGVybmF0ZScsICdmaWxlIGFsdGVybmF0ZSBvdXRsaW5lJywgJ2ZpbHRlcicsICdmbGFnJywgJ2ZsYWcgb3V0bGluZScsICdmbGFnIGNoZWNrZXJlZCcsICdmb2xkZXInLCAnZm9sZGVyIG91dGxpbmUnLCAnZm9sZGVyIG9wZW4nLCAnZm9sZGVyIG9wZW4gb3V0bGluZScsICdmcm93bicsICdmcm93biBvdXRsaW5lJywgJ2hhc2h0YWcnLCAnaGVhcnQnLCAnaGVhcnQgb3V0bGluZScsICdoaXN0b3J5JywgJ2hvbWUnLCAnaSBjdXJzb3InLCAnaW5mbycsICdpbmZvIGNpcmNsZScsICdsYW5ndWFnZScsICdtYWdpYycsICdtZWgnLCAnbWVoIG91dGxpbmUnLCAnbWljcm9waG9uZScsICdtaWNyb3Bob25lIHNsYXNoJywgJ21pbnVzJywgJ21pbnVzIGNpcmNsZScsICdtaW51cyBzcXVhcmUnLCAnbWludXMgc3F1YXJlIG91dGxpbmUnLCAncGFzdGUnLCAncGVuY2lsIGFsdGVybmF0ZScsICdwbHVzJywgJ3BsdXMgY2lyY2xlJywgJ3BsdXMgc3F1YXJlJywgJ3BsdXMgc3F1YXJlIG91dGxpbmUnLCAncXJjb2RlJywgJ3F1ZXN0aW9uJywgJ3F1ZXN0aW9uIGNpcmNsZScsICdxdWVzdGlvbiBjaXJjbGUgb3V0bGluZScsICdxdW90ZSBsZWZ0JywgJ3F1b3RlIHJpZ2h0JywgJ3JlZG8nLCAncmVkbyBhbHRlcm5hdGUnLCAncmVwbHknLCAncmVwbHkgYWxsJywgJ3JzcycsICdyc3Mgc3F1YXJlJywgJ3NhdmUnLCAnc2F2ZSBvdXRsaW5lJywgJ3NlYXJjaCcsICdzZWFyY2ggbWludXMnLCAnc2VhcmNoIHBsdXMnLCAnc2hhcmUnLCAnc2hhcmUgYWx0ZXJuYXRlJywgJ3NoYXJlIGFsdGVybmF0ZSBzcXVhcmUnLCAnc2hhcmUgc3F1YXJlJywgJ3NoYXJlIHNxdWFyZSBvdXRsaW5lJywgJ3NoaWVsZCBhbHRlcm5hdGUnLCAnc2lnbi1pbicsICdzaWduLW91dCcsICdzaWduYWwnLCAnc2l0ZW1hcCcsICdzbGlkZXJzIGhvcml6b250YWwnLCAnc21pbGUnLCAnc21pbGUgb3V0bGluZScsICdzb3J0JywgJ3NvcnQgYWxwaGFiZXQgZG93bicsICdzb3J0IGFscGhhYmV0IHVwJywgJ3NvcnQgYW1vdW50IGRvd24nLCAnc29ydCBhbW91bnQgdXAnLCAnc29ydCBkb3duJywgJ3NvcnQgbnVtZXJpYyBkb3duJywgJ3NvcnQgbnVtZXJpYyB1cCcsICdzb3J0IHVwJywgJ3N0YXInLCAnc3RhciBvdXRsaW5lJywgJ3N0YXIgaGFsZicsICdzdGFyIGhhbGYgb3V0bGluZScsICdzeW5jJywgJ3N5bmMgYWx0ZXJuYXRlJywgJ3RodW1icyBkb3duJywgJ3RodW1icyBkb3duIG91dGxpbmUnLCAndGh1bWJzIHVwJywgJ3RodW1icyB1cCBvdXRsaW5lJywgJ3RpbWVzJywgJ3RpbWVzIGNpcmNsZScsICd0aW1lcyBjaXJjbGUgb3V0bGluZScsICd0b2dnbGUgb2ZmJywgJ3RvZ2dsZSBvbicsICd0cmFzaCcsICd0cmFzaCBhbHRlcm5hdGUnLCAndHJhc2ggYWx0ZXJuYXRlIG91dGxpbmUnLCAndHJvcGh5JywgJ3VuZG8nLCAndW5kbyBhbHRlcm5hdGUnLCAndXBsb2FkJywgJ3VzZXInLCAndXNlciBvdXRsaW5lJywgJ3VzZXIgY2lyY2xlJywgJ3VzZXIgY2lyY2xlIG91dGxpbmUnLCAnd2lmaSddO1xuZXhwb3J0IHZhciBMT0dJU1RJQ1MgPSBbJ2JveCcsICdib3hlcycsICdjbGlwYm9hcmQgY2hlY2snLCAnY2xpcGJvYXJkIGxpc3QnLCAnZG9sbHknLCAnZG9sbHkgZmxhdGJlZCcsICdwYWxsZXQnLCAnc2hpcHBpbmcgZmFzdCcsICd0cnVjaycsICd3YXJlaG91c2UnXTtcbmV4cG9ydCB2YXIgTUFQUyA9IFsnYW1idWxhbmNlJywgJ2FuY2hvcicsICdiYWxhbmNlIHNjYWxlJywgJ2JhdGgnLCAnYmVkJywgJ2JlZXInLCAnYmVsbCcsICdiZWxsIG91dGxpbmUnLCAnYmVsbCBzbGFzaCcsICdiZWxsIHNsYXNoIG91dGxpbmUnLCAnYmljeWNsZScsICdiaW5vY3VsYXJzJywgJ2JpcnRoZGF5IGNha2UnLCAnYmxpbmQnLCAnYm9tYicsICdib29rJywgJ2Jvb2ttYXJrJywgJ2Jvb2ttYXJrIG91dGxpbmUnLCAnYnJpZWZjYXNlJywgJ2J1aWxkaW5nJywgJ2J1aWxkaW5nIG91dGxpbmUnLCAnY2FyJywgJ2NvZmZlZScsICdjcm9zc2hhaXJzJywgJ2RvbGxhciBzaWduJywgJ2V5ZScsICdleWUgc2xhc2gnLCAnZXllIHNsYXNoIG91dGxpbmUnLCAnZmlnaHRlciBqZXQnLCAnZmlyZScsICdmaXJlIGV4dGluZ3Vpc2hlcicsICdmbGFnJywgJ2ZsYWcgb3V0bGluZScsICdmbGFnIGNoZWNrZXJlZCcsICdmbGFzaycsICdnYW1lcGFkJywgJ2dhdmVsJywgJ2dpZnQnLCAnZ2xhc3MgbWFydGluaScsICdnbG9iZScsICdncmFkdWF0aW9uIGNhcCcsICdoIHNxdWFyZScsICdoZWFydCcsICdoZWFydCBvdXRsaW5lJywgJ2hlYXJ0YmVhdCcsICdob21lJywgJ2hvc3BpdGFsJywgJ2hvc3BpdGFsIG91dGxpbmUnLCAnaW1hZ2UnLCAnaW1hZ2Ugb3V0bGluZScsICdpbWFnZXMnLCAnaW1hZ2VzIG91dGxpbmUnLCAnaW5kdXN0cnknLCAnaW5mbycsICdpbmZvIGNpcmNsZScsICdrZXknLCAnbGVhZicsICdsZW1vbicsICdsZW1vbiBvdXRsaW5lJywgJ2xpZmUgcmluZycsICdsaWZlIHJpbmcgb3V0bGluZScsICdsaWdodGJ1bGInLCAnbGlnaHRidWxiIG91dGxpbmUnLCAnbG9jYXRpb24gYXJyb3cnLCAnbG93IHZpc2lvbicsICdtYWduZXQnLCAnbWFsZScsICdtYXAnLCAnbWFwIG91dGxpbmUnLCAnbWFwIG1hcmtlcicsICdtYXAgbWFya2VyIGFsdGVybmF0ZScsICdtYXAgcGluJywgJ21hcCBzaWducycsICdtZWRraXQnLCAnbW9uZXkgYmlsbCBhbHRlcm5hdGUnLCAnbW9uZXkgYmlsbCBhbHRlcm5hdGUgb3V0bGluZScsICdtb3RvcmN5Y2xlJywgJ211c2ljJywgJ25ld3NwYXBlcicsICduZXdzcGFwZXIgb3V0bGluZScsICdwYXcnLCAncGhvbmUnLCAncGhvbmUgc3F1YXJlJywgJ3Bob25lIHZvbHVtZScsICdwbGFuZScsICdwbHVnJywgJ3BsdXMnLCAncGx1cyBzcXVhcmUnLCAncGx1cyBzcXVhcmUgb3V0bGluZScsICdwcmludCcsICdyZWN5Y2xlJywgJ3JvYWQnLCAncm9ja2V0JywgJ3NlYXJjaCcsICdzZWFyY2ggbWludXMnLCAnc2VhcmNoIHBsdXMnLCAnc2hpcCcsICdzaG9wcGluZyBiYWcnLCAnc2hvcHBpbmcgYmFza2V0JywgJ3Nob3BwaW5nIGNhcnQnLCAnc2hvd2VyJywgJ3N0cmVldCB2aWV3JywgJ3N1YndheScsICdzdWl0Y2FzZScsICd0YWcnLCAndGFncycsICd0YXhpJywgJ3RodW1idGFjaycsICd0aWNrZXQgYWx0ZXJuYXRlJywgJ3RpbnQnLCAndHJhaW4nLCAndHJlZScsICd0cm9waHknLCAndHJ1Y2snLCAndHR5JywgJ3VtYnJlbGxhJywgJ3VuaXZlcnNpdHknLCAndXRlbnNpbCBzcG9vbicsICd1dGVuc2lscycsICd3aGVlbGNoYWlyJywgJ3dpZmknLCAnd3JlbmNoJ107XG5leHBvcnQgdmFyIE1FRElDQUwgPSBbJ2FtYnVsYW5jZScsICdiYW5kIGFpZCcsICdkbmEnLCAnZmlyc3QgYWlkJywgJ2hlYXJ0JywgJ2hlYXJ0IG91dGxpbmUnLCAnaGVhcnRiZWF0JywgJ2hvc3BpdGFsJywgJ2hvc3BpdGFsIG91dGxpbmUnLCAnaG9zcGl0YWwgc3ltYm9sJywgJ3BpbGxzJywgJ3BsdXMnLCAnc3RldGhvc2NvcGUnLCAnc3lyaW5nZScsICd0aGVybW9tZXRlcicsICd1c2VyIG1kJywgJ3dlaWdodCddO1xuZXhwb3J0IHZhciBPQkpFQ1RTID0gWydhbWJ1bGFuY2UnLCAnYW5jaG9yJywgJ2FyY2hpdmUnLCAnYmFsYW5jZSBzY2FsZScsICdiYXRoJywgJ2JlZCcsICdiZWVyJywgJ2JlbGwnLCAnYmVsbCBvdXRsaW5lJywgJ2JpY3ljbGUnLCAnYmlub2N1bGFycycsICdiaXJ0aGRheSBjYWtlJywgJ2JvbWInLCAnYm9vaycsICdib29rbWFyaycsICdib29rbWFyayBvdXRsaW5lJywgJ2JyaWVmY2FzZScsICdidWcnLCAnYnVpbGRpbmcnLCAnYnVpbGRpbmcgb3V0bGluZScsICdidWxsaG9ybicsICdidWxsc2V5ZScsICdidXMnLCAnY2FsY3VsYXRvcicsICdjYWxlbmRhcicsICdjYWxlbmRhciBvdXRsaW5lJywgJ2NhbGVuZGFyIGFsdGVybmF0ZScsICdjYWxlbmRhciBhbHRlcm5hdGUgb3V0bGluZScsICdjYW1lcmEnLCAnY2FtZXJhIHJldHJvJywgJ2NhcicsICdjbGlwYm9hcmQnLCAnY2xpcGJvYXJkIG91dGxpbmUnLCAnY2xvdWQnLCAnY29mZmVlJywgJ2NvZycsICdjb2dzJywgJ2NvbXBhc3MnLCAnY29tcGFzcyBvdXRsaW5lJywgJ2NvcHknLCAnY29weSBvdXRsaW5lJywgJ2N1YmUnLCAnY3ViZXMnLCAnY3V0JywgJ2VudmVsb3BlJywgJ2VudmVsb3BlIG91dGxpbmUnLCAnZW52ZWxvcGUgb3BlbicsICdlbnZlbG9wZSBvcGVuIG91dGxpbmUnLCAnZXJhc2VyJywgJ2V5ZScsICdleWUgZHJvcHBlcicsICdmYXgnLCAnZmlnaHRlciBqZXQnLCAnZmlsZScsICdmaWxlIG91dGxpbmUnLCAnZmlsZSBhbHRlcm5hdGUnLCAnZmlsZSBhbHRlcm5hdGUgb3V0bGluZScsICdmaWxtJywgJ2ZpcmUnLCAnZmlyZSBleHRpbmd1aXNoZXInLCAnZmxhZycsICdmbGFnIG91dGxpbmUnLCAnZmxhZyBjaGVja2VyZWQnLCAnZmxhc2snLCAnZnV0Ym9sJywgJ2Z1dGJvbCBvdXRsaW5lJywgJ2dhbWVwYWQnLCAnZ2F2ZWwnLCAnZ2VtJywgJ2dlbSBvdXRsaW5lJywgJ2dpZnQnLCAnZ2xhc3MgbWFydGluaScsICdnbG9iZScsICdncmFkdWF0aW9uIGNhcCcsICdoZGQnLCAnaGRkIG91dGxpbmUnLCAnaGVhZHBob25lcycsICdoZWFydCcsICdoZWFydCBvdXRsaW5lJywgJ2hvbWUnLCAnaG9zcGl0YWwnLCAnaG9zcGl0YWwgb3V0bGluZScsICdob3VyZ2xhc3MnLCAnaG91cmdsYXNzIG91dGxpbmUnLCAnaW1hZ2UnLCAnaW1hZ2Ugb3V0bGluZScsICdpbWFnZXMnLCAnaW1hZ2VzIG91dGxpbmUnLCAnaW5kdXN0cnknLCAna2V5JywgJ2tleWJvYXJkJywgJ2tleWJvYXJkIG91dGxpbmUnLCAnbGFwdG9wJywgJ2xlYWYnLCAnbGVtb24nLCAnbGVtb24gb3V0bGluZScsICdsaWZlIHJpbmcnLCAnbGlmZSByaW5nIG91dGxpbmUnLCAnbGlnaHRidWxiJywgJ2xpZ2h0YnVsYiBvdXRsaW5lJywgJ2xvY2snLCAnbG9jayBvcGVuJywgJ21hZ2ljJywgJ21hZ25ldCcsICdtYXAnLCAnbWFwIG91dGxpbmUnLCAnbWFwIG1hcmtlcicsICdtYXAgbWFya2VyIGFsdGVybmF0ZScsICdtYXAgcGluJywgJ21hcCBzaWducycsICdtZWRraXQnLCAnbWljcm9jaGlwJywgJ21pY3JvcGhvbmUnLCAnbW9iaWxlJywgJ21vYmlsZSBhbHRlcm5hdGUnLCAnbW9uZXkgYmlsbCBhbHRlcm5hdGUnLCAnbW9uZXkgYmlsbCBhbHRlcm5hdGUgb3V0bGluZScsICdtb29uJywgJ21vb24gb3V0bGluZScsICdtb3RvcmN5Y2xlJywgJ25ld3NwYXBlcicsICduZXdzcGFwZXIgb3V0bGluZScsICdwYWludCBicnVzaCcsICdwYXBlciBwbGFuZScsICdwYXBlciBwbGFuZSBvdXRsaW5lJywgJ3BhcGVyY2xpcCcsICdwYXN0ZScsICdwYXcnLCAncGVuY2lsIGFsdGVybmF0ZScsICdwaG9uZScsICdwbGFuZScsICdwbHVnJywgJ3ByaW50JywgJ3B1enpsZSBwaWVjZScsICdyb2FkJywgJ3JvY2tldCcsICdzYXZlJywgJ3NhdmUgb3V0bGluZScsICdzZWFyY2gnLCAnc2hpZWxkIGFsdGVybmF0ZScsICdzaG9wcGluZyBiYWcnLCAnc2hvcHBpbmcgYmFza2V0JywgJ3Nob3BwaW5nIGNhcnQnLCAnc2hvd2VyJywgJ3Nub3dmbGFrZScsICdzbm93Zmxha2Ugb3V0bGluZScsICdzcGFjZSBzaHV0dGxlJywgJ3N0YXInLCAnc3RhciBvdXRsaW5lJywgJ3N0aWNreSBub3RlJywgJ3N0aWNreSBub3RlIG91dGxpbmUnLCAnc3RvcHdhdGNoJywgJ3N1YndheScsICdzdWl0Y2FzZScsICdzdW4nLCAnc3VuIG91dGxpbmUnLCAndGFibGV0JywgJ3RhYmxldCBhbHRlcm5hdGUnLCAndGFjaG9tZXRlciBhbHRlcm5hdGUnLCAndGFnJywgJ3RhZ3MnLCAndGF4aScsICd0aHVtYnRhY2snLCAndGlja2V0IGFsdGVybmF0ZScsICd0cmFpbicsICd0cmFzaCcsICd0cmFzaCBhbHRlcm5hdGUnLCAndHJhc2ggYWx0ZXJuYXRlIG91dGxpbmUnLCAndHJlZScsICd0cm9waHknLCAndHJ1Y2snLCAndHYnLCAndW1icmVsbGEnLCAndW5pdmVyc2l0eScsICd1bmxvY2snLCAndW5sb2NrIGFsdGVybmF0ZScsICd1dGVuc2lsIHNwb29uJywgJ3V0ZW5zaWxzJywgJ3doZWVsY2hhaXInLCAnd3JlbmNoJ107XG5leHBvcnQgdmFyIFBBWU1FTlRTX1NIT1BQSU5HID0gWydiZWxsJywgJ2JlbGwgb3V0bGluZScsICdib29rbWFyaycsICdib29rbWFyayBvdXRsaW5lJywgJ2J1bGxob3JuJywgJ2NhbWVyYScsICdjYW1lcmEgcmV0cm8nLCAnY2FydCBhcnJvdyBkb3duJywgJ2NhcnQgcGx1cycsICdjZXJ0aWZpY2F0ZScsICdjcmVkaXQgY2FyZCcsICdjcmVkaXQgY2FyZCBvdXRsaW5lJywgJ2dlbScsICdnZW0gb3V0bGluZScsICdnaWZ0JywgJ2hhbmRzaGFrZScsICdoYW5kc2hha2Ugb3V0bGluZScsICdoZWFydCcsICdoZWFydCBvdXRsaW5lJywgJ2tleScsICdzaG9wcGluZyBiYWcnLCAnc2hvcHBpbmcgYmFza2V0JywgJ3Nob3BwaW5nIGNhcnQnLCAnc3RhcicsICdzdGFyIG91dGxpbmUnLCAndGFnJywgJ3RhZ3MnLCAndGh1bWJzIGRvd24nLCAndGh1bWJzIGRvd24gb3V0bGluZScsICd0aHVtYnMgdXAnLCAndGh1bWJzIHVwIG91dGxpbmUnLCAndHJvcGh5J107XG5leHBvcnQgdmFyIFNIQVBFUyA9IFsnYm9va21hcmsnLCAnYm9va21hcmsgb3V0bGluZScsICdjYWxlbmRhcicsICdjYWxlbmRhciBvdXRsaW5lJywgJ2NlcnRpZmljYXRlJywgJ2NpcmNsZScsICdjaXJjbGUgb3V0bGluZScsICdjbG91ZCcsICdjb21tZW50JywgJ2NvbW1lbnQgb3V0bGluZScsICdmaWxlJywgJ2ZpbGUgb3V0bGluZScsICdmb2xkZXInLCAnZm9sZGVyIG91dGxpbmUnLCAnaGVhcnQnLCAnaGVhcnQgb3V0bGluZScsICdtYXAgbWFya2VyJywgJ3BsYXknLCAnc3F1YXJlJywgJ3NxdWFyZSBvdXRsaW5lJywgJ3N0YXInLCAnc3RhciBvdXRsaW5lJ107XG5leHBvcnQgdmFyIFNQSU5ORVJTID0gWydhc3RlcmlzaycsICdjZXJ0aWZpY2F0ZScsICdjaXJjbGUgbm90Y2gnLCAnY29nJywgJ2NvbXBhc3MnLCAnY29tcGFzcyBvdXRsaW5lJywgJ2Nyb3NzaGFpcnMnLCAnbGlmZSByaW5nJywgJ2xpZmUgcmluZyBvdXRsaW5lJywgJ3Nub3dmbGFrZScsICdzbm93Zmxha2Ugb3V0bGluZScsICdzcGlubmVyJywgJ3N1bicsICdzdW4gb3V0bGluZScsICdzeW5jJ107XG5leHBvcnQgdmFyIFNQT1JUUyA9IFsnYmFzZWJhbGwgYmFsbCcsICdiYXNrZXRiYWxsIGJhbGwnLCAnYm93bGluZyBiYWxsJywgJ2Zvb3RiYWxsIGJhbGwnLCAnZnV0Ym9sJywgJ2Z1dGJvbCBvdXRsaW5lJywgJ2dvbGYgYmFsbCcsICdob2NrZXkgcHVjaycsICdxdWlkZGl0Y2gnLCAndGFibGUgdGVubmlzJywgJ3ZvbGxleWJhbGwgYmFsbCddO1xuZXhwb3J0IHZhciBTVEFUVVMgPSBbJ2JhbicsICdiYXR0ZXJ5IGVtcHR5JywgJ2JhdHRlcnkgZnVsbCcsICdiYXR0ZXJ5IGhhbGYnLCAnYmF0dGVyeSBxdWFydGVyJywgJ2JhdHRlcnkgdGhyZWUgcXVhcnRlcnMnLCAnYmVsbCcsICdiZWxsIG91dGxpbmUnLCAnYmVsbCBzbGFzaCcsICdiZWxsIHNsYXNoIG91dGxpbmUnLCAnY2FsZW5kYXInLCAnY2FsZW5kYXIgb3V0bGluZScsICdjYWxlbmRhciBhbHRlcm5hdGUnLCAnY2FsZW5kYXIgYWx0ZXJuYXRlIG91dGxpbmUnLCAnY2FsZW5kYXIgY2hlY2snLCAnY2FsZW5kYXIgY2hlY2sgb3V0bGluZScsICdjYWxlbmRhciBtaW51cycsICdjYWxlbmRhciBtaW51cyBvdXRsaW5lJywgJ2NhbGVuZGFyIHBsdXMnLCAnY2FsZW5kYXIgcGx1cyBvdXRsaW5lJywgJ2NhbGVuZGFyIHRpbWVzJywgJ2NhbGVuZGFyIHRpbWVzIG91dGxpbmUnLCAnY2FydCBhcnJvdyBkb3duJywgJ2NhcnQgcGx1cycsICdleGNsYW1hdGlvbicsICdleGNsYW1hdGlvbiBjaXJjbGUnLCAnZXhjbGFtYXRpb24gdHJpYW5nbGUnLCAnZXllJywgJ2V5ZSBzbGFzaCcsICdleWUgc2xhc2ggb3V0bGluZScsICdmaWxlJywgJ2ZpbGUgb3V0bGluZScsICdmaWxlIGFsdGVybmF0ZScsICdmaWxlIGFsdGVybmF0ZSBvdXRsaW5lJywgJ2ZvbGRlcicsICdmb2xkZXIgb3V0bGluZScsICdmb2xkZXIgb3BlbicsICdmb2xkZXIgb3BlbiBvdXRsaW5lJywgJ2luZm8nLCAnaW5mbyBjaXJjbGUnLCAnbG9jaycsICdsb2NrIG9wZW4nLCAnbWludXMnLCAnbWludXMgY2lyY2xlJywgJ21pbnVzIHNxdWFyZScsICdtaW51cyBzcXVhcmUgb3V0bGluZScsICdwbHVzJywgJ3BsdXMgY2lyY2xlJywgJ3BsdXMgc3F1YXJlJywgJ3BsdXMgc3F1YXJlIG91dGxpbmUnLCAncXVlc3Rpb24nLCAncXVlc3Rpb24gY2lyY2xlJywgJ3F1ZXN0aW9uIGNpcmNsZSBvdXRsaW5lJywgJ3NoaWVsZCBhbHRlcm5hdGUnLCAnc2hvcHBpbmcgY2FydCcsICdzaWduIGluIGFsdGVybmF0ZScsICdzaWduIG91dCBhbHRlcm5hdGUnLCAndGhlcm1vbWV0ZXIgZW1wdHknLCAndGhlcm1vbWV0ZXIgZnVsbCcsICd0aGVybW9tZXRlciBoYWxmJywgJ3RoZXJtb21ldGVyIHF1YXJ0ZXInLCAndGhlcm1vbWV0ZXIgdGhyZWUgcXVhcnRlcnMnLCAndGh1bWJzIGRvd24nLCAndGh1bWJzIGRvd24gb3V0bGluZScsICd0aHVtYnMgdXAnLCAndGh1bWJzIHVwIG91dGxpbmUnLCAndG9nZ2xlIG9mZicsICd0b2dnbGUgb24nLCAndW5sb2NrJywgJ3VubG9jayBhbHRlcm5hdGUnXTtcbmV4cG9ydCB2YXIgVVNFUlNfUEVPUExFID0gWydhZGRyZXNzIGJvb2snLCAnYWRkcmVzcyBib29rIG91dGxpbmUnLCAnYWRkcmVzcyBjYXJkJywgJ2FkZHJlc3MgY2FyZCBvdXRsaW5lJywgJ2JlZCcsICdibGluZCcsICdjaGlsZCcsICdmZW1hbGUnLCAnZnJvd24nLCAnZnJvd24gb3V0bGluZScsICdpZCBiYWRnZScsICdpZCBiYWRnZSBvdXRsaW5lJywgJ2lkIGNhcmQnLCAnaWQgY2FyZCBvdXRsaW5lJywgJ21hbGUnLCAnbWVoJywgJ21laCBvdXRsaW5lJywgJ3Bvd2VyIG9mZicsICdzbWlsZScsICdzbWlsZSBvdXRsaW5lJywgJ3N0cmVldCB2aWV3JywgJ3VzZXInLCAndXNlciBvdXRsaW5lJywgJ3VzZXIgY2lyY2xlJywgJ3VzZXIgY2lyY2xlIG91dGxpbmUnLCAndXNlciBtZCcsICd1c2VyIHBsdXMnLCAndXNlciBzZWNyZXQnLCAndXNlciB0aW1lcycsICd1c2VycycsICd3aGVlbGNoYWlyJ107XG5leHBvcnQgdmFyIFZFSElDTEVTID0gWydhbWJ1bGFuY2UnLCAnYmljeWNsZScsICdidXMnLCAnY2FyJywgJ2ZpZ2h0ZXIgamV0JywgJ21vdG9yY3ljbGUnLCAncGFwZXIgcGxhbmUnLCAncGFwZXIgcGxhbmUgb3V0bGluZScsICdwbGFuZScsICdyb2NrZXQnLCAnc2hpcCcsICdzaG9wcGluZyBjYXJ0JywgJ3NwYWNlIHNodXR0bGUnLCAnc3Vid2F5JywgJ3RheGknLCAndHJhaW4nLCAndHJ1Y2snLCAnd2hlZWxjaGFpciddO1xuZXhwb3J0IHZhciBXUklUSU5HID0gWydhcmNoaXZlJywgJ2Jvb2snLCAnYm9va21hcmsnLCAnYm9va21hcmsgb3V0bGluZScsICdlZGl0JywgJ2VkaXQgb3V0bGluZScsICdlbnZlbG9wZScsICdlbnZlbG9wZSBvdXRsaW5lJywgJ2VudmVsb3BlIG9wZW4nLCAnZW52ZWxvcGUgb3BlbiBvdXRsaW5lJywgJ2VyYXNlcicsICdmaWxlJywgJ2ZpbGUgb3V0bGluZScsICdmaWxlIGFsdGVybmF0ZScsICdmaWxlIGFsdGVybmF0ZSBvdXRsaW5lJywgJ2ZvbGRlcicsICdmb2xkZXIgb3V0bGluZScsICdmb2xkZXIgb3BlbicsICdmb2xkZXIgb3BlbiBvdXRsaW5lJywgJ2tleWJvYXJkJywgJ2tleWJvYXJkIG91dGxpbmUnLCAnbmV3c3BhcGVyJywgJ25ld3NwYXBlciBvdXRsaW5lJywgJ3BhcGVyIHBsYW5lJywgJ3BhcGVyIHBsYW5lIG91dGxpbmUnLCAncGFwZXJjbGlwJywgJ3BhcmFncmFwaCcsICdwZW4gc3F1YXJlJywgJ3BlbmNpbCBhbHRlcm5hdGUnLCAncXVvdGUgbGVmdCcsICdxdW90ZSByaWdodCcsICdzdGlja3kgbm90ZScsICdzdGlja3kgbm90ZSBvdXRsaW5lJywgJ3RodW1idGFjayddO1xuZXhwb3J0IHZhciBCUkFORFMgPSBbJzUwMHB4JywgJ2FjY2Vzc2libGUnLCAnYWNjdXNvZnQnLCAnYWRuJywgJ2FkdmVyc2FsJywgJ2FmZmlsaWF0ZXRoZW1lJywgJ2FsZ29saWEnLCAnYW1hem9uJywgJ2FtYXpvbiBwYXknLCAnYW1pbGlhJywgJ2FuZHJvaWQnLCAnYW5nZWxsaXN0JywgJ2FuZ3J5Y3JlYXRpdmUnLCAnYW5ndWxhcicsICdhcHAgc3RvcmUnLCAnYXBwIHN0b3JlIGlvcycsICdhcHBlcicsICdhcHBsZScsICdhcHBsZSBwYXknLCAnYXN5bW1ldHJpaycsICdhdWRpYmxlJywgJ2F1dG9wcmVmaXhlcicsICdhdmlhbmV4JywgJ2F2aWF0bycsICdhd3MnLCAnYmFuZGNhbXAnLCAnYmVoYW5jZScsICdiZWhhbmNlIHNxdWFyZScsICdiaW1vYmplY3QnLCAnYml0YnVja2V0JywgJ2JpdGNvaW4nLCAnYml0eScsICdibGFjayB0aWUnLCAnYmxhY2tiZXJyeScsICdibG9nZ2VyJywgJ2Jsb2dnZXIgYicsICdibHVldG9vdGgnLCAnYmx1ZXRvb3RoIGInLCAnYnRjJywgJ2J1cm9tb2JlbGV4cGVydGUnLCAnYnV5c2VsbGFkcycsICdjYyBhbWF6b24gcGF5JywgJ2NjIGFtZXgnLCAnY2MgYXBwbGUgcGF5JywgJ2NjIGRpbmVycyBjbHViJywgJ2NjIGRpc2NvdmVyJywgJ2NjIGpjYicsICdjYyBtYXN0ZXJjYXJkJywgJ2NjIHBheXBhbCcsICdjYyBzdHJpcGUnLCAnY2MgdmlzYScsICdjZW50ZXJjb2RlJywgJ2Nocm9tZScsICdjbG91ZHNjYWxlJywgJ2Nsb3Vkc21pdGgnLCAnY2xvdWR2ZXJzaWZ5JywgJ2NvZGVwZW4nLCAnY29kaWVwaWUnLCAnY29ubmVjdGRldmVsb3AnLCAnY29udGFvJywgJ2NwYW5lbCcsICdjcmVhdGl2ZSBjb21tb25zJywgJ2NzczMnLCAnY3NzMyBhbHRlcm5hdGUnLCAnY3V0dGxlZmlzaCcsICdkIGFuZCBkJywgJ2Rhc2hjdWJlJywgJ2RlbGljaW91cycsICdkZXBsb3lkb2cnLCAnZGVza3BybycsICdkZXZpYW50YXJ0JywgJ2RpZ2cnLCAnZGlnaXRhbCBvY2VhbicsICdkaXNjb3JkJywgJ2Rpc2NvdXJzZScsICdkb2NodWInLCAnZG9ja2VyJywgJ2RyYWZ0MmRpZ2l0YWwnLCAnZHJpYmJibGUnLCAnZHJpYmJibGUgc3F1YXJlJywgJ2Ryb3Bib3gnLCAnZHJ1cGFsJywgJ2R5YWxvZycsICdlYXJseWJpcmRzJywgJ2VkZ2UnLCAnZWxlbWVudG9yJywgJ2VtYmVyJywgJ2VtcGlyZScsICdlbnZpcmEnLCAnZXJsYW5nJywgJ2V0aGVyZXVtJywgJ2V0c3knLCAnZXhwZWRpdGVkc3NsJywgJ2ZhY2Vib29rJywgJ2ZhY2Vib29rIGYnLCAnZmFjZWJvb2sgbWVzc2VuZ2VyJywgJ2ZhY2Vib29rIHNxdWFyZScsICdmaXJlZm94JywgJ2ZpcnN0IG9yZGVyJywgJ2ZpcnN0ZHJhZnQnLCAnZmxpY2tyJywgJ2ZsaXBib2FyZCcsICdmbHknLCAnZm9udCBhd2Vzb21lJywgJ2ZvbnQgYXdlc29tZSBhbHRlcm5hdGUnLCAnZm9udCBhd2Vzb21lIGZsYWcnLCAnZm9udGljb25zJywgJ2ZvbnRpY29ucyBmaScsICdmb3J0IGF3ZXNvbWUnLCAnZm9ydCBhd2Vzb21lIGFsdGVybmF0ZScsICdmb3J1bWJlZScsICdmb3Vyc3F1YXJlJywgJ2ZyZWUgY29kZSBjYW1wJywgJ2ZyZWVic2QnLCAnZ2V0IHBvY2tldCcsICdnZycsICdnZyBjaXJjbGUnLCAnZ2l0JywgJ2dpdCBzcXVhcmUnLCAnZ2l0aHViJywgJ2dpdGh1YiBhbHRlcm5hdGUnLCAnZ2l0aHViIHNxdWFyZScsICdnaXRrcmFrZW4nLCAnZ2l0bGFiJywgJ2dpdHRlcicsICdnbGlkZScsICdnbGlkZSBnJywgJ2dvZm9yZScsICdnb29kcmVhZHMnLCAnZ29vZHJlYWRzIGcnLCAnZ29vZ2xlJywgJ2dvb2dsZSBkcml2ZScsICdnb29nbGUgcGxheScsICdnb29nbGUgcGx1cycsICdnb29nbGUgcGx1cyBnJywgJ2dvb2dsZSBwbHVzIHNxdWFyZScsICdnb29nbGUgd2FsbGV0JywgJ2dyYXRpcGF5JywgJ2dyYXYnLCAnZ3JpcGZpcmUnLCAnZ3J1bnQnLCAnZ3VscCcsICdoYWNrZXIgbmV3cycsICdoYWNrZXIgbmV3cyBzcXVhcmUnLCAnaGlwcycsICdoaXJlIGEgaGVscGVyJywgJ2hvb2xpJywgJ2hvdGphcicsICdob3V6eicsICdodG1sNScsICdodWJzcG90JywgJ2ltZGInLCAnaW5zdGFncmFtJywgJ2ludGVybmV0IGV4cGxvcmVyJywgJ2lveGhvc3QnLCAnaXR1bmVzJywgJ2l0dW5lcyBub3RlJywgJ2plbmtpbnMnLCAnam9nZXQnLCAnam9vbWxhJywgJ2pzJywgJ2pzIHNxdWFyZScsICdqc2ZpZGRsZScsICdrZXljZG4nLCAna2lja3N0YXJ0ZXInLCAna2lja3N0YXJ0ZXIgaycsICdrb3J2dWUnLCAnbGFyYXZlbCcsICdsYXN0Zm0nLCAnbGFzdGZtIHNxdWFyZScsICdsZWFucHViJywgJ2xlc3MnLCAnbGluZWNoYXQnLCAnbGlua2VkaW4nLCAnbGlua2VkaW4gYWx0ZXJuYXRlJywgJ2xpbm9kZScsICdsaW51eCcsICdseWZ0JywgJ21hZ2VudG8nLCAnbWF4Y2RuJywgJ21lZGFwcHMnLCAnbWVkaXVtJywgJ21lZGl1bSBtJywgJ21lZHJ0JywgJ21lZXR1cCcsICdtaWNyb3NvZnQnLCAnbWl4JywgJ21peGNsb3VkJywgJ21penVuaScsICdtb2R4JywgJ21vbmVybycsICduYXBzdGVyJywgJ25pbnRlbmRvIHN3aXRjaCcsICdub2RlJywgJ25vZGUganMnLCAnbnBtJywgJ25zOCcsICdudXRyaXRpb25peCcsICdvZG5va2xhc3NuaWtpJywgJ29kbm9rbGFzc25pa2kgc3F1YXJlJywgJ29wZW5jYXJ0JywgJ29wZW5pZCcsICdvcGVyYScsICdvcHRpbiBtb25zdGVyJywgJ29zaScsICdwYWdlNCcsICdwYWdlbGluZXMnLCAncGFsZmVkJywgJ3BhdHJlb24nLCAncGF5cGFsJywgJ3BlcmlzY29wZScsICdwaGFicmljYXRvcicsICdwaG9lbml4IGZyYW1ld29yaycsICdwaHAnLCAncGllZCBwaXBlcicsICdwaWVkIHBpcGVyIGFsdGVybmF0ZScsICdwaWVkIHBpcGVyIHBwJywgJ3BpbnRlcmVzdCcsICdwaW50ZXJlc3QgcCcsICdwaW50ZXJlc3Qgc3F1YXJlJywgJ3BsYXlzdGF0aW9uJywgJ3Byb2R1Y3QgaHVudCcsICdwdXNoZWQnLCAncHl0aG9uJywgJ3FxJywgJ3F1aW5zY2FwZScsICdxdW9yYScsICdyYXZlbHJ5JywgJ3JlYWN0JywgJ3JlYmVsJywgJ3JlZHJpdmVyJywgJ3JlZGRpdCcsICdyZWRkaXQgYWxpZW4nLCAncmVkZGl0IHNxdWFyZScsICdyZW5kYWN0JywgJ3JlbnJlbicsICdyZXBseWQnLCAncmVzb2x2aW5nJywgJ3JvY2tldGNoYXQnLCAncm9ja3JtcycsICdzYWZhcmknLCAnc2FzcycsICdzY2hsaXgnLCAnc2NyaWJkJywgJ3NlYXJjaGVuZ2luJywgJ3NlbGxjYXN0JywgJ3NlbGxzeScsICdzZXJ2aWNlc3RhY2snLCAnc2hpcnRzaW5idWxrJywgJ3NpbXBseWJ1aWx0JywgJ3Npc3RyaXgnLCAnc2t5YXRsYXMnLCAnc2t5cGUnLCAnc2xhY2snLCAnc2xhY2sgaGFzaCcsICdzbGlkZXNoYXJlJywgJ3NuYXBjaGF0JywgJ3NuYXBjaGF0IGdob3N0JywgJ3NuYXBjaGF0IHNxdWFyZScsICdzb3VuZGNsb3VkJywgJ3NwZWFrYXAnLCAnc3BvdGlmeScsICdzdGFjayBleGNoYW5nZScsICdzdGFjayBvdmVyZmxvdycsICdzdGF5bGlua2VkJywgJ3N0ZWFtJywgJ3N0ZWFtIHNxdWFyZScsICdzdGVhbSBzeW1ib2wnLCAnc3RpY2tlciBtdWxlJywgJ3N0cmF2YScsICdzdHJpcGUnLCAnc3RyaXBlIHMnLCAnc3R1ZGlvdmluYXJpJywgJ3N0dW1ibGV1cG9uJywgJ3N0dW1ibGV1cG9uIGNpcmNsZScsICdzdXBlcnBvd2VycycsICdzdXBwbGUnLCAndGVsZWdyYW0nLCAndGVsZWdyYW0gcGxhbmUnLCAndGVuY2VudCB3ZWlibycsICd0aGVtZWlzbGUnLCAndHJlbGxvJywgJ3RyaXBhZHZpc29yJywgJ3R1bWJscicsICd0dW1ibHIgc3F1YXJlJywgJ3R3aXRjaCcsICd0d2l0dGVyJywgJ3R3aXR0ZXIgc3F1YXJlJywgJ3R5cG8zJywgJ3ViZXInLCAndWlraXQnLCAndW5pcmVnaXN0cnknLCAndW50YXBwZCcsICd1c2InLCAndXNzdW5uYWgnLCAndmFhZGluJywgJ3ZpYWNvaW4nLCAndmlhZGVvJywgJ3ZpYWRlbyBzcXVhcmUnLCAndmliZXInLCAndmltZW8nLCAndmltZW8gc3F1YXJlJywgJ3ZpbWVvIHYnLCAndmluZScsICd2aycsICd2bnYnLCAndnVlanMnLCAnd2VjaGF0JywgJ3dlaWJvJywgJ3dlaXhpbicsICd3aGF0c2FwcCcsICd3aGF0c2FwcCBzcXVhcmUnLCAnd2htY3MnLCAnd2lraXBlZGlhIHcnLCAnd2luZG93cycsICd3b3JkcHJlc3MnLCAnd29yZHByZXNzIHNpbXBsZScsICd3cGJlZ2lubmVyJywgJ3dwZXhwbG9yZXInLCAnd3Bmb3JtcycsICd4Ym94JywgJ3hpbmcnLCAneGluZyBzcXVhcmUnLCAneSBjb21iaW5hdG9yJywgJ3lhaG9vJywgJ3lhbmRleCcsICd5YW5kZXggaW50ZXJuYXRpb25hbCcsICd5ZWxwJywgJ3lvYXN0JywgJ3lvdXR1YmUnLCAneW91dHViZSBzcXVhcmUnXTtcbmV4cG9ydCB2YXIgSUNPTlMgPSBfdW5pcShbXS5jb25jYXQoQUNDRVNTSUJJTElUWSwgQVJST1dTLCBBVURJT19WSURFTywgQlVTSU5FU1MsIENIRVNTLCBDT0RFLCBDT01NVU5JQ0FUSU9OLCBDT01QVVRFUlMsIENVUlJFTkNZLCBEQVRFX1RJTUUsIERFU0lHTiwgRURJVE9SUywgRklMRVMsIEdFTkRFUlMsIEhBTkRTX0dFU1RVUkVTLCBIRUFMVEgsIElNQUdFUywgSU5URVJGQUNFUywgTE9HSVNUSUNTLCBNQVBTLCBNRURJQ0FMLCBPQkpFQ1RTLCBQQVlNRU5UU19TSE9QUElORywgU0hBUEVTLCBTUElOTkVSUywgU1BPUlRTLCBTVEFUVVMsIFVTRVJTX1BFT1BMRSwgVkVISUNMRVMsIFdSSVRJTkcsIEJSQU5EUykpO1xuZXhwb3J0IHZhciBJQ09OX0FMSUFTRVMgPSBbJ2NoZXNzIHJvY2snLCAnb3JkZXJlZCBsaXN0JywgJ3Vub3JkZXJlZCBsaXN0JywgJ3VzZXIgZG9jdG9yJywgJ3NoaWVsZCcsICdwdXp6bGUnLCAnYWRkIGNpcmNsZScsICdhZGQgc3F1YXJlJywgJ2FkZCB0byBjYWxlbmRhcicsICdhZGQgdG8gY2FydCcsICdhZGQgdXNlcicsICdhZGQnLCAnYWxhcm0gbXV0ZScsICdhbGFybScsICdhbGQnLCAnYWxzJywgJ2Fubm91bmNlbWVudCcsICdhcmVhIGNoYXJ0JywgJ2FyZWEgZ3JhcGgnLCAnYXJyb3cgZG93biBjYXJ0JywgJ2FzZXh1YWwnLCAnYXNsIGludGVycHJldGluZycsICdhc2wnLCAnYXNzaXN0aXZlIGxpc3RlbmluZyBkZXZpY2VzJywgJ2F0dGFjaCcsICdhdHRlbnRpb24nLCAnYmFsYW5jZScsICdiYXInLCAnYmF0aHR1YicsICdiYXR0ZXJ5IGZvdXInLCAnYmF0dGVyeSBoaWdoJywgJ2JhdHRlcnkgbG93JywgJ2JhdHRlcnkgb25lJywgJ2JhdHRlcnkgdGhyZWUnLCAnYmF0dGVyeSB0d28nLCAnYmF0dGVyeSB6ZXJvJywgJ2JpcnRoZGF5JywgJ2Jsb2NrIGxheW91dCcsICdibHVldG9vdGggYWx0ZXJuYXRpdmUnLCAnYnJva2VuIGNoYWluJywgJ2Jyb3dzZXInLCAnY2FsbCBzcXVhcmUnLCAnY2FsbCcsICdjYW5jZWwnLCAnY2FydCcsICdjYycsICdjaGFpbicsICdjaGF0JywgJ2NoZWNrZWQgY2FsZW5kYXInLCAnY2hlY2ttYXJrJywgJ2NpcmNsZSBub3RjaGVkJywgJ2Nsb3NlJywgJ2NueScsICdjb2NrdGFpbCcsICdjb21tZW50aW5nJywgJ2NvbXB1dGVyJywgJ2NvbmZpZ3VyZScsICdjb250ZW50JywgJ2RlYWZuZXNzJywgJ2RlbGV0ZSBjYWxlbmRhcicsICdkZWxldGUnLCAnZGV0ZWN0aXZlJywgJ2Rpc2N1c3Npb25zJywgJ2RvY3RvcicsICdkb2xsYXInLCAnZG9udCcsICdkcml2ZXJzIGxpY2Vuc2UnLCAnZHJvcGRvd24nLCAnZW1lcmdlbmN5JywgJ2VudmlyYSBnYWxsZXJ5JywgJ2VyYXNlJywgJ2V1cicsICdldXJvJywgJ2V5ZWRyb3BwZXInLCAnZmFjdG9yeScsICdmYXZvcml0ZScsICdmZWVkJywgJ2ZlbWFsZSBob21vc2V4dWFsJywgJ2ZpbGUgdGV4dCcsICdmaWxlIHRleHQgb3V0bGluZScsICdmaW5kJywgJ2ZpcnN0IGFpZCcsICdmb3JrJywgJ2dhbWUnLCAnZ2F5JywgJ2dicCcsICdnb29nbGUgcGx1cyBjaXJjbGUnLCAnZ29vZ2xlIHBsdXMgb2ZmaWNpYWwnLCAnZ3JhYicsICdncmFkdWF0aW9uJywgJ2dyaWQgbGF5b3V0JywgJ2dyb3VwJywgJ2gnLCAnaGFuZCB2aWN0b3J5JywgJ2hhbmRpY2FwJywgJ2hhcmQgb2YgaGVhcmluZycsICdoZWFkZXInLCAnaGVscCBjaXJjbGUnLCAnaGVscCcsICdoZXRlcm9zZXh1YWwnLCAnaGlkZScsICdob3RlbCcsICdob3VyZ2xhc3MgZm91cicsICdob3VyZ2xhc3MgZnVsbCcsICdob3VyZ2xhc3Mgb25lJywgJ2hvdXJnbGFzcyB0aHJlZScsICdob3VyZ2xhc3MgdHdvJywgJ2lkZWEnLCAnaWxzJywgJ2luIGNhcnQnLCAnaW5yJywgJ2ludGVyZ2VuZGVyJywgJ2ludGVyc2V4JywgJ2pweScsICdrcncnLCAnbGFiJywgJ2xhdycsICdsZWdhbCcsICdsZXNiaWFuJywgJ2xpZ2h0bmluZycsICdsaWtlJywgJ2xpbmUgZ3JhcGgnLCAnbGlua2VkaW4gc3F1YXJlJywgJ2xpbmtpZnknLCAnbGlyYScsICdsaXN0IGxheW91dCcsICdtYWduaWZ5JywgJ21haWwgZm9yd2FyZCcsICdtYWlsIG91dGxpbmUnLCAnbWFpbCBzcXVhcmUnLCAnbWFpbCcsICdtYWxlIGhvbW9zZXh1YWwnLCAnbWFuJywgJ21hcmtlcicsICdtYXJzIGFsdGVybmF0ZScsICdtYXJzIGhvcml6b250YWwnLCAnbWFycyB2ZXJ0aWNhbCcsICdtaWNyb3NvZnQgZWRnZScsICdtaWxpdGFyeScsICdtcyBlZGdlJywgJ211dGUnLCAnbmV3IHBpZWQgcGlwZXInLCAnbm9uIGJpbmFyeSB0cmFuc2dlbmRlcicsICdudW1iZXJlZCBsaXN0JywgJ29wdGlvbnMnLCAnb3RoZXIgZ2VuZGVyIGhvcml6b250YWwnLCAnb3RoZXIgZ2VuZGVyIHZlcnRpY2FsJywgJ290aGVyIGdlbmRlcicsICdwYXltZW50JywgJ3BheXBhbCBjYXJkJywgJ3BlbmNpbCBzcXVhcmUnLCAncGhvdG8nLCAncGljdHVyZScsICdwaWUgY2hhcnQnLCAncGllIGdyYXBoJywgJ3BpZWQgcGlwZXIgaGF0JywgJ3BpbicsICdwbHVzIGNhcnQnLCAncG9pbnQnLCAncG9pbnRpbmcgZG93bicsICdwb2ludGluZyBsZWZ0JywgJ3BvaW50aW5nIHJpZ2h0JywgJ3BvaW50aW5nIHVwJywgJ3BvdW5kJywgJ3Bvd2VyIGNvcmQnLCAncG93ZXInLCAncHJpdmFjeScsICdyIGNpcmNsZScsICdyYWluJywgJ3JlY29yZCcsICdyZWZyZXNoJywgJ3JlbW92ZSBjaXJjbGUnLCAncmVtb3ZlIGZyb20gY2FsZW5kYXInLCAncmVtb3ZlIHVzZXInLCAncmVtb3ZlJywgJ3JlcGVhdCcsICdybWInLCAncm91YmxlJywgJ3J1YicsICdydWJsZScsICdydXBlZScsICdzMTUnLCAnc2VsZWN0ZWQgcmFkaW8nLCAnc2VuZCcsICdzZXR0aW5nJywgJ3NldHRpbmdzJywgJ3NoZWtlbCcsICdzaGVxZWwnLCAnc2hpcHBpbmcnLCAnc2hvcCcsICdzaHVmZmxlJywgJ3NodXRkb3duJywgJ3NpZGViYXInLCAnc2lnbmluZycsICdzaWdudXAnLCAnc2xpZGVycycsICdzb2NjZXInLCAnc29ydCBhbHBoYWJldCBhc2NlbmRpbmcnLCAnc29ydCBhbHBoYWJldCBkZXNjZW5kaW5nJywgJ3NvcnQgYXNjZW5kaW5nJywgJ3NvcnQgY29udGVudCBhc2NlbmRpbmcnLCAnc29ydCBjb250ZW50IGRlc2NlbmRpbmcnLCAnc29ydCBkZXNjZW5kaW5nJywgJ3NvcnQgbnVtZXJpYyBhc2NlbmRpbmcnLCAnc29ydCBudW1lcmljIGRlc2NlbmRpbmcnLCAnc291bmQnLCAnc3B5JywgJ3N0cmlwZSBjYXJkJywgJ3N0dWRlbnQnLCAndGFsaycsICd0YXJnZXQnLCAndGVsZXR5cGUnLCAndGVsZXZpc2lvbicsICd0ZXh0IGN1cnNvcicsICd0ZXh0IHRlbGVwaG9uZScsICd0aGVtZScsICd0aGVybW9tZXRlcicsICd0aHVtYiB0YWNrJywgJ3RpbWUnLCAndG0nLCAndG9nZ2xlIGRvd24nLCAndG9nZ2xlIGxlZnQnLCAndG9nZ2xlIHJpZ2h0JywgJ3RvZ2dsZSB1cCcsICd0cmFuc2xhdGUnLCAndHJhdmVsJywgJ3RyZWF0bWVudCcsICd0cmlhbmdsZSBkb3duJywgJ3RyaWFuZ2xlIGxlZnQnLCAndHJpYW5nbGUgcmlnaHQnLCAndHJpYW5nbGUgdXAnLCAndHJ5JywgJ3VuaGlkZScsICd1bmxpbmtpZnknLCAndW5tdXRlJywgJ3VzZCcsICd1c2VyIGNhbmNlbCcsICd1c2VyIGNsb3NlJywgJ3VzZXIgZGVsZXRlJywgJ3VzZXIgeCcsICd2Y2FyZCcsICd2aWRlbyBjYW1lcmEnLCAndmlkZW8gcGxheScsICd2b2x1bWUgY29udHJvbCBwaG9uZScsICd3YWl0JywgJ3dhcm5pbmcgY2lyY2xlJywgJ3dhcm5pbmcgc2lnbicsICd3YXJuaW5nJywgJ3dpLWZpJywgJ3dpbm5lcicsICd3aXphcmQnLCAnd29tYW4nLCAnd29uJywgJ3dvcmRwcmVzcyBiZWdpbm5lcicsICd3b3JkcHJlc3MgZm9ybXMnLCAnd29ybGQnLCAnd3JpdGUgc3F1YXJlJywgJ3gnLCAneWVuJywgJ3ppcCcsICd6b29tIGluJywgJ3pvb20gb3V0JywgJ3pvb20nLCAnYml0YnVja2V0IHNxdWFyZScsICdjaGVja21hcmsgYm94JywgJ2NpcmNsZSB0aGluJywgJ2Nsb3VkIGRvd25sb2FkJywgJ2Nsb3VkIHVwbG9hZCcsICdjb21wb3NlJywgJ2NvbnZlcnNhdGlvbicsICdjcmVkaXQgY2FyZCBhbHRlcm5hdGl2ZScsICdjdXJyZW5jeScsICdkYXNoYm9hcmQnLCAnZGlhbW9uZCcsICdkaXNrJywgJ2V4Y2hhbmdlJywgJ2V4dGVybmFsIHNoYXJlJywgJ2V4dGVybmFsIHNxdWFyZScsICdleHRlcm5hbCcsICdmYWNlYm9vayBvZmZpY2lhbCcsICdmb29kJywgJ2hvdXJnbGFzcyB6ZXJvJywgJ2xldmVsIGRvd24nLCAnbGV2ZWwgdXAnLCAnbG9nIG91dCcsICdtZWFucGF0aCcsICdtb25leScsICdtb3ZlJywgJ3BlbmNpbCcsICdwcm90ZWN0JywgJ3JhZGlvJywgJ3JlbW92ZSBib29rbWFyaycsICdyZXNpemUgaG9yaXpvbnRhbCcsICdyZXNpemUgdmVydGljYWwnLCAnc2lnbiBpbicsICdzaWduIG91dCcsICdzcG9vbicsICdzdGFyIGhhbGYgZW1wdHknLCAnc3RhciBoYWxmIGZ1bGwnLCAndGlja2V0JywgJ3RpbWVzIHJlY3RhbmdsZScsICd3cml0ZScsICd5b3V0dWJlIHBsYXknXTtcbmV4cG9ydCB2YXIgSUNPTlNfQU5EX0FMSUFTRVMgPSBfdW5pcShbXS5jb25jYXQoSUNPTlMsIElDT05fQUxJQVNFUykpOyAvLyBTb21lIGljb24gbmFtZXMgYXJlIG5vdCBwYXJ0IG9mIGljb25zLmNzcy5cbi8vIFRoZXNlIGFyZSBvbmx5IHZhbGlkIGFzIGNoaWxkcmVuIG9mIG90aGVyIGNvbXBvbmVudHMuXG4vLyBUaGVpciBDU1MgcnVsZXMgYXJlIGRlZmluZWQgYnkgYSBzcGVjaWZpYyBjb21wb25lbnQncyBDU1MuXG4vLyBXZSBkb24ndCB3YW50IHRvIHNob3cgbmFtZSB3YXJuaW5ncyBmb3IgdGhvc2UgdXNhZ2VzIHNvIHdlIGFkZCB0aGVtIGFzIHZhbGlkIG5hbWVzIGhlcmUuXG5cbmV4cG9ydCB2YXIgQ09NUE9ORU5UX0NPTlRFWFRfU1BFQ0lGSUNfSUNPTlMgPSBbJ2xlZnQgZHJvcGRvd24nIC8vIG5lc3RlZCBkcm9wZG93biBtZW51IGRpcmVjdGlvbiBpY29uXG5dO1xuZXhwb3J0IHZhciBBTExfSUNPTlNfSU5fQUxMX0NPTlRFWFRTID0gX3VuaXEoW10uY29uY2F0KElDT05TX0FORF9BTElBU0VTLCBDT01QT05FTlRfQ09OVEVYVF9TUEVDSUZJQ19JQ09OUykpOyIsImltcG9ydCBfZmluZCBmcm9tIFwibG9kYXNoLWVzL2ZpbmRcIjtcbmltcG9ydCBfc29tZSBmcm9tIFwibG9kYXNoLWVzL3NvbWVcIjtcbmltcG9ydCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBEZXRlcm1pbmUgaWYgY2hpbGQgYnkgdHlwZSBleGlzdHMgaW4gY2hpbGRyZW4uXG4gKiBAcGFyYW0ge09iamVjdH0gY2hpbGRyZW4gVGhlIGNoaWxkcmVuIHByb3Agb2YgYSBjb21wb25lbnQuXG4gKiBAcGFyYW0ge3N0cmluZ3xGdW5jdGlvbn0gdHlwZSBBbiBodG1sIHRhZyBuYW1lIHN0cmluZyBvciBSZWFjdCBjb21wb25lbnQuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuXG5leHBvcnQgdmFyIHNvbWVCeVR5cGUgPSBmdW5jdGlvbiBzb21lQnlUeXBlKGNoaWxkcmVuLCB0eXBlKSB7XG4gIHJldHVybiBfc29tZShDaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKSwge1xuICAgIHR5cGU6IHR5cGVcbiAgfSk7XG59O1xuLyoqXG4gKiBGaW5kIGNoaWxkIGJ5IHR5cGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY2hpbGRyZW4gVGhlIGNoaWxkcmVuIHByb3Agb2YgYSBjb21wb25lbnQuXG4gKiBAcGFyYW0ge3N0cmluZ3xGdW5jdGlvbn0gdHlwZSBBbiBodG1sIHRhZyBuYW1lIHN0cmluZyBvciBSZWFjdCBjb21wb25lbnQuXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfE9iamVjdH1cbiAqL1xuXG5leHBvcnQgdmFyIGZpbmRCeVR5cGUgPSBmdW5jdGlvbiBmaW5kQnlUeXBlKGNoaWxkcmVuLCB0eXBlKSB7XG4gIHJldHVybiBfZmluZChDaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKSwge1xuICAgIHR5cGU6IHR5cGVcbiAgfSk7XG59O1xuLyoqXG4gKiBUZXN0cyBpZiBjaGlsZHJlbiBhcmUgbmlsIGluIFJlYWN0IGFuZCBQcmVhY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gY2hpbGRyZW4gVGhlIGNoaWxkcmVuIHByb3Agb2YgYSBjb21wb25lbnQuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuXG5leHBvcnQgdmFyIGlzTmlsID0gZnVuY3Rpb24gaXNOaWwoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGNoaWxkcmVuID09PSBudWxsIHx8IGNoaWxkcmVuID09PSB1bmRlZmluZWQgfHwgQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiYgY2hpbGRyZW4ubGVuZ3RoID09PSAwO1xufTsiLCJpbXBvcnQgeyBudW1iZXJUb1dvcmQgfSBmcm9tICcuL251bWJlclRvV29yZCc7XG4vKlxuICogVGhlcmUgYXJlIDMgcHJvcCBwYXR0ZXJucyB1c2VkIHRvIGJ1aWxkIHVwIHRoZSBjbGFzc05hbWUgZm9yIGEgY29tcG9uZW50LlxuICogRWFjaCB1dGlsaXR5IGhlcmUgaXMgbWVhbnQgZm9yIHVzZSBpbiBhIGNsYXNzbmFtZXMoKSBhcmd1bWVudC5cbiAqXG4gKiBUaGVyZSBpcyBubyB1dGlsIGZvciB2YWx1ZU9ubHkoKSBiZWNhdXNlIGl0IHdvdWxkIHNpbXBseSByZXR1cm4gdmFsLlxuICogVXNlIHRoZSBwcm9wIHZhbHVlIGlubGluZSBpbnN0ZWFkLlxuICogICA8TGFiZWwgc2l6ZT0nYmlnJyAvPlxuICogICA8ZGl2IGNsYXNzPVwidWkgYmlnIGxhYmVsXCI+PC9kaXY+XG4gKi9cblxuLyoqXG4gKiBQcm9wcyB3aGVyZSBvbmx5IHRoZSBwcm9wIGtleSBpcyB1c2VkIGluIHRoZSBjbGFzc05hbWUuXG4gKiBAcGFyYW0geyp9IHZhbCBBIHByb3BzIHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IEEgcHJvcHMga2V5XG4gKlxuICogQGV4YW1wbGVcbiAqIDxMYWJlbCB0YWcgLz5cbiAqIDxkaXYgY2xhc3M9XCJ1aSB0YWcgbGFiZWxcIj48L2Rpdj5cbiAqL1xuXG5leHBvcnQgdmFyIHVzZUtleU9ubHkgPSBmdW5jdGlvbiB1c2VLZXlPbmx5KHZhbCwga2V5KSB7XG4gIHJldHVybiB2YWwgJiYga2V5O1xufTtcbi8qKlxuICogUHJvcHMgdGhhdCByZXF1aXJlIGJvdGggYSBrZXkgYW5kIHZhbHVlIHRvIGNyZWF0ZSBhIGNsYXNzTmFtZS5cbiAqIEBwYXJhbSB7Kn0gdmFsIEEgcHJvcHMgdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQSBwcm9wcyBrZXlcbiAqXG4gKiBAZXhhbXBsZVxuICogPExhYmVsIGNvcm5lcj0nbGVmdCcgLz5cbiAqIDxkaXYgY2xhc3M9XCJ1aSBsZWZ0IGNvcm5lciBsYWJlbFwiPjwvZGl2PlxuICovXG5cbmV4cG9ydCB2YXIgdXNlVmFsdWVBbmRLZXkgPSBmdW5jdGlvbiB1c2VWYWx1ZUFuZEtleSh2YWwsIGtleSkge1xuICByZXR1cm4gdmFsICYmIHZhbCAhPT0gdHJ1ZSAmJiB2YWwgKyBcIiBcIiArIGtleTtcbn07XG4vKipcbiAqIFByb3BzIHdob3NlIGtleSB3aWxsIGJlIHVzZWQgaW4gY2xhc3NOYW1lLCBvciB2YWx1ZSBhbmQga2V5LlxuICogQHBhcmFtIHsqfSB2YWwgQSBwcm9wcyB2YWx1ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBBIHByb3BzIGtleVxuICpcbiAqIEBleGFtcGxlIEtleSBPbmx5XG4gKiA8TGFiZWwgcG9pbnRpbmcgLz5cbiAqIDxkaXYgY2xhc3M9XCJ1aSBwb2ludGluZyBsYWJlbFwiPjwvZGl2PlxuICpcbiAqIEBleGFtcGxlIEtleSBhbmQgVmFsdWVcbiAqIDxMYWJlbCBwb2ludGluZz0nbGVmdCcgLz5cbiAqIDxkaXYgY2xhc3M9XCJ1aSBsZWZ0IHBvaW50aW5nIGxhYmVsXCI+PC9kaXY+XG4gKi9cblxuZXhwb3J0IHZhciB1c2VLZXlPclZhbHVlQW5kS2V5ID0gZnVuY3Rpb24gdXNlS2V5T3JWYWx1ZUFuZEtleSh2YWwsIGtleSkge1xuICByZXR1cm4gdmFsICYmICh2YWwgPT09IHRydWUgPyBrZXkgOiB2YWwgKyBcIiBcIiArIGtleSk7XG59OyAvL1xuLy8gUHJvcCB0byBjbGFzc05hbWUgZXhjZXB0aW9uc1xuLy9cblxuLyoqXG4gKiBUaGUgXCJtdWx0aXBsZVwiIHByb3AgaW1wbGVtZW50cyBjb250cm9sIG9mIHZpc2liaWxpdHkgYW5kIHJlc2VydmVkIGNsYXNzZXMgZm9yIEdyaWQgc3ViY29tcG9uZW50cy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgb2YgdGhlIFwibXVsdGlwbGVcIiBwcm9wXG4gKiBAcGFyYW0geyp9IGtleSBBIHByb3BzIGtleVxuICpcbiAqIEBleGFtcGxlXG4gKiA8R3JpZC5Sb3cgb25seT0nbW9iaWxlJyAvPlxuICogPEdyaWQuUm93IG9ubHk9J21vYmlsZSB0YWJsZXQnIC8+XG4gKiA8ZGl2IGNsYXNzPVwibW9iaWxlIG9ubHkgcm93XCI+PC9kaXY+XG4gKiA8ZGl2IGNsYXNzPVwibW9iaWxlIG9ubHkgdGFibGV0IG9ubHkgcm93XCI+PC9kaXY+XG4gKi9cblxuZXhwb3J0IHZhciB1c2VNdWx0aXBsZVByb3AgPSBmdW5jdGlvbiB1c2VNdWx0aXBsZVByb3AodmFsLCBrZXkpIHtcbiAgaWYgKCF2YWwgfHwgdmFsID09PSB0cnVlKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHZhbC5yZXBsYWNlKCdsYXJnZSBzY3JlZW4nLCAnbGFyZ2Utc2NyZWVuJykucmVwbGFjZSgvIHZlcnRpY2FsbHkvZywgJy12ZXJ0aWNhbGx5Jykuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICByZXR1cm4gcHJvcC5yZXBsYWNlKCctJywgJyAnKSArIFwiIFwiICsga2V5O1xuICB9KS5qb2luKCcgJyk7XG59O1xuLyoqXG4gKiBUaGUgXCJ0ZXh0QWxpZ25cIiBwcm9wIGZvbGxvd3MgdGhlIHVzZVZhbHVlQW5kS2V5IGV4Y2VwdCB3aGVuIHRoZSB2YWx1ZSBpcyBcImp1c3RpZmllZCcuXG4gKiBJbiB0aGlzIGNhc2UsIG9ubHkgdGhlIGNsYXNzIFwianVzdGlmaWVkXCIgaXMgdXNlZCwgaWdub3JpbmcgdGhlIFwiYWxpZ25lZFwiIGNsYXNzLlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIG9mIHRoZSBcInRleHRBbGlnblwiIHByb3BcbiAqXG4gKiBAZXhhbXBsZVxuICogPENvbnRhaW5lciB0ZXh0QWxpZ249J2p1c3RpZmllZCcgLz5cbiAqIDxkaXYgY2xhc3M9XCJ1aSBqdXN0aWZpZWQgY29udGFpbmVyXCI+PC9kaXY+XG4gKlxuICogQGV4YW1wbGVcbiAqIDxDb250YWluZXIgdGV4dEFsaWduPSdsZWZ0JyAvPlxuICogPGRpdiBjbGFzcz1cInVpIGxlZnQgYWxpZ25lZCBjb250YWluZXJcIj48L2Rpdj5cbiAqL1xuXG5leHBvcnQgdmFyIHVzZVRleHRBbGlnblByb3AgPSBmdW5jdGlvbiB1c2VUZXh0QWxpZ25Qcm9wKHZhbCkge1xuICByZXR1cm4gdmFsID09PSAnanVzdGlmaWVkJyA/ICdqdXN0aWZpZWQnIDogdXNlVmFsdWVBbmRLZXkodmFsLCAnYWxpZ25lZCcpO1xufTtcbi8qKlxuICogVGhlIFwidmVydGljYWxBbGlnblwiIHByb3AgZm9sbG93cyB0aGUgdXNlVmFsdWVBbmRLZXkuXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIG9mIHRoZSBcInZlcnRpY2FsQWxpZ25cIiBwcm9wXG4gKlxuICogQGV4YW1wbGVcbiAqIDxHcmlkIHZlcnRpY2FsQWxpZ249J21pZGRsZScgLz5cbiAqIDxkaXYgY2xhc3M9XCJ1aSBtaWRkbGUgYWxpZ25lZCBncmlkXCI+PC9kaXY+XG4gKi9cblxuZXhwb3J0IHZhciB1c2VWZXJ0aWNhbEFsaWduUHJvcCA9IGZ1bmN0aW9uIHVzZVZlcnRpY2FsQWxpZ25Qcm9wKHZhbCkge1xuICByZXR1cm4gdXNlVmFsdWVBbmRLZXkodmFsLCAnYWxpZ25lZCcpO1xufTtcbi8qKlxuICogQ3JlYXRlIFwiWFwiLCBcIlggd2lkZVwiIGFuZCBcImVxdWFsIHdpZHRoXCIgY2xhc3NOYW1lcy5cbiAqIFwiWFwiIGlzIGEgbnVtYmVyVG9Xb3JkIHZhbHVlIGFuZCBcIndpZGVcIiBpcyBjb25maWd1cmFibGUuXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgcHJvcCB2YWx1ZVxuICogQHBhcmFtIHtzdHJpbmd9IFt3aWR0aENsYXNzPScnXSBUaGUgY2xhc3NcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NhbkVxdWFsPWZhbHNlXSBGbGFnIHRoYXQgaW5kaWNhdGVzIHBvc3NpYmlsaXR5IG9mIFwiZXF1YWxcIiB2YWx1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiA8R3JpZCBjb2x1bW5zPSdlcXVhbCcgLz5cbiAqIDxkaXYgY2xhc3M9XCJ1aSBlcXVhbCB3aWR0aCBncmlkXCI+PC9kaXY+XG4gKlxuICogPEZvcm0gd2lkdGhzPSdlcXVhbCcgLz5cbiAqIDxkaXYgY2xhc3M9XCJ1aSBlcXVhbCB3aWR0aCBmb3JtXCI+PC9kaXY+XG4gKlxuICogPEZpZWxkR3JvdXAgd2lkdGhzPSdlcXVhbCcgLz5cbiAqIDxkaXYgY2xhc3M9XCJlcXVhbCB3aWR0aCBmaWVsZHNcIj48L2Rpdj5cbiAqXG4gKiBAZXhhbXBsZVxuICogPEdyaWQgY29sdW1ucz17NH0gLz5cbiAqIDxkaXYgY2xhc3M9XCJ1aSBmb3VyIGNvbHVtbiBncmlkXCI+PC9kaXY+XG4gKi9cblxuZXhwb3J0IHZhciB1c2VXaWR0aFByb3AgPSBmdW5jdGlvbiB1c2VXaWR0aFByb3AodmFsLCB3aWR0aENsYXNzLCBjYW5FcXVhbCkge1xuICBpZiAod2lkdGhDbGFzcyA9PT0gdm9pZCAwKSB7XG4gICAgd2lkdGhDbGFzcyA9ICcnO1xuICB9XG5cbiAgaWYgKGNhbkVxdWFsID09PSB2b2lkIDApIHtcbiAgICBjYW5FcXVhbCA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGNhbkVxdWFsICYmIHZhbCA9PT0gJ2VxdWFsJykge1xuICAgIHJldHVybiAnZXF1YWwgd2lkdGgnO1xuICB9XG5cbiAgdmFyIHZhbFR5cGUgPSB0eXBlb2YgdmFsO1xuXG4gIGlmICgodmFsVHlwZSA9PT0gJ3N0cmluZycgfHwgdmFsVHlwZSA9PT0gJ251bWJlcicpICYmIHdpZHRoQ2xhc3MpIHtcbiAgICByZXR1cm4gbnVtYmVyVG9Xb3JkKHZhbCkgKyBcIiBcIiArIHdpZHRoQ2xhc3M7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyVG9Xb3JkKHZhbCk7XG59OyIsImltcG9ydCBfZGlmZmVyZW5jZSBmcm9tIFwibG9kYXNoLWVzL2RpZmZlcmVuY2VcIjtcbmltcG9ydCBfdHJpbSBmcm9tIFwibG9kYXNoLWVzL3RyaW1cIjtcbmltcG9ydCBfaXNPYmplY3QgZnJvbSBcImxvZGFzaC1lcy9pc09iamVjdFwiO1xuaW1wb3J0IF9waWNrIGZyb20gXCJsb2Rhc2gtZXMvcGlja1wiO1xuaW1wb3J0IF9rZXlzIGZyb20gXCJsb2Rhc2gtZXMva2V5c1wiO1xuaW1wb3J0IF9pc1BsYWluT2JqZWN0IGZyb20gXCJsb2Rhc2gtZXMvaXNQbGFpbk9iamVjdFwiO1xuaW1wb3J0IF9pc05pbCBmcm9tIFwibG9kYXNoLWVzL2lzTmlsXCI7XG5pbXBvcnQgX21pbiBmcm9tIFwibG9kYXNoLWVzL21pblwiO1xuaW1wb3J0IF9zdW0gZnJvbSBcImxvZGFzaC1lcy9zdW1cIjtcbmltcG9ydCBfbWFwIGZyb20gXCJsb2Rhc2gtZXMvbWFwXCI7XG5pbXBvcnQgX3NvcnRCeSBmcm9tIFwibG9kYXNoLWVzL3NvcnRCeVwiO1xuaW1wb3J0IF90YWtlIGZyb20gXCJsb2Rhc2gtZXMvdGFrZVwiO1xuaW1wb3J0IF9tZW1vaXplIGZyb20gXCJsb2Rhc2gtZXMvbWVtb2l6ZVwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBsZXZlbiBmcm9tICcuL2xldmVuJztcblxudmFyIHR5cGVPZiA9IGZ1bmN0aW9uIHR5cGVPZigpIHtcbiAgdmFyIF9PYmplY3QkcHJvdG90eXBlJHRvUztcblxuICByZXR1cm4gKF9PYmplY3QkcHJvdG90eXBlJHRvUyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpLmNhbGwuYXBwbHkoX09iamVjdCRwcm90b3R5cGUkdG9TLCBhcmd1bWVudHMpO1xufTtcbi8qKlxuICogRW5zdXJlIGEgcHJvcCBpcyBhIHZhbGlkIERPTSBub2RlLlxuICovXG5cblxuZXhwb3J0IHZhciBkb21Ob2RlID0gZnVuY3Rpb24gZG9tTm9kZShwcm9wcywgcHJvcE5hbWUpIHtcbiAgLy8gc2tpcCBpZiBwcm9wIGlzIHVuZGVmaW5lZFxuICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHJldHVybjsgLy8gc2hvcnQgY2lyY2xlIGZvciBTU1IgZW52XG5cbiAgaWYgKHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuOyAvLyBza2lwIGlmIHByb3AgaXMgdmFsaWRcblxuICBpZiAocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgRWxlbWVudCkgcmV0dXJuO1xuICByZXR1cm4gbmV3IEVycm9yKFwiSW52YWxpZCBwcm9wIFxcXCJcIiArIHByb3BOYW1lICsgXCJcXFwiIHN1cHBsaWVkLCBleHBlY3RlZCBhIERPTSBub2RlLlwiKTtcbn07XG4vKipcbiAqIFNpbWlsYXIgdG8gUHJvcFR5cGVzLm9uZU9mIGJ1dCBzaG93cyBjbG9zZXN0IG1hdGNoZXMuXG4gKiBXb3JkIG9yZGVyIGlzIGlnbm9yZWQgYWxsb3dpbmcgYGxlZnQgY2hldnJvbmAgdG8gbWF0Y2ggYGNoZXZyb24gbGVmdGAuXG4gKiBVc2VmdWwgZm9yIHZlcnkgbGFyZ2UgbGlzdHMgb2Ygb3B0aW9ucyAoZS5nLiBJY29uIG5hbWUsIEZsYWcgbmFtZSwgZXRjLilcbiAqIEBwYXJhbSB7c3RyaW5nW119IHN1Z2dlc3Rpb25zIEFuIGFycmF5IG9mIGFsbG93ZWQgdmFsdWVzLlxuICovXG5cbmV4cG9ydCB2YXIgc3VnZ2VzdCA9IGZ1bmN0aW9uIHN1Z2dlc3Qoc3VnZ2VzdGlvbnMpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHN1Z2dlc3Rpb25zKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBzdWdnZXN0LCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKTtcbiAgfVxuICAvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbmVzdGVkLWNhbGxiYWNrcyAqL1xuXG5cbiAgdmFyIGZpbmRCZXN0U3VnZ2VzdGlvbnMgPSBfbWVtb2l6ZShmdW5jdGlvbiAoc3RyKSB7XG4gICAgdmFyIHByb3BWYWx1ZVdvcmRzID0gc3RyLnNwbGl0KCcgJyk7XG4gICAgcmV0dXJuIF90YWtlKF9zb3J0QnkoX21hcChzdWdnZXN0aW9ucywgZnVuY3Rpb24gKHN1Z2dlc3Rpb24pIHtcbiAgICAgIHZhciBzdWdnZXN0aW9uV29yZHMgPSBzdWdnZXN0aW9uLnNwbGl0KCcgJyk7XG5cbiAgICAgIHZhciBwcm9wVmFsdWVTY29yZSA9IF9zdW0oX21hcChfbWFwKHByb3BWYWx1ZVdvcmRzLCBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gX21hcChzdWdnZXN0aW9uV29yZHMsIGZ1bmN0aW9uICh5KSB7XG4gICAgICAgICAgcmV0dXJuIGxldmVuKHgsIHkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLCBfbWluKSk7XG5cbiAgICAgIHZhciBzdWdnZXN0aW9uU2NvcmUgPSBfc3VtKF9tYXAoX21hcChzdWdnZXN0aW9uV29yZHMsIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiBfbWFwKHByb3BWYWx1ZVdvcmRzLCBmdW5jdGlvbiAoeSkge1xuICAgICAgICAgIHJldHVybiBsZXZlbih4LCB5KTtcbiAgICAgICAgfSk7XG4gICAgICB9KSwgX21pbikpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWdnZXN0aW9uOiBzdWdnZXN0aW9uLFxuICAgICAgICBzY29yZTogcHJvcFZhbHVlU2NvcmUgKyBzdWdnZXN0aW9uU2NvcmVcbiAgICAgIH07XG4gICAgfSksIFsnc2NvcmUnLCAnc3VnZ2VzdGlvbiddKSwgMyk7XG4gIH0pO1xuICAvKiBlc2xpbnQtZW5hYmxlIG1heC1uZXN0ZWQtY2FsbGJhY2tzICovXG4gIC8vIENvbnZlcnQgdGhlIHN1Z2dlc3Rpb25zIGxpc3QgaW50byBhIGhhc2ggbWFwIGZvciBPKG4pIGxvb2t1cCB0aW1lcy4gRW5zdXJlXG4gIC8vIHRoZSB3b3JkcyBpbiBlYWNoIGtleSBhcmUgc29ydGVkIGFscGhhYmV0aWNhbGx5IHNvIHRoYXQgd2UgaGF2ZSBhIGNvbnNpc3RlbnRcbiAgLy8gd2F5IG9mIGxvb2tpbmcgdXAgYSB2YWx1ZSBpbiB0aGUgbWFwLCBpLmUuIHdlIGNhbiBzb3J0IHRoZSB3b3JkcyBpbiB0aGVcbiAgLy8gaW5jb21pbmcgcHJvcFZhbHVlIGFuZCBsb29rIHRoYXQgdXAgd2l0aG91dCBoYXZpbmcgdG8gY2hlY2sgYWxsIHBlcm11dGF0aW9ucy5cblxuXG4gIHZhciBzdWdnZXN0aW9uc0xvb2t1cCA9IHN1Z2dlc3Rpb25zLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICBhY2Nba2V5LnNwbGl0KCcgJykuc29ydCgpLmpvaW4oJyAnKV0gPSB0cnVlO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdOyAvLyBza2lwIGlmIHByb3AgaXMgdW5kZWZpbmVkIG9yIGlzIGluY2x1ZGVkIGluIHRoZSBzdWdnZXN0aW9uc1xuXG4gICAgaWYgKCFwcm9wVmFsdWUgfHwgc3VnZ2VzdGlvbnNMb29rdXBbcHJvcFZhbHVlXSkgcmV0dXJuOyAvLyBjaGVjayBpZiB0aGUgd29yZHMgd2VyZSBjb3JyZWN0IGJ1dCBvcmRlcmVkIGRpZmZlcmVudGx5LlxuICAgIC8vIFNpbmNlIHdlJ3JlIG1hdGNoaW5nIGZvciBjbGFzc05hbWVzIHdlIG5lZWQgdG8gYWxsb3cgYW55IHdvcmQgb3JkZXJcbiAgICAvLyB0byBwYXNzIHZhbGlkYXRpb24sIGUuZy4gYGxlZnQgY2hldnJvbmAgdnMgYGNoZXZyb24gbGVmdGAuXG5cbiAgICB2YXIgcHJvcFZhbHVlU29ydGVkID0gcHJvcFZhbHVlLnNwbGl0KCcgJykuc29ydCgpLmpvaW4oJyAnKTtcbiAgICBpZiAoc3VnZ2VzdGlvbnNMb29rdXBbcHJvcFZhbHVlU29ydGVkXSkgcmV0dXJuOyAvLyBmaW5kIGJlc3Qgc3VnZ2VzdGlvbnNcblxuICAgIHZhciBiZXN0TWF0Y2hlcyA9IGZpbmRCZXN0U3VnZ2VzdGlvbnMocHJvcFZhbHVlKTsgLy8gc2tpcCBpZiBhIG1hdGNoIHNjb3JlZCAwXG5cbiAgICBpZiAoYmVzdE1hdGNoZXMuc29tZShmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHguc2NvcmUgPT09IDA7XG4gICAgfSkpIHJldHVybjtcbiAgICByZXR1cm4gbmV3IEVycm9yKFtcIkludmFsaWQgcHJvcCBgXCIgKyBwcm9wTmFtZSArIFwiYCBvZiB2YWx1ZSBgXCIgKyBwcm9wVmFsdWUgKyBcImAgc3VwcGxpZWQgdG8gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYC5cIiwgXCJcXG5cXG5JbnN0ZWFkIG9mIGBcIiArIHByb3BWYWx1ZSArIFwiYCwgZGlkIHlvdSBtZWFuOlwiLCBiZXN0TWF0Y2hlcy5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBcIlxcbiAgLSBcIiArIHguc3VnZ2VzdGlvbjtcbiAgICB9KS5qb2luKCcnKSwgJ1xcbiddLmpvaW4oJycpKTtcbiAgfTtcbn07XG4vKipcbiAqIERpc2FsbG93IG90aGVyIHByb3BzIGZyb20gYmVpbmcgZGVmaW5lZCB3aXRoIHRoaXMgcHJvcC5cbiAqIEBwYXJhbSB7c3RyaW5nW119IGRpc2FsbG93ZWRQcm9wcyBBbiBhcnJheSBvZiBwcm9wcyB0aGF0IGNhbm5vdCBiZSB1c2VkIHdpdGggdGhpcyBwcm9wLlxuICovXG5cbmV4cG9ydCB2YXIgZGlzYWxsb3cgPSBmdW5jdGlvbiBkaXNhbGxvdyhkaXNhbGxvd2VkUHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGlzYWxsb3dlZFByb3BzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFsnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBkaXNhbGxvdywgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJywgXCIgU2VlIGBcIiArIHByb3BOYW1lICsgXCJgIHByb3AgaW4gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYC5cIl0uam9pbignJykpO1xuICAgIH0gLy8gc2tpcCBpZiBwcm9wIGlzIHVuZGVmaW5lZFxuXG5cbiAgICBpZiAoX2lzTmlsKHByb3BzW3Byb3BOYW1lXSkgfHwgcHJvcHNbcHJvcE5hbWVdID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gZmluZCBkaXNhbGxvd2VkIHByb3BzIHdpdGggdmFsdWVzXG5cblxuICAgIHZhciBkaXNhbGxvd2VkID0gZGlzYWxsb3dlZFByb3BzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBkaXNhbGxvd2VkUHJvcCkge1xuICAgICAgaWYgKCFfaXNOaWwocHJvcHNbZGlzYWxsb3dlZFByb3BdKSAmJiBwcm9wc1tkaXNhbGxvd2VkUHJvcF0gIT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBbXS5jb25jYXQoYWNjLCBbZGlzYWxsb3dlZFByb3BdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG5cbiAgICBpZiAoZGlzYWxsb3dlZC5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFtcIlByb3AgYFwiICsgcHJvcE5hbWUgKyBcImAgaW4gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCBjb25mbGljdHMgd2l0aCBwcm9wczogYFwiICsgZGlzYWxsb3dlZC5qb2luKCdgLCBgJykgKyBcImAuXCIsICdUaGV5IGNhbm5vdCBiZSBkZWZpbmVkIHRvZ2V0aGVyLCBjaG9vc2Ugb25lIG9yIHRoZSBvdGhlci4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfTtcbn07XG4vKipcbiAqIEVuc3VyZSBhIHByb3AgYWRoZXJlcnMgdG8gbXVsdGlwbGUgcHJvcCB0eXBlIHZhbGlkYXRvcnMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uW119IHZhbGlkYXRvcnMgQW4gYXJyYXkgb2YgcHJvcFR5cGUgZnVuY3Rpb25zLlxuICovXG5cbmV4cG9ydCB2YXIgZXZlcnkgPSBmdW5jdGlvbiBldmVyeSh2YWxpZGF0b3JzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbiA+IDMgPyBfbGVuIC0gMyA6IDApLCBfa2V5ID0gMzsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgcmVzdFtfa2V5IC0gM10gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbGlkYXRvcnMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoWydJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIGV2ZXJ5LCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nLCBcIlNlZSBgXCIgKyBwcm9wTmFtZSArIFwiYCBwcm9wIGluIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAuXCJdLmpvaW4oJyAnKSk7XG4gICAgfVxuXG4gICAgdmFyIGVycm9ycyA9IFtdO1xuICAgIHZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbGlkYXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJldmVyeSgpIGFyZ3VtZW50IFxcXCJ2YWxpZGF0b3JzXFxcIiBzaG91bGQgY29udGFpbiBmdW5jdGlvbnMsIGZvdW5kOiBcIiArIHR5cGVPZih2YWxpZGF0b3IpICsgXCIuXCIpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZXJyb3IgPSB2YWxpZGF0b3IuYXBwbHkodm9pZCAwLCBbcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lXS5jb25jYXQocmVzdCkpO1xuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgfVxuICAgIH0pOyAvLyB3ZSBjYW4gb25seSByZXR1cm4gb25lIGVycm9yIGF0IGEgdGltZVxuXG4gICAgcmV0dXJuIGVycm9yc1swXTtcbiAgfTtcbn07XG4vKipcbiAqIEVuc3VyZSBhIHZhbGlkYXRvciBwYXNzZXMgb25seSB3aGVuIGEgY29tcG9uZW50IGhhcyBhIGdpdmVuIHByb3BzU2hhcGUuXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNTaGFwZSBBbiBvYmplY3QgZGVzY3JpYmluZyB0aGUgcHJvcCBzaGFwZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHZhbGlkYXRvciBBIHByb3BUeXBlIGZ1bmN0aW9uLlxuICovXG5cbmV4cG9ydCB2YXIgZ2l2ZW5Qcm9wcyA9IGZ1bmN0aW9uIGdpdmVuUHJvcHMocHJvcHNTaGFwZSwgdmFsaWRhdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4yID4gMyA/IF9sZW4yIC0gMyA6IDApLCBfa2V5MiA9IDM7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIHJlc3RbX2tleTIgLSAzXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgaWYgKCFfaXNQbGFpbk9iamVjdChwcm9wc1NoYXBlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFsnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBnaXZlblByb3BzLCBleHBlY3RlZCBhbiBvYmplY3QuJywgXCJTZWUgYFwiICsgcHJvcE5hbWUgKyBcImAgcHJvcCBpbiBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLlwiXS5qb2luKCcgJykpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsaWRhdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoWydJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIGdpdmVuUHJvcHMsIGV4cGVjdGVkIGEgZnVuY3Rpb24uJywgXCJTZWUgYFwiICsgcHJvcE5hbWUgKyBcImAgcHJvcCBpbiBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLlwiXS5qb2luKCcgJykpO1xuICAgIH1cblxuICAgIHZhciBzaG91bGRWYWxpZGF0ZSA9IF9rZXlzKHByb3BzU2hhcGUpLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciB2YWwgPSBwcm9wc1NoYXBlW2tleV07IC8vIHJlcXVpcmUgcHJvcFNoYXBlIHZhbGlkYXRvcnMgdG8gcGFzcyBvciBwcm9wIHZhbHVlcyB0byBtYXRjaFxuXG4gICAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJyA/ICF2YWwuYXBwbHkodm9pZCAwLCBbcHJvcHMsIGtleSwgY29tcG9uZW50TmFtZV0uY29uY2F0KHJlc3QpKSA6IHZhbCA9PT0gcHJvcHNbcHJvcE5hbWVdO1xuICAgIH0pO1xuXG4gICAgaWYgKCFzaG91bGRWYWxpZGF0ZSkgcmV0dXJuO1xuICAgIHZhciBlcnJvciA9IHZhbGlkYXRvci5hcHBseSh2b2lkIDAsIFtwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWVdLmNvbmNhdChyZXN0KSk7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIC8vIHBvb3IgbWFucyBzaGFsbG93IHByZXR0eSBwcmludCwgcHJldmVudHMgSlNPTiBjaXJjdWxhciByZWZlcmVuY2UgZXJyb3JzXG4gICAgICB2YXIgcHJldHR5UHJvcHMgPSBcInsgXCIgKyBfa2V5cyhfcGljayhfa2V5cyhwcm9wc1NoYXBlKSwgcHJvcHMpKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsID0gcHJvcHNba2V5XTtcbiAgICAgICAgdmFyIHJlbmRlcmVkVmFsdWUgPSB2YWw7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykgcmVuZGVyZWRWYWx1ZSA9IFwiXFxcIlwiICsgdmFsICsgXCJcXFwiXCI7ZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSByZW5kZXJlZFZhbHVlID0gXCJbXCIgKyB2YWwuam9pbignLCAnKSArIFwiXVwiO2Vsc2UgaWYgKF9pc09iamVjdCh2YWwpKSByZW5kZXJlZFZhbHVlID0gJ3suLi59JztcbiAgICAgICAgcmV0dXJuIGtleSArIFwiOiBcIiArIHJlbmRlcmVkVmFsdWU7XG4gICAgICB9KS5qb2luKCcsICcpICsgXCIgfVwiO1xuICAgICAgZXJyb3IubWVzc2FnZSA9IFwiR2l2ZW4gcHJvcHMgXCIgKyBwcmV0dHlQcm9wcyArIFwiOiBcIiArIGVycm9yLm1lc3NhZ2U7XG4gICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuICB9O1xufTtcbi8qKlxuICogRGVmaW5lIHByb3AgZGVwZW5kZW5jaWVzIGJ5IHJlcXVpcmluZyBvdGhlciBwcm9wcy5cbiAqIEBwYXJhbSB7c3RyaW5nW119IHJlcXVpcmVkUHJvcHMgQW4gYXJyYXkgb2YgcmVxdWlyZWQgcHJvcCBuYW1lcy5cbiAqL1xuXG5leHBvcnQgdmFyIGRlbWFuZCA9IGZ1bmN0aW9uIGRlbWFuZChyZXF1aXJlZFByb3BzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJlcXVpcmVkUHJvcHMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoWydJbnZhbGlkIGByZXF1aXJlZFByb3BzYCBhcmd1bWVudCBzdXBwbGllZCB0byByZXF1aXJlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nLCBcIiBTZWUgYFwiICsgcHJvcE5hbWUgKyBcImAgcHJvcCBpbiBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLlwiXS5qb2luKCcnKSk7XG4gICAgfSAvLyBza2lwIGlmIHByb3AgaXMgdW5kZWZpbmVkXG5cblxuICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgIHZhciBtaXNzaW5nUmVxdWlyZWQgPSByZXF1aXJlZFByb3BzLmZpbHRlcihmdW5jdGlvbiAocmVxdWlyZWRQcm9wKSB7XG4gICAgICByZXR1cm4gcHJvcHNbcmVxdWlyZWRQcm9wXSA9PT0gdW5kZWZpbmVkO1xuICAgIH0pO1xuXG4gICAgaWYgKG1pc3NpbmdSZXF1aXJlZC5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFwiYFwiICsgcHJvcE5hbWUgKyBcImAgcHJvcCBpbiBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgIHJlcXVpcmVzIHByb3BzOiBgXCIgKyBtaXNzaW5nUmVxdWlyZWQuam9pbignYCwgYCcpICsgXCJgLlwiKTtcbiAgICB9XG4gIH07XG59O1xuLyoqXG4gKiBFbnN1cmUgYW4gbXVsdGlwbGUgcHJvcCBjb250YWlucyBhIHN0cmluZyB3aXRoIG9ubHkgcG9zc2libGUgdmFsdWVzLlxuICogQHBhcmFtIHtzdHJpbmdbXX0gcG9zc2libGUgQW4gYXJyYXkgb2YgcG9zc2libGUgdmFsdWVzIHRvIHByb3AuXG4gKi9cblxuZXhwb3J0IHZhciBtdWx0aXBsZVByb3AgPSBmdW5jdGlvbiBtdWx0aXBsZVByb3AocG9zc2libGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocG9zc2libGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoWydJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIHNvbWUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicsIFwiU2VlIGBcIiArIHByb3BOYW1lICsgXCJgIHByb3AgaW4gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYC5cIl0uam9pbignICcpKTtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdOyAvLyBza2lwIGlmIHByb3AgaXMgdW5kZWZpbmVkXG5cbiAgICBpZiAoX2lzTmlsKHByb3BWYWx1ZSkgfHwgcHJvcFZhbHVlID09PSBmYWxzZSkgcmV0dXJuO1xuICAgIHZhciB2YWx1ZXMgPSBwcm9wVmFsdWUucmVwbGFjZSgnbGFyZ2Ugc2NyZWVuJywgJ2xhcmdlLXNjcmVlbicpLnJlcGxhY2UoLyB2ZXJ0aWNhbGx5L2csICctdmVydGljYWxseScpLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHJldHVybiBfdHJpbSh2YWwpLnJlcGxhY2UoJy0nLCAnICcpO1xuICAgIH0pO1xuXG4gICAgdmFyIGludmFsaWQgPSBfZGlmZmVyZW5jZSh2YWx1ZXMsIHBvc3NpYmxlKTsgLy8gZmFpbCBvbmx5IGlmIHRoZXJlIGFyZSBpbnZhbGlkIHZhbHVlc1xuXG5cbiAgICBpZiAoaW52YWxpZC5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFwiYFwiICsgcHJvcE5hbWUgKyBcImAgcHJvcCBpbiBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgIGhhcyBpbnZhbGlkIHZhbHVlczogYFwiICsgaW52YWxpZC5qb2luKCdgLCBgJykgKyBcImAuXCIpO1xuICAgIH1cbiAgfTtcbn07XG4vKipcbiAqIEVuc3VyZSBhIGNvbXBvbmVudCBjYW4gcmVuZGVyIGFzIGEgbm9kZSBwYXNzZWQgYXMgYSBwcm9wIHZhbHVlIGluIHBsYWNlIG9mIGNoaWxkcmVuLlxuICovXG5cbmV4cG9ydCB2YXIgY29udGVudFNob3J0aGFuZCA9IGZ1bmN0aW9uIGNvbnRlbnRTaG9ydGhhbmQoKSB7XG4gIHJldHVybiBldmVyeShbZGlzYWxsb3coWydjaGlsZHJlbiddKSwgUHJvcFR5cGVzLm5vZGVdKS5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG59O1xuLyoqXG4gKiBJdGVtIHNob3J0aGFuZCBpcyBhIGRlc2NyaXB0aW9uIG9mIGEgY29tcG9uZW50IHRoYXQgY2FuIGJlIGEgbGl0ZXJhbCxcbiAqIGEgcHJvcHMgb2JqZWN0LCBvciBhbiBlbGVtZW50LlxuICovXG5cbmV4cG9ydCB2YXIgaXRlbVNob3J0aGFuZCA9IGZ1bmN0aW9uIGl0ZW1TaG9ydGhhbmQoKSB7XG4gIHJldHVybiBldmVyeShbZGlzYWxsb3coWydjaGlsZHJlbiddKSwgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLm9iamVjdF0pKV0pXSkuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xufTtcbi8qKlxuICogQ29sbGVjdGlvbiBzaG9ydGhhbmQgZW5zdXJlcyBhIHByb3AgaXMgYW4gYXJyYXkgb2YgaXRlbSBzaG9ydGhhbmQuXG4gKi9cblxuZXhwb3J0IHZhciBjb2xsZWN0aW9uU2hvcnRoYW5kID0gZnVuY3Rpb24gY29sbGVjdGlvblNob3J0aGFuZCgpIHtcbiAgcmV0dXJuIGV2ZXJ5KFtkaXNhbGxvdyhbJ2NoaWxkcmVuJ10pLCBQcm9wVHlwZXMuYXJyYXlPZihpdGVtU2hvcnRoYW5kKV0pLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbn07XG4vKipcbiAqIFNob3cgYSBkZXByZWNhdGVkIHdhcm5pbmcgZm9yIGNvbXBvbmVudCBwcm9wcyB3aXRoIGEgaGVscCBtZXNzYWdlIGFuZCBvcHRpb25hbCB2YWxpZGF0b3IuXG4gKiBAcGFyYW0ge3N0cmluZ30gaGVscCBBIGhlbHAgbWVzc2FnZSB0byBkaXNwbGF5IHdpdGggdGhlIGRlcHJlY2F0aW9uIHdhcm5pbmcuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbdmFsaWRhdG9yXSBBIHByb3BUeXBlIGZ1bmN0aW9uLlxuICovXG5cbmV4cG9ydCB2YXIgZGVwcmVjYXRlID0gZnVuY3Rpb24gZGVwcmVjYXRlKGhlbHAsIHZhbGlkYXRvcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIGlmICh0eXBlb2YgaGVscCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihbJ0ludmFsaWQgYGhlbHBgIGFyZ3VtZW50IHN1cHBsaWVkIHRvIGRlcHJlY2F0ZSwgZXhwZWN0ZWQgYSBzdHJpbmcuJywgXCJTZWUgYFwiICsgcHJvcE5hbWUgKyBcImAgcHJvcCBpbiBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLlwiXS5qb2luKCcgJykpO1xuICAgIH0gLy8gc2tpcCBpZiBwcm9wIGlzIHVuZGVmaW5lZFxuXG5cbiAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHJldHVybjsgLy8gZGVwcmVjYXRpb24gZXJyb3IgYW5kIGhlbHBcblxuICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihcIlRoZSBgXCIgKyBwcm9wTmFtZSArIFwiYCBwcm9wIGluIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAgaXMgZGVwcmVjYXRlZC5cIik7XG4gICAgaWYgKGhlbHApIGVycm9yLm1lc3NhZ2UgKz0gXCIgXCIgKyBoZWxwOyAvLyBhZGQgb3B0aW9uYWwgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlXG5cbiAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbGlkYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMgPiAzID8gX2xlbjMgLSAzIDogMCksIF9rZXkzID0gMzsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICAgIGFyZ3NbX2tleTMgLSAzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdmFsaWRhdGlvbkVycm9yID0gdmFsaWRhdG9yLmFwcGx5KHZvaWQgMCwgW3Byb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZV0uY29uY2F0KGFyZ3MpKTtcblxuICAgICAgICBpZiAodmFsaWRhdGlvbkVycm9yKSB7XG4gICAgICAgICAgZXJyb3IubWVzc2FnZSA9IGVycm9yLm1lc3NhZ2UgKyBcIiBcIiArIHZhbGlkYXRpb25FcnJvci5tZXNzYWdlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoWydJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIGRlcHJlY2F0ZSwgZXhwZWN0ZWQgYSBmdW5jdGlvbi4nLCBcIlNlZSBgXCIgKyBwcm9wTmFtZSArIFwiYCBwcm9wIGluIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAuXCJdLmpvaW4oJyAnKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yO1xuICB9O1xufTtcbi8qKiBBIGNoZWNrZXIgdGhhdCBtYXRjaGVzIHRoZSBSZWFjdC5SZWZPYmplY3QgdHlwZS4gKi9cblxuZXhwb3J0IHZhciByZWZPYmplY3QgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBjdXJyZW50OiBQcm9wVHlwZXMub2JqZWN0XG59KTtcbi8qKiBBIGNoZWNrZXIgdGhhdCBtYXRjaGVzIHRoZSBSZWFjdC5SZWYgdHlwZS4gKi9cblxuZXhwb3J0IHZhciByZWYgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgcmVmT2JqZWN0XSk7IiwiaW1wb3J0IF9pblJhbmdlIGZyb20gXCJsb2Rhc2gtZXMvaW5SYW5nZVwiO1xuaW1wb3J0IF9maXJzdCBmcm9tIFwibG9kYXNoLWVzL2ZpcnN0XCI7XG5pbXBvcnQgX2ludm9rZSBmcm9tIFwibG9kYXNoLWVzL2ludm9rZVwiO1xuaW1wb3J0IF9pc05pbCBmcm9tIFwibG9kYXNoLWVzL2lzTmlsXCI7XG5pbXBvcnQgX3NvbWUgZnJvbSBcImxvZGFzaC1lcy9zb21lXCI7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIGNsaWNrJ3MgY29vcmRpbmF0ZXMgYXJlIHdpdGhpbiB0aGUgYm91bmRzIG9mIGEgbm9kZS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9TZW1hbnRpYy1PcmcvU2VtYW50aWMtVUktUmVhY3QvcHVsbC8yMzg0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG5vZGUgLSBBIERPTSBub2RlLlxuICogQHBhcmFtIHtvYmplY3R9IGUgLSBBIFN5bnRoZXRpY0V2ZW50IG9yIERPTSBFdmVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG52YXIgZG9lc05vZGVDb250YWluQ2xpY2sgPSBmdW5jdGlvbiBkb2VzTm9kZUNvbnRhaW5DbGljayhub2RlLCBlKSB7XG4gIGlmIChfc29tZShbZSwgbm9kZV0sIF9pc05pbCkpIHJldHVybiBmYWxzZTsgLy8gaWYgdGhlcmUgaXMgYW4gZS50YXJnZXQgYW5kIGl0IGlzIGluIHRoZSBkb2N1bWVudCwgdXNlIGEgc2ltcGxlIG5vZGUuY29udGFpbnMoKSBjaGVja1xuXG4gIGlmIChlLnRhcmdldCkge1xuICAgIF9pbnZva2UoZS50YXJnZXQsICdzZXRBdHRyaWJ1dGUnLCAnZGF0YS1zdWlyLWNsaWNrLXRhcmdldCcsIHRydWUpO1xuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXN1aXItY2xpY2stdGFyZ2V0PXRydWVdJykpIHtcbiAgICAgIF9pbnZva2UoZS50YXJnZXQsICdyZW1vdmVBdHRyaWJ1dGUnLCAnZGF0YS1zdWlyLWNsaWNrLXRhcmdldCcpO1xuXG4gICAgICByZXR1cm4gbm9kZS5jb250YWlucyhlLnRhcmdldCk7XG4gICAgfVxuICB9IC8vIEJlbG93IGxvZ2ljIGhhbmRsZXMgY2FzZXMgd2hlcmUgdGhlIGUudGFyZ2V0IGlzIG5vIGxvbmdlciBpbiB0aGUgZG9jdW1lbnQuXG4gIC8vIFRoZSByZXN1bHQgb2YgdGhlIGNsaWNrIGxpa2VseSBoYXMgcmVtb3ZlZCB0aGUgZS50YXJnZXQgbm9kZS5cbiAgLy8gSW5zdGVhZCBvZiBub2RlLmNvbnRhaW5zKCksIHdlJ2xsIGlkZW50aWZ5IHRoZSBjbGljayBieSBYL1kgcG9zaXRpb24uXG4gIC8vIHJldHVybiBlYXJseSBpZiB0aGUgZXZlbnQgcHJvcGVydGllcyBhcmVuJ3QgYXZhaWxhYmxlXG4gIC8vIHByZXZlbnQgbWVhc3VyaW5nIHRoZSBub2RlIGFuZCByZXBhaW50aW5nIGlmIHdlIGRvbid0IG5lZWQgdG9cblxuXG4gIHZhciBjbGllbnRYID0gZS5jbGllbnRYLFxuICAgICAgY2xpZW50WSA9IGUuY2xpZW50WTtcbiAgaWYgKF9zb21lKFtjbGllbnRYLCBjbGllbnRZXSwgX2lzTmlsKSkgcmV0dXJuIGZhbHNlOyAvLyBmYWxzZSBpZiB0aGUgbm9kZSBpcyBub3QgdmlzaWJsZVxuXG4gIHZhciBjbGllbnRSZWN0cyA9IG5vZGUuZ2V0Q2xpZW50UmVjdHMoKTsgLy8gSGVhZHMgVXAhXG4gIC8vIGdldENsaWVudFJlY3RzIHJldHVybnMgYSBET01SZWN0TGlzdCwgbm90IGFuIGFycmF5IG5vciBhIHBsYWluIG9iamVjdFxuICAvLyBXZSBleHBsaWNpdGx5IGF2b2lkIF8uaXNFbXB0eSBhbmQgY2hlY2sgLmxlbmd0aCB0byBjb3ZlciBhbGwgcG9zc2libGUgc2hhcGVzXG5cbiAgaWYgKCFub2RlLm9mZnNldFdpZHRoIHx8ICFub2RlLm9mZnNldEhlaWdodCB8fCAhY2xpZW50UmVjdHMgfHwgIWNsaWVudFJlY3RzLmxlbmd0aCkgcmV0dXJuIGZhbHNlOyAvLyBmYWxzZSBpZiB0aGUgbm9kZSBkb2Vzbid0IGhhdmUgYSB2YWxpZCBib3VuZGluZyByZWN0XG5cbiAgdmFyIF9maXJzdDIgPSBfZmlyc3QoY2xpZW50UmVjdHMpLFxuICAgICAgdG9wID0gX2ZpcnN0Mi50b3AsXG4gICAgICBib3R0b20gPSBfZmlyc3QyLmJvdHRvbSxcbiAgICAgIGxlZnQgPSBfZmlyc3QyLmxlZnQsXG4gICAgICByaWdodCA9IF9maXJzdDIucmlnaHQ7XG5cbiAgaWYgKF9zb21lKFt0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHRdLCBfaXNOaWwpKSByZXR1cm4gZmFsc2U7IC8vIHdlIGFkZCBhIHNtYWxsIGRlY2ltYWwgdG8gdGhlIHVwcGVyIGJvdW5kIGp1c3QgdG8gbWFrZSBpdCBpbmNsdXNpdmVcbiAgLy8gZG9uJ3QgYWRkIGFuIHdob2xlIHBpeGVsICgxKSBhcyB0aGUgZXZlbnQvbm9kZSB2YWx1ZXMgbWF5IGJlIGRlY2ltYWwgc2Vuc2l0aXZlXG5cbiAgcmV0dXJuIF9pblJhbmdlKGNsaWVudFksIHRvcCwgYm90dG9tICsgMC4wMDEpICYmIF9pblJhbmdlKGNsaWVudFgsIGxlZnQsIHJpZ2h0ICsgMC4wMDEpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9lc05vZGVDb250YWluQ2xpY2s7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX3VuaXEgZnJvbSBcImxvZGFzaC1lcy91bmlxXCI7XG5pbXBvcnQgX2lzQXJyYXkgZnJvbSBcImxvZGFzaC1lcy9pc0FycmF5XCI7XG5pbXBvcnQgX2lzUGxhaW5PYmplY3QgZnJvbSBcImxvZGFzaC1lcy9pc1BsYWluT2JqZWN0XCI7XG5pbXBvcnQgX2lzRnVuY3Rpb24gZnJvbSBcImxvZGFzaC1lcy9pc0Z1bmN0aW9uXCI7XG5pbXBvcnQgX2lzTnVtYmVyIGZyb20gXCJsb2Rhc2gtZXMvaXNOdW1iZXJcIjtcbmltcG9ydCBfaXNTdHJpbmcgZnJvbSBcImxvZGFzaC1lcy9pc1N0cmluZ1wiO1xuaW1wb3J0IF9pc0Jvb2xlYW4gZnJvbSBcImxvZGFzaC1lcy9pc0Jvb2xlYW5cIjtcbmltcG9ydCBfaXNOaWwgZnJvbSBcImxvZGFzaC1lcy9pc05pbFwiO1xuaW1wb3J0IGN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xudmFyIERFUFJFQ0FURURfQ0FMTFMgPSB7fTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGYWN0b3JpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEEgbW9yZSByb2J1c3QgUmVhY3QuY3JlYXRlRWxlbWVudC4gSXQgY2FuIGNyZWF0ZSBlbGVtZW50cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbnxzdHJpbmd9IENvbXBvbmVudCBBIFJlYWN0Q2xhc3Mgb3Igc3RyaW5nXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBtYXBWYWx1ZVRvUHJvcHMgQSBmdW5jdGlvbiB0aGF0IG1hcHMgYSBwcmltaXRpdmUgdmFsdWUgdG8gdGhlIENvbXBvbmVudCBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fGZ1bmN0aW9ufSB2YWwgVGhlIHZhbHVlIHRvIGNyZWF0ZSBhIFJlYWN0RWxlbWVudCBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnMuZGVmYXVsdFByb3BzPXt9XSBEZWZhdWx0IHByb3BzIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IFtvcHRpb25zLm92ZXJyaWRlUHJvcHM9e31dIE92ZXJyaWRlIHByb3BzIG9iamVjdCBvciBmdW5jdGlvbiAoY2FsbGVkIHdpdGggcmVndWxhciBwcm9wcylcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b0dlbmVyYXRlS2V5PXRydWVdIFdoZXRoZXIgb3Igbm90IGF1dG9tYXRpYyBrZXkgZ2VuZXJhdGlvbiBpcyBhbGxvd2VkXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNob3J0aGFuZChDb21wb25lbnQsIG1hcFZhbHVlVG9Qcm9wcywgdmFsLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAodHlwZW9mIENvbXBvbmVudCAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignY3JlYXRlU2hvcnRoYW5kKCkgQ29tcG9uZW50IG11c3QgYmUgYSBzdHJpbmcgb3IgZnVuY3Rpb24uJyk7XG4gIH0gLy8gc2hvcnQgY2lyY3VpdCBub29wIHZhbHVlc1xuXG5cbiAgaWYgKF9pc05pbCh2YWwpIHx8IF9pc0Jvb2xlYW4odmFsKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIHZhbElzU3RyaW5nID0gX2lzU3RyaW5nKHZhbCk7XG5cbiAgdmFyIHZhbElzTnVtYmVyID0gX2lzTnVtYmVyKHZhbCk7XG5cbiAgdmFyIHZhbElzRnVuY3Rpb24gPSBfaXNGdW5jdGlvbih2YWwpO1xuXG4gIHZhciB2YWxJc1JlYWN0RWxlbWVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudCh2YWwpO1xuXG4gIHZhciB2YWxJc1Byb3BzT2JqZWN0ID0gX2lzUGxhaW5PYmplY3QodmFsKTtcblxuICB2YXIgdmFsSXNQcmltaXRpdmVWYWx1ZSA9IHZhbElzU3RyaW5nIHx8IHZhbElzTnVtYmVyIHx8IF9pc0FycmF5KHZhbCk7IC8vIHVuaGFuZGxlZCB0eXBlIHJldHVybiBudWxsXG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXG5cbiAgaWYgKCF2YWxJc0Z1bmN0aW9uICYmICF2YWxJc1JlYWN0RWxlbWVudCAmJiAhdmFsSXNQcm9wc09iamVjdCAmJiAhdmFsSXNQcmltaXRpdmVWYWx1ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnU2hvcnRoYW5kIHZhbHVlIG11c3QgYmUgYSBzdHJpbmd8bnVtYmVyfGFycmF5fG9iamVjdHxSZWFjdEVsZW1lbnR8ZnVuY3Rpb24uJywgJyBVc2UgbnVsbHx1bmRlZmluZWR8Ym9vbGVhbiBmb3Igbm9uZScsIFwiIFJlY2VpdmVkIFwiICsgdHlwZW9mIHZhbCArIFwiLlwiXS5qb2luKCcnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQnVpbGQgdXAgcHJvcHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIF9vcHRpb25zJGRlZmF1bHRQcm9wcyA9IF9vcHRpb25zLmRlZmF1bHRQcm9wcyxcbiAgICAgIGRlZmF1bHRQcm9wcyA9IF9vcHRpb25zJGRlZmF1bHRQcm9wcyA9PT0gdm9pZCAwID8ge30gOiBfb3B0aW9ucyRkZWZhdWx0UHJvcHM7IC8vIFVzZXIncyBwcm9wc1xuXG4gIHZhciB1c2Vyc1Byb3BzID0gdmFsSXNSZWFjdEVsZW1lbnQgJiYgdmFsLnByb3BzIHx8IHZhbElzUHJvcHNPYmplY3QgJiYgdmFsIHx8IHZhbElzUHJpbWl0aXZlVmFsdWUgJiYgbWFwVmFsdWVUb1Byb3BzKHZhbCk7IC8vIE92ZXJyaWRlIHByb3BzXG5cbiAgdmFyIF9vcHRpb25zMiA9IG9wdGlvbnMsXG4gICAgICBfb3B0aW9uczIkb3ZlcnJpZGVQcm8gPSBfb3B0aW9uczIub3ZlcnJpZGVQcm9wcyxcbiAgICAgIG92ZXJyaWRlUHJvcHMgPSBfb3B0aW9uczIkb3ZlcnJpZGVQcm8gPT09IHZvaWQgMCA/IHt9IDogX29wdGlvbnMyJG92ZXJyaWRlUHJvO1xuICBvdmVycmlkZVByb3BzID0gX2lzRnVuY3Rpb24ob3ZlcnJpZGVQcm9wcykgPyBvdmVycmlkZVByb3BzKF9leHRlbmRzKHt9LCBkZWZhdWx0UHJvcHMsIHVzZXJzUHJvcHMpKSA6IG92ZXJyaWRlUHJvcHM7IC8vIE1lcmdlIHByb3BzXG5cbiAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuXG4gIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0UHJvcHMsIHVzZXJzUHJvcHMsIG92ZXJyaWRlUHJvcHMpOyAvLyBNZXJnZSBjbGFzc05hbWVcblxuXG4gIGlmIChkZWZhdWx0UHJvcHMuY2xhc3NOYW1lIHx8IG92ZXJyaWRlUHJvcHMuY2xhc3NOYW1lIHx8IHVzZXJzUHJvcHMuY2xhc3NOYW1lKSB7XG4gICAgdmFyIG1lcmdlZENsYXNzZXNOYW1lcyA9IGN4KGRlZmF1bHRQcm9wcy5jbGFzc05hbWUsIG92ZXJyaWRlUHJvcHMuY2xhc3NOYW1lLCB1c2Vyc1Byb3BzLmNsYXNzTmFtZSk7XG4gICAgcHJvcHMuY2xhc3NOYW1lID0gX3VuaXEobWVyZ2VkQ2xhc3Nlc05hbWVzLnNwbGl0KCcgJykpLmpvaW4oJyAnKTtcbiAgfSAvLyBNZXJnZSBzdHlsZVxuXG5cbiAgaWYgKGRlZmF1bHRQcm9wcy5zdHlsZSB8fCBvdmVycmlkZVByb3BzLnN0eWxlIHx8IHVzZXJzUHJvcHMuc3R5bGUpIHtcbiAgICBwcm9wcy5zdHlsZSA9IF9leHRlbmRzKHt9LCBkZWZhdWx0UHJvcHMuc3R5bGUsIHVzZXJzUHJvcHMuc3R5bGUsIG92ZXJyaWRlUHJvcHMuc3R5bGUpO1xuICB9IC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gR2V0IGtleVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFVzZSBrZXksIGNoaWxkS2V5LCBvciBnZW5lcmF0ZSBrZXlcblxuXG4gIGlmIChfaXNOaWwocHJvcHMua2V5KSkge1xuICAgIHZhciBjaGlsZEtleSA9IHByb3BzLmNoaWxkS2V5O1xuICAgIHZhciBfb3B0aW9uczMgPSBvcHRpb25zLFxuICAgICAgICBfb3B0aW9uczMkYXV0b0dlbmVyYXQgPSBfb3B0aW9uczMuYXV0b0dlbmVyYXRlS2V5LFxuICAgICAgICBhdXRvR2VuZXJhdGVLZXkgPSBfb3B0aW9uczMkYXV0b0dlbmVyYXQgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9uczMkYXV0b0dlbmVyYXQ7XG5cbiAgICBpZiAoIV9pc05pbChjaGlsZEtleSkpIHtcbiAgICAgIC8vIGFwcGx5IGFuZCBjb25zdW1lIHRoZSBjaGlsZEtleVxuICAgICAgcHJvcHMua2V5ID0gdHlwZW9mIGNoaWxkS2V5ID09PSAnZnVuY3Rpb24nID8gY2hpbGRLZXkocHJvcHMpIDogY2hpbGRLZXk7XG4gICAgICBkZWxldGUgcHJvcHMuY2hpbGRLZXk7XG4gICAgfSBlbHNlIGlmIChhdXRvR2VuZXJhdGVLZXkgJiYgKHZhbElzU3RyaW5nIHx8IHZhbElzTnVtYmVyKSkge1xuICAgICAgLy8gdXNlIHN0cmluZy9udW1iZXIgc2hvcnRoYW5kIHZhbHVlcyBhcyB0aGUga2V5XG4gICAgICBwcm9wcy5rZXkgPSB2YWw7XG4gICAgfVxuICB9IC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQ3JlYXRlIEVsZW1lbnRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBDbG9uZSBSZWFjdEVsZW1lbnRzXG5cblxuICBpZiAodmFsSXNSZWFjdEVsZW1lbnQpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudCh2YWwsIHByb3BzKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcHJvcHMuY2hpbGRyZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gcHJvcHMuY2hpbGRyZW4oQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIGNoaWxkcmVuOiB1bmRlZmluZWRcbiAgICB9KSk7XG4gIH0gLy8gQ3JlYXRlIFJlYWN0RWxlbWVudHMgZnJvbSBidWlsdCB1cCBwcm9wc1xuXG5cbiAgaWYgKHZhbElzUHJpbWl0aXZlVmFsdWUgfHwgdmFsSXNQcm9wc09iamVjdCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIHByb3BzKTtcbiAgfSAvLyBDYWxsIGZ1bmN0aW9ucyB3aXRoIGFyZ3Mgc2ltaWxhciB0byBjcmVhdGVFbGVtZW50KClcbiAgLy8gVE9ETzogVjMgcmVtb3ZlIHRoZSBpbXBsZW1lbnRhdGlvblxuXG5cbiAgaWYgKHZhbElzRnVuY3Rpb24pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCFERVBSRUNBVEVEX0NBTExTW0NvbXBvbmVudF0pIHtcbiAgICAgICAgREVQUkVDQVRFRF9DQUxMU1tDb21wb25lbnRdID0gdHJ1ZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgICBjb25zb2xlLndhcm4oXCJXYXJuaW5nOiBUaGVyZSBpcyBhIGRlcHJlY2F0ZWQgc2hvcnRoYW5kIGZ1bmN0aW9uIHVzYWdlIGZvciBcXFwiXCIgKyBDb21wb25lbnQgKyBcIlxcXCIuIEl0IGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2MyByZWxlYXNlLiBQbGVhc2UgZm9sbG93IG91ciB1cGdyYWRlIGd1aWRlOiBodHRwczovL2dpdGh1Yi5jb20vU2VtYW50aWMtT3JnL1NlbWFudGljLVVJLVJlYWN0L3B1bGwvNDAyOVwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsKENvbXBvbmVudCwgcHJvcHMsIHByb3BzLmNoaWxkcmVuKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cblxufSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZhY3RvcnkgQ3JlYXRvcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIENyZWF0ZXMgYSBgY3JlYXRlU2hvcnRoYW5kYCBmdW5jdGlvbiB0aGF0IGlzIHdhaXRpbmcgZm9yIGEgdmFsdWUgYW5kIG9wdGlvbnMuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbnxzdHJpbmd9IENvbXBvbmVudCBBIFJlYWN0Q2xhc3Mgb3Igc3RyaW5nXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBtYXBWYWx1ZVRvUHJvcHMgQSBmdW5jdGlvbiB0aGF0IG1hcHMgYSBwcmltaXRpdmUgdmFsdWUgdG8gdGhlIENvbXBvbmVudCBwcm9wc1xuICogQHJldHVybnMge2Z1bmN0aW9ufSBBIHNob3J0aGFuZCBmYWN0b3J5IGZ1bmN0aW9uIHdhaXRpbmcgZm9yIGB2YWxgIGFuZCBgZGVmYXVsdFByb3BzYC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2hvcnRoYW5kRmFjdG9yeShDb21wb25lbnQsIG1hcFZhbHVlVG9Qcm9wcykge1xuICBpZiAodHlwZW9mIENvbXBvbmVudCAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignY3JlYXRlU2hvcnRoYW5kRmFjdG9yeSgpIENvbXBvbmVudCBtdXN0IGJlIGEgc3RyaW5nIG9yIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWwsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY3JlYXRlU2hvcnRoYW5kKENvbXBvbmVudCwgbWFwVmFsdWVUb1Byb3BzLCB2YWwsIG9wdGlvbnMpO1xuICB9O1xufSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEhUTUwgRmFjdG9yaWVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHZhciBjcmVhdGVIVE1MRGl2aXNpb24gPSAvKiAjX19QVVJFX18gKi9jcmVhdGVTaG9ydGhhbmRGYWN0b3J5KCdkaXYnLCBmdW5jdGlvbiAodmFsKSB7XG4gIHJldHVybiB7XG4gICAgY2hpbGRyZW46IHZhbFxuICB9O1xufSk7XG5leHBvcnQgdmFyIGNyZWF0ZUhUTUxJZnJhbWUgPSAvKiAjX19QVVJFX18gKi9jcmVhdGVTaG9ydGhhbmRGYWN0b3J5KCdpZnJhbWUnLCBmdW5jdGlvbiAoc3JjKSB7XG4gIHJldHVybiB7XG4gICAgc3JjOiBzcmNcbiAgfTtcbn0pO1xuZXhwb3J0IHZhciBjcmVhdGVIVE1MSW1hZ2UgPSAvKiAjX19QVVJFX18gKi9jcmVhdGVTaG9ydGhhbmRGYWN0b3J5KCdpbWcnLCBmdW5jdGlvbiAodmFsKSB7XG4gIHJldHVybiB7XG4gICAgc3JjOiB2YWxcbiAgfTtcbn0pO1xuZXhwb3J0IHZhciBjcmVhdGVIVE1MSW5wdXQgPSAvKiAjX19QVVJFX18gKi9jcmVhdGVTaG9ydGhhbmRGYWN0b3J5KCdpbnB1dCcsIGZ1bmN0aW9uICh2YWwpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB2YWxcbiAgfTtcbn0pO1xuZXhwb3J0IHZhciBjcmVhdGVIVE1MTGFiZWwgPSAvKiAjX19QVVJFX18gKi9jcmVhdGVTaG9ydGhhbmRGYWN0b3J5KCdsYWJlbCcsIGZ1bmN0aW9uICh2YWwpIHtcbiAgcmV0dXJuIHtcbiAgICBjaGlsZHJlbjogdmFsXG4gIH07XG59KTtcbmV4cG9ydCB2YXIgY3JlYXRlSFRNTFBhcmFncmFwaCA9IC8qICNfX1BVUkVfXyAqL2NyZWF0ZVNob3J0aGFuZEZhY3RvcnkoJ3AnLCBmdW5jdGlvbiAodmFsKSB7XG4gIHJldHVybiB7XG4gICAgY2hpbGRyZW46IHZhbFxuICB9O1xufSk7IiwiLyoqXG4gKiBSZXR1cm5zIGEgY3JlYXRlRWxlbWVudCgpIHR5cGUgYmFzZWQgb24gdGhlIHByb3BzIG9mIHRoZSBDb21wb25lbnQuXG4gKiBVc2VmdWwgZm9yIGNhbGN1bGF0aW5nIHdoYXQgdHlwZSBhIGNvbXBvbmVudCBzaG91bGQgcmVuZGVyIGFzLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IENvbXBvbmVudCBBIGZ1bmN0aW9uIG9yIFJlYWN0Q2xhc3MuXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgQSBSZWFjdEVsZW1lbnQgcHJvcHMgb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZ2V0RGVmYXVsdF0gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBkZWZhdWx0IGVsZW1lbnQgdHlwZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd8ZnVuY3Rpb259IEEgUmVhY3RFbGVtZW50IHR5cGVcbiAqL1xuZnVuY3Rpb24gZ2V0RWxlbWVudFR5cGUoQ29tcG9uZW50LCBwcm9wcywgZ2V0RGVmYXVsdCkge1xuICB2YXIgX0NvbXBvbmVudCRkZWZhdWx0UHJvID0gQ29tcG9uZW50LmRlZmF1bHRQcm9wcyxcbiAgICAgIGRlZmF1bHRQcm9wcyA9IF9Db21wb25lbnQkZGVmYXVsdFBybyA9PT0gdm9pZCAwID8ge30gOiBfQ29tcG9uZW50JGRlZmF1bHRQcm87IC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gdXNlciBkZWZpbmVkIFwiYXNcIiBlbGVtZW50IHR5cGVcblxuICBpZiAocHJvcHMuYXMgJiYgcHJvcHMuYXMgIT09IGRlZmF1bHRQcm9wcy5hcykgcmV0dXJuIHByb3BzLmFzOyAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGNvbXB1dGVkIGRlZmF1bHQgZWxlbWVudCB0eXBlXG5cbiAgaWYgKGdldERlZmF1bHQpIHtcbiAgICB2YXIgY29tcHV0ZWREZWZhdWx0ID0gZ2V0RGVmYXVsdCgpO1xuICAgIGlmIChjb21wdXRlZERlZmF1bHQpIHJldHVybiBjb21wdXRlZERlZmF1bHQ7XG4gIH0gLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBpbmZlciBhbmNob3IgbGlua3NcblxuXG4gIGlmIChwcm9wcy5ocmVmKSByZXR1cm4gJ2EnOyAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHVzZSBkZWZhdWx0UHJvcCBvciAnZGl2J1xuXG4gIHJldHVybiBkZWZhdWx0UHJvcHMuYXMgfHwgJ2Rpdic7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEVsZW1lbnRUeXBlOyIsIi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgY29uc2lzdGluZyBvZiBwcm9wcyBiZXlvbmQgdGhlIHNjb3BlIG9mIHRoZSBDb21wb25lbnQuXG4gKiBVc2VmdWwgZm9yIGdldHRpbmcgYW5kIHNwcmVhZGluZyB1bmtub3duIHByb3BzIGZyb20gdGhlIHVzZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBDb21wb25lbnQgQSBmdW5jdGlvbiBvciBSZWFjdENsYXNzLlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIEEgUmVhY3RFbGVtZW50IHByb3BzIG9iamVjdFxuICogQHJldHVybnMge3t9fSBBIHNoYWxsb3cgY29weSBvZiB0aGUgcHJvcCBvYmplY3RcbiAqL1xudmFyIGdldFVuaGFuZGxlZFByb3BzID0gZnVuY3Rpb24gZ2V0VW5oYW5kbGVkUHJvcHMoQ29tcG9uZW50LCBwcm9wcykge1xuICAvLyBOb3RlIHRoYXQgYGhhbmRsZWRQcm9wc2AgYXJlIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5IGR1cmluZyBidWlsZCB3aXRoIGBiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJlYWN0LWhhbmRsZWQtcHJvcHNgXG4gIHZhciBfQ29tcG9uZW50JGhhbmRsZWRQcm8gPSBDb21wb25lbnQuaGFuZGxlZFByb3BzLFxuICAgICAgaGFuZGxlZFByb3BzID0gX0NvbXBvbmVudCRoYW5kbGVkUHJvID09PSB2b2lkIDAgPyBbXSA6IF9Db21wb25lbnQkaGFuZGxlZFBybztcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHByb3BzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcHJvcCkge1xuICAgIGlmIChwcm9wID09PSAnY2hpbGRLZXknKSByZXR1cm4gYWNjO1xuICAgIGlmIChoYW5kbGVkUHJvcHMuaW5kZXhPZihwcm9wKSA9PT0gLTEpIGFjY1twcm9wXSA9IHByb3BzW3Byb3BdO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFVuaGFuZGxlZFByb3BzOyIsImltcG9ydCBfaW5jbHVkZXMgZnJvbSBcImxvZGFzaC1lcy9pbmNsdWRlc1wiO1xuaW1wb3J0IF9mb3JFYWNoIGZyb20gXCJsb2Rhc2gtZXMvZm9yRWFjaFwiO1xuZXhwb3J0IHZhciBodG1sSW5wdXRBdHRycyA9IFsvLyBSRUFDVFxuJ3NlbGVjdGVkJywgJ2RlZmF1bHRWYWx1ZScsICdkZWZhdWx0Q2hlY2tlZCcsIC8vIExJTUlURUQgSFRNTCBQUk9QU1xuJ2FjY2VwdCcsICdhdXRvQ2FwaXRhbGl6ZScsICdhdXRvQ29tcGxldGUnLCAnYXV0b0NvcnJlY3QnLCAnYXV0b0ZvY3VzJywgJ2NoZWNrZWQnLCAnZGlzYWJsZWQnLCAnZm9ybScsICdpZCcsICdpbnB1dE1vZGUnLCAnbGFuZycsICdsaXN0JywgJ21heCcsICdtYXhMZW5ndGgnLCAnbWluJywgJ21pbkxlbmd0aCcsICdtdWx0aXBsZScsICduYW1lJywgJ3BhdHRlcm4nLCAncGxhY2Vob2xkZXInLCAncmVhZE9ubHknLCAncmVxdWlyZWQnLCAnc3RlcCcsICd0aXRsZScsICd0eXBlJywgJ3ZhbHVlJ107XG5leHBvcnQgdmFyIGh0bWxJbnB1dEV2ZW50cyA9IFsvLyBFVkVOVFNcbi8vIGtleWJvYXJkXG4nb25LZXlEb3duJywgJ29uS2V5UHJlc3MnLCAnb25LZXlVcCcsIC8vIGZvY3VzXG4nb25Gb2N1cycsICdvbkJsdXInLCAvLyBmb3JtXG4nb25DaGFuZ2UnLCAnb25JbnB1dCcsIC8vIG1vdXNlXG4nb25DbGljaycsICdvbkNvbnRleHRNZW51JywgJ29uRHJhZycsICdvbkRyYWdFbmQnLCAnb25EcmFnRW50ZXInLCAnb25EcmFnRXhpdCcsICdvbkRyYWdMZWF2ZScsICdvbkRyYWdPdmVyJywgJ29uRHJhZ1N0YXJ0JywgJ29uRHJvcCcsICdvbk1vdXNlRG93bicsICdvbk1vdXNlRW50ZXInLCAnb25Nb3VzZUxlYXZlJywgJ29uTW91c2VNb3ZlJywgJ29uTW91c2VPdXQnLCAnb25Nb3VzZU92ZXInLCAnb25Nb3VzZVVwJywgLy8gc2VsZWN0aW9uXG4nb25TZWxlY3QnLCAvLyB0b3VjaFxuJ29uVG91Y2hDYW5jZWwnLCAnb25Ub3VjaEVuZCcsICdvblRvdWNoTW92ZScsICdvblRvdWNoU3RhcnQnXTtcbmV4cG9ydCB2YXIgaHRtbElucHV0UHJvcHMgPSBbXS5jb25jYXQoaHRtbElucHV0QXR0cnMsIGh0bWxJbnB1dEV2ZW50cyk7XG5leHBvcnQgdmFyIGh0bWxJbWFnZVByb3BzID0gWydhbHQnLCAnaGVpZ2h0JywgJ3NyYycsICdzcmNTZXQnLCAnd2lkdGgnLCAnbG9hZGluZyddO1xuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIG9iamVjdHMgY29uc2lzdGluZyBvZjogcHJvcHMgb2YgaHRtbCBpbnB1dCBlbGVtZW50IGFuZCByZXN0LlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIEEgUmVhY3RFbGVtZW50IHByb3BzIG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XVxuICogQHBhcmFtIHtBcnJheX0gW29wdGlvbnMuaHRtbFByb3BzXSBBbiBhcnJheSBvZiBodG1sIGlucHV0IHByb3BzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmluY2x1ZGVBcmlhXSBJbmNsdWRlcyBhbGwgaW5wdXQgcHJvcHMgdGhhdCBzdGFydHMgd2l0aCBcImFyaWEtXCJcbiAqIEByZXR1cm5zIHtbe30sIHt9XX0gQW4gYXJyYXkgb2Ygb2JqZWN0c1xuICovXG5cbmV4cG9ydCB2YXIgcGFydGl0aW9uSFRNTFByb3BzID0gZnVuY3Rpb24gcGFydGl0aW9uSFRNTFByb3BzKHByb3BzLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgX29wdGlvbnMkaHRtbFByb3BzID0gX29wdGlvbnMuaHRtbFByb3BzLFxuICAgICAgaHRtbFByb3BzID0gX29wdGlvbnMkaHRtbFByb3BzID09PSB2b2lkIDAgPyBodG1sSW5wdXRQcm9wcyA6IF9vcHRpb25zJGh0bWxQcm9wcyxcbiAgICAgIF9vcHRpb25zJGluY2x1ZGVBcmlhID0gX29wdGlvbnMuaW5jbHVkZUFyaWEsXG4gICAgICBpbmNsdWRlQXJpYSA9IF9vcHRpb25zJGluY2x1ZGVBcmlhID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkaW5jbHVkZUFyaWE7XG4gIHZhciBpbnB1dFByb3BzID0ge307XG4gIHZhciByZXN0ID0ge307XG5cbiAgX2ZvckVhY2gocHJvcHMsIGZ1bmN0aW9uICh2YWwsIHByb3ApIHtcbiAgICB2YXIgcG9zc2libGVBcmlhID0gaW5jbHVkZUFyaWEgJiYgKC9eYXJpYS0uKiQvLnRlc3QocHJvcCkgfHwgcHJvcCA9PT0gJ3JvbGUnKTtcbiAgICB2YXIgdGFyZ2V0ID0gX2luY2x1ZGVzKGh0bWxQcm9wcywgcHJvcCkgfHwgcG9zc2libGVBcmlhID8gaW5wdXRQcm9wcyA6IHJlc3Q7XG4gICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xuICB9KTtcblxuICByZXR1cm4gW2lucHV0UHJvcHMsIHJlc3RdO1xufTsiLCJpbXBvcnQgX2lzTmlsIGZyb20gXCJsb2Rhc2gtZXMvaXNOaWxcIjtcbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCA9PT0gJ29iamVjdCcgJiYgZG9jdW1lbnQgIT09IG51bGw7XG52YXIgaGFzV2luZG93ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93ICE9PSBudWxsICYmIHdpbmRvdy5zZWxmID09PSB3aW5kb3c7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25mdXNpbmctYXJyb3dcblxudmFyIGlzQnJvd3NlciA9IGZ1bmN0aW9uIGlzQnJvd3NlcigpIHtcbiAgcmV0dXJuICFfaXNOaWwoaXNCcm93c2VyLm92ZXJyaWRlKSA/IGlzQnJvd3Nlci5vdmVycmlkZSA6IGhhc0RvY3VtZW50ICYmIGhhc1dpbmRvdztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzQnJvd3NlcjsiLCIvLyBDb3B5IG9mIHNpbmRyZSdzIGxldmVuLCB3cmFwcGVkIGluIGRlYWQgY29kZSBlbGltaW5hdGlvbiBmb3IgcHJvZHVjdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9sZXZlbi9ibG9iL21hc3Rlci9pbmRleC5qc1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5LCBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzLCBuby1tdWx0aS1hc3NpZ24sIG5vLW5lc3RlZC10ZXJuYXJ5LCBuby1wbHVzcGx1cyAqL1xudmFyIGxldmVuID0gZnVuY3Rpb24gbGV2ZW4oKSB7XG4gIHJldHVybiAwO1xufTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGFyciA9IFtdO1xuICB2YXIgY2hhckNvZGVDYWNoZSA9IFtdO1xuXG4gIGxldmVuID0gZnVuY3Rpb24gbGV2ZW4oYSwgYikge1xuICAgIGlmIChhID09PSBiKSByZXR1cm4gMDtcbiAgICB2YXIgYUxlbiA9IGEubGVuZ3RoO1xuICAgIHZhciBiTGVuID0gYi5sZW5ndGg7XG4gICAgaWYgKGFMZW4gPT09IDApIHJldHVybiBiTGVuO1xuICAgIGlmIChiTGVuID09PSAwKSByZXR1cm4gYUxlbjtcbiAgICB2YXIgYkNoYXJDb2RlO1xuICAgIHZhciByZXQ7XG4gICAgdmFyIHRtcDtcbiAgICB2YXIgdG1wMjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGogPSAwO1xuXG4gICAgd2hpbGUgKGkgPCBhTGVuKSB7XG4gICAgICBjaGFyQ29kZUNhY2hlW2ldID0gYS5jaGFyQ29kZUF0KGkpO1xuICAgICAgYXJyW2ldID0gKytpO1xuICAgIH1cblxuICAgIHdoaWxlIChqIDwgYkxlbikge1xuICAgICAgYkNoYXJDb2RlID0gYi5jaGFyQ29kZUF0KGopO1xuICAgICAgdG1wID0gaisrO1xuICAgICAgcmV0ID0gajtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IGFMZW47IGkrKykge1xuICAgICAgICB0bXAyID0gYkNoYXJDb2RlID09PSBjaGFyQ29kZUNhY2hlW2ldID8gdG1wIDogdG1wICsgMTtcbiAgICAgICAgdG1wID0gYXJyW2ldO1xuICAgICAgICByZXQgPSBhcnJbaV0gPSB0bXAgPiByZXQgPyB0bXAyID4gcmV0ID8gcmV0ICsgMSA6IHRtcDIgOiB0bXAyID4gdG1wID8gdG1wICsgMSA6IHRtcDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGV2ZW47IiwiZXhwb3J0IHZhciBudW1iZXJUb1dvcmRNYXAgPSB7XG4gIDE6ICdvbmUnLFxuICAyOiAndHdvJyxcbiAgMzogJ3RocmVlJyxcbiAgNDogJ2ZvdXInLFxuICA1OiAnZml2ZScsXG4gIDY6ICdzaXgnLFxuICA3OiAnc2V2ZW4nLFxuICA4OiAnZWlnaHQnLFxuICA5OiAnbmluZScsXG4gIDEwOiAndGVuJyxcbiAgMTE6ICdlbGV2ZW4nLFxuICAxMjogJ3R3ZWx2ZScsXG4gIDEzOiAndGhpcnRlZW4nLFxuICAxNDogJ2ZvdXJ0ZWVuJyxcbiAgMTU6ICdmaWZ0ZWVuJyxcbiAgMTY6ICdzaXh0ZWVuJ1xufTtcbi8qKlxuICogUmV0dXJuIHRoZSBudW1iZXIgd29yZCBmb3IgbnVtYmVycyAxLTE2LlxuICogUmV0dXJucyBzdHJpbmdzIG9yIG51bWJlcnMgYXMgaXMgaWYgdGhlcmUgaXMgbm8gY29ycmVzcG9uZGluZyB3b3JkLlxuICogUmV0dXJucyBhbiBlbXB0eSBzdHJpbmcgaWYgdmFsdWUgaXMgbm90IGEgc3RyaW5nIG9yIG51bWJlci5cbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQgdG8gYSB3b3JkLlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyVG9Xb3JkKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuXG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBudW1iZXJUb1dvcmRNYXBbdmFsdWVdIHx8IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVNob3J0aGFuZEZhY3RvcnksIGdldFVuaGFuZGxlZFByb3BzLCBpc0Jyb3dzZXIgfSBmcm9tICcuLi8uLi9saWInO1xuaW1wb3J0IFBvcnRhbCBmcm9tICcuLi8uLi9hZGRvbnMvUG9ydGFsJztcbmltcG9ydCBEaW1tZXJEaW1tYWJsZSBmcm9tICcuL0RpbW1lckRpbW1hYmxlJztcbmltcG9ydCBEaW1tZXJJbm5lciBmcm9tICcuL0RpbW1lcklubmVyJztcbi8qKlxuICogQSBkaW1tZXIgaGlkZXMgZGlzdHJhY3Rpb25zIHRvIGZvY3VzIGF0dGVudGlvbiBvbiBwYXJ0aWN1bGFyIGNvbnRlbnQuXG4gKi9cblxudmFyIERpbW1lciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShEaW1tZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERpbW1lcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcblxuICAgIF90aGlzLmhhbmRsZVBvcnRhbE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFpc0Jyb3dzZXIoKSkgcmV0dXJuOyAvLyBIZWFkcyB1cCwgSUUgZG9lc24ndCBzdXBwb3J0IHNlY29uZCBhcmd1bWVudCBpbiBhZGQoKVxuXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RpbW1lZCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkaW1tYWJsZScpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVQb3J0YWxVbm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFpc0Jyb3dzZXIoKSkgcmV0dXJuOyAvLyBIZWFkcyB1cCwgSUUgZG9lc24ndCBzdXBwb3J0IHNlY29uZCBhcmd1bWVudCBpbiBhZGQoKVxuXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RpbW1lZCcpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkaW1tYWJsZScpO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gRGltbWVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGFjdGl2ZSA9IF90aGlzJHByb3BzLmFjdGl2ZSxcbiAgICAgICAgcGFnZSA9IF90aGlzJHByb3BzLnBhZ2U7XG4gICAgdmFyIHJlc3QgPSBnZXRVbmhhbmRsZWRQcm9wcyhEaW1tZXIsIHRoaXMucHJvcHMpO1xuXG4gICAgaWYgKHBhZ2UpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQb3J0YWwsIHtcbiAgICAgICAgY2xvc2VPbkVzY2FwZTogZmFsc2UsXG4gICAgICAgIGNsb3NlT25Eb2N1bWVudENsaWNrOiBmYWxzZSxcbiAgICAgICAgb25Nb3VudDogdGhpcy5oYW5kbGVQb3J0YWxNb3VudCxcbiAgICAgICAgb25Vbm1vdW50OiB0aGlzLmhhbmRsZVBvcnRhbFVubW91bnQsXG4gICAgICAgIG9wZW46IGFjdGl2ZSxcbiAgICAgICAgb3Blbk9uVHJpZ2dlckNsaWNrOiBmYWxzZVxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRGltbWVySW5uZXIsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgICAgIGFjdGl2ZTogYWN0aXZlLFxuICAgICAgICBwYWdlOiBwYWdlXG4gICAgICB9KSkpO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEaW1tZXJJbm5lciwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgIGFjdGl2ZTogYWN0aXZlLFxuICAgICAgcGFnZTogcGFnZVxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gRGltbWVyO1xufShDb21wb25lbnQpO1xuXG5EaW1tZXIuaGFuZGxlZFByb3BzID0gW1wiYWN0aXZlXCIsIFwicGFnZVwiXTtcbmV4cG9ydCB7IERpbW1lciBhcyBkZWZhdWx0IH07XG5EaW1tZXIucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKiogQW4gYWN0aXZlIGRpbW1lciB3aWxsIGRpbSBpdHMgcGFyZW50IGNvbnRhaW5lci4gKi9cbiAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQSBkaW1tZXIgY2FuIGJlIGZvcm1hdHRlZCB0byBiZSBmaXhlZCB0byB0aGUgcGFnZS4gKi9cbiAgcGFnZTogUHJvcFR5cGVzLmJvb2xcbn0gOiB7fTtcbkRpbW1lci5EaW1tYWJsZSA9IERpbW1lckRpbW1hYmxlO1xuRGltbWVyLklubmVyID0gRGltbWVySW5uZXI7XG5EaW1tZXIuY3JlYXRlID0gY3JlYXRlU2hvcnRoYW5kRmFjdG9yeShEaW1tZXIsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGNvbnRlbnQ6IHZhbHVlXG4gIH07XG59KTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBjeCBmcm9tICdjbHN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY2hpbGRyZW5VdGlscywgY3VzdG9tUHJvcFR5cGVzLCBnZXRFbGVtZW50VHlwZSwgZ2V0VW5oYW5kbGVkUHJvcHMsIHVzZUtleU9ubHkgfSBmcm9tICcuLi8uLi9saWInO1xuLyoqXG4gKiBBIGRpbW1hYmxlIHN1Yi1jb21wb25lbnQgZm9yIERpbW1lci5cbiAqL1xuXG5mdW5jdGlvbiBEaW1tZXJEaW1tYWJsZShwcm9wcykge1xuICB2YXIgYmx1cnJpbmcgPSBwcm9wcy5ibHVycmluZyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjb250ZW50ID0gcHJvcHMuY29udGVudCxcbiAgICAgIGRpbW1lZCA9IHByb3BzLmRpbW1lZDtcbiAgdmFyIGNsYXNzZXMgPSBjeCh1c2VLZXlPbmx5KGJsdXJyaW5nLCAnYmx1cnJpbmcnKSwgdXNlS2V5T25seShkaW1tZWQsICdkaW1tZWQnKSwgJ2RpbW1hYmxlJywgY2xhc3NOYW1lKTtcbiAgdmFyIHJlc3QgPSBnZXRVbmhhbmRsZWRQcm9wcyhEaW1tZXJEaW1tYWJsZSwgcHJvcHMpO1xuICB2YXIgRWxlbWVudFR5cGUgPSBnZXRFbGVtZW50VHlwZShEaW1tZXJEaW1tYWJsZSwgcHJvcHMpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRWxlbWVudFR5cGUsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pLCBjaGlsZHJlblV0aWxzLmlzTmlsKGNoaWxkcmVuKSA/IGNvbnRlbnQgOiBjaGlsZHJlbik7XG59XG5cbkRpbW1lckRpbW1hYmxlLmhhbmRsZWRQcm9wcyA9IFtcImFzXCIsIFwiYmx1cnJpbmdcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcImNvbnRlbnRcIiwgXCJkaW1tZWRcIl07XG5EaW1tZXJEaW1tYWJsZS5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKiBBbiBlbGVtZW50IHR5cGUgdG8gcmVuZGVyIGFzIChzdHJpbmcgb3IgZnVuY3Rpb24pLiAqL1xuICBhczogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKiBBIGRpbW1hYmxlIGVsZW1lbnQgY2FuIGJsdXIgaXRzIGNvbnRlbnRzLiAqL1xuICBibHVycmluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIFByaW1hcnkgY29udGVudC4gKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKiBBZGRpdGlvbmFsIGNsYXNzZXMuICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogU2hvcnRoYW5kIGZvciBwcmltYXJ5IGNvbnRlbnQuICovXG4gIGNvbnRlbnQ6IGN1c3RvbVByb3BUeXBlcy5jb250ZW50U2hvcnRoYW5kLFxuXG4gIC8qKiBDb250cm9scyB3aGV0aGVyIG9yIG5vdCB0aGUgZGltIGlzIGRpc3BsYXllZC4gKi9cbiAgZGltbWVkOiBQcm9wVHlwZXMuYm9vbFxufSA6IHt9O1xuZXhwb3J0IGRlZmF1bHQgRGltbWVyRGltbWFibGU7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBfaW52b2tlIGZyb20gXCJsb2Rhc2gtZXMvaW52b2tlXCI7XG5pbXBvcnQgeyBSZWYgfSBmcm9tICdAZmx1ZW50dWkvcmVhY3QtY29tcG9uZW50LXJlZic7XG5pbXBvcnQgY3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgY3JlYXRlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY2hpbGRyZW5VdGlscywgY3VzdG9tUHJvcFR5cGVzLCBkb2VzTm9kZUNvbnRhaW5DbGljaywgZ2V0RWxlbWVudFR5cGUsIGdldFVuaGFuZGxlZFByb3BzLCB1c2VLZXlPbmx5LCB1c2VWZXJ0aWNhbEFsaWduUHJvcCB9IGZyb20gJy4uLy4uL2xpYic7XG4vKipcbiAqIEFuIGlubmVyIGVsZW1lbnQgZm9yIGEgRGltbWVyLlxuICovXG5cbnZhciBEaW1tZXJJbm5lciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShEaW1tZXJJbm5lciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRGltbWVySW5uZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgX3RoaXMuY29udGFpbmVyUmVmID0gLyojX19QVVJFX18qL2NyZWF0ZVJlZigpO1xuICAgIF90aGlzLmNvbnRlbnRSZWYgPSAvKiNfX1BVUkVfXyovY3JlYXRlUmVmKCk7XG5cbiAgICBfdGhpcy5oYW5kbGVDbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgY29udGVudFJlZiA9IF90aGlzLmNvbnRlbnRSZWYuY3VycmVudDtcblxuICAgICAgX2ludm9rZShfdGhpcy5wcm9wcywgJ29uQ2xpY2snLCBlLCBfdGhpcy5wcm9wcyk7XG5cbiAgICAgIGlmIChjb250ZW50UmVmICYmIGNvbnRlbnRSZWYgIT09IGUudGFyZ2V0ICYmIGRvZXNOb2RlQ29udGFpbkNsaWNrKGNvbnRlbnRSZWYsIGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX2ludm9rZShfdGhpcy5wcm9wcywgJ29uQ2xpY2tPdXRzaWRlJywgZSwgX3RoaXMucHJvcHMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gRGltbWVySW5uZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBhY3RpdmUgPSB0aGlzLnByb3BzLmFjdGl2ZTtcbiAgICB0aGlzLnRvZ2dsZVN0eWxlcyhhY3RpdmUpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgdmFyIGN1cnJlbnRBY3RpdmUgPSB0aGlzLnByb3BzLmFjdGl2ZTtcbiAgICB2YXIgcHJldkFjdGl2ZSA9IHByZXZQcm9wcy5hY3RpdmU7XG4gICAgaWYgKHByZXZBY3RpdmUgIT09IGN1cnJlbnRBY3RpdmUpIHRoaXMudG9nZ2xlU3R5bGVzKGN1cnJlbnRBY3RpdmUpO1xuICB9O1xuXG4gIF9wcm90by50b2dnbGVTdHlsZXMgPSBmdW5jdGlvbiB0b2dnbGVTdHlsZXMoYWN0aXZlKSB7XG4gICAgdmFyIGNvbnRhaW5lclJlZiA9IHRoaXMuY29udGFpbmVyUmVmLmN1cnJlbnQ7XG4gICAgaWYgKCFjb250YWluZXJSZWYgfHwgIWNvbnRhaW5lclJlZi5zdHlsZSkgcmV0dXJuO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgY29udGFpbmVyUmVmLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2ZsZXgnLCAnaW1wb3J0YW50Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lclJlZi5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGFjdGl2ZSA9IF90aGlzJHByb3BzLmFjdGl2ZSxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb250ZW50ID0gX3RoaXMkcHJvcHMuY29udGVudCxcbiAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgaW52ZXJ0ZWQgPSBfdGhpcyRwcm9wcy5pbnZlcnRlZCxcbiAgICAgICAgcGFnZSA9IF90aGlzJHByb3BzLnBhZ2UsXG4gICAgICAgIHNpbXBsZSA9IF90aGlzJHByb3BzLnNpbXBsZSxcbiAgICAgICAgdmVydGljYWxBbGlnbiA9IF90aGlzJHByb3BzLnZlcnRpY2FsQWxpZ247XG4gICAgdmFyIGNsYXNzZXMgPSBjeCgndWknLCB1c2VLZXlPbmx5KGFjdGl2ZSwgJ2FjdGl2ZSB0cmFuc2l0aW9uIHZpc2libGUnKSwgdXNlS2V5T25seShkaXNhYmxlZCwgJ2Rpc2FibGVkJyksIHVzZUtleU9ubHkoaW52ZXJ0ZWQsICdpbnZlcnRlZCcpLCB1c2VLZXlPbmx5KHBhZ2UsICdwYWdlJyksIHVzZUtleU9ubHkoc2ltcGxlLCAnc2ltcGxlJyksIHVzZVZlcnRpY2FsQWxpZ25Qcm9wKHZlcnRpY2FsQWxpZ24pLCAnZGltbWVyJywgY2xhc3NOYW1lKTtcbiAgICB2YXIgcmVzdCA9IGdldFVuaGFuZGxlZFByb3BzKERpbW1lcklubmVyLCB0aGlzLnByb3BzKTtcbiAgICB2YXIgRWxlbWVudFR5cGUgPSBnZXRFbGVtZW50VHlwZShEaW1tZXJJbm5lciwgdGhpcy5wcm9wcyk7XG4gICAgdmFyIGNoaWxkcmVuQ29udGVudCA9IGNoaWxkcmVuVXRpbHMuaXNOaWwoY2hpbGRyZW4pID8gY29udGVudCA6IGNoaWxkcmVuO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWYsIHtcbiAgICAgIGlubmVyUmVmOiB0aGlzLmNvbnRhaW5lclJlZlxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEVsZW1lbnRUeXBlLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDbGlja1xuICAgIH0pLCBjaGlsZHJlbkNvbnRlbnQgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImNvbnRlbnRcIixcbiAgICAgIHJlZjogdGhpcy5jb250ZW50UmVmXG4gICAgfSwgY2hpbGRyZW5Db250ZW50KSkpO1xuICB9O1xuXG4gIHJldHVybiBEaW1tZXJJbm5lcjtcbn0oQ29tcG9uZW50KTtcblxuRGltbWVySW5uZXIuaGFuZGxlZFByb3BzID0gW1wiYWN0aXZlXCIsIFwiYXNcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcImNvbnRlbnRcIiwgXCJkaXNhYmxlZFwiLCBcImludmVydGVkXCIsIFwib25DbGlja1wiLCBcIm9uQ2xpY2tPdXRzaWRlXCIsIFwicGFnZVwiLCBcInNpbXBsZVwiLCBcInZlcnRpY2FsQWxpZ25cIl07XG5leHBvcnQgeyBEaW1tZXJJbm5lciBhcyBkZWZhdWx0IH07XG5EaW1tZXJJbm5lci5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKiBBbiBlbGVtZW50IHR5cGUgdG8gcmVuZGVyIGFzIChzdHJpbmcgb3IgZnVuY3Rpb24pLiAqL1xuICBhczogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKiBBbiBhY3RpdmUgZGltbWVyIHdpbGwgZGltIGl0cyBwYXJlbnQgY29udGFpbmVyLiAqL1xuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBQcmltYXJ5IGNvbnRlbnQuICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKiogQWRkaXRpb25hbCBjbGFzc2VzLiAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqIFNob3J0aGFuZCBmb3IgcHJpbWFyeSBjb250ZW50LiAqL1xuICBjb250ZW50OiBjdXN0b21Qcm9wVHlwZXMuY29udGVudFNob3J0aGFuZCxcblxuICAvKiogQSBkaXNhYmxlZCBkaW1tZXIgY2Fubm90IGJlIGFjdGl2YXRlZCAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiBjbGljay5cbiAgICpcbiAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnQgLSBSZWFjdCdzIG9yaWdpbmFsIFN5bnRoZXRpY0V2ZW50LlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIEFsbCBwcm9wcy5cbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGNsaWNrIG91dHNpZGUgRGltbWVyJ3MgY29udGVudCwgYnV0IGluc2lkZSBEaW1tZXIgYXJlYS5cbiAgICpcbiAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnQgLSBSZWFjdCdzIG9yaWdpbmFsIFN5bnRoZXRpY0V2ZW50LlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIEFsbCBwcm9wcy5cbiAgICovXG4gIG9uQ2xpY2tPdXRzaWRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKiogQSBkaW1tZXIgY2FuIGJlIGZvcm1hdHRlZCB0byBoYXZlIGl0cyBjb2xvcnMgaW52ZXJ0ZWQuICovXG4gIGludmVydGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQSBkaW1tZXIgY2FuIGJlIGZvcm1hdHRlZCB0byBiZSBmaXhlZCB0byB0aGUgcGFnZS4gKi9cbiAgcGFnZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEEgZGltbWVyIGNhbiBiZSBjb250cm9sbGVkIHdpdGggc2ltcGxlIHByb3AuICovXG4gIHNpbXBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEEgZGltbWVyIGNhbiBoYXZlIGl0cyBjb250ZW50IHRvcCBvciBib3R0b20gYWxpZ25lZC4gKi9cbiAgdmVydGljYWxBbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnYm90dG9tJywgJ3RvcCddKVxufSA6IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==