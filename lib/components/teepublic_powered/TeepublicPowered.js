var _jsxFileName = 'src/lib/components/teepublic_powered/TeepublicPowered.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import tpLogo from '../tp-logo.png';

import Row from '../row/Row';
import Column from '../column/Column';

import './TeepublicPowered.css';

var CLASS_ROOT = 'tp-powered';

var TeepublicPowered = function (_Component) {
  _inherits(TeepublicPowered, _Component);

  function TeepublicPowered() {
    _classCallCheck(this, TeepublicPowered);

    return _possibleConstructorReturn(this, (TeepublicPowered.__proto__ || Object.getPrototypeOf(TeepublicPowered)).apply(this, arguments));
  }

  _createClass(TeepublicPowered, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          layout = _props.layout,
          props = _objectWithoutProperties(_props, ['className', 'layout']);

      var classes = classnames(CLASS_ROOT, className);

      var text = React.createElement(
        'p',
        { className: CLASS_ROOT + '__text', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        },
        'Powered By '
      );
      var logo = React.createElement(
        'a',
        {
          className: CLASS_ROOT + '__logo',
          href: 'https://www.teepublic.com',
          target: '_blank',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        },
        React.createElement('img', { src: tpLogo, alt: 'TeePubic logo', height: '15', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        })
      );
      var content = React.createElement(
        Row,
        { justify: 'center', align: 'center', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        },
        text,
        logo
      );

      if (layout == 'column') {
        content = React.createElement(
          Column,
          { justify: 'center', align: 'center', __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          },
          text,
          logo
        );
      }
      return content;
    }
  }]);

  return TeepublicPowered;
}(Component);

export default TeepublicPowered;


TeepublicPowered.propTypes = {
  layout: PropTypes.oneOf(['row', 'column'])
};

TeepublicPowered.defaultProps = {
  layout: 'row'
};