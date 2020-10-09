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
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            // 打包其他资源（除了 html/css/js 以外的其他资源）
            {
                // 排除 html/css/js 资源
                exclude: /\.(html|css|js)$/,
                loader: "file-loader",
                options: {
                    name: "[hash:10].[ext]"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: "development",
    // 开发服务器devServer：自动化（自动编译、自动打开浏览器、自动刷新浏览器。。。）
    // 特点：只会在内存中编译打包，不会有任何输出
    // 启动devServer指令：npx webpack-dev-server
    devServer: {
        // 项目构建后的路径
        contentBase: resolve(__dirname, "build"),
        // 启动gzip压缩
        compress: true,
        // 端口号
        port: 3000,
        // 自动打开默认浏览器
        open: true
    }
}