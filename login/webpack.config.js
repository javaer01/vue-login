const htmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    entry: './main.js',             //  配置入口文件
    output: {                           //  配置输入文件
        path: __dirname,            //  输入文件的路径,此处设为当前路径
        filename:  'bundle.js',     //指定输入的文件名称
    },
    resolve: {                          //其他的配置选项
        alias: {
            'vue': 'vue/dist/vue.js'//vue.js文件路径配置
        }
    },
    module: {
        rules: [                        //模块规则
            {                               //用vue-loader处理.vue
                test: /\.vue$/,
                use:'vue-loader'
            },
            {                               //用style-loader和css-loader处理.css
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,            //用style-loader,css-loader和sass-loader处理.scss
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|gif|tmp|jepg)$/,
                use: 'url-loader'
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: 'url-loader'
            }
        ]                   
    },
    plugins: [                          //插件
        new htmlWebpackPlugin({
            template: 'index.html'      //为index.html自动引入打包好的bundle.js
        }),
        new VueLoaderPlugin()           //需要把vue-loader插件加进去
    ]
}