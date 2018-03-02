var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NumberHelper = function () {
  function NumberHelper(number) {
    _classCallCheck(this, NumberHelper);

    this.number = number;
  }

  _createClass(NumberHelper, [{
    key: 'toKMBT',
    value: function toKMBT(decimalPoints) {
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
  }, {
    key: 'toPercentage',
    value: function toPercentage(decimalPoints) {
      return this.number.toFixed(decimalPoints) + '%';
    }
  }, {
    key: 'toCommaSeprated',
    value: function toCommaSeprated() {
      var decimalPoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

      var number = this.number;
      if (!number) return '';

      if (decimalPoints >= 0) {
        number = this.number.toFixed(decimalPoints);
      }
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }]);

  return NumberHelper;
}();

export default NumberHelper;