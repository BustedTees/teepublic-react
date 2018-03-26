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

import './BuyProduct.css';

const CLASS_ROOT = 'tp-buy-product';

export default class BuyProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    const productOptions = props.skuData.options;
    const skus = props.skuData._embedded.skus;
    const currentProduct = props.design._embedded.products[1];
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
    console.log('original selections', selectedOptions);

    this.state = {
      defaultSku: defaultSku,
      skuImageIndex: 0,
      productOptions: productOptions,
      skus: skus,
      selectedProductIndex: 0,
      selectorsOptions: selectorsOptions,
      selectedOptions: selectedOptions
    };
  }

  handleOptionChange(e) {
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
      defaultSku
    } = this.state;

    const classes = classnames(CLASS_ROOT, className);

    const { images, productType, price } = defaultSku;
    const otherVariants = this.productHelper.otherVariants(
      this.props.design,
      selectedProductIndex
    );

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

    const optionSelectors = selectorsOptions.map(
      (selectorOptions, selectorOptionsIndex) => {
        return (
          <select
            key={productOptions[selectorOptionsIndex].name}
            name={productOptions[selectorOptionsIndex].name}
            onChange={this.handleOptionChange.bind(this)}
          >
            {selectorOptions.map((selectorOption, index) => (
              <option key={selectorOption.value} value={selectorOption.value}>
                {selectorOption.value}
              </option>
            ))}
          </select>
        );
      },
      this
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

    // const productVariants = (
    //   <ProductVariants variants={otherVariants} store={store} />
    // );

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
            {optionSelectors}
            {designPrice}
            {cartButton}
          </Column>
        </Row>
      </div>
    );
  }
}

BuyProduct.propTypes = {
  design: PropTypes.object.isRequired
};
