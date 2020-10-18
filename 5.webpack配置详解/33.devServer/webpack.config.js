const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/[name].js',
    path: resolve(__dirname, 'build'),
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
  mode: 'development',
  resolve: {
    alias: {
      $css: resolve(__dirname, 'src/css'),
    },
    extensions: ['.js', '.json', '.css'],
    modules: [resolve(__dirname, '../../node_modules'), 'node_modules'],
  },
  devServer: {
    // 代码运行的目录
    contentBase: resolve(__dirname, 'build'),
    // 监视 contentBase 文件目录下的所有文件，一旦发生变化就 reload
    watchContentBase: true,
    watchOptions: {
      // 忽略监视某些文件
      ignore: /node_modules/,
    },
    // 启动gzip压缩
    compress: true,
    // 端口号
    port: 5000,
    // 域名
    host: 'localhost',
    // 自动打开浏览器
    open: true,
    // 开启HMR功能
    hot: true,
    // 不要显示启动服务器日志信息
    clientLogLevel: 'none',
    // 除了一些基本的启动信息，其他内容都不要打印
    quiet: true,
    // 如果出错，不要全屏显示提示
    overlay: false,
    // 服务器代理 --> 解决开发环境的跨域问题
    proxy: {
      // 一旦devServer服务器（5000）接收到/api/xxx的请求，就会把请求转发到另外一个服务器（3000）
      '/api': {
        target: 'http://localhost:3000',
        // 发送请求时，路径重写：/api/xxx -> /xxx （去掉/api）
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
