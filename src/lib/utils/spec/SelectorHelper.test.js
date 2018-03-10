import SelectorHelper from '../SelectorHelper';

describe('SelectorHelper', () => {
  var getSelectorHelper = function() {
    return new SelectorHelper(
      [
        { size: 'extra small', color: 'red', style: 'classic tee' },
        { size: 'small', color: 'red', style: 'classic tee' },
        { size: 'medium', color: 'red', style: 'classic tee' },
        { size: 'large', color: 'red', style: 'classic tee' },
        { size: 'extra large', color: 'red', style: 'classic tee' },
        { size: 'small', color: 'blue', style: 'classic tee' },
        { size: 'medium', color: 'blue', style: 'classic tee' },
        { size: 'large', color: 'blue', style: 'classic tee' },
        { size: 'extra large', color: 'blue', style: 'classic tee' },
        { size: 'small', color: 'gree', style: 'classic tee' },
        { size: 'medium', color: 'gree', style: 'classic tee' },
        { size: 'large', color: 'gree', style: 'classic tee' },
        { size: 'extra large', color: 'gree', style: 'classic tee' },
        { size: 'small', color: 'red', style: 'v-neck tee' },
        { size: 'medium', color: 'red', style: 'v-neck tee' },
        { size: 'large', color: 'red', style: 'v-neck tee' },
        { size: 'extra large', color: 'red', style: 'v-neck tee' },
        { size: 'small', color: 'purple', style: 'v-neck tee' },
        { size: 'medium', color: 'purple', style: 'v-neck tee' },
        { size: 'large', color: 'purple', style: 'v-neck tee' },
        { size: 'extra large', color: 'purple', style: 'v-neck tee' },
        { size: 'small', color: 'blue', style: 'v-neck tee' },
        { size: 'medium', color: 'blue', style: 'v-neck tee' },
        { size: 'large', color: 'blue', style: 'v-neck tee' },
        { size: 'extra large', color: 'blue', style: 'v-neck tee' },
        { size: 'small', color: 'gree', style: 'v-neck tee' },
        { size: 'medium', color: 'gree', style: 'v-neck tee' },
        { size: 'large', color: 'gree', style: 'v-neck tee' },
        { size: 'extra large', color: 'gree', style: 'v-neck tee' },
        { size: 'extra extra large', color: 'gree', style: 'v-neck tee' }
      ],
      ['style', 'size', 'color']
    );
  };

  it('productsWithAttributes', () => {
    var matchedProducts = getSelectorHelper().productsWithAttributes({
      size: 'large',
      color: 'red'
    });

    expect(matchedProducts).toHaveLength(2);
  });

  it('optionsFor', () => {
    var availableOptions = getSelectorHelper().optionsFor('size');

    expect(availableOptions).toHaveLength(6);
  });

  describe('optionSets', () => {
    it('returns options for all attributes', () => {
      var optionSets = getSelectorHelper().optionSets({ style: 'classic tee' });
      expect(optionSets).toHaveLength(3);
    });

    it('does not include outout-of-scope values', () => {
      var optionSets = getSelectorHelper().optionSets({ style: 'classic tee' });

      expect(optionSets[2]).not.toContain('extra extra large');
    });

    it('does not include outout-of-scope values again', () => {
      var optionSets = getSelectorHelper().optionSets({
        size: 'extra extra large'
      });

      expect(optionSets[2]).not.toContain('extra extra large');
    });
  });
});
