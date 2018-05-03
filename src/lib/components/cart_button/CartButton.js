import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  checkoutHandler = e => {
    const { onCheckout } = this.props;
    const cartItems = this.cartHelper.checkoutCartItems();
    onCheckout(cartItems);
  };

  render() {
    const { className, cartUrl } = this.props;
    const cartItems = this.cartHelper.getCartItems();

    const classes = classnames(className, CLASS_ROOT, 'teepublic');

    return (
      <div className={classes}>
        <a className={`${CLASS_ROOT}__link`} href={cartUrl}>
          Cart
          <span className={`${CLASS_ROOT}__count`}>{cartItems.length}</span>
        </a>

        <button
          className={`${CLASS_ROOT}__checkout`}
          onClick={this.checkoutHandler}
        >
          Checkout
        </button>
      </div>
    );
  }
}

CartButton.propTypes = {
  className: PropTypes.string,
  cartUrl: PropTypes.string.isRequired,
  onCheckout: PropTypes.func.isRequired
};
