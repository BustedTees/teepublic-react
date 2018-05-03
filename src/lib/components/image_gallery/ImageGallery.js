import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './ImageGallery.scss';

const CLASS_ROOT = 'tp-image-gallery';

export default class ImageGallery extends Component {
  render() {
    const { className, images, selectedImageIndex, onImageSelect } = this.props;
    const classes = classnames(CLASS_ROOT, className, 'teepublic');

    const thumbImageTags = images.map(function(image, imageIndex) {
      return (
        <img
          className={`${CLASS_ROOT}__thumb`}
          key={imageIndex}
          onClick={() => {
            onImageSelect(imageIndex);
          }}
          src={image.url}
          alt={image.type}
        />
      );
    }, this);

    const thumbImages = (
      <div className={`${CLASS_ROOT}__thumbs`}>{thumbImageTags}</div>
    );

    const previewImage = (
      <img
        className={`${CLASS_ROOT}__preview`}
        src={images[selectedImageIndex].url}
        alt="Main"
      />
    );

    return (
      <div className={classes}>
        {previewImage}
        {thumbImages}
      </div>
    );
  }
}

ImageGallery.propTypes = {
  className: PropTypes.string,
  images: PropTypes.array.isRequired,
  selectedImageIndex: PropTypes.number.isRequired,
  onImageSelect: PropTypes.func.isRequired
};

ImageGallery.defaultProps = {
  selectedImageIndex: 0
};
