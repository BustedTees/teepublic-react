import React from 'react';
import ReactDOM from 'react-dom';
import DesignTile from './DesignTile';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import store from '../../../demo/StoreData';

describe('Design Tile Testing', () => {
  const mockDesign = store._embedded.designs[0];
  const mockProductType =
    mockDesign._embedded.defaultProduct._embedded.defaultSku.productType;
  const mockStoreId = store.id;
  const mockBuyProductLinkBuilder = jest.fn(
    (designId, productType, storeId) => {
      return `store/${storeId}/design/${designId}/product/${productType}`;
    }
  );
  const designTile = (
    <DesignTile
      design={mockDesign}
      buyProductLinkBuilder={mockBuyProductLinkBuilder}
      storeId={mockStoreId}
    />
  );

  it('DesignTile renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(designTile, div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(designTile).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls buyProductLinkBuilder once', () => {
    const tile = shallow(designTile);
    expect(mockBuyProductLinkBuilder).toBeCalledWith(
      mockDesign.id,
      mockProductType,
      mockStoreId
    );
  });

  it('Image click routes to BuyProduct link', () => {
    const tile = shallow(designTile);
    const imageLink = tile.find('.tp-design-tile__image-link').props().href;
    expect(imageLink).toBe(
      mockBuyProductLinkBuilder(mockDesign.id, mockProductType, mockStoreId)
    );
  });

  it('Buy Button routes to BuyProduct link', () => {
    // Hacky way to test it, could't get window location to work
    const tile = shallow(designTile);
    const buyOnClick = tile
      .find('button')
      .prop('onClick')
      .toString();
    expect(buyOnClick).toBe('() => window.location.href = buyProductLink');
  });
});
