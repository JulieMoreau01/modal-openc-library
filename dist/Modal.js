"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _ModalModule = _interopRequireDefault(require("./Modal.module.css"));

var _excluded = ["isShowing", "hide", "title"];

var Modal = function Modal(_ref) {
  var isShowing = _ref.isShowing,
      hide = _ref.hide,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return isShowing ? /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: _ModalModule.default.modalOverlay
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _ModalModule.default.modalWrapper
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _ModalModule.default.modal
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _ModalModule.default.modalHeader
  }, /*#__PURE__*/_react.default.createElement("h4", null, title), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: _ModalModule.default.modalCloseButton,
    onClick: hide
  }, /*#__PURE__*/_react.default.createElement("span", null, "\xD7"))), /*#__PURE__*/_react.default.createElement("div", {
    className: _ModalModule.default.modalBody
  }, props.children))))), document.body) : null;
};

var _default = Modal;
exports.default = _default;