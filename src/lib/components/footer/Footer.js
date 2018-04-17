import React, { Component } from 'react';
import { TeePublicPowered } from '../../../index';
import classnames from 'classnames';

import './Footer.scss';
const CLASS_ROOT = 'tp-footer';

export default class Footer extends Component {
  render() {
    const classes = classnames(CLASS_ROOT, 'teepublic');

    return (
      <div className={classes}>
        <div className="contain">
          <TeePublicPowered />
        </div>
      </div>
    );
  }
}
