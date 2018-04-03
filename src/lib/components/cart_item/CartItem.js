import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Row from '../row/Row';
import Column from '../column/Column';
import MoneyHelper from '../../utils/MoneyHelper';
import ProductHelper from '../../utils/ProductHelper';
import _ from 'underscore';

import './CartItem.css';

const CLASS_ROOT = 'tp-cart-item';

export default class CartItem extends Component {
  constructor(props) {
    super(props);
    this.productHelper = new ProductHelper();
  }

  onQuantityChange = e => {
    const { cartItem, updateCartItem } = this.props;
    cartItem.quantity = e.target.value;
    updateCartItem(cartItem);
  };

  deleteCartItem = e => {
    const { cartItem, deleteCartItem } = this.props;
    deleteCartItem(cartItem);
  };

  render() {
    const { className, cartItem } = this.props;

    const classes = classnames(className, CLASS_ROOT);
    const skuOptions = this.productHelper.skuOptions(cartItem.sku);

    var skuMockupImage = _.find(cartItem.sku.images, function(image) {
      return image.type === 'mockup';
    });

    const skuImage = (
      <img
        className={`${CLASS_ROOT}__image`}
        src={skuMockupImage.url}
        alt={skuMockupImage.type}
        height={100}
      />
    );
    const designTitle = (
      <h4 className={`${CLASS_ROOT}__title`}>{cartItem.design.description}</h4>
    );
    const skuPrice = (
      <p className={`${CLASS_ROOT}__price`}>
        {new MoneyHelper(cartItem.sku.price, 'USD').commaSeprated()}
      </p>
    );

    const skuQuantity = (
      <Row justify="start" align="center">
        <input
          type="number"
          value={cartItem.quantity}
          onChange={this.onQuantityChange}
        />
      </Row>
    );

    return (
      <Row className={classes} justify="between">
        {designTitle}
        <Column>
          <Row justify="between" align="center">
            {skuImage}
            <ul>
              <li>{`Style ${skuOptions.style}`}</li>
              <li>{`${skuOptions.gender}, Size ${skuOptions.size}`}</li>
              <li>{skuOptions.color}</li>
            </ul>
          </Row>
          <Row justify="between" align="center">
            {skuPrice}
            {skuQuantity}
          </Row>
          <button onClick={this.deleteCartItem}>Remove</button>
        </Column>
      </Row>
    );
  }
}

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
  updateCartItem: PropTypes.func.isRequired,
  deleteCartItem: PropTypes.func.isRequired
};
