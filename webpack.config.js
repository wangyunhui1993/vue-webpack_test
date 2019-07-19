const path = require('path');    //node.js里面一个基本的包
const HTMLPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const wbpack = require("webpack")
// 属性NODE_ENV实在package.json文件里定义的  定义的属性可以在process.env对象里取
// 判断当前的环境是否是开发环境
const isDev = process.env.NODE_ENV === 'development'
// __dirname:当前文件所在的目录，也就是根目录
const config = {
    target:'web',
    entry: path.join(__dirname, 'src/index.js'),  //入口文件
    output: {
        filename: 'bundle.js',   //出口文件
        path: path.join(__dirname, 'dist')   //出口文件的的目录
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',   //使用vue-loader把vue文件变成浏览器可执行的js代码
            },
            {
                test: /\.css$/,
                use: [   //把css文件写到js里面
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.styl/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test:/\.(gif|jpg|png|jpeg|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024 * 500,   //图片的大小小于500kb时就把图片转换成base64写到js代码里面去
                            name: '[name]-aaa.[ext]'  //定义输出的图片的名字
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new wbpack.DefinePlugin({
            'process.env':{
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin()
    ] 
}

if(isDev) {
    config.devServer = {
        port: 8000,
        host: '0.0.0.0',  //设置为0.0.0.0的好处是不仅能用losthost访问，还能用本机的IP：127.0.0.1来访问，也可以在局域网内输入ip地址来访问。（终于知道了之前为什么同事不能访问我的项目了）
        overlay: {
            errrors: true,
        }
    }
}

module.exports = config