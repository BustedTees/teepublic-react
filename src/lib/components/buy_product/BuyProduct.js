import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Row from '../row/Row';
import Column from '../column/Column';
import AddToCart from '..//add_to_cart/AddToCart';
import MoneyHelper from '../../utils/MoneyHelper';

import './BuyProduct.css';

const CLASS_ROOT = 'tp-buy-product';

export default class BuyProduct extends Component {
  constructor(props) {
    super(props);

    const products = props.design._embedded.products;
    const productOptions = products.map(function(product, productIndex) {
      const sku = product._embedded.defaultSku;
      const { productOptions } = sku;
      const productOption = productOptions.map(function(
        productOption,
        productOptionIndex
      ) {
        return productOption.value;
      },
      this);
      return {
        display: productOption.join(', '),
        value: productIndex
      };
    }, this);

    this.state = {
      skuImageIndex: 0,
      productOptions: productOptions,
      selectedProductIndex: 0
    };
  }

  render() {
    const { className, design } = this.props;
    const { skuImageIndex, productOptions, selectedProductIndex } = this.state;

    const classes = classnames(CLASS_ROOT, className);

    const selectedProduct = design._embedded.products[selectedProductIndex];
    const selectedSku = selectedProduct._embedded.defaultSku;
    const { images, productType, price } = selectedSku;

    const previewImageTags = images.map(function(image, imageIndex) {
      return (
        <img
          key={imageIndex}
          onClick={() => {
            this.setState({ skuImageIndex: imageIndex });
          }}
          src={image.url}
          alt={image.type}
          height={100}
        />
      );
    }, this);

    const previewImages = (
      <Row justify="start" align="center">
        {previewImageTags}
      </Row>
    );

    const selectedImage = (
      <img
        className={`${CLASS_ROOT}__selected-image`}
        src={images[skuImageIndex].url}
        alt="Main"
        height={600}
      />
    );
    const designTitle = (
      <h2 className={`${CLASS_ROOT}__title`}>{`${
        design.title
      } ${productType}`}</h2>
    );
    const designPrice = (
      <h2 className={`${CLASS_ROOT}__price`}>
        {new MoneyHelper(price, 'USD').commaSeprated()}
      </h2>
    );

    const cartButton = <AddToCart design={design} sku={selectedSku} />;

    const optionSelector = (
      <Row>
        <p>{'Select: '}</p>
        <select
          onChange={e => {
            this.setState({
              selectedProductIndex: e.target.value,
              skuImageIndex: 0
            });
          }}
          value={selectedProductIndex}
        >
          {productOptions.map((productOption, index) => (
            <option key={index} value={productOption.value}>
              {productOption.display}
            </option>
          ))}
        </select>
      </Row>
    );

    return (
      <Row className={classes} justify="center" align="start">
        <Column
          className={`${CLASS_ROOT}__images`}
          justify="start"
          align="start"
        >
          {selectedImage}
          {previewImages}
        </Column>
        <Column
          className={`${CLASS_ROOT}__options`}
          justify="start"
          align="start"
        >
          {designTitle}
          {optionSelector}
          {designPrice}
          {cartButton}
        </Column>
      </Row>
    );
  }
}

BuyProduct.propTypes = {
  design: PropTypes.object.isRequired
};
