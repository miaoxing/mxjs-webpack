# [2.0.0](https://github.com/miaoxing/mxjs-webpack/compare/v1.0.2...v2.0.0) (2023-04-15)


### Features

* **webpack:** 指定 node >= 14 ([5971ef3](https://github.com/miaoxing/mxjs-webpack/commit/5971ef327995914d643c1d597330216cde8dc145))


### BREAKING CHANGES

* **webpack:** 指定 node >= 14

## [1.0.2](https://github.com/miaoxing/mxjs-webpack/compare/v1.0.1...v1.0.2) (2023-01-01)





### Dependencies

* **@miaoxing/dev:** upgrade from `8.1.3` to `8.2.0`

## [1.0.1](https://github.com/miaoxing/mxjs-webpack/compare/v1.0.0...v1.0.1) (2022-08-02)





### Dependencies

* **@miaoxing/dev:** upgrade from `8.1.2` to `8.1.3`

# [1.0.0](https://github.com/miaoxing/mxjs-webpack/compare/v0.3.4...v1.0.0) (2022-07-01)


### Bug Fixes

* **webpack:** 解决 "生成文件按目录区分" 后，生成 admin 目录导致访问 admin 路径返回 403 ([ce40449](https://github.com/miaoxing/mxjs-webpack/commit/ce404495217639f5848d19b6cc70db39c9cd1d56))


### Code Refactoring

* **webpack:** 移除 `distDir`，`buildDir` 和 `externals` 选项，需要使用可以在获得 webpack 对象后直接修改 ([e6e32f7](https://github.com/miaoxing/mxjs-webpack/commit/e6e32f785955f2c3bf11f3087533237e2ae3a10f))
* **webpack:** 移除 `getEntries` 方法，改为增加 `entry` 选项 ([4e45c76](https://github.com/miaoxing/mxjs-webpack/commit/4e45c76764a68d0628a3aac120703b1e5ad7347d))
* **webpack:** 移除 `manifest` 选项，并改为默认启用 `runtimeChunk` ([24dcd84](https://github.com/miaoxing/mxjs-webpack/commit/24dcd84f3d3eb95907b9651a114f4af2e740b521))
* **webpack:** 移除 `sassLoaderOptions` 和 `lessLoaderOptions` 选项，如需使用，可直接修改 webpack 配置对象 ([ceddb63](https://github.com/miaoxing/mxjs-webpack/commit/ceddb633270cabe0c5c60011506ba4172ace334e))


### Features

* 发布 1.0.0 [release 1.0.0] ([c35be0d](https://github.com/miaoxing/mxjs-webpack/commit/c35be0dc8594b1d30f6778a1d11f542d8c630dfc))


### BREAKING CHANGES

* **webpack:** 移除 `sassLoaderOptions` 和 `lessLoaderOptions` 选项，如需使用，可直接修改 webpack 配置对象
* **webpack:** 移除 `getEntries` 方法，改为增加 `entry` 选项
* **webpack:** 移除 `distDir`，`buildDir` 和 `externals` 选项，需要使用可以在获得 webpack 对象后直接修改
* **webpack:** 移除 `manifest` 选项，并改为默认启用 `runtimeChunk`





### Dependencies

* **@miaoxing/dev:** upgrade from `8.1.1` to `8.1.2`

## [0.3.4](https://github.com/miaoxing/mxjs-webpack/compare/v0.3.3...v0.3.4) (2022-06-01)


### Features

* **u:** 允许配置环境变量 `ROUTER_MODE` 来指定路由模式 ([9b7c2ec](https://github.com/miaoxing/mxjs-webpack/commit/9b7c2ecd5a60211b6450fda0df11d21576bf9380))
* **webpack:** 允许配置 `API_REWRITE` 常量来控制接口 URL 是否支持重写 ([beccd2d](https://github.com/miaoxing/mxjs-webpack/commit/beccd2ded310881b1233a94ea22658a64c7667c1))





### Dependencies

* **@miaoxing/dev:** upgrade from `8.1.0` to `8.1.1`

## [0.3.3](https://github.com/miaoxing/mxjs-webpack/compare/v0.3.2...v0.3.3) (2022-04-30)


### Features

* **u, webpack:** 允许通过环境变量指定接口地址 ([64a1c60](https://github.com/miaoxing/mxjs-webpack/commit/64a1c601469178985e88fbb20e0b42f8aba1dfb2))
* **webpack:** 默认开发环境时都启用热重载 ([328a0f5](https://github.com/miaoxing/mxjs-webpack/commit/328a0f53fca944b8337042a6c6c9d8e351bd261c))

## [0.3.2](https://github.com/miaoxing/mxjs-webpack/compare/v0.3.1...v0.3.2) (2022-03-31)


### Features

* **webpack:** 不压缩 babel 缓存 ([47b3768](https://github.com/miaoxing/mxjs-webpack/commit/47b3768a51d05f027d7ae6d3208f417271db9503))
* **webpack:** 允许手动修改接口路径 ([eb38c3b](https://github.com/miaoxing/mxjs-webpack/commit/eb38c3b0ea69fa3a5fb93918d41d5f236d5e6d86))
* **webpack:** 增加 webpack 文件缓存 ([43139fd](https://github.com/miaoxing/mxjs-webpack/commit/43139fd92a4798835e329b2adde8122fef37aaaa))
* **webpack:** 模板移到插件目录下 ([792bea9](https://github.com/miaoxing/mxjs-webpack/commit/792bea92c2f861fe076c3a2db55158c529d2e2da))

## [0.3.1](https://github.com/miaoxing/mxjs-webpack/compare/v0.3.0...v0.3.1) (2022-02-05)





### Dependencies

* **@miaoxing/dev:** upgrade from `8.0.1` to `8.1.0`

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
