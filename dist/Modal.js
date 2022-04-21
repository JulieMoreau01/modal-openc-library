"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _excluded = ["isShowing", "hide", "title"];

var Modal = function Modal(_ref) {
  var isShowing = _ref.isShowing,
      hide = _ref.hide,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return isShowing ? /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("h4", null, title), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "modal-close-button",
    onClick: hide
  }, /*#__PURE__*/_react.default.createElement("span", null, "\xD7"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, props.children)))), /*#__PURE__*/_react.default.createElement("style", {
    jsx: "true"
  }, "\n            .modal-overlay {\n              position: fixed;\n              top: 0;\n              left: 0;\n              width: 100vw;\n              height: 100vh;\n              z-index: 1040;\n              background-color: rgba(0, 0, 0, 0.5);\n            }\n\n            .modal-wrapper {\n              position: fixed;\n              top: 0;\n              left: 0;\n              z-index: 1050;\n              width: 100%;\n              height: 100%;\n              overflow-x: hidden;\n              overflow-y: auto;\n              outline: 0;\n              display: flex;\n              align-items: center;\n            }\n\n            .modal {\n              z-index: 100;\n              background: #fff;\n              position: relative;\n              margin: auto;\n              border-radius: 5px;\n              max-width: 500px;\n              width: 80%;\n              padding: 1rem;\n            }\n\n            .modal-header {\n              display: flex;\n              justify-content: space-between;\n              align-items: center;\n            }\n\n            .modal-close-button {\n              font-size: 1.4rem;\n              font-weight: 700;\n              color: #000;\n              cursor: pointer;\n              border: none;\n              background: transparent;\n            }\n          ")), document.body) : null;
};

var _default = Modal;
exports.default = _default;