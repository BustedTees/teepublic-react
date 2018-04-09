import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import tpLogo from '../tp-logo.png';

import './TeepublicPowered.css';

const CLASS_ROOT = 'tp-powered';

export default class TeepublicPowered extends Component {
  render() {
    const { className, layout } = this.props;

    const classes = classnames(CLASS_ROOT, className);

    return (
      <p className={classes}>
        <span className={`${CLASS_ROOT}__text`}>Store powered by</span>
        <a
          className={`${CLASS_ROOT}__logo-link`}
          href="https://www.teepublic.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={`${CLASS_ROOT}__logo`}
            src={tpLogo}
            alt="TeePubic logo"
          />
        </a>
      </p>
    );
  }
}

TeepublicPowered.propTypes = {
  layout: PropTypes.oneOf(['row', 'column'])
};

TeepublicPowered.defaultProps = {
  layout: 'row'
};
