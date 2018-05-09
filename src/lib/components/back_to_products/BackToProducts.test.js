import React from 'react';
import ReactDOM from 'react-dom';
import BackToProducts from './BackToProducts';

it.skip('BackToProducts renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BackToProducts />, div);
});
