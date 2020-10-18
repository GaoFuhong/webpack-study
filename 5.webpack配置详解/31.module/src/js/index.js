/* eslint-disable no-console */
// import add from './add';
import sub from './sub';

console.log('index.js 文件加载了~~~');

import ('./add').then(({default: add}) => {
    console.log(add(2, 3));
});
console.log(sub(2, 3));
