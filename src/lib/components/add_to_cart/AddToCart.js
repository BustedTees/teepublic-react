import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '../button/Button';
import CartHelper from '../../utils/CartHelper';

import './AddToCart.css';

const CLASS_ROOT = 'tp-add-to-cart';

export default class AddToCart extends Component {
  handleClick = e => {
    const { design, sku } = this.props;
    const cartHelper = new CartHelper();
    cartHelper.addToCart(design, sku);
  };

  render() {
    const { className, design, sku, ...props } = this.props;
    const classes = classnames(CLASS_ROOT, className);
    const disabled = !(design && sku);
    return (
      <button
        className={classes}
        onClick={this.handleClick}
        disabled={disabled}
      >
        Add to Cart
      </button>
    );
  }
}

AddToCart.propTypes = {
  design: PropTypes.object.isRequired,
  sku: PropTypes.object
};
