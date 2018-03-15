import React from 'react';
import TeepublicPowered from '../lib/components/teepublic_powered/TeepublicPowered';
import DesignCollection from '../lib/components/design_collection/DesignCollection';
import BuyProduct from '../lib/components/buy_product/BuyProduct';
import Column from '../lib/components/column/Column';
import Button from '../lib/components/button/Button';
import AddToCart from '../lib/components/add_to_cart/AddToCart';
import Cart from '../lib/components/cart/Cart';
import designs from './DesignsData';
import design from './DesignData';
import designMarcello from './DesignDataMarcello';

const App = () => {
  const firstDesign = designs[0].design;
  console.log(designMarcello);
  return (
    <Column align="center">
      <AddToCart
        design={designMarcello}
        product={designMarcello.defaultProduct}
      />
      <Cart />
      <BuyProduct design={design} selectedCanvas={firstDesign.canvases[0]} />
      <DesignCollection tileSize="large" designs={designs} />
      <TeepublicPowered layout="column" />
    </Column>
  );
};

export default App;
