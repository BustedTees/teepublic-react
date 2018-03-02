var _jsxFileName = 'src/lib/components/design_tile/DesignTile.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
import MoneyHelper from '../../utils/MoneyHelper';

import './DesignTile.css';

var CLASS_ROOT = 'tp-design-tile';

var DESIGN_IMAGE = {
  small: 200,
  medium: 300,
  large: 400
};

var AVATAR_IMAGE = {
  small: 26,
  medium: 40,
  large: 53
};

var DesignTile = function (_Component) {
  _inherits(DesignTile, _Component);

  function DesignTile() {
    _classCallCheck(this, DesignTile);

    return _possibleConstructorReturn(this, (DesignTile.__proto__ || Object.getPrototypeOf(DesignTile)).apply(this, arguments));
  }

  _createClass(DesignTile, [{
    key: 'randomCanvas',
    value: function randomCanvas(canvases) {
      var rand_canvas = Math.floor(Math.random() * (canvases.length - 1)) + 1;
      return canvases[rand_canvas];
    }
  }, {
    key: 'findCanvas',
    value: function findCanvas(canvases, canvas_slug) {
      canvases.forEach(function (canvas) {
        if (canvas.slug == canvas_slug) {
          return canvas;
        }
      });
      return this.randomCanvas(canvases);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          design = _props.design,
          designer = _props.designer,
          size = _props.size,
          props = _objectWithoutProperties(_props, ['className', 'design', 'designer', 'size']);

      var classes = classnames(CLASS_ROOT, _defineProperty({}, CLASS_ROOT + '--' + size, size), className);

      var canvas = this.randomCanvas(design.canvases);
      var product_url = 'https://www.teepublic.com/' + canvas.slug + '/' + design.slug;

      // const designImage = <img className={`${CLASS_ROOT}__image`} src={design.image_url} alt="Design Image" height={DESIGN_IMAGE[size]}/>
      var designImage = React.createElement('img', {
        className: CLASS_ROOT + '__image',
        src: canvas.mockup_url,
        alt: 'Design Image',
        height: DESIGN_IMAGE[size],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      });
      var designTitle = React.createElement(
        'a',
        { className: CLASS_ROOT + '__title', href: product_url, target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        },
        design.title
      );
      var designPrice = React.createElement(
        'p',
        { className: CLASS_ROOT + '__price', __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        },
        new MoneyHelper(canvas.prices.regular_price, 'USD').commaSeprated()
      );
      var designerLocation = React.createElement(
        'p',
        { className: CLASS_ROOT + '__location', __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        },
        designer.location
      );
      var designerAvatar = React.createElement(
        'a',
        { href: designer.store_url, target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        },
        React.createElement('img', {
          className: CLASS_ROOT + '__avatar',
          src: designer.avatar_url,
          alt: 'Designer Avatar',
          height: AVATAR_IMAGE[size],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        })
      );
      var buyButton = React.createElement(
        Button,
        { style: 'fill', size: 'small', __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        },
        'Buy'
      );

      return React.createElement(
        'a',
        { className: classes, href: product_url, target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        },
        React.createElement(
          Column,
          { justify: 'start', align: 'center', __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            },
            __self: this
          },
          designImage,
          React.createElement(
            Row,
            {
              className: CLASS_ROOT + '__details',
              justify: 'between',
              align: 'start',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 99
              },
              __self: this
            },
            React.createElement(
              Column,
              { justify: 'start', align: 'start', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 104
                },
                __self: this
              },
              React.createElement(
                Row,
                { justify: 'start', align: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                  },
                  __self: this
                },
                designerAvatar,
                React.createElement(
                  Column,
                  {
                    className: CLASS_ROOT + '__title-location',
                    justify: 'start',
                    align: 'start',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 107
                    },
                    __self: this
                  },
                  designTitle,
                  designerLocation
                )
              )
            ),
            React.createElement(
              Column,
              { justify: 'start', align: 'end', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 117
                },
                __self: this
              },
              designPrice,
              buyButton
            )
          )
        )
      );
    }
  }]);

  return DesignTile;
}(Component);

export default DesignTile;


DesignTile.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

DesignTile.defaultProps = {
  size: 'large'
};