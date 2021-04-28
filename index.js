const webpack = require('webpack');
const path = require('path');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

class WebpackConfig {
  constructor(options) {
    // 基于当前目录
    this.rootDir = process.cwd();

    this.name = options.name;
    this.manifest = options.manifest || false;
    this.distDir = options.distDir || 'dist';
    this.buildDir = options.buildDir || path.resolve(this.rootDir, 'public/' + this.distDir);
    this.externals = options.externals || {};
    if (options.getEntries) {
      this.getEntries = options.getEntries;
    }

    this.isProd = process.env.NODE_ENV === 'production';
    // TODO better detection
    this.isHot = process.argv[3] === '--hot';

    // HMR不支持chunkhash，只支持hash
    this.useVersioning = !this.isHot;
    this.publicPath = this.isProd ? '/' + this.distDir + '/' : 'http://localhost:8080/' + this.distDir + '/';

    // 供外部注入样式变量
    this.sassLoaderOptions = options.sassLoaderOptions || {};
    this.lessLoaderOptions = options.lessLoaderOptions || {};
  }

  getEntries() {
    const entries = {};

    // 初始化通用的模块
    entries[this.name] = [];

    // 不使用完整路径将提示 Module not found: Error
    entries[this.name].push(this.rootDir + `/plugins/${this.name}/resources/containers/${this.name}.js`);

    return entries;
  }

  getConfig() {
    const isDev = !this.isProd;
    const isProd = this.isProd;
    const useVersioning = this.useVersioning;

    const config = {
      name: this.name,
      mode: isProd ? 'production' : 'development',
      // HMR/Live Reloading broken
      // https://github.com/webpack/webpack-dev-server/issues/2758#issuecomment-710086019
      target: isProd ? 'browserslist' : 'web',
      devtool: isProd ? false : 'eval',
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [
          this.rootDir,
          'node_modules',
        ],
      },
      // NOTE: 需直接传入结果，不能使用回调函数，否则HMR不生效
      entry: this.getEntries(),
      output: {
        path: this.buildDir,
        publicPath: this.publicPath,
        filename: useVersioning ? '[name]-[chunkhash:6].js' : '[name].js',
        chunkFilename: useVersioning ? '[name]-[chunkhash:6].js' : '[name].js',
        pathinfo: false,
        // Fix https://reactjs.org/docs/cross-origin-errors.html
        crossOriginLoading: 'anonymous',
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader',
            exclude: [
              /node_modules/,
              /\.test\.tsx?$/,
            ],
            options: {
              useCache: true,
              cacheDirectory: 'node_modules/.cache/awcache',
              forceIsolatedModules: true,
            },
          },
          {
            test: /.js$/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true,
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
                options: this.sassLoaderOptions,
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
                options: this.lessLoaderOptions,
              },
            ],
          },
          {
            test: /\.(jpg|png|gif|svg|ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader',
            options: {
              name: useVersioning ? '[path][name]-[hash:6].[ext]' : '[path][name].[ext]',
            },
          },
        ],
      },
      externals: this.externals,
      optimization: {
        removeAvailableModules: isProd,
        removeEmptyChunks: isProd,
        runtimeChunk: {
          name: this.manifest ? ((entrypoint) => `${entrypoint.name}-manifest`) : false,
        },
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: useVersioning ? '[name]-[contenthash:6].css' : '[name].css',
          chunkFilename: useVersioning ? '[id]-[contenthash:6].css' : '[id].css',
          // 异步加载时极易出现顺序警告
          ignoreOrder: true,
        }),
        isDev && new ReactRefreshWebpackPlugin(),
        useVersioning && new WebpackManifestPlugin({
          fileName: (this.name ? this.name + '-' : '') + 'assets-hash.json',
          filter: function (obj) {
            return obj.isInitial;
          },
          map: function (obj) {
            // path 改为只要 hash 部分
            const match = /(.+?)-(\w{6})\.(js|css)$/.exec(obj.path);
            if (match) {
              obj.path = match[2];
            }
            return obj;
          },
        }),
        isProd && new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false,
        }),
        // new HardSourceWebpackPlugin(),
        // new BundleAnalyzerPlugin(),
      ].filter(Boolean),
      devServer: {
        // Fix "Invalid Host/Origin Header" warning
        // @link https://github.com/webpack/webpack-dev-server/issues/1604
        disableHostCheck: true,
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
