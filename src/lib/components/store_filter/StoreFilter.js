import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Row from '../row/Row';
import Column from '../column/Column';

import './StoreFilter.css';

const CLASS_ROOT = 'tp-store-filter';

export default class StoreFilter extends Component {
  render() {
    const {
      className,
      albums,
      productTypes,
      selectedAlbumId,
      selectedProductTypeName,
      onAlbumChange,
      onProductTypeChange
    } = this.props;

    const classes = classnames(className, CLASS_ROOT);

    const productTypeRadios = productTypes.map((productType, index) => (
      <div key={index}>
        <input
          type="radio"
          name="product-types"
          value={productType.name}
          checked={productType.name === selectedProductTypeName}
        />
        <label>{productType.displayName}</label>
      </div>
    ));

    const albumRadios = albums.map((album, index) => (
      <div key={index}>
        <input
          type="radio"
          name="albums"
          value={album.id}
          checked={album.id === selectedAlbumId}
        />
        <label>{album.name}</label>
      </div>
    ));

    return (
      <Column>
        <h4> Albums </h4>
        <Column
          onChange={event => {
            onAlbumChange(parseInt(event.target.value, 10));
          }}
        >
          {albumRadios}
        </Column>
        <h4> Products </h4>
        <Column
          onChange={event => {
            onProductTypeChange(event.target.value);
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
  productTypes: PropTypes.array.isRequired,
  selectedAlbumId: PropTypes.number,
  selectedProductTypeName: PropTypes.string,
  onAlbumChange: PropTypes.func.isRequired,
  onProductTypeChange: PropTypes.func.isRequired
};

StoreFilter.defaultProps = {
  albums: [],
  productTypes: []
};
