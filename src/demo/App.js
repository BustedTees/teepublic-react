import React from 'react';
import TeepublicPowered from '../lib/components/teepublic_powered/TeepublicPowered';
import DesignCollection from '../lib/components/design_collection/DesignCollection';
import BuyProduct from '../lib/components/buy_product/BuyProduct';
import Row from '../lib/components/row/Row';
import Button from '../lib/components/button/Button';
import designs from './DesignsData';

const App = () => {
  const design = designs[0].design;
  return (
    <div>
      {console.log(design)}
      <BuyProduct design={design} selectedCanvas={design.canvases[0]} />
      <DesignCollection tileSize="large" designs={designs} />
      <TeepublicPowered layout="row" />
    </div>
  );
};

export default App;
