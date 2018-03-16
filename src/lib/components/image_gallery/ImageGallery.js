import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Row from '../row/Row';
import Column from '../column/Column';

import './ImageGallery.css';

const CLASS_ROOT = 'tp-image-gallery';

export default class ImageGallery extends Component {
  render() {
    const { className, images, selectedImageIndex, onImageSelect } = this.props;
    const classes = classnames(CLASS_ROOT, className);

    const previewImageTags = images.map(function(image, imageIndex) {
      return (
        <img
          key={imageIndex}
          onClick={() => {
            onImageSelect(imageIndex);
          }}
          src={image.url}
          alt={image.type}
          height={100}
        />
      );
    }, this);

    const previewImages = (
      <Row justify="start" align="center">
        {previewImageTags}
      </Row>
    );

    const selectedImage = (
      <img
        className={`${CLASS_ROOT}__selected-image`}
        src={images[selectedImageIndex].url}
        alt="Main"
        height={600}
      />
    );

    return (
      <Column className={classes} justify="start" align="start">
        {selectedImage}
        {previewImages}
      </Column>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  selectedImageIndex: PropTypes.number.isRequired,
  onImageSelect: PropTypes.func.isRequired
};

ImageGallery.defaultProps = {
  selectedImageIndex: 0
};
