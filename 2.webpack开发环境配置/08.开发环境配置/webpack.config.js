/*
    开发环境配置
*/

const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            // loader的配置
            {
                // 处理 less 资源
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                // 处理 css 资源
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                // 处理图片资源
                test: /\.(png|jpg|gif)$/,
                loader: "url-loader",
                options: {
                    limit: 8 * 1024,
                    name: "[hash:10].[ext]",
                    esModule: false, // 关闭es6模块化
                    outputPath: "images"
                }
            },
            {
                // 处理html中的img资源
                test: /\.html/,
                loader: "html-loader"
            },
            {
                // 处理其他资源
                exclude: /\.(less|css|png|jpg|gif|html|js)$/,
                loader: "file-loader",
                options: {
                    name: "[hash:10].[ext]",
                    outputPath: "media"
                }
            }
        ]
    },
    plugins: [
        // plugins 的配置
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: "development",
    devServer: {
        contentBase: resolve(__dirname, "build"),
        compress: true,
        port: 3000,
        open: true
    }
}