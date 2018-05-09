import React from 'react';
import ReactDOM from 'react-dom';
import ProductVariants from './ProductVariants';

it.skip('ProductVariants renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RelatedTags />, div);
});
