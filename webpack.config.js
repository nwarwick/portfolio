var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: ['css-loader', 'sass-loader'],
                    publicPath: './'
                })

            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: ['file-loader']
            },
            {
                test: /\.(pdf|ico)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }],
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: './src/index.html', // Load a custom template (ejs by default see the FAQ for details)
        }),
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            filename: 'contact.html',
            template: './src/contact.html', // Load a custom template (ejs by default see the FAQ for details)
        }),
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            filename: 'about.html',
            template: './src/about.html', // Load a custom template (ejs by default see the FAQ for details)
        }),
        new HtmlWebpackPlugin({
            title: 'Resume',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            filename: 'resume.html',
            template: './src/resume.html', // Load a custom template (ejs by default see the FAQ for details)
        }),
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            filename: 'projects.html',
            template: './src/projects.html', // Load a custom template (ejs by default see the FAQ for details)
        }),
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            filename: 'dreamr.html',
            template: './src/projects/dreamr.html', // Load a custom template (ejs by default see the FAQ for details)
        }),
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            filename: 'earthquake-visualizer.html',
            template: './src/projects/earthquake-visualizer.html', // Load a custom template (ejs by default see the FAQ for details)
        }),
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            hash: true,
            filename: 'kitten-ninja.html',
            template: './src/projects/kitten-ninja.html', // Load a custom template (ejs by default see the FAQ for details)
            publicPath: "projects/"
        }),
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            filename: 'kozy.html',
            template: './src/projects/kozy.html', // Load a custom template (ejs by default see the FAQ for details)
        }),
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            filename: 'pacethemusic.html',
            template: './src/projects/pacethemusic.html', // Load a custom template (ejs by default see the FAQ for details)
        }),
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            filename: 'panzer.html',
            template: './src/projects/panzer.html', // Load a custom template (ejs by default see the FAQ for details)
        }),
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            filename: 'custom-website.html',
            template: './src/projects/custom-website.html', // Load a custom template (ejs by default see the FAQ for details)
        }),
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            filename: 'calcohol.html',
            template: './src/projects/calcohol.html', // Load a custom template (ejs by default see the FAQ for details)
        }),
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            filename: 'chomp.html',
            template: './src/projects/chomp.html', // Load a custom template (ejs by default see the FAQ for details)
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        }),
    ]
}