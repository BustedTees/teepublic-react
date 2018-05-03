import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';

import DesignCollection from '../design_collection/DesignCollection';
import CartButton from '../cart_button/CartButton';
import Pagination from '../pagination/Pagination';
import StoreFilter from '../store_filter/StoreFilter';

import './Store.scss';

const CLASS_ROOT = 'tp-store';

export default class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPage: props.selectedPage || 1,
      selectedAlbumId: parseInt(props.selectedAlbumId, 10) || null,
      selectedProductTypeName: props.selectedProductTypeName
    };
  }

  pageChangeHandler = page => {
    this.setState({ selectedPage: page });
    const { selectedAlbumId, selectedProductTypeName } = this.state;
    this.fetchStore(page, selectedAlbumId, selectedProductTypeName);
  };

  albumChangeHandler = albumId => {
    this.setState({ selectedAlbumId: albumId });
    const { selectedPage, selectedProductTypeName } = this.state;
    this.fetchStore(selectedPage, albumId, selectedProductTypeName);
  };

  productTypeChangeHandler = productTypeName => {
    this.setState({ selectedProductTypeName: productTypeName });
    const { selectedPage, selectedAlbumId } = this.state;
    this.fetchStore(selectedPage, selectedAlbumId, productTypeName);
  };

  fetchStore = (pageNum, albumId, productTypeName) => {
    const { id } = this.props.storeData;

    window.location = this.props.configuration.storeUrl(
      id,
      pageNum,
      albumId,
      productTypeName
    );
  };

  render() {
    const { designs, albums, productTypes } = this.props.storeData._embedded;
    const {
      selectedPage,
      selectedAlbumId,
      selectedProductTypeName
    } = this.state;
    const totalPages = parseInt(this.props.storeData.totalPages, 10);

    const { className } = this.props;
    const classes = classnames(className, CLASS_ROOT, 'teepublic');

    return (
      <div className={classes}>
        <CartButton
          cartUrl={this.props.configuration.cartUrl()}
          onCheckout={cartItems => console.log(cartItems)}
        />

        <StoreFilter
          albums={albums}
          productTypes={productTypes}
          onAlbumChange={this.albumChangeHandler}
          onProductTypeChange={this.productTypeChangeHandler}
          selectedAlbumId={selectedAlbumId}
          selectedProductTypeName={selectedProductTypeName}
        />

        <div className={`${CLASS_ROOT}__collection-wrap`}>
          <StoreFilter
            albums={albums}
            productTypes={productTypes}
            onAlbumChange={this.albumChangeHandler}
            onProductTypeChange={this.productTypeChangeHandler}
            selectedAlbumId={selectedAlbumId}
            selectedProductTypeName={selectedProductTypeName}
            filterStyle="nav"
          />

          <DesignCollection
            designs={designs}
            tileSize="large"
            buyProductLinkBuilder={this.props.configuration.buyProductUrl}
            storeId={this.props.storeData.id}
          />
        </div>

        <Pagination
          currentPage={selectedPage}
          totalPages={totalPages}
          onPageChange={this.pageChangeHandler}
        />
      </div>
    );
  }
}

Store.propTypes = {
  className: PropTypes.string,
  storeData: PropTypes.object.isRequired,
  configuration: PropTypes.shape({
    storeUrl: PropTypes.func.isRequired,
    cartUrl: PropTypes.func.isRequired,
    buyProductUrl: PropTypes.func.isRequired
  }).isRequired,
  selectedAlbumId: PropTypes.number,
  selectedPage: PropTypes.number,
  selectedProductTypeName: PropTypes.string
};
