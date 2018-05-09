import React from 'react';
import ReactDOM from 'react-dom';
import RelatedTags from './RelatedTags';

it.skip('RelatedTags renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RelatedTags />, div);
});
