const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    performance: { hints: false },
    entry: {
        'scripts': './front/js/main.js',
        'main': './front/scss/main.scss',
        'print': './front/scss/print.scss'
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'front/dist'),
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('autoprefixer')(),
                                    require('cssnano')()
                                ],
                                ident: 'postcss'
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    "presets": [
                        ["@babel/preset-env", {
                            "targets": {
                                "browsers": ["last 2 versions", "safari >= 7"]
                            }
                        }]
                    ]
                },
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            "window.jQuery": "jquery",
            jQuery: "jquery"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        }),
        new SVGSpritemapPlugin("front/icons/**/*.svg", {
            output: {
                filename: "../images/icons.svg"
            },
            sprite: {
                prefix: false,
                generate: {
                    title: false
                }
            }
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
            cleanOnceBeforeBuildPatterns: [],
            protectWebpackAssets: false,
            cleanAfterEveryBuildPatterns: ['print.min.js', 'main.min.js']
        })
    ]
};
