const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const extractPlugin = new MiniCssExtractPlugin({
    filename: 'main.css'
});

const htmlPlugin = new HtmlWebpackPlugin({
  template: 'src/index.html'
});
const cleanPlugin = new CleanWebpackPlugin();

const imageMinPlugin = new ImageMinimizerPlugin({
  minimizerOptions: {
    plugins: [
      ['gifsicle', { interlaced: true }],
      ['jpegtran', { progressive: true }],
      ['optipng', { optimizationLevel: 5 }],
      [
        'svgo',
        {
          plugins: [
            {
              removeViewBox: false,
            },
          ],
        },
      ],
    ],
  },
})

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '/dist',
              },
            },
            'css-loader',
            'sass-loader',
          ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: './resources/',
            publicPath: './resources/',
          }
        }
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {         
        test: /\.html$/i,
        use: {
          loader: 'html-loader',
        }
      },
      {
        test: /\.(mov|mp4)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: 'resources/',
            publicPath: 'resources/',
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        loader: 'url-loader',
      },
    ],
  },
  plugins: [
      extractPlugin,
      imageMinPlugin,
      htmlPlugin,
      cleanPlugin
  ]
};