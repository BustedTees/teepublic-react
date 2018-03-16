import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from './ImageGallery';

it('ImageGallery renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageGallery />, div);
});
