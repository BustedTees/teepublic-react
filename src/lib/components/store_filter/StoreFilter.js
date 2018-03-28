import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Row from '../row/Row';
import Column from '../column/Column';

import './StoreFilter.css';

const CLASS_ROOT = 'tp-store-filter';

export default class StoreFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProductIndex: null,
      selectedAlbumIndex: null
    };
  }

  render() {
    const {
      className,
      albums,
      productTypes,
      collectionLinkBuilder
    } = this.props;
    const { selectedProductIndex, selectedAlbumIndex } = this.state;
    const classes = classnames(className, CLASS_ROOT);

    const productTypeRadios = productTypes.map((productType, index) => (
      <div key={index}>
        <input
          type="radio"
          name="product-types"
          value={index}
          checked={index === selectedProductIndex}
        />
        <label>{productType.displayName}</label>
      </div>
    ));

    const albumRadios = albums.map((album, index) => (
      <div key={index}>
        <input
          type="radio"
          name="albums"
          value={index}
          checked={index === selectedAlbumIndex}
        />
        <label>{album.name}</label>
      </div>
    ));

    return (
      <Column>
        <h4> Albums </h4>
        <Column
          onChange={event => {
            this.setState({
              selectedAlbumIndex: parseInt(event.target.value, 10)
            });
          }}
        >
          {albumRadios}
        </Column>
        <h4> Products </h4>
        <Column
          onChange={event => {
            this.setState({
              selectedProductIndex: parseInt(event.target.value, 10)
            });
          }}
        >
          {productTypeRadios}
        </Column>
      </Column>
    );
  }
}

StoreFilter.propTypes = {
  albums: PropTypes.array.isRequired,
  productTypes: PropTypes.array.isRequired
};

StoreFilter.defaultProps = {
  albums: [],
  productTypes: []
};
