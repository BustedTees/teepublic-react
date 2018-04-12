import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './SkuSelector.scss';
const CLASS_ROOT = 'tp-sku-selector';

export default class SkuSelector extends Component {
  render() {
    const {
      onSkuChange,
      productOptions,
      selectorsOptions,
      className,
      selectedOptions,
      colorMetaData,
      sizechartUrl
    } = this.props;
    const classes = classnames(CLASS_ROOT, className);

    function buildSwatchOptions(
      productOption,
      selectorOptions,
      selectedOptions,
      colorMetaData
    ) {
      return (
        <div key={productOption.name} className={`${CLASS_ROOT}__colors`}>
          <p className={`${CLASS_ROOT}__color-label`}>
            Color:
            <span className={`${CLASS_ROOT}__color-color`}>
              {` ${selectedOptions[productOption.name]}`}
            </span>
          </p>
          <div className={`${CLASS_ROOT}__color-options`}>
            {selectorOptions.map((selectorOption, index) => {
              const selected =
                selectorOption.value === selectedOptions[productOption.name];

              return (
                <div
                  key={selectorOption.value}
                  className={classnames(`${CLASS_ROOT}__color-option`, {
                    on: selected
                  })}
                >
                  <input
                    type="radio"
                    name={productOption.name}
                    value={selectorOption.value}
                    id={selectorOption.value}
                    checked={selected}
                    onChange={onSkuChange}
                  />

                  <label
                    htmlFor={selectorOption.value}
                    style={buildSwatchStyles(
                      dataForValue(selectorOption.value, colorMetaData)
                    )}
                  >
                    {selectorOption.value}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    function buildSwatchStyles(colorData) {
      var styles = {};

      if (colorData.image) {
        styles['background'] = 'url(' + colorData.image.url + ')';
      } else {
        styles['background'] = colorData.hex;
      }

      return styles;
    }

    function dataForValue(value, colorData) {
      return colorData.find(record => record.name === value);
    }

    function buildRadioOptions(
      productOption,
      selectorOptions,
      selectedOptions
    ) {
      return (
        <div key={productOption.name} className={`${CLASS_ROOT}__option`}>
          <label className={`${CLASS_ROOT}__label`}>{productOption.name}</label>
          <div>
            {selectorOptions.map((selectorOption, index) => (
              <div
                className={`${CLASS_ROOT}__radio`}
                key={selectorOption.value}
              >
                <input
                  type="radio"
                  name={productOption.name}
                  value={selectorOption.value}
                  id={selectorOption.value}
                  checked={
                    selectorOption.value === selectedOptions[productOption.name]
                  }
                  onChange={onSkuChange}
                />
                <label htmlFor={selectorOption.value}>
                  {selectorOption.value}
                </label>
              </div>
            ))}
          </div>
        </div>
      );
    }

    function sizingButton(option) {
      if (option.toLowerCase() == 'size') {
        return (
          <button
            className={`${CLASS_ROOT}__sizing`}
            onClick={() => {
              window.location = sizechartUrl;
            }}
          >
            Sizing
          </button>
        );
      } else {
        return null;
      }
    }

    function buildDropdownOptions(productOption, selectorOptions) {
      return (
        <div key={productOption.name} className={`${CLASS_ROOT}__option`}>
          <label className={`${CLASS_ROOT}__label`}>{productOption.name}</label>
          <div className={`${CLASS_ROOT}__choose ${CLASS_ROOT}__dropdown-wrap`}>
            <select
              className={`${CLASS_ROOT}__dropdown`}
              key={productOption.name}
              name={productOption.name}
              onChange={onSkuChange}
            >
              {dropdownDefault(productOption)}
              {selectorOptions.map((selectorOption, index) => (
                <option key={selectorOption.value} value={selectorOption.value}>
                  {selectorOption.value}
                </option>
              ))}
            </select>
          </div>

          {sizingButton(productOption.name)}
        </div>
      );
    }

    function dropdownDefault(productOption) {
      if (productOption.is_preselected) {
        return <option>{productOption.placeholder_value}</option>;
      }
    }

    var nonColorSelectors = [],
      colorSelectors = [];

    selectorsOptions.forEach((selectorOptions, selectorOptionsIndex) => {
      var displayInputType =
        productOptions[selectorOptionsIndex]['display_input_type'];

      if (displayInputType === 'swatch') {
        colorSelectors.push(
          buildSwatchOptions(
            productOptions[selectorOptionsIndex],
            selectorsOptions[selectorOptionsIndex],
            selectedOptions,
            colorMetaData
          )
        );
      } else if (displayInputType === 'radio') {
        nonColorSelectors.push(
          buildRadioOptions(
            productOptions[selectorOptionsIndex],
            selectorsOptions[selectorOptionsIndex],
            selectedOptions
          )
        );
      } else {
        nonColorSelectors.push(
          buildDropdownOptions(
            productOptions[selectorOptionsIndex],
            selectorsOptions[selectorOptionsIndex]
          )
        );
      }
    });

    return (
      <div className={classes}>
        {colorSelectors}
        {nonColorSelectors}
      </div>
    );
  }
}
