import React, { Component } from 'react';
import {
  Footer,
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
import '../lib/components/App.scss';

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
      <div className="teepublic">
        <div className="contain">
          <h2>- Store -</h2>
        </div>
        <Store
          className="contain"
          storeData={store}
          configuration={ROUTE_CONFIGURATION}
        />
        <br />
        <br />

        <div className="contain">
          <h2>- Pagination -</h2>
        </div>
        <Pagination
          className="contain"
          currentPage={1}
          totalPages={10}
          onPageChange={pgNum => {
            console.log(pgNum);
          }}
        />
        <br />
        <br />

        <div className="contain">
          <h2>- BuyProduct -</h2>
        </div>

        <BuyProduct
          className="contain"
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
          sizechartUrl={ROUTE_CONFIGURATION.sizechartUrl()}
        />
        <br />
        <br />

        <div className="contain">
          <h2>- Cart -</h2>
        </div>

        <Cart
          className="contain"
          onCheckout={cartItems => console.log(cartItems)}
          storePathLinkBuilder={ROUTE_CONFIGURATION.storeUrl}
          buyProductLinkBuilder={ROUTE_CONFIGURATION.buyProductUrl}
        />

        <div className="contain">
          <h2>- Footer -</h2>
        </div>
        <Footer />
      </div>
    );
  }
}
