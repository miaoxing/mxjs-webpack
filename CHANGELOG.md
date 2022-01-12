# [0.3.0](https://github.com/miaoxing/mxjs-webpack/compare/v0.2.3...v0.3.0) (2022-01-12)


### Bug Fixes

* **webpack:** 解决 ts 构建失败，替换 `awesome-typescript-loader` 为 `ts-loader` ([c72eb23](https://github.com/miaoxing/mxjs-webpack/commit/c72eb231107a2787078d1b0391138ec77a89567d))


### Features

* **webpack:** 更新 `css-loader` 到 `^6.5.1` ([a623cb3](https://github.com/miaoxing/mxjs-webpack/commit/a623cb38e3b27394ddd895a39e0698afc55c9245))
* 更新 typescript 到 `^4.5.2` ([a3c2722](https://github.com/miaoxing/mxjs-webpack/commit/a3c2722a279c8d5953e4de758ab785a0a8f5bed4))
* **webpack:** 改为通过 `HtmlWebpackPlugin` 生成静态首页，移除 `WebpackManifestPlugin` 生成的映射表 ([f9862c9](https://github.com/miaoxing/mxjs-webpack/commit/f9862c90a8db9a6c7b9bab6e616eaa6ba979b9c5))
* **webpack:** 更新 `webpack-dev-server` 从 3 到 4 ([e287e72](https://github.com/miaoxing/mxjs-webpack/commit/e287e726776f0ba3503febf31cdd6df196a35133))


### BREAKING CHANGES

* 更新 typescript 到 `^4.5.2`
* **webpack:** 改为通过 `HtmlWebpackPlugin` 生成静态首页，移除 `WebpackManifestPlugin` 生成的映射表
* **webpack:** 更新 `webpack-dev-server` 从 3 到 4





### Dependencies

* **@miaoxing/dev:** upgrade from `8.0.0` to `8.0.1`

## [0.2.3](https://github.com/miaoxing/mxjs-webpack/compare/v0.2.2...v0.2.3) (2021-10-28)





### Dependencies

* **@miaoxing/dev:** upgrade from `7.0.1` to `8.0.0`

## [0.2.2](https://github.com/miaoxing/mxjs-webpack/compare/v0.2.1...v0.2.2) (2021-05-12)





### Dependencies

* **@miaoxing/dev:** upgrade from `7.0.0` to `7.0.1`

## [0.2.1](https://github.com/miaoxing/mxjs-webpack/compare/v0.2.0...v0.2.1) (2021-05-11)


### Bug Fixes

* **MiniCssExtractPlugin:** 忽略顺序， 异步加载时极易出现顺序警告 ([c7754f6](https://github.com/miaoxing/mxjs-webpack/commit/c7754f60906025c468e27b2e7f988bd0d18120d6))





### Dependencies

* **@miaoxing/dev:** upgrade from `6.4.0` to `7.0.0`

# [0.2.0](https://github.com/miaoxing/mxjs-webpack/compare/v0.1.3...v0.2.0) (2021-03-22)


### Bug Fixes

* 解决 hot reload 失效，使用 `react-refresh` 替代 `react-hot-loader` ([6a1d44e](https://github.com/miaoxing/mxjs-webpack/commit/6a1d44ed6b8266c2676044ae572ccb98e7ee66a3))


### Features

* 升级到 Webpack 5 ([d5fc3ff](https://github.com/miaoxing/mxjs-webpack/commit/d5fc3ff13949c74f75b77ca2ed5e95dea606e1ff))
* 增加获取多个插件 webpack 配置的脚本 ([abe42a5](https://github.com/miaoxing/mxjs-webpack/commit/abe42a573d9f178e8ec3cd072e7efaa42addc9eb))


### BREAKING CHANGES

* 移除 `react-hot-loader` 相关功能

## [0.1.3](https://github.com/miaoxing/mxjs-webpack/compare/v0.1.2...v0.1.3) (2021-03-12)


### Bug Fixes

* 更新前端包依赖 ([dbab4fb](https://github.com/miaoxing/mxjs-webpack/commit/dbab4fbc8cefd1866a5d9198b50649a6a8be4efe))

## [0.1.2](https://github.com/miaoxing/mxjs-webpack/compare/v0.1.1...v0.1.2) (2021-03-05)


### Bug Fixes

* 解决 react 错误不能正常显示 ([c2b619f](https://github.com/miaoxing/mxjs-webpack/commit/c2b619f3e258a37d3d26e642075913021cfb6087))

## [0.1.1](https://github.com/miaoxing/mxjs-webpack/compare/v0.1.0...v0.1.1) (2020-09-25)


### Bug Fixes

* 忽略测试文件 ([7e1f963](https://github.com/miaoxing/mxjs-webpack/commit/7e1f963fe7fb43e4d8fa89c4786311c2bdb7d629))

# 0.1.0 (2020-07-30)


### Features

* antd 主题的样式，移到 bootstrap-antd 中 ([](https://github.com/miaoxing/mxjs-webpack/commit/))
* 增加 antd 变量替换 ([](https://github.com/miaoxing/mxjs-webpack/commit/))
* 将 theme 中主要变量转换为 bootstrap sass 变量 2 ([](https://github.com/miaoxing/mxjs-webpack/commit/))
* 拆分出 webpack 配置 ([](https://github.com/miaoxing/mxjs-webpack/commit/))
