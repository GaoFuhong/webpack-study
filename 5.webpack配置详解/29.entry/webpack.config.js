const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * entry：入口起点
 *   1. string --> './src/js/index.js'
 *      单入口
 *      打包生成一个chunk，输出一个bundle文件，此时chunk的名称默认是main。
 *   2. array --> ['./src/js/index.js', './src/js/add.js']
 *      多入口
 *      所有入口文件只会生成一个chunk，输出一个bundle文件。
 *      作用：在HMR功能中让html热更新生效
 *   3. object
 *      -->
 *          entry: {
                index: './src/js/index.js',
                add: './src/js/add.js',
            },
 *      多入口
 *      有几个入口文件就生成几个chunk，同时输出几个bundle文件。
 *   特殊用法：
 *      entry: {
            index: ['./src/js/index.js', './src/js/sub.js'],
            add: './src/js/add.js',
        },
 */

module.exports = {
  entry: {
    index: ['./src/js/index.js', './src/js/sub.js'],
    add: './src/js/add.js',
  },
  output: {
    filename: 'js/[name].js',
    path: resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  mode: 'development',
};
