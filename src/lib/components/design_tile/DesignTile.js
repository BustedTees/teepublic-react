import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Row from '../row/Row';
import Button from '../button/Button';
import Column from '../column/Column';
import MoneyHelper from '../../utils/MoneyHelper';

import './DesignTile.css';

const CLASS_ROOT = 'tp-design-tile';

const DESIGN_IMAGE = {
  small: 200,
  medium: 300,
  large: 400
};

const AVATAR_IMAGE = {
  small: 26,
  medium: 40,
  large: 53
};

export default class DesignTile extends Component {
  randomCanvas(canvases) {
    const rand_canvas = Math.floor(Math.random() * (canvases.length - 1)) + 1;
    return canvases[rand_canvas];
  }

  findCanvas(canvases, canvas_slug) {
    canvases.forEach(function(canvas) {
      if (canvas.slug == canvas_slug) {
        return canvas;
      }
    });
    return this.randomCanvas(canvases);
  }

  render() {
    const { className, design, designer, size, ...props } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--${size}`]: size
      },
      className
    );

    const canvas = this.randomCanvas(design.canvases);
    const product_url = `https://www.teepublic.com/${canvas.slug}/${
      design.slug
    }`;

    // const designImage = <img className={`${CLASS_ROOT}__image`} src={design.image_url} alt="Design Image" height={DESIGN_IMAGE[size]}/>
    const designImage = (
      <img
        className={`${CLASS_ROOT}__image`}
        src={canvas.mockup_url}
        alt="Design Image"
        height={DESIGN_IMAGE[size]}
      />
    );
    const designTitle = (
      <a className={`${CLASS_ROOT}__title`} href={product_url} target="_blank">
        {design.title}
      </a>
    );
    const designPrice = (
      <p className={`${CLASS_ROOT}__price`}>
        {new MoneyHelper(canvas.prices.regular_price, 'USD').commaSeprated()}
      </p>
    );
    const designerLocation = (
      <p className={`${CLASS_ROOT}__location`}>{designer.location}</p>
    );
    const designerAvatar = (
      <a href={designer.store_url} target="_blank">
        <img
          className={`${CLASS_ROOT}__avatar`}
          src={designer.avatar_url}
          alt="Designer Avatar"
          height={AVATAR_IMAGE[size]}
        />
      </a>
    );
    const buyButton = (
      <Button style="fill" size="small">
        Buy
      </Button>
    );

    return (
      <a className={classes} href={product_url} target="_blank">
        <Column justify="start" align="center">
          {designImage}
          <Row
            className={`${CLASS_ROOT}__details`}
            justify="between"
            align="start"
          >
            <Column justify="start" align="start">
              <Row justify="start" align="center">
                {designerAvatar}
                <Column
                  className={`${CLASS_ROOT}__title-location`}
                  justify="start"
                  align="start"
                >
                  {designTitle}
                  {designerLocation}
                </Column>
              </Row>
            </Column>
            <Column justify="start" align="end">
              {designPrice}
              {buyButton}
            </Column>
          </Row>
        </Column>
      </a>
    );
  }
}

DesignTile.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

DesignTile.defaultProps = {
  size: 'large'
};
