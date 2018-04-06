import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';

import DesignCollection from '../design_collection/DesignCollection';
import CartButton from '../cart_button/CartButton';
import Pagination from '../pagination/Pagination';
import StoreFilter from '../store_filter/StoreFilter';

import './Store.css';

const CLASS_ROOT = 'tp-store';

export default class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: props.page || 1,
      albumId: parseInt(props.albumId, 10),
      productTypeName: props.productTypeName
    };
  }

  pageChangeHandler = page => {
    this.setState({ page: page });
    const { albumId, productTypeName } = this.state;
    this.fetchStore(page, albumId, productTypeName);
  };

  albumChangeHandler = albumId => {
    this.setState({ albumId: albumId });
    const { page, productTypeName } = this.state;
    this.fetchStore(page, albumId, productTypeName);
  };

  productTypeChangeHandler = productTypeName => {
    this.setState({ productTypeName: productTypeName });
    const { page, albumId } = this.state;
    this.fetchStore(page, albumId, productTypeName);
  };

  fetchStore = (page, albumId, productTypeName) => {
    const { storeUrl } = this.props.configuration.storeUrl;

    let url = `${storeUrl}?page=${page}`;
    if (albumId) url += `&album_id=${albumId}`;
    if (productTypeName) url += `&product_type=${productTypeName}`;

    window.location = url;
  };

  render() {
    const { designs, albums, productTypes } = this.props.storeData._embedded;
    const { page, albumId, productTypeName } = this.state;
    const totalPages = parseInt(this.props.storeData.totalPages, 10);

    const { className } = this.props;
    const classes = classnames(className, CLASS_ROOT);

    return (
      <div className={classes}>
        <CartButton href={this.props.configuration.cartUrl} />

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={this.pageChangeHandler}
        />

        <StoreFilter
          albums={albums}
          productTypes={productTypes}
          onAlbumChange={this.albumChangeHandler}
          onProductTypeChange={this.productTypeChangeHandler}
          selectedAlbumId={albumId}
          selectedProductTypeName={productTypeName}
        />

        <DesignCollection
          designs={designs}
          tileSize="large"
          buyProductLinkBuilder={this.props.buyProductLinkBuilder}
        />
      </div>
    );
  }
}

Store.propTypes = {
  buyProductLinkBuilder: PropTypes.func.isRequired,
  storeData: PropTypes.object.isRequired,
  configuration: PropTypes.shape({
    storeUrl: PropTypes.string.isRequired,
    cartUrl: PropTypes.string.isRequired
  }).isRequired,
  albumId: PropTypes.number,
  page: PropTypes.number,
  productTypeName: PropTypes.string
};
