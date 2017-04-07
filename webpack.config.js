const path = require('path');
const glob = require('glob');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');

module.exports = {
  entry: path.join(__dirname, 'src', 'app.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            // configurações em .babelrc
            use: [
                    {
                    loader: 'babel-loader',
                    options: {presets: [['es2015', {modules: false}]]},
                    },
                ], 
        },

        {
            test: /\.js$/,
            enforce: 'pre',
            // configurações em .eslintrc.js
            use: [{loader: 'eslint-loader'}],
        },

        {
            test: /\.(sass|scss|css)$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use:[
                {loader: 'css-loader',
                     options: {
                         importLoaders: 1,
                    },
                },
                {loader: 'postcss-loader'},
                {loader: 'sass-loader'}
            ]})
        },

        {
            test: /\.(eot|otf|svg|ttf|woff|woff2)$/,
            use: [
            {
                loader: 'file-loader',
                options: {name: 'fonts/[name].[ext]'},
            },
            ],
        },

        {
            test: /\.(gif|jpg|png|webp)$/,
            use: [
            {
                loader: 'file-loader',
                options: {name: 'images/[name].[ext]'},
            },
            ],
        }
      ]
  },
  
  plugins: [
    new ExtractTextPlugin({
        filename: 'style.css',
        allChunks: true,
        disable: false
    }),
    
    new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {discardComments: {removeAll: true }},
        canPrint: true
    }),

    /*
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
        paths: glob.sync(path.join(__dirname, '/*.html')),
    
    })
    */

  ]
};