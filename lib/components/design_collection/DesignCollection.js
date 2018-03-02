var _jsxFileName = 'src/lib/components/design_collection/DesignCollection.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Row from '../row/Row';
import DesignTile from '../design_tile/DesignTile';

import './DesignCollection.css';

var CLASS_ROOT = 'tp-design-collection';

var DesignCollection = function (_Component) {
  _inherits(DesignCollection, _Component);

  function DesignCollection() {
    _classCallCheck(this, DesignCollection);

    return _possibleConstructorReturn(this, (DesignCollection.__proto__ || Object.getPrototypeOf(DesignCollection)).apply(this, arguments));
  }

  _createClass(DesignCollection, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          designs = _props.designs,
          tileSize = _props.tileSize,
          props = _objectWithoutProperties(_props, ['className', 'designs', 'tileSize']);

      var classes = classnames(CLASS_ROOT, className);

      var designTiles = designs.map(function (designTile, index) {
        return React.createElement(DesignTile, {
          size: tileSize,
          design: designTile.design,
          designer: designTile.designer,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        });
      }, this);

      return React.createElement(
        Row,
        { className: classes, justify: 'around', align: 'start', __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        },
        designTiles
      );
    }
  }]);

  return DesignCollection;
}(Component);

export default DesignCollection;


DesignCollection.propTypes = {
  tileSize: PropTypes.oneOf(['small', 'medium', 'large'])
};

DesignCollection.defaultProps = {
  tileSize: 'large'
};