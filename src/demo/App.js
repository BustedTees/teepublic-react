import React, { Component } from 'react';
import {
  TeepublicPowered,
  DesignCollection,
  Cart,
  BuyProduct,
  CartButton,
  StoreFilter,
  Pagination,
  Store
} from '../index';

import store from './StoreData';
import design from './DesignData';
import skuData from './SkuData';
import { ROUTE_CONFIGURATION } from './RouteConfiguration';

import 'normalize.css';
import '../lib/components/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAlbumId: null,
      selectedProductTypeName: null
    };
  }

  albumChangeHandler = albumId => {
    this.setState({ selectedAlbumId: albumId });
  };

  productTypeChangeHandler = productTypeName => {
    this.setState({ selectedProductTypeName: productTypeName });
  };

  render() {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h3> --- Store (Start) --- </h3>
        <Store storeData={store} configuration={ROUTE_CONFIGURATION} />
        <h3> --- Store (End) --- </h3>
        <br />
        <br />

        <h3> --- Pagination (Start) --- </h3>
        <Pagination
          currentPage={1}
          totalPages={10}
          onPageChange={pgNum => {
            console.log(pgNum);
          }}
        />
        <h3> --- Pagination (End) --- </h3>
        <br />
        <br />

        <h3> --- Store Filters (Start) --- </h3>
        <StoreFilter
          albums={store._embedded.albums}
          productTypes={store._embedded.productTypes}
          onAlbumChange={this.albumChangeHandler}
          onProductTypeChange={this.productTypeChangeHandler}
          selectedAlbumId={this.state.selectedAlbumId}
          selectedProductTypeName={this.state.selectedProductTypeName}
        />
        <h3> --- Store Filters (End) --- </h3>
        <br />
        <br />

        <h3> --- Cart Button (Start) --- </h3>
        <CartButton href="/cart" />
        <h3> --- Cart Button (End) --- </h3>
        <br />
        <br />

        <h2>- Cart -</h2>
        <Cart
          onCheckout={cartItems => console.log(cartItems)}
          storePathLinkBuilder={ROUTE_CONFIGURATION.storeUrl}
          buyProductLinkBuilder={ROUTE_CONFIGURATION.buyProductUrl}
        />

        <h2>- BuyProduct -</h2>
        <BuyProduct
          design={design}
          skuData={skuData}
          store={store}
          storeUrl={storeId => {
            return `/stores/${storeId}`;
          }}
          buyProductLinkBuilder={ROUTE_CONFIGURATION.buyProductUrl}
          tagLinkBuilder={(type, tag) => {
            var baseUrl = 'https://www.teepublic.com';
            return `${baseUrl}/${type}/${tag}`;
          }}
        />

        <h3> --- DesignCollection Component (Start) --- </h3>
        <DesignCollection
          tileSize="large"
          designs={store._embedded.designs}
          buyProductLinkBuilder={ROUTE_CONFIGURATION.buyProductUrl}
          storeId={1}
        />
        <h3> --- DesignCollection Component (End) --- </h3>
        <TeepublicPowered layout="column" />
      </div>
    );
  }
}
