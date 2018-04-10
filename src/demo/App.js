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
        <h2>- Store -</h2>
        <Store storeData={store} configuration={ROUTE_CONFIGURATION} />
        <br />
        <br />

        <h2>- Pagination -</h2>
        <Pagination
          currentPage={1}
          totalPages={10}
          onPageChange={pgNum => {
            console.log(pgNum);
          }}
        />
        <br />
        <br />

        <h2>- BuyProduct -</h2>
        <BuyProduct
          design={design}
          skuData={skuData}
          store={store}
          storeUrl={storeId => {
            return `/stores/${storeId}`;
          }}
          buyProductLinkBuilder={ROUTE_CONFIGURATION.buyProductUrl}
          tagLinkBuilder={(type, tag, affiliateId, affiliateNetworkId) => {
            var baseUrl = 'https://www.teepublic.com';
            return `${baseUrl}/${type}/${tag}?ref_id=${affiliateId}&aff_network_id=${affiliateNetworkId}`;
          }}
        />
        <br />
        <br />

        <h2>- Cart Button -</h2>
        <CartButton href="/cart" />
        <br />
        <br />

        <h2>- Cart -</h2>
        <Cart
          onCheckout={cartItems => console.log(cartItems)}
          storePathLinkBuilder={ROUTE_CONFIGURATION.storeUrl}
          buyProductLinkBuilder={ROUTE_CONFIGURATION.buyProductUrl}
        />

        <h2>-TeePublicPowered -</h2>
        <TeepublicPowered layout="column" />
      </div>
    );
  }
}
