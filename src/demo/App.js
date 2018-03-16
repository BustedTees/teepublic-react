import React from 'react';
import TeepublicPowered from '../lib/components/teepublic_powered/TeepublicPowered';
import DesignCollection from '../lib/components/design_collection/DesignCollection';
import BuyProduct from '../lib/components/buy_product/BuyProduct';
import Column from '../lib/components/column/Column';
import Cart from '../lib/components/cart/Cart';
import store from './StoreData';
import design from './DesignData';

const App = () => {
  return (
    <Column align="center">
      <h3> --- Cart Component (Start) --- </h3>
      <Cart />
      <h3> --- Cart Component (End) --- </h3>
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
