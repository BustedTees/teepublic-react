import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Row from '../row/Row';
import DesignTile from '../design_tile/DesignTile';

import './DesignCollection.css';

const CLASS_ROOT = 'tp-design-collection';

export default class DesignCollection extends Component {
  handleDesignClick(designIndex) {
    const { designs, onDesignClick } = this.props;
    const clickedDesign = designs[designIndex];
    const clickedDesignSku =
      clickedDesign._embedded.defaultProduct._embedded.defaultSku;
    onDesignClick(clickedDesign, clickedDesignSku);
  }

  render() {
    const { className, designs, tileSize } = this.props;

    const classes = classnames(CLASS_ROOT, className);

    const designTiles = designs.map(function(design, designIndex) {
      return (
        <DesignTile
          key={designIndex}
          onClick={() => this.handleDesignClick(designIndex)}
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
  onDesignClick: PropTypes.func.isRequired
};

DesignCollection.defaultProps = {
  tileSize: 'large'
};
