"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _react = require("react");

var UseModal = function UseModal() {
  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isShowing = _useState2[0],
      setIsShowing = _useState2[1];

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing: isShowing,
    toggle: toggle
  };
};

var _default = UseModal;
exports.default = _default;