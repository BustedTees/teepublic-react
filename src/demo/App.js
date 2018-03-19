import React from 'react';
import { TeepublicPowered, DesignCollection, Cart, BuyProduct } from '../index';
import Column from '../lib/components/column/Column';
import store from './StoreData';
import design from './DesignData';
import BackToProducts from '../lib/components/back_to_products/BackToProducts';

const App = () => {
  return (
    <Column align="center">
      <h3> --- Cart Component (Start) --- </h3>
      <Cart />
      <h3> --- Cart Component (End) --- </h3>
      <br />
      <br />

      <h3> --- BackToProducts Component (Start) --- </h3>
      <BackToProducts storeUrl="/" linkText="Back to Products" />
      <h3> --- BackToProducts Component (End) --- </h3>
      <br />
      <br />

      <h3> --- BuyProduct Component (Start) --- </h3>
      <BuyProduct design={design} />
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
