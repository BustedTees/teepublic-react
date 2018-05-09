import React from 'react';
import ReactDOM from 'react-dom';
import StoreFilter from './StoreFilter';

it.skip('StoreFilter renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StoreFilter />, div);
});
