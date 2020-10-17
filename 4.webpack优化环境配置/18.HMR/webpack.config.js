/*
    HMR: hot module replacement 热模块替换/模块热替换
        作用：一个模块发生变化，只会重新打包这一个模块，而不会重新打包全部模块，极大提升项目构建速度
        样式文件：可以使用HMR功能，因为style-loader内部实现了
        js文件：默认不能HMR功能 --> 需要修改js文件的代码，添加支持HMR功能的代码
            HMR功能对js文件而言，只能处理非入口js文件的其他文件
        html文件：默认不能HMR功能，同时会使html文件不能热更新（不用做HMR功能）
            解决办法：修改entry入口，将html文件引入
*/

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/js/index.js', './src/index.html'],
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      // loader的配置
      {
        // 处理 less 资源
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        // 处理 css 资源
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // 处理图片资源
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          esModule: false, // 关闭es6模块化
          outputPath: 'images',
        },
      },
      {
        // 处理html中的img资源
        test: /\.html/,
        loader: 'html-loader',
      },
      {
        // 处理其他资源
        exclude: /\.(less|css|png|jpg|gif|html|js)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'media',
        },
      },
    ],
  },
  plugins: [
    // plugins 的配置
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true,
    // 支持热模块替换
    hot: true,
  },
};
