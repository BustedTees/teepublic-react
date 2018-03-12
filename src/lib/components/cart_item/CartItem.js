import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Row from '../row/Row';
import Column from '../column/Column';
import MoneyHelper from '../../utils/MoneyHelper';

import './CartItem.css';

const CLASS_ROOT = 'tp-cart-item';

export default class CartItem extends Component {
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
    const { className, cartItem, ...props } = this.props;

    const classes = classnames(className, CLASS_ROOT);

    const productImage = (
      <img
        className={`${CLASS_ROOT}__image`}
        src={cartItem.product.images[0].url}
        alt="Product Image"
        height={100}
      />
    );
    const designTitle = (
      <h4 className={`${CLASS_ROOT}__title`}>{cartItem.design.description}</h4>
    );
    const productPrice = (
      <p className={`${CLASS_ROOT}__price`}>
        {new MoneyHelper(cartItem.product.price, 'USD').commaSeprated()}
      </p>
    );

    const productQuantity = (
      <Row justify="start" align="center">
        Quantity:
        <input
          type="number"
          value={cartItem.quantity}
          onChange={this.onQuantityChange}
        />
      </Row>
    );

    const itemPrice = (
      <p className={`${CLASS_ROOT}__item-price`}>
        {new MoneyHelper(
          cartItem.product.price * cartItem.quantity,
          'USD'
        ).commaSeprated()}
      </p>
    );

    return (
      <Row className={classes} justify="between">
        {productImage}
        <Column>
          {designTitle}
          <Row justify="between" align="center">
            {productQuantity}
            X
            {productPrice}
            =
            {itemPrice}
          </Row>
          <button onClick={this.deleteCartItem}>Delete</button>
        </Column>
      </Row>
    );
  }
}

CartItem.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

CartItem.defaultProps = {
  size: 'large'
};
