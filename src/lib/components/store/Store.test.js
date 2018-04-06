import React from 'react';
import ReactDOM from 'react-dom';
import Store from './Store';

import { ROUTE_CONFIGURATION } from '../../../demo/RouteConfiguration';
import store from '../../../demo/StoreData';

it('Store renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Store
      storeData={store}
      buyProductLinkBuilder={() => {
        '';
      }}
      configuration={ROUTE_CONFIGURATION}
    />,
    div
  );
});
