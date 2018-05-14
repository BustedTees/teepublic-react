import React from 'react';
import ReactDOM from 'react-dom';
import Store from './Store';

import CartButton from '../cart_button/CartButton';
jest.mock('../cart_button/CartButton');

import StoreFilter from '../store_filter/StoreFilter';
jest.mock('../store_filter/StoreFilter');

import DesignCollection from '../design_collection/DesignCollection';
jest.mock('../design_collection/DesignCollection');

import Pagination from '../pagination/Pagination';
jest.mock('../pagination/Pagination');

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { ROUTE_CONFIGURATION } from '../../../demo/RouteConfiguration';
import store from '../../../demo/StoreData';

const setup = propOverrides => {
  const props = Object.assign(
    {
      storeData: store,
      configuration: {
        storeUrl: jest.fn(
          (storeId, selectedPage, selectedAlbumId, selectedProductTypeName) => {
            return '';
          }
        ),
        cartUrl: jest.fn(() => {
          return '/cart';
        }),
        buyProductUrl: jest.fn((designId, productTypeName, storeId) => {
          return ``;
        }),
        onCheckout: jest.fn(cartItems => {
          return '';
        })
      }
    },
    propOverrides
  );

  const component = <Store {...props} />;
  const wrapper = shallow(component);

  return { props, component, wrapper };
};
it('Store renders without crashing', () => {
  const { component } = setup({});
  const div = document.createElement('div');
  ReactDOM.render(component, div);
});

it('renders correctly', () => {
  const { component } = setup({});
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Test Pagination', () => {
  it('Check if Pagination is being called', () => {
    // Show that mockClear() is working:
    const { wrapper } = setup({ selectedPage: 1 });
    expect(wrapper.find(Pagination)).toHaveLength(1);
  });

  it('passes down the props correcty', () => {
    const { props, wrapper } = setup({ selectedPage: 1 });
    expect(wrapper.find(Pagination).prop('currentPage')).toBe(1);
    expect(wrapper.find(Pagination).prop('totalPages')).toBe(
      props.storeData.totalPages
    );
    expect(wrapper.find(Pagination).prop('onPageChange')).toBe(
      wrapper.instance().pageChangeHandler
    );
  });

  it('selectedPage is set in state from props', () => {
    const { props, wrapper } = setup({ selectedPage: 2 });
    expect(wrapper.instance().state.selectedPage).toBe(2);
  });

  it('pageChangeHandler handler works properly', () => {
    const { props, wrapper } = setup({ selectedPage: 2 });
    wrapper.instance().pageChangeHandler(3);
    expect(wrapper.instance().state.selectedPage).toBe(3);
    expect(props.configuration.storeUrl).toBeCalledWith(
      props.storeData.id,
      3,
      wrapper.instance().state.selectedAlbumId,
      wrapper.instance().state.selectedProductTypeName
    );
  });
});

describe('Test Store Filters', () => {
  it('Check if StoreFilter is being called', () => {
    const { wrapper } = setup({
      selectedAlbumId: 10,
      selectedProductTypeName: 'product'
    });
    expect(wrapper.find(StoreFilter)).toHaveLength(2);
  });

  it('passes down the props correcty', () => {
    const { props, wrapper } = setup({
      selectedAlbumId: 10,
      selectedProductTypeName: 'product'
    });
    for (var i = 0; i < 2; i++) {
      expect(
        wrapper
          .find(StoreFilter)
          .at(i)
          .prop('albums')
      ).toBe(props.storeData._embedded.albums);
      expect(
        wrapper
          .find(StoreFilter)
          .at(i)
          .prop('productTypes')
      ).toBe(props.storeData._embedded.productTypes);
      expect(
        wrapper
          .find(StoreFilter)
          .at(i)
          .prop('onAlbumChange')
      ).toBe(wrapper.instance().albumChangeHandler);
      expect(
        wrapper
          .find(StoreFilter)
          .at(i)
          .prop('onProductTypeChange')
      ).toBe(wrapper.instance().productTypeChangeHandler);
      expect(
        wrapper
          .find(StoreFilter)
          .at(i)
          .prop('selectedAlbumId')
      ).toBe(10);
      expect(
        wrapper
          .find(StoreFilter)
          .at(i)
          .prop('selectedProductTypeName')
      ).toBe('product');
    }
    expect(
      wrapper.find('.tp-store__collection-wrap StoreFilter').prop('filterStyle')
    ).toBe('nav');
  });

  it('selectedAlbumId and product is set in state from props', () => {
    const { wrapper } = setup({
      selectedAlbumId: 10,
      selectedProductTypeName: 'product'
    });
    expect(wrapper.instance().state.selectedAlbumId).toBe(10);
    expect(wrapper.instance().state.selectedProductTypeName).toBe('product');
  });

  it('albumChangeHandler handler works properly', () => {
    const { props, wrapper } = setup({ selectedAlbumId: 10 });
    wrapper.instance().albumChangeHandler(15);
    expect(wrapper.instance().state.selectedAlbumId).toBe(15);
    expect(props.configuration.storeUrl).toBeCalledWith(
      props.storeData.id,
      wrapper.instance().state.selectedPage,
      15,
      wrapper.instance().state.selectedProductTypeName
    );
  });

  it('albumChangeHandler handler works properly', () => {
    const { props, wrapper } = setup({ selectedProductTypeName: 'product' });
    wrapper.instance().productTypeChangeHandler('newProduct');
    expect(wrapper.instance().state.selectedProductTypeName).toBe('newProduct');
    expect(props.configuration.storeUrl).toBeCalledWith(
      props.storeData.id,
      wrapper.instance().state.selectedPage,
      wrapper.instance().state.selectedAlbumId,
      'newProduct'
    );
  });
});

it('fetches store correctly with new params', () => {
  const { props, wrapper } = setup({});
  wrapper.instance().fetchStore(2, 10, 'product');
  expect(props.configuration.storeUrl).toBeCalledWith(
    props.storeData.id,
    2,
    10,
    'product'
  );
});

describe('Test CartButton', () => {
  it('Check if CartButton is being called', () => {
    const { wrapper } = setup({});
    expect(wrapper.find(CartButton)).toHaveLength(1);
  });

  it('Check if props are being passed properly', () => {
    const { props, wrapper } = setup({});
    expect(wrapper.find(CartButton).prop('cartUrl')).toBe(
      props.configuration.cartUrl()
    );
    expect(wrapper.find(CartButton).prop('onCheckout')).toBe(
      props.configuration.onCheckout
    );
  });
});

describe('Test DesignCollection', () => {
  it('Check if DesignCollection is being called', () => {
    const { wrapper } = setup({});
    expect(wrapper.find(DesignCollection)).toHaveLength(1);
  });

  it('Check if props are being passed properly', () => {
    const { props, wrapper } = setup({});
    expect(wrapper.find(DesignCollection).prop('designs')).toBe(
      props.storeData._embedded.designs
    );
    expect(wrapper.find(DesignCollection).prop('buyProductLinkBuilder')).toBe(
      props.configuration.buyProductUrl
    );
    expect(wrapper.find(DesignCollection).prop('storeId')).toBe(
      props.storeData.id
    );
  });
});
