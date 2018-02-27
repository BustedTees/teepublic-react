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

export default class BuyProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCanvas: props.selectedCanvas,
      selectedImageUrl: props.selectedCanvas.mockup_url
    };
  }
  render() {
    const { className, design, ...props } = this.props;
    const { selectedCanvas, selectedImageUrl } = this.state;
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
    const cartButton = (
      <Button style="fill" size="medium">
        Add to Cart
      </Button>
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
