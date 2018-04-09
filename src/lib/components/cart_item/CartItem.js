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
    var qty = e.target.value;
    if (qty > 100) qty = 100;
    cartItem.quantity = qty;
    updateCartItem(cartItem);
  };

  deleteCartItem = e => {
    const { cartItem, deleteCartItem } = this.props;
    deleteCartItem(cartItem);
  };

  render() {
    const { className, cartItem, buyProductLinkBuilder } = this.props;
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
      <p className={`${CLASS_ROOT}__title`}>
        <a
          href={buyProductLinkBuilder(
            cartItem.design.id,
            cartItem.sku.productType,
            cartItem.storeId
          )}
        >
          {cartItem.design.description}
        </a>
      </p>
    );

    const skuPrice = (
      <span className={`${CLASS_ROOT}__price`}>
        {new MoneyHelper(
          Number(cartItem.sku.price).toFixed(2),
          'USD'
        ).commaSeprated()}
      </span>
    );

    const skuQuantity = (
      <input
        type="number"
        min="1"
        max="100"
        value={cartItem.quantity}
        onChange={this.onQuantityChange}
        className={`${CLASS_ROOT}__qty`}
      />
    );

    return (
      <div className={classes}>
        {designTitle}
        <div className={`${CLASS_ROOT}__preview`}>
          {skuImage}

          <div className={`${CLASS_ROOT}__config`}>
            <ul className={`${CLASS_ROOT}__details`}>
              <li>{skuOptions.style}</li>
              <li>{`${skuOptions.gender}, Size ${skuOptions.size}`}</li>
              <li>{skuOptions.color}</li>
            </ul>

            <div className={`${CLASS_ROOT}__adjust`}>
              {skuPrice}
              {skuQuantity}
            </div>

            <span
              onClick={this.deleteCartItem}
              className={`${CLASS_ROOT}__update`}
            >
              Remove
            </span>
          </div>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
  updateCartItem: PropTypes.func.isRequired,
  deleteCartItem: PropTypes.func.isRequired
};
