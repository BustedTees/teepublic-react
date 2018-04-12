import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FilterHelper from '../../utils/FilterHelper';

import './StoreFilter.scss';

const CLASS_ROOT = 'tp-store-filter';
const filterHelper = new FilterHelper();

export default class StoreFilter extends Component {
  render() {
    const {
      className,
      albums,
      productTypes,
      selectedAlbumId,
      selectedProductTypeName,
      onAlbumChange,
      onProductTypeChange,
      filterStyle
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

    const albumNavs = albums.map((album, index) => (
      <li key={index} className={`${CLASS_ROOT}__nav-item`}>
        {album.name}
      </li>
    ));

    const productNavs = (function() {
      let navs = filterHelper.groupProducts(productTypes);
      let groups = Object.keys(navs);

      return groups.map(group => (
        <div key={group} className={`${CLASS_ROOT}__nav-group-wrap`}>
          <h3 className={`${CLASS_ROOT}__nav-group-h`}>{group}</h3>
          <ul className={`${CLASS_ROOT}__nav-group`}>
            {navs[group].map((productType, index) => {
              return (
                <li key={index} className={`${CLASS_ROOT}__nav-item`}>
                  {productType.displayName}
                </li>
              );
            })}
          </ul>
        </div>
      ));
    })();

    const filterDropdown = (
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

    const filterNav = (
      <nav className={`${CLASS_ROOT}__nav`}>
        <h2 className={`${CLASS_ROOT}__nav-h`}>Albums:</h2>
        <div className={`${CLASS_ROOT}__nav-group-wrap`}>
          <ul className={`${CLASS_ROOT}__nav-albums ${CLASS_ROOT}__nav-group`}>
            {albumNavs}
          </ul>
        </div>

        <div className={`${CLASS_ROOT}__nav-products`}>
          <h2 className={`${CLASS_ROOT}__nav-h`}>Filter by product:</h2>
          {productNavs}
        </div>
      </nav>
    );

    if (filterStyle === 'nav') {
      return filterNav;
    } else return filterDropdown;
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
