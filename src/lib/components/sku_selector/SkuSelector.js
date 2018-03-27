import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Row from '../row/Row';
import Column from '../column/Column';

const CLASS_ROOT = 'tp-sku-selector';

export default class SkuSelector extends Component {
  render() {
    const {
      onSkuChange,
      productOptions,
      selectorsOptions,
      className,
      selectedOptions,
      colorMetaData
    } = this.props;
    const classes = classnames(CLASS_ROOT, className);

    function buildSwatchOptions(
      productOption,
      selectorOptions,
      selectedOptions,
      colorMetaData
    ) {
      return (
        <Row key={productOption.name}>
          {selectorOptions.map((selectorOption, index) => (
            <div key={selectorOption.value}>
              <input
                type="radio"
                name={productOption.name}
                value={selectorOption.value}
                id={selectorOption.value}
                checked={
                  selectorOption.value == selectedOptions[productOption.name]
                }
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
          ))}
        </Row>
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
      return colorData.find(record => record.name == value);
    }

    function buildRadioOptions(
      productOption,
      selectorOptions,
      selectedOptions
    ) {
      return (
        <Row key={productOption.name}>
          <Column>{productOption.name}</Column>
          <Column>
            {selectorOptions.map((selectorOption, index) => (
              <div key={selectorOption.value}>
                <input
                  type="radio"
                  name={productOption.name}
                  value={selectorOption.value}
                  id={selectorOption.value}
                  checked={
                    selectorOption.value == selectedOptions[productOption.name]
                  }
                  onChange={onSkuChange}
                />
                <label htmlFor={selectorOption.value}>
                  {selectorOption.value}
                </label>
              </div>
            ))}
          </Column>
        </Row>
      );
    }
    function buildDropdownOptions(productOption, selectorOptions) {
      return (
        <Row key={productOption.name}>
          <Column>{productOption.name}</Column>
          <Column>
            <select
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
          </Column>
        </Row>
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
      if (displayInputType == 'swatch') {
        colorSelectors.push(
          buildSwatchOptions(
            productOptions[selectorOptionsIndex],
            selectorsOptions[selectorOptionsIndex],
            selectedOptions,
            colorMetaData
          )
        );
      } else if (displayInputType == 'radio') {
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
      <Column className={classes} justify="center" align="start">
        {colorSelectors}
        {nonColorSelectors}
      </Column>
    );
  }
}
