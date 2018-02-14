import React from 'react';
import ReactDOM from 'react-dom';
import TeepublicPowered from './TeepublicPowered';

it('TeepublicPowered renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TeepublicPowered />, div);
});
