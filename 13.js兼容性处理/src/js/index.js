/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
// import '@babel/polyfill';

const add = (a, b) => a + b;

console.log(add(2, 3));

const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('定时器执行完了~');
    resolve();
  }, 1000);
});
console.log(promise);
