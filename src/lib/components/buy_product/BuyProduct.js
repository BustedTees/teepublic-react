import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Row from '../row/Row';
import Button from '../button/Button';
import Column from '../column/Column';
import ImageZoom from '../image_zoom/ImageZoom';
import MoneyHelper from '../../utils/MoneyHelper';

import './BuyProduct.css';

const CLASS_ROOT = 'tp-buy-product';

const OPTIONS_MAP = {
  gender: 'buttonBar',
  style: 'dropdown',
  size: 'dropdown',
  color: 'buttonBar'
};

export default class BuyProduct extends Component {
  constructor(props) {
    super(props);

    var canvasOptions = {};
    var selectedOptions = {};
    props.design.hierarchy.forEach(function(value) {
      canvasOptions[value] = new Set();
      selectedOptions[value] = null;
    });

    selectedOptions.gender = 'Male';
    selectedOptions.style = 'Classic T-Shirt';

    this.state = {
      selectedCanvas: props.selectedCanvas,
      selectedImageUrl: props.selectedCanvas.mockup_url,
      canvasOptions: canvasOptions,
      selectedOptions: selectedOptions
    };
    console.log(props.design);
  }

  recalibrateOptions() {
    const { design } = this.props;
    const { products, hierarchy } = design;
    const { canvasOptions, selectedOptions } = this.state;

    hierarchy.forEach(function(option) {
      products.forEach(function(product) {
        const productAttributes = product.attributes;
        const value = productAttributes[option].value;
        canvasOptions[option].add(value);
      });
    });

    console.log(canvasOptions);
  }

  render() {
    this.recalibrateOptions();
    const { className, design, ...props } = this.props;
    const { selectedCanvas, selectedImageUrl, canvasOptions } = this.state;
    const canvases = design.canvases;

    const classes = classnames(CLASS_ROOT, className);

    const previewImages = (
      <Row justify="start" align="center">
        <img
          onClick={() => {
            this.setState({ selectedImageUrl: selectedCanvas.mockup_url });
          }}
          src={selectedCanvas.mockup_url}
          alt="Canvas Image"
          height={100}
        />
        <img
          onClick={() => {
            this.setState({ selectedImageUrl: design.image_url });
          }}
          src={design.image_url}
          alt="Design Image"
          height={100}
        />
      </Row>
    );

    const selectedImage = (
      <img
        className={`${CLASS_ROOT}__selected-image`}
        src={selectedImageUrl}
        alt="Selected Image"
        height={600}
      />
    );
    const designTitle = (
      <h2 className={`${CLASS_ROOT}__title`}>{`${design.title} ${
        selectedCanvas.name
      }`}</h2>
    );
    const designPrice = (
      <h2 className={`${CLASS_ROOT}__price`}>
        {new MoneyHelper(
          selectedCanvas.prices.regular_price,
          'USD'
        ).commaSeprated()}
      </h2>
    );
    // const cartButton = (
    //   <Button disabled style="fill" size="medium">
    //     Add to Cart
    //   </Button>
    // );

    const cartButton = (
      <button type="button" disabled>
        Add to Cart
      </button>
    );

    const dropdowns = [];
    for (var option in canvasOptions) {
      const optionDisplay = (
        <Row>
          <p>{option}</p>
          <select>
            {[...canvasOptions[option]].map(value => (
              <option value={value}>{value}</option>
            ))}
          </select>
        </Row>
      );
      dropdowns.push(optionDisplay);
    }

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
          {dropdowns}
          {designPrice}
          {cartButton}
        </Column>
      </Row>
    );
  }
}

BuyProduct.propTypes = {
  canvasSlug: PropTypes.string,
  designSlug: PropTypes.string
};

BuyProduct.defaultProps = {
  canvasSlug: 't-shirt'
};
