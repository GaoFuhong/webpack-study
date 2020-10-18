const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    // 文件名称（指定名称+目录）
    filename: 'js/[name].js',
    // 输出文件目录（所有资源打包输出的公共目录）
    path: resolve(__dirname, 'build'),
    // 所有资源引入的公共路径前缀
    publicPath: '/',
    // 非入口chunk的名称
    chunkFilename: 'js/[name]_chunk.js',
    // 整个库向外暴露的变量名
    // library: '[name]',
    // libraryTarget: 'window', // 变量名添加到哪个上 browser
    // libraryTarget: 'global', // 变量名添加到哪个上 node
    // libraryTarget: 'commonjs',
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  mode: 'development',
};
