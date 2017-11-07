'use strict';

var _kakezan = require('./kakezan');

var _kakezan2 = _interopRequireDefault(_kakezan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var v = (0, _kakezan2.default)(2, 3); // import {add, mul} from './calc'
//
// console.log(add(2, 3))
// console.log(mul(6, 8))

// import * as ct from './calc'
//
// console.log(ct.add(2, 3))
// console.log(ct.mul(6, 8))

console.log(v);