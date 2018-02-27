import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Row from '../row/Row';
import DesignTile from '../design_tile/DesignTile';

import './DesignCollection.css';

const CLASS_ROOT = 'tp-design-collection';

export default class DesignCollection extends Component {
  render() {
    const { className, designs, tileSize, ...props } = this.props;

    const classes = classnames(CLASS_ROOT, className);

    const designTiles = designs.map(function(designTile, index) {
      return (
        <DesignTile
          size={tileSize}
          design={designTile.design}
          designer={designTile.designer}
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
  tileSize: PropTypes.oneOf(['small', 'medium', 'large'])
};

DesignCollection.defaultProps = {
  tileSize: 'large'
};
