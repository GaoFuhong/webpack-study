/* eslint-disable no-console */

import '../css/index.css';
import { mul } from './test';

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));

console.log(mul(2, 4));
