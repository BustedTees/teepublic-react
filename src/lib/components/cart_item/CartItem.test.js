import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './CartItem';

it.skip('CartItem renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CartItem />, div);
});
