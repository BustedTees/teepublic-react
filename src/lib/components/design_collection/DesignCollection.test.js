import React from 'react';
import ReactDOM from 'react-dom';
import DesignCollection from './DesignCollection';
import DesignTile from '../design_tile/DesignTile';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
jest.mock('../design_tile/DesignTile');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  DesignTile.mockClear();
});

it('DesignCollection renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <DesignCollection designs={[]} buyProductLinkBuilder={() => {}} />,
    div
  );
});

it('renders correctly', () => {
  const tree = renderer
    .create(<DesignCollection designs={[]} buyProductLinkBuilder={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Check if DesignTile is being called', () => {
  // Show that mockClear() is working:
  expect(DesignTile).not.toHaveBeenCalled();

  const mockDesigns = [{}, {}, {}];
  const collection = shallow(
    <DesignCollection designs={mockDesigns} buyProductLinkBuilder={() => {}} />
  );
  expect(collection.find(DesignTile)).toHaveLength(3);
});

it('passes down the props correcty', () => {
  const mockDesigns = [{ mock: 123 }];
  const mockStoreId = 1;
  const mockBuyProductLinkBuilder = jest.fn();
  const collection = shallow(
    <DesignCollection
      designs={mockDesigns}
      buyProductLinkBuilder={mockBuyProductLinkBuilder}
      storeId={mockStoreId}
    />
  );
  expect(collection.find(DesignTile).prop('design')).toBe(mockDesigns[0]);
  expect(collection.find(DesignTile).prop('buyProductLinkBuilder')).toBe(
    mockBuyProductLinkBuilder
  );
  expect(collection.find(DesignTile).prop('storeId')).toBe(mockStoreId);
  expect(collection.find(DesignTile).prop('className')).toBe(
    'tp-design-collection__tile'
  );
});
