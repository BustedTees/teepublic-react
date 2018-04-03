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
import RelatedTags from '../related_tags/RelatedTags';

import './BuyProduct.css';

const CLASS_ROOT = 'tp-buy-product';

export default class BuyProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    const productOptions = props.skuData.options;
    const skus = props.skuData._embedded.skus;
    const colorMetaData = props.skuData._embedded.colors;

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

    const currentSku = this.productHelper.currentSku(skus, selectedOptions);

    this.state = {
      skuImageIndex: 0,
      productOptions: productOptions,
      skus: skus,
      colorMetaData: colorMetaData,
      selectorsOptions: selectorsOptions,
      selectedOptions: selectedOptions,
      currentSku: currentSku
    };
  }

  onSkuChange(e) {
    const { skus, productOptions } = this.state;
    var currentSelections = this.state.selectedOptions;
    currentSelections[e.target.name] = e.target.value;

    const newSelectorsOptions = this.productHelper.collectSelectorOptions(
      skus,
      productOptions,
      currentSelections
    );

    const newSelections = this.determineNewSelections(
      newSelectorsOptions,
      currentSelections
    );

    this.setState({
      selectedOptions: newSelections,
      selectorsOptions: newSelectorsOptions,
      currentSku: this.productHelper.currentSku(skus, newSelections)
    });
  }

  determineNewSelections(newSelectorsOptions, currentSelections) {
    var newSelections = {};
    newSelectorsOptions.forEach(selectorOptions => {
      var selectorName = selectorOptions[0]['name'];
      if (
        selectorOptions.some(x => x['value'] === currentSelections[x['name']])
      ) {
        newSelections[selectorName] = currentSelections[selectorName];
      } else {
        newSelections[selectorName] = selectorOptions[0]['value'];
      }
    });
    return newSelections;
  }

  render() {
    const {
      className,
      design,
      store,
      buyProductLinkBuilder,
      tagLinkBuilder
    } = this.props;
    const {
      skuImageIndex,
      productOptions,
      skus,
      selectorsOptions,
      selectedOptions,
      colorMetaData,
      currentSku
    } = this.state;

    const classes = classnames(CLASS_ROOT, className);
    const description = this.props.design.description;
    const materialInfo = currentSku.description;

    const { images, productType, price } = currentSku;

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

    const cartButton = <AddToCart design={design} sku={currentSku} />;

    const backToProducts = (
      <Column justify="start" align="center" style={{ width: '100%' }}>
        <BackToProducts storeUrl="/" linkText="Back to Products" />
      </Column>
    );

    const productVariants = (
      <ProductVariants
        design={design}
        store={store}
        currentSku={currentSku}
        buyProductLinkBuilder={buyProductLinkBuilder}
      />
    );

    const relatedTags = (
      <RelatedTags
        design={design}
        currentSku={currentSku}
        tagLinkBuilder={tagLinkBuilder}
      />
    );

    const relatedInfo = (
      <div>
        <h5>Description</h5>
        <p>{description}</p>
        <h5>Material Info</h5>
        <p>{materialInfo}</p>
      </div>
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
            {relatedInfo}
          </Column>
          <Column>{productVariants}</Column>
        </Row>
        <Row>{relatedTags}</Row>
      </div>
    );
  }
}

BuyProduct.propTypes = {
  design: PropTypes.object.isRequired
};
