import React, { Component } from 'react';
import classnames from 'classnames';

import CartHelper from '../../utils/CartHelper';

import './CartButton.scss';

const CLASS_ROOT = 'tp-cart-button';

export default class CartButton extends Component {
  constructor(props) {
    super(props);
    this.cartHelper = new CartHelper();
  }

  componentDidMount() {
    this.fetchCartIntervalId = setInterval(this.forceUpdate.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.fetchCartIntervalId);
  }

  render() {
    const { className, ...props } = this.props;
    const cartItems = this.cartHelper.getCartItems();

    const classes = classnames(className, CLASS_ROOT);

    return (
      <div className={classes}>
        <a className={`${CLASS_ROOT}__link`} {...props}>
          Cart
          <span className={`${CLASS_ROOT}__count`}>{cartItems.length}</span>
        </a>

        <button className={`${CLASS_ROOT}__checkout`}>Checkout</button>
      </div>
    );
  }
}
