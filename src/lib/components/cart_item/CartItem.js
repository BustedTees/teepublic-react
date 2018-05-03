import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MoneyHelper from '../../utils/MoneyHelper';
import ProductHelper from '../../utils/ProductHelper';
import _ from 'underscore';

import './CartItem.scss';

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
    const classes = classnames(className, CLASS_ROOT, 'teepublic');
    const skuOptions = this.productHelper.skuOptions(cartItem.sku);

    var skuMockupImage = _.find(cartItem.sku.images, function(image) {
      return image.type === 'mockup';
    });

    const skuImage = (
      <img
        className={`${CLASS_ROOT}__image`}
        src={skuMockupImage.url}
        alt={skuMockupImage.type}
      />
    );

    const designTitleLink = (
      <a
        href={buyProductLinkBuilder(
          cartItem.design.id,
          cartItem.sku.productType,
          cartItem.storeId
        )}
      >
        {cartItem.design.description}
      </a>
    );

    const designTitle = (
      <p className={`${CLASS_ROOT}__title`}>{designTitleLink}</p>
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

    const removeLink = className => {
      return (
        <span
          onClick={this.deleteCartItem}
          className={`${CLASS_ROOT}__update ${CLASS_ROOT}__${className}`}
        >
          Remove
        </span>
      );
    };

    return (
      <div className={classes}>
        {designTitle}
        <div className={`${CLASS_ROOT}__preview`}>
          {skuImage}

          <div className={`${CLASS_ROOT}__config`}>
            <ul className={`${CLASS_ROOT}__details`}>
              <li className={`${CLASS_ROOT}__details-title`}>
                {designTitleLink}
              </li>
              <li>{skuOptions.style}</li>
              <li>{`${skuOptions.gender} - Size ${skuOptions.size}`}</li>
              <li>{skuOptions.color}</li>
              <li>{removeLink('remove-d')}</li>
            </ul>

            <div className={`${CLASS_ROOT}__price-d`}>{skuPrice}</div>

            <div className={`${CLASS_ROOT}__adjust`}>
              <div className={`${CLASS_ROOT}__price-m`}>{skuPrice}</div>
              {skuQuantity}
            </div>

            <div className={`${CLASS_ROOT}__total`}>
              {`$${(Number(cartItem.sku.price) * cartItem.quantity).toFixed(
                2
              )}`}
            </div>

            {removeLink('remove-m')}
          </div>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  className: PropTypes.string,
  cartItem: PropTypes.object.isRequired,
  buyProductLinkBuilder: PropTypes.func.isRequired,
  updateCartItem: PropTypes.func.isRequired,
  deleteCartItem: PropTypes.func.isRequired
};
