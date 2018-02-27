import React from 'react';
import ReactDOM from 'react-dom';
import DesignCollection from './DesignCollection';

it('DesignCollection renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DesignCollection />, div);
});
