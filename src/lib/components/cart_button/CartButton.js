import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CartHelper from '../../utils/CartHelper';
import MoneyHelper from '../../utils/MoneyHelper';

import './CartButton.css';

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
      <button className={classes} {...props}>
        Cart ({cartItems.length})
      </button>
    );
  }
}
