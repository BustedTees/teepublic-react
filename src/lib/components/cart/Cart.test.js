import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './Cart';

it.skip('Cart renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cart />, div);
});
