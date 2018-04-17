import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CartItem from '../cart_item/CartItem';
import MoneyHelper from '../../utils/MoneyHelper';
import CartHelper from '../../utils/CartHelper';

import './Cart.scss';

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
    const {
      className,
      storePathLinkBuilder,
      buyProductLinkBuilder
    } = this.props;
    const { items } = this.state;

    const classes = classnames(className, CLASS_ROOT, 'teepublic');

    const cartItems = items.map(function(item, itemIndex) {
      return (
        <CartItem
          key={itemIndex}
          cartItem={item}
          updateCartItem={this.updateCartItem}
          deleteCartItem={this.deleteCartItem}
          buyProductLinkBuilder={buyProductLinkBuilder}
        />
      );
    }, this);

    var totalPrice = 0;
    items.forEach(function(item) {
      totalPrice += item.sku.price * item.quantity;
    });

    const cartContent =
      items.length > 0 ? (
        <div className={classes}>
          <h2 className={`${CLASS_ROOT}__h`}>
            Your Cart
            <span>{` (${this.cartHelper.itemsDescription(items)})`}</span>
          </h2>

          <ul className={`${CLASS_ROOT}__items-h`}>
            <li className={`${CLASS_ROOT}__item-h`}>Product</li>
            <li className={`${CLASS_ROOT}__item-h`} />
            <li className={`${CLASS_ROOT}__item-h`}>Unit Price</li>
            <li className={`${CLASS_ROOT}__item-h`}>Quantity</li>
            <li className={`${CLASS_ROOT}__item-h`}>Total</li>
          </ul>

          <div className={`${CLASS_ROOT}__items`}>{cartItems}</div>

          <div className={`${CLASS_ROOT}__checkout`}>
            <div className={`${CLASS_ROOT}__total`}>
              <span className={`${CLASS_ROOT}__total-h`}>Subtotal: </span>
              <span className={`${CLASS_ROOT}__total-price`}>
                {new MoneyHelper(
                  Number(totalPrice).toFixed(2),
                  'USD'
                ).commaSeprated()}
                <span>{` (${this.cartHelper.itemsDescription(items)})`}</span>
              </span>
            </div>

            <div className={`${CLASS_ROOT}__ctas`}>
              <button
                onClick={this.checkoutHandler}
                className={`${CLASS_ROOT}__checkout-checkout`}
              >
                Checkout
              </button>

              <a
                href={storePathLinkBuilder()}
                className={`${CLASS_ROOT}__checkout-shopping`}
              >
                Continue Shopping
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className={classes}>
          <p>Your cart is empty</p>
          <a href={storePathLinkBuilder()}>Continue Shopping</a>
        </div>
      );

    return cartContent;
  }
}

Cart.propTypes = {
  onCheckout: PropTypes.func.isRequired
};
