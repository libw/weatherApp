var path =  require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
process.env.NODE_ENV = "development";
module.exports = {
	entry:"./app/index.jsx",
    output: {
        path: path.resolve(__dirname,'/app/build'),
        filename: "build.js"
    },
     resolve:{
        extensions:[ '.js','.jsx']
    },
	module:{
		rules:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                options:{presets:['react','es2015']}
            },
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            },
            {//处理less
                test: /\.less$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test:/\.(png|gif|jpg|jpeg|bmp)$/i,
                loader:'url-loader?limit=0&name=images/[name].[ext]'
            },
            {
                test:/\.(woff|woff2|svg|ttf|eot)($|\?)/i,
                loader:'url-loader?limit=500&name=fonts/[name].[ext]'
            }
        ]
    },
    externals: {
        jquery: 'window.$'
    },
	plugins:[
		new webpack.LoaderOptionsPlugin({
	            options:{
	                postcss: [
	                    require('autoprefixer') //调用autoprefixer插件
	                ]
	            }
	    }),
		new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.ProvidePlugin({
            "React": "react",
            "ReactDOM":'react-dom'
        }),
         new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),
        // 热加载插件
        new webpack.HotModuleReplacementPlugin()
	],
	devServer:{
        contentBase: "./",
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        port:8080,  //端口8080
        hot: true  // 使用热加载插件 HotModuleReplacementPlugin
    }
}