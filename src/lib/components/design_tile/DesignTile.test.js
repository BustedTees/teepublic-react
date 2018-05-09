import React from 'react';
import ReactDOM from 'react-dom';
import DesignTile from './DesignTile';

it.skip('DesignTile renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DesignTile />, div);
});
