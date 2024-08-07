const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

class WebpackConfig {
  constructor(options) {
    // 基于当前目录
    this.rootDir = process.cwd();
    this.isProd = process.env.NODE_ENV === 'production';

    this.name = options.name;
    this.entry = options.entry;
  }

  getConfig() {
    const name = this.name;
    const isDev = !this.isProd;
    const isProd = this.isProd;

    // HMR 不支持 chunkhash，只支持 hash
    const useVersioning = isProd;

    const config = {
      name,
      mode: isProd ? 'production' : 'development',
      // HMR/Live Reloading broken
      // https://github.com/webpack/webpack-dev-server/issues/2758#issuecomment-710086019
      target: isProd ? 'browserslist' : 'web',
      devtool: isProd ? false : 'eval',
      resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        modules: [
          this.rootDir,
          'node_modules',
        ],
      },
      // NOTE: 需直接传入结果，不能使用回调函数，否则 HMR 不生效
      entry: this.entry,
      output: {
        path: path.resolve(this.rootDir, 'dist', name),
        // 指定生成 JS 和 CSS 的根路径，这样多级页面（如 sub-dir/sub-page）才能访问到
        publicPath: '/',
        filename: useVersioning ? 'dist/[name]-[chunkhash:6].js' : '[name].js',
        chunkFilename: useVersioning ? 'dist/[name]-[chunkhash:6].js' : '[name].js',
        pathinfo: false,
        // Fix https://reactjs.org/docs/cross-origin-errors.html
        crossOriginLoading: 'anonymous',
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: [
              /node_modules/,
              /\.test\.tsx?$/,
            ],
          },
          {
            test: /.jsx?$/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true,
                  // https://github.com/facebook/create-react-app/issues/6846
                  cacheCompression: false,
                  plugins: [
                    isDev && require.resolve('react-refresh/babel'),
                  ].filter(Boolean),
                },
              },
            ],
            exclude: [
              /node_modules/,
              /\.test\.js$/,
            ],
          },
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
              MiniCssExtractPlugin.loader,
              // 'style-loader',
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      [
                        'autoprefixer',
                      ],
                    ],
                  },
                },
              },
              {
                loader: 'sass-loader',
              },
            ],
          },
          {
            test: /\.less$/,
            use: [
              MiniCssExtractPlugin.loader,
              // 'style-loader',
              'css-loader',
              {
                loader: 'less-loader',
              },
            ],
          },
          {
            test: /\.(jpg|png|gif|svg|ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader',
            options: {
              name: useVersioning ? 'dist/[path][name]-[hash:6].[ext]' : '[path][name].[ext]',
            },
          },
        ],
      },
      optimization: {
        runtimeChunk: true,
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.BASE_API_URL': JSON.stringify(process.env.BASE_API_URL),
          'process.env.ROUTER_MODE': JSON.stringify(process.env.ROUTER_MODE),
          'process.env.API_REWRITE': JSON.stringify(process.env.API_REWRITE),
        }),
        new HtmlWebpackPlugin({
          filename: name + '.html',
          template: __dirname + '/index.html',
          minify: false,
        }),
        new MiniCssExtractPlugin({
          filename: useVersioning ? 'dist/[name]-[contenthash:6].css' : '[name].css',
          chunkFilename: useVersioning ? 'dist/[id]-[contenthash:6].css' : '[id].css',
          // 异步加载时极易出现顺序警告
          ignoreOrder: true,
        }),
        isDev && new ReactRefreshWebpackPlugin(),
        isProd && new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false,
        }),
        // new HardSourceWebpackPlugin(),
        // new BundleAnalyzerPlugin(),
      ].filter(Boolean),
      devServer: {
        hot: true,
        // Fix "Invalid Host/Origin Header" warning
        // @link https://github.com/webpack/webpack-dev-server/issues/1604
        allowedHosts: 'all',
        historyApiFallback: {
          rewrites: [
            // NOTE: 如果有多个入口，需在这里加上
            {from: /^\/admin/, to: '/admin.html'},
          ],
        },
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
      watchOptions: {
        ignored: [
          '**/node_modules',
          '**/*.php',
        ],
      },
      cache: {
        // 明显加快构建时间
        type: 'filesystem',
      },
    };

    return config;
  }

  static build(options = {}) {
    // const smp = new SpeedMeasurePlugin();
    const config = new WebpackConfig(options);
    // return smp.wrap(config.getConfig());
    return config.getConfig();
  }
}

module.exports = WebpackConfig;
