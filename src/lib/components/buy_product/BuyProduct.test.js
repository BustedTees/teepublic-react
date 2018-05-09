import React from 'react';
import ReactDOM from 'react-dom';
import BuyProduct from './BuyProduct';

it.skip('BuyProduct renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BuyProduct />, div);
});
