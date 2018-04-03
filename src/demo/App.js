import React, { Component } from 'react';
import {
  TeepublicPowered,
  DesignCollection,
  Cart,
  BuyProduct,
  CartButton,
  StoreFilter
} from '../index';
import Column from '../lib/components/column/Column';
import store from './StoreData';
import design from './DesignData';
import skuData from './SkuData';

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
      <Column align="center">
        <h3> --- Store Filters (Start) --- </h3>
        <StoreFilter
          albums={store._embedded.albums}
          productTypes={store._embedded.productTypes}
          albumChangeHandler={this.albumChangeHandler}
          productTypeChangeHandler={this.productTypeChangeHandler}
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
        <h3> --- Cart Component (Start) --- </h3>
        <Cart onCheckout={cartItems => console.log(cartItems)} />
        <h3> --- Cart Component (End) --- </h3>
        <br />
        <br />

        <h3> --- BuyProduct Component (Start) --- </h3>
        <BuyProduct
          design={design}
          skuData={skuData}
          store={store}
          buyProductLinkBuilder={(designId, productType) => {
            return `/store/${productType}/${designId}`;
          }}
        />
        <h3> --- BuyProduct Component (End) --- </h3>
        <br />
        <br />

        <h3> --- DesignCollection Component (Start) --- </h3>
        <DesignCollection
          tileSize="large"
          designs={store._embedded.designs}
          buyProductLinkBuilder={(designId, productType) => {
            return `/store/${productType}/${designId}`;
          }}
        />
        <h3> --- DesignCollection Component (End) --- </h3>
        <TeepublicPowered layout="column" />
      </Column>
    );
  }
}
