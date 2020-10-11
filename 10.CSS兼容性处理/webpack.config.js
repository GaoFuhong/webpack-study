const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 设置nodejs环境变量
process.env.NODE_ENV = "development";

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", // loader的默认配置方式
                    /*
                        css 兼容性处理：postcss --> postcss-loader postcss-preset-env

                        postcss-preset-env：帮助postcss找到package.json中browserslist里面的配置，通过配置加载指定的CSS样式兼容性

                        "browserslist": {
                            // 开发环境 --> 设置node环境变量：process.env.NODE_ENV = "development"
                            "developmet": [
                            "last 1 chrome version",
                            "last 1 firefox version",
                            "last 1 safari version"
                            ],
                            // 生产环境 --> 默认是看生产环境
                            "production": [
                            ">0.2%",
                            "not dead",
                            "not op_mini all"
                            ]
                        }
                    */
                    // postcss 的配置在postcss.config.js中
                    "postcss-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "css/built.css"
        })
    ],
    mode: "development"
}