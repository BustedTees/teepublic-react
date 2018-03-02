var _jsxFileName = 'src/lib/components/row/Row.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Row.css';

var CLASS_ROOT = 'tp-row';

var Row = function (_Component) {
  _inherits(Row, _Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  _createClass(Row, [{
    key: 'render',
    value: function render() {
      var _classnames,
          _this2 = this;

      var _props = this.props,
          className = _props.className,
          justify = _props.justify,
          align = _props.align,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['className', 'justify', 'align', 'children']);

      var classes = classnames(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--justify-' + justify, justify), _defineProperty(_classnames, CLASS_ROOT + '--align-' + align, align), _classnames), className);

      return React.createElement(
        'div',
        Object.assign({ ref: function ref(_ref) {
            return _this2.rowRef = _ref;
          } }, props, { className: classes, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }),
        children
      );
    }
  }]);

  return Row;
}(Component);

export default Row;


Row.propTypes = {
  justify: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'evenly']),
  align: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch'])
};

Row.defaultProps = {
  justify: 'start',
  align: 'start'
};