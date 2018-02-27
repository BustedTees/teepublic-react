export default class NumberHelper {
  constructor(number) {
    this.number = number;
  }

  toKMBT(decimalPoints) {
    var number = this.number;
    if (number > 999999999999) {
      number = (number / 1000000000000).toFixed(decimalPoints) + 'T';
    } else if (number > 999999999) {
      number = (number / 1000000000).toFixed(decimalPoints) + 'B';
    } else if (number > 999999) {
      number = (number / 1000000).toFixed(decimalPoints) + 'M';
    } else if (number > 999) {
      number = (number / 1000).toFixed(decimalPoints) + 'K';
    } else {
      number = number.toFixed(decimalPoints);
    }
    return number;
  }

  toPercentage(decimalPoints) {
    return `${this.number.toFixed(decimalPoints)}%`;
  }

  toCommaSeprated(decimalPoints = -1) {
    var number = this.number;
    if (!number) return '';

    if (decimalPoints >= 0) {
      number = this.number.toFixed(decimalPoints);
    }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
