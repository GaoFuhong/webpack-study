/*
    webpack.config.js：webpack的配置文件
    作用：指示webpack干哪些活（当运行webpack指令时，会加载里面的配置）

    所有构件工具都是基于 node.js 平台运行的，模块化默认采用commonjs
*/

// resolve 用来拼接绝对路径的方法
const { resolve } = require("path")
module.exports = {
    // webpack 配置
    // 入口起点：
    entry: "./src/index.js",
    // 输出：
    output: {
        // 输出文件名
        filename: "built.js",
        // 输出路径
        // __dirname 是当前文件所在目录的绝对路径
        path: resolve(__dirname, "build")
    },
    // loader 的配置
    module: {
        rules: [
            // 详细的 loader 配置
            // 不同的文件必须配置不同的loader处理
            {
                // 匹配哪些文件
                test: /\.css$/,
                // 使用哪些 loader 进行处理
                // use数组中执行顺序：从右往左（从下往上）依次执行
                use: [
                    // 创建style标签，将js中的样式资源插入到<head></head>中生效
                    "style-loader",
                    // css-loader 将css文件变成commonjs模块加载到js中，里面的内容是样式字符串
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    // less-loader 将less文件编译成css文件，需要下载less 和 less-loader
                    "less-loader"
                ]
            }
        ]
    },
    // plugins 的配置
    plugins: [
        // 详细的 plugins 配置
    ],
    mode: "development" // 开发模式
    // mode: "production" // 生产模式
}