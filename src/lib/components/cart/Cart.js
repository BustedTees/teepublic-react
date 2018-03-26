import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Column from '../column/Column';
import CartItem from '../cart_item/CartItem';
import MoneyHelper from '../../utils/MoneyHelper';
import CartHelper from '../../utils/CartHelper';

import './Cart.css';

const CLASS_ROOT = 'tp-cart';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.cartHelper = new CartHelper();
    this.state = {
      items: this.cartHelper.getCartItems()
    };
  }

  fetchCart = () => {
    this.setState({ items: this.cartHelper.getCartItems() });
  };

  componentDidMount() {
    this.fetchCartIntervalId = setInterval(this.fetchCart.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.fetchCartIntervalId);
  }

  updateCartItem = cartItem => {
    this.cartHelper.updateCartItem(cartItem);
    this.fetchCart();
  };

  deleteCartItem = cartItem => {
    this.cartHelper.deleteCartItem(cartItem);
    this.fetchCart();
  };

  checkoutHandler = e => {
    const { onCheckout } = this.props;
    const cartItems = this.cartHelper.checkoutCartItems();
    onCheckout(cartItems);
  };
  render() {
    const { className } = this.props;
    const { items } = this.state;

    const classes = classnames(className, CLASS_ROOT);

    const cartItems = items.map(function(item, itemIndex) {
      return (
        <CartItem
          key={itemIndex}
          cartItem={item}
          updateCartItem={this.updateCartItem}
          deleteCartItem={this.deleteCartItem}
        />
      );
    }, this);

    var totalPrice = 0;
    items.forEach(function(item) {
      totalPrice += item.sku.price * item.quantity;
    });

    const cartContent =
      items.length > 0 ? (
        <Column className={classes} justify="center" align="stretch">
          {cartItems}
          <div className={`${CLASS_ROOT}__total`}>
            Total={new MoneyHelper(totalPrice, 'USD').commaSeprated()}
          </div>
          <button onClick={this.checkoutHandler}>Checkout</button>
        </Column>
      ) : (
        <Column className={classes} justify="center" align="stretch">
          No items added to cart
        </Column>
      );

    return cartContent;
  }
}

Cart.propTypes = {
  onCheckout: PropTypes.func.isRequired
};
