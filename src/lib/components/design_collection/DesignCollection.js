import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import DesignTile from '../design_tile/DesignTile';

import './DesignCollection.css';

const CLASS_ROOT = 'tp-design-collection';

export default class DesignCollection extends Component {
  render() {
    const { className, designs, tileSize, buyProductLinkBuilder } = this.props;

    const classes = classnames(CLASS_ROOT, className);

    const designTiles = designs.map(function(design, designIndex) {
      return (
        <DesignTile
          key={designIndex}
          buyProductLinkBuilder={buyProductLinkBuilder}
          design={design}
        />
      );
    }, this);

    return <div className={classes}>{designTiles}</div>;
  }
}

DesignCollection.propTypes = {
  tileSize: PropTypes.oneOf(['small', 'medium', 'large']),
  designs: PropTypes.array.isRequired,
  buyProductLinkBuilder: PropTypes.func.isRequired
};

DesignCollection.defaultProps = {
  tileSize: 'large'
};
