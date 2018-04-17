import React, { Component } from 'react';
import classnames from 'classnames';
import tpLogo from '../tp-logo.png';

import './TeepublicPowered.scss';

const CLASS_ROOT = 'tp-powered';

export default class TeepublicPowered extends Component {
  render() {
    const { className } = this.props;

    const classes = classnames(CLASS_ROOT, className, 'teepublic');

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
