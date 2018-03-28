import React from 'react';
import {
  TeepublicPowered,
  DesignCollection,
  Cart,
  BuyProduct,
  CartButton
} from '../index';
import Column from '../lib/components/column/Column';
import store from './StoreData';
import design from './DesignData';
import skuData from './SkuData';

import BackToProducts from '../lib/components/back_to_products/BackToProducts';

const App = () => {
  return (
    <Column align="center">
      <h3> --- Cart Button (Start) --- </h3>
      <CartButton
        onClick={event => console.log('Render Cart Component on this click')}
      />
      <h3> --- Cart Button (End) --- </h3>
      <br />
      <br />
      <h3> --- Cart Component (Start) --- </h3>
      <Cart onCheckout={cartItems => console.log(cartItems)} />
      <h3> --- Cart Component (End) --- </h3>
      <br />
      <br />

      <h3> --- BuyProduct Component (Start) --- </h3>
      <BuyProduct design={design} skuData={skuData} store={store} />
      <h3> --- BuyProduct Component (End) --- </h3>
      <br />
      <br />

      <h3> --- DesignCollection Component (Start) --- </h3>
      <DesignCollection
        tileSize="large"
        designs={store._embedded.designs}
        onDesignClick={(design, sku) => console.log(design, sku)}
      />
      <h3> --- DesignCollection Component (End) --- </h3>
      <TeepublicPowered layout="column" />
    </Column>
  );
};

export default App;
