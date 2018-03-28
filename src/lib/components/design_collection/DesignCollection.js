import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Row from '../row/Row';
import DesignTile from '../design_tile/DesignTile';

import './DesignCollection.css';

const CLASS_ROOT = 'tp-design-collection';

export default class DesignCollection extends Component {
  render() {
    const { className, designs, tileSize, buyProductLinkLBuilder } = this.props;

    const classes = classnames(CLASS_ROOT, className);

    const designTiles = designs.map(function(design, designIndex) {
      return (
        <DesignTile
          key={designIndex}
          buyProductLinkLBuilder={buyProductLinkLBuilder}
          size={tileSize}
          design={design}
        />
      );
    }, this);

    return (
      <Row className={classes} justify="around" align="start">
        {designTiles}
      </Row>
    );
  }
}

DesignCollection.propTypes = {
  tileSize: PropTypes.oneOf(['small', 'medium', 'large']),
  designs: PropTypes.array.isRequired,
  buyProductLinkLBuilder: PropTypes.func.isRequired
};

DesignCollection.defaultProps = {
  tileSize: 'large'
};
