var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import NumberHelper from './NumberHelper';
var CURRENCY_SYMBOLS = {
  ALL: 'Lek',
  AFN: '$',
  ARS: '$',
  AWG: 'ƒ',
  AUD: '$',
  AZN: '₼',
  BSD: '$',
  BBD: '$',
  BYN: 'Br',
  BZD: 'BZ$',
  BMD: '$',
  BOB: '$b',
  BAM: 'KM',
  BWP: 'P',
  BGN: 'лв',
  BRL: 'R$',
  BND: '$',
  KHR: '៛',
  CAD: '$',
  KYD: '$',
  CLP: '$',
  CNY: '¥',
  COP: '$',
  CRC: '₡',
  HRK: 'kn',
  CUP: '₱',
  CZK: 'Kč',
  DKK: 'kr',
  DOP: 'RD$',
  XCD: '$',
  EGP: '£',
  SVC: '$',
  EUR: '€',
  FKP: '£',
  FJD: '$',
  GHS: '¢',
  GIP: '£',
  GTQ: 'Q',
  GGP: '£',
  GYD: '$',
  HNL: 'L',
  HKD: '$',
  HUF: 'Ft',
  ISK: 'kr',
  INR: '₹',
  IDR: 'Rp',
  IRR: '﷼',
  IMP: '£',
  ILS: '₪',
  JMD: 'J$',
  JPY: '¥',
  JEP: '£',
  KZT: 'лв',
  KPW: '₩',
  KRW: '₩',
  KGS: 'лв',
  LAK: '₭',
  LBP: '£',
  LRD: '$',
  MKD: 'ден',
  MYR: 'RM',
  MUR: '₨',
  MXN: '$',
  MNT: '₮',
  MZN: 'MT',
  NAD: '$',
  NPR: '₨',
  ANG: 'ƒ',
  NZD: '$',
  NIO: 'C$',
  NGN: '₦',
  NOK: 'kr',
  OMR: '﷼',
  PKR: '₨',
  PAB: 'B/.',
  PYG: 'Gs',
  PEN: 'S/.',
  PHP: '₱',
  PLN: 'zł',
  QAR: '﷼',
  RON: 'lei',
  RUB: '₽',
  SHP: '£',
  SAR: '﷼',
  RSD: 'Дин.',
  SCR: '₨',
  SGD: '$',
  SBD: '$',
  SOS: 'S',
  ZAR: 'R',
  LKR: '₨',
  SEK: 'kr',
  CHF: 'CHF',
  SRD: '$',
  SYP: '£',
  TWD: 'NT$',
  THB: '฿',
  TTD: 'TT$',
  TRY: '₺',
  TVD: '$',
  UAH: '₴',
  GBP: '£',
  USD: '$',
  UYU: '$U',
  UZS: 'лв',
  VEF: 'Bs',
  VND: '₫',
  YER: '﷼',
  ZWD: 'Z$'
};

var MoneyHelper = function () {
  function MoneyHelper(amount) {
    var currency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'USD';

    _classCallCheck(this, MoneyHelper);

    this.amount = amount, this.symbol = CURRENCY_SYMBOLS[currency];
  }

  _createClass(MoneyHelper, [{
    key: 'KMBT',
    value: function KMBT(decimalPoints) {
      return '' + this.symbol + new NumberHelper(this.amount).toKMBT(decimalPoints);
    }
  }, {
    key: 'commaSeprated',
    value: function commaSeprated() {
      return '' + this.symbol + new NumberHelper(this.amount).toCommaSeprated();
    }
  }]);

  return MoneyHelper;
}();

export default MoneyHelper;