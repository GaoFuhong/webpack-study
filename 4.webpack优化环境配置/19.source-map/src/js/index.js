/* eslint-disable no-console */
// 引入

import '../css/index.less';
import '../css/iconfont.css';
import print from './test-print';

console.log('index.js文件被加载了~~');
console.log('test-print.js文件被加载了~~');
print();

function add(x, y) {
  return x + y;
}

console.log(add(2, 4));

if (module.hot) {
  // 如果module.hot为true，说明开启了HMR功能，让HMR功能代码生效
  module.hot.accept('./test-print.js', () => {
    // 方法会监听test-print.js文件的变化，如果发生变化，其他模块不会重新打包构建，会执行后面的回调函数。
    print();
  });
}
