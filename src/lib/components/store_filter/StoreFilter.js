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

    const classes = classnames(className, CLASS_ROOT, 'teepublic');

    const productTypeOptions = productTypes.map((productType, index) => (
      <option key={index} name="product-types" value={productType.name}>
        {productType.displayName}
      </option>
    ));

    const albumOptions = albums.map((album, index) => (
      <option key={index} name="albums" value={album.id}>
        {album.name}
      </option>
    ));

    const filterDropdown = (
      <div className={classes}>
        <div className={`${CLASS_ROOT}__dropdown-wrap`}>
          <select
            className={`${CLASS_ROOT}__dropdown`}
            onChange={event => {
              onAlbumChange(parseInt(event.target.value, 10));
            }}
            value={selectedAlbumId || ''}
          >
            <option value="">Filter by album</option>
            {albumOptions}
          </select>
        </div>

        <div className={`${CLASS_ROOT}__dropdown-wrap`}>
          <select
            className={`${CLASS_ROOT}__dropdown`}
            onChange={event => {
              onProductTypeChange(event.target.value);
            }}
            value={selectedProductTypeName}
          >
            <option value={''}>Filter by product</option>
            {productTypeOptions}
          </select>
        </div>
      </div>
    );

    const albumNavs = albums.map(function(album, index) {
      const classes = classnames(`${CLASS_ROOT}__nav-item`, {
        active: album.id === selectedAlbumId
      });

      return (
        <li
          key={album.id}
          className={classes}
          onClick={event => {
            onAlbumChange(Number(album.id));
          }}
        >
          {album.name}
        </li>
      );
    });

    const productNavs = (function() {
      const navs = filterHelper.groupProducts(productTypes);
      const groups = Object.keys(navs);

      return groups.map(group => (
        <div key={group} className={`${CLASS_ROOT}__nav-group-wrap`}>
          <h3 className={`${CLASS_ROOT}__nav-group-h`}>{group}</h3>
          <ul className={`${CLASS_ROOT}__nav-group`}>
            {navs[group].map(function(productType, index) {
              const classes = classnames(`${CLASS_ROOT}__nav-item`, {
                active:
                  productType.displayName.toLowerCase() ===
                  selectedProductTypeName.toLowerCase()
              });

              return (
                <li
                  key={index}
                  className={classes}
                  onClick={event => {
                    onProductTypeChange(productType.displayName);
                  }}
                >
                  {productType.displayName}
                </li>
              );
            })}
          </ul>
        </div>
      ));
    })();

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
  className: PropTypes.string,
  albums: PropTypes.array.isRequired,
  productTypes: PropTypes.array.isRequired,
  selectedAlbumId: PropTypes.number,
  selectedProductTypeName: PropTypes.string,
  onAlbumChange: PropTypes.func.isRequired,
  onProductTypeChange: PropTypes.func.isRequired,
  filterStyle: PropTypes.oneOf(['nav', 'dropdown'])
};

StoreFilter.defaultProps = {
  albums: [],
  productTypes: [],
  filterStyle: 'dropdown'
};
