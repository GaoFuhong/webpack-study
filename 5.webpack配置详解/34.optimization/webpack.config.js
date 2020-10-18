const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/[name].[contenthash:10].js',
    path: resolve(__dirname, 'build'),
    chunkFilename: 'js/[name].[contenthash:10]_chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  mode: 'production',
  resolve: {
    alias: {
      $css: resolve(__dirname, 'src/css'),
    },
    extensions: ['.js', '.json', '.css'],
    modules: [resolve(__dirname, '../../node_modules'), 'node_modules'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      // minSize: 30 * 1024, // 分割的chunk最小为30kb
      // maxSize: 0, // 分割的chunk没有最大限制
      // minChunks: 1, // 要提取的chunk最少被引用1次
      // maxAsyncRequests: 5, // 按需加载时，并行加载的文件最大数量为5
      // maxInitialRequests: 3, // 入口js文件最大并行请求数量为3
      // automaticNameDelimiter: '~', // 名称连接符为~
      // name: true, // 可以使用命名规则
      // // 分割 chunk 的组
      // cacheGroups: {
      //   // node_modules文件会被打包到vendors组的chunk中 --> wendors~xxx.js
      //   // 同时满足上满配置的公共规则，如：大小最小为30kb，至少被引用1次等。
      //   vendors: {
      //     test: /[\\/]node_modules[\\/]/,
      //     // 优先级
      //     priority: -10,
      //   },
      //   default: {
      //     // 要提取的chunk至少被引用2次
      //     minChunks: 2,
      //     // 优先级，较低
      //     priority: -20,
      //     // 如果当前要打包的模块和之前已经被提取的模块是同一个，则不需要重新打包，直接复用
      //     reuseExistingChunk: true,
      //   },
      // },
    },
    // 将当前模块记录其他模块的hash值单独打包为一个文件 runtime
    // 解决的问题：修改a文件导致b文件的hash值变化使缓存失效的问题
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
    // ？？？配置好minimizer后打包出错
    minimizer: [
      // 配置生产环境的压缩方案：js和css
      new TerserWebpackPlugin({
        // 开启缓存
        cache: true,
        // 开启多进程打包
        parallel: true,
        // 启动source-map
        sourceMap: true,
      }),
    ],
  },
};
