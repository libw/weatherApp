var path =  require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
process.env.NODE_ENV = "production";
module.exports = {
	entry:{
        'app':"./app/index.jsx",
        'common':["react","react-dom"]
    },
    output: {
        path:path.resolve(__dirname,'build'),
        filename: "./js/[name].[chunkhash:8].js"
    },
     resolve:{
        extensions:[ '.js','.jsx'],
    },
	module:{
		rules:[
            {
                test:/\.jsx?$/i,
                exclude:/node_modules/,
                loader:'babel-loader',
                options:{presets:['react','es2015']}
            },
            {//处理css
                test: /\.css$/i,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader'] })
            },
            {//处理less
                test: /\.less$/i,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader','less-loader'] })
            },
            {
                test:/\.(png|gif|jpg|jpeg|bmp)$/i,
                loader:'url-loader?limit=50&name=images/[name].[ext]'
            },
            {
                test:/\.(woff|woff2|svg|ttf|eot)($|\?)/i,
                loader:'url-loader?limit=500&name=fonts/[name].[ext]'
            }
        ]
    },
	plugins:[

		new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.ProvidePlugin({
            "React": "react",
            "ReactDOM":'react-dom'
        }),
        new CommonsChunkPlugin({ //提取公共代码
            name: 'common',
            filename: './js/[name].[chunkhash:8].js'
        }),
        new ExtractTextPlugin('css/[name].[chunkhash:8].css'),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                //supresses warnings, usually from module minification
                warnings: false
            }
        }),
	],

}