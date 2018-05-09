import React from 'react';
import ReactDOM from 'react-dom';
import CartButton from './CartButton';

it.skip('CartButton renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CartButton />, div);
});
