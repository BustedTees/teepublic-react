import React from 'react';
import ReactDOM from 'react-dom';
import SkuSelector from './SkuSelector';

it.skip('SkuSelector renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkuSelector />, div);
});
