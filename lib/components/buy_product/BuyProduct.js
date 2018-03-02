var _jsxFileName = 'src/lib/components/buy_product/BuyProduct.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Row from '../row/Row';
import Button from '../button/Button';
import Column from '../column/Column';
import ImageZoom from '../image_zoom/ImageZoom';
import MoneyHelper from '../../utils/MoneyHelper';

import './BuyProduct.css';

var CLASS_ROOT = 'tp-buy-product';

var BuyProduct = function (_Component) {
  _inherits(BuyProduct, _Component);

  function BuyProduct(props) {
    _classCallCheck(this, BuyProduct);

    var _this = _possibleConstructorReturn(this, (BuyProduct.__proto__ || Object.getPrototypeOf(BuyProduct)).call(this, props));

    _this.state = {
      selectedCanvas: props.selectedCanvas,
      selectedImageUrl: props.selectedCanvas.mockup_url
    };
    return _this;
  }

  _createClass(BuyProduct, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          design = _props.design,
          props = _objectWithoutProperties(_props, ['className', 'design']);

      var _state = this.state,
          selectedCanvas = _state.selectedCanvas,
          selectedImageUrl = _state.selectedImageUrl;

      var canvases = design.canvases;

      var classes = classnames(CLASS_ROOT, className);

      var previewImages = React.createElement(
        Row,
        { justify: 'start', align: 'center', __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        },
        React.createElement('img', {
          onClick: function onClick() {
            _this2.setState({ selectedImageUrl: selectedCanvas.mockup_url });
          },
          src: selectedCanvas.mockup_url,
          alt: 'Canvas Image',
          height: 100,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }),
        React.createElement('img', {
          onClick: function onClick() {
            _this2.setState({ selectedImageUrl: design.image_url });
          },
          src: design.image_url,
          alt: 'Design Image',
          height: 100,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        })
      );

      var selectedImage = React.createElement('img', {
        className: CLASS_ROOT + '__selected-image',
        src: selectedImageUrl,
        alt: 'Selected Image',
        height: 600,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      });
      var designTitle = React.createElement(
        'h2',
        { className: CLASS_ROOT + '__title', __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        },
        design.title + ' ' + selectedCanvas.name
      );
      var designPrice = React.createElement(
        'h2',
        { className: CLASS_ROOT + '__price', __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        },
        new MoneyHelper(selectedCanvas.prices.regular_price, 'USD').commaSeprated()
      );
      var cartButton = React.createElement(
        Button,
        { style: 'fill', size: 'medium', __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        },
        'Add to Cart'
      );

      return React.createElement(
        Row,
        { className: classes, justify: 'center', align: 'start', __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        },
        React.createElement(
          Column,
          {
            className: CLASS_ROOT + '__images',
            justify: 'start',
            align: 'start',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          },
          selectedImage,
          previewImages
        ),
        React.createElement(
          Column,
          {
            className: CLASS_ROOT + '__options',
            justify: 'start',
            align: 'start',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          },
          designTitle,
          designPrice,
          cartButton
        )
      );
    }
  }]);

  return BuyProduct;
}(Component);

export default BuyProduct;


BuyProduct.propTypes = {
  canvasSlug: PropTypes.string,
  designSlug: PropTypes.string
};

BuyProduct.defaultProps = {
  canvasSlug: 't-shirt'
};