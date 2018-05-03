import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './BackToProducts.scss';

const CLASS_ROOT = 'tp-back-products';

export default class BackToProducts extends Component {
  render() {
    const { className, storeUrl, linkText } = this.props;
    const classes = classnames(CLASS_ROOT, className, 'teepublic');
    return (
      <a className={classes} href={storeUrl}>
        {linkText}
      </a>
    );
  }
}

BackToProducts.propTypes = {
  className: PropTypes.string,
  storeUrl: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired
};
