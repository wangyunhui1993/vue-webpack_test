const path = require('path');    //node.js里面一个基本的包
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// __dirname:当前文件所在的目录，也就是根目录
module.exports = {
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
        new VueLoaderPlugin()
    ] 
}