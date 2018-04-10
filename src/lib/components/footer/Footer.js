import React, { Component } from 'react';
import { TeePublicPowered } from '../../../index';

import './Footer.scss';
const CLASS_ROOT = 'tp-footer';

export default class Footer extends Component {
  render() {
    return (
      <div className={CLASS_ROOT}>
        <TeePublicPowered />
      </div>
    );
  }
}
