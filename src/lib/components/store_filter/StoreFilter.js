import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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

    const productTypeOptions = productTypes.map((productType, index) => (
      <option
        key={index}
        name="product-types"
        value={productType.name}
        defaultChecked={productType.name === selectedProductTypeName}
      >
        {productType.displayName}
      </option>
    ));

    const albumOptions = albums.map((album, index) => (
      <option
        key={index}
        name="albums"
        value={album.id}
        defaultChecked={album.id === selectedAlbumId}
      >
        {album.name}
      </option>
    ));

    return (
      <div className={classes}>
        <div className={`${CLASS_ROOT}__dropdown-wrap`}>
          <select
            className={`${CLASS_ROOT}__dropdown`}
            onChange={event => {
              onAlbumChange(parseInt(event.target.value, 10));
            }}
          >
            <option>Filter by album</option>
            {albumOptions}
          </select>
        </div>

        <div className={`${CLASS_ROOT}__dropdown-wrap`}>
          <select
            className={`${CLASS_ROOT}__dropdown`}
            onChange={event => {
              onProductTypeChange(event.target.value);
            }}
          >
            <option>Filter by product</option>
            {productTypeOptions}
          </select>
        </div>
      </div>
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
