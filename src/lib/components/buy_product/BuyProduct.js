import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Row from '../row/Row';
import Column from '../column/Column';
import AddToCart from '..//add_to_cart/AddToCart';
import ImageGallery from '..//image_gallery/ImageGallery';
import MoneyHelper from '../../utils/MoneyHelper';
import BackToProducts from '../back_to_products/BackToProducts';
import ProductVariants from '../product_variants/ProductVariants';
import ProductHelper from '../../utils/ProductHelper';
import SkuSelector from '../sku_selector/SkuSelector';

import './BuyProduct.css';

const CLASS_ROOT = 'tp-buy-product';

export default class BuyProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    var selectedProductIndex = 1;
    const productOptions = props.skuData.options;
    const skus = props.skuData._embedded.skus;
    const colorMetaData = props.skuData._embedded.colors;
    const currentProduct =
      props.design._embedded.products[selectedProductIndex];
    const defaultSku = currentProduct._embedded.defaultSku;

    this.productHelper = new ProductHelper();
    const selectorsOptions = this.productHelper.collectSelectorOptions(
      skus,
      productOptions
    );

    const selectedOptions = {};
    productOptions.forEach((selectorOption, selectorOptionIndex) => {
      selectedOptions[selectorOption.name] =
        selectorsOptions[selectorOptionIndex][0].value;
    });

    this.state = {
      defaultSku: defaultSku,
      skuImageIndex: 0,
      productOptions: productOptions,
      skus: skus,
      colorMetaData: colorMetaData,
      selectedProductIndex: 0,
      selectedProductIndex: selectedProductIndex,
      selectorsOptions: selectorsOptions,
      selectedOptions: selectedOptions
    };
  }

  onSkuChange(e) {
    var currentSelections = this.state.selectedOptions;
    currentSelections[e.target.name] = e.target.value;
    var newSelectorsOptions = this.productHelper.collectSelectorOptions(
      this.state.skus,
      this.state.productOptions,
      currentSelections
    );
    var newSelections = this.determineNewSelections(
      newSelectorsOptions,
      currentSelections
    );
    this.setState({
      selectedOptions: newSelections,
      selectorsOptions: newSelectorsOptions
    });
  }

  determineNewSelections(newSelectorsOptions, currentSelections) {
    var newSelections = {};
    newSelectorsOptions.forEach(selectorOptions => {
      var selectorName = selectorOptions[0]['name'];
      if (
        selectorOptions.some(x => x['value'] == currentSelections[x['name']])
      ) {
        newSelections[selectorName] = currentSelections[selectorName];
      } else {
        newSelections[selectorName] = selectorOptions[0]['value'];
      }
    });
    return newSelections;
  }

  render() {
    const { className, design, store } = this.props;
    const {
      skuImageIndex,
      productOptions,
      skus,
      selectedProductIndex,
      selectorsOptions,
      defaultSku,
      selectedOptions,
      colorMetaData
    } = this.state;

    const classes = classnames(CLASS_ROOT, className);

    const { images, productType, price } = defaultSku;

    const skuImageGallery = (
      <ImageGallery
        className={`${CLASS_ROOT}__images`}
        images={images}
        selectedImageIndex={skuImageIndex}
        onImageSelect={imageIndex =>
          this.setState({ skuImageIndex: imageIndex })
        }
      />
    );

    const designTitle = (
      <h2 className={`${CLASS_ROOT}__title`}>
        {`${design.title} ${productType}`}
      </h2>
    );
    const designPrice = (
      <h2 className={`${CLASS_ROOT}__price`}>
        {new MoneyHelper(price, 'USD').commaSeprated()}
      </h2>
    );

    const cartButton = <AddToCart design={design} sku={defaultSku} />;

    const backToProducts = (
      <Column justify="start" align="center" style={{ width: '100%' }}>
        <BackToProducts storeUrl="/" linkText="Back to Products" />
      </Column>
    );

    const productVariants = (
      <ProductVariants
        design={design}
        store={store}
        selectedProductIndex={selectedProductIndex}
      />
    );

    return (
      <div className={CLASS_ROOT}>
        <Row className={classes} justify="center" align="start">
          {backToProducts}
          {skuImageGallery}
          <Column
            className={`${CLASS_ROOT}__options`}
            justify="start"
            align="start"
          >
            {designTitle}
            <SkuSelector
              onSkuChange={this.onSkuChange.bind(this)}
              selectorsOptions={selectorsOptions}
              productOptions={productOptions}
              selectedOptions={selectedOptions}
              colorMetaData={colorMetaData}
            />
            {designPrice}
            {cartButton}
          </Column>
          <Column>{productVariants}</Column>
        </Row>
      </div>
    );
  }
}

BuyProduct.propTypes = {
  design: PropTypes.object.isRequired
};
