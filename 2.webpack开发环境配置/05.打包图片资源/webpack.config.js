const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "built.js",
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                // 使用多个loader处理loader
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                // 默认处理不了html中的<img>图片
                test: /\.(jpg|png|gif)$/,
                // 使用一个loader处理loader
                // 下载url-loader file-loader
                loader: "url-loader",
                options: {
                    // 图片大小小于8kb，就会被base64处理
                    // 优点：减少请求数量（减轻服务器压力）
                    // 缺点：图片体积更大（文件请求速度变慢）
                    limit: 8 * 1024,
                    name: "[hash:10].[ext]"
                }
            },
            {
                test: /\.html$/,
                // 处理html文件中的img图片（负责引入img，从而能被url-loader处理）
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: "development"
}