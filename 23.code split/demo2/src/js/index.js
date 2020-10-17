/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

import $ from 'jquery';

console.log($);

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));
