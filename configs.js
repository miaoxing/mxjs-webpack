const glob = require('glob');
const util = require('util');

const configs = glob.sync(process.cwd() + '/plugins/*/webpack.config*.js').map(file => require(file));

if (!process.argv.includes('--config-name')) {
  // Remove same devServers to avoid
  // "Error: Unique ports must be specified for each devServer option in your webpack configuration."
  // @link https://github.com/webpack/webpack-cli/issues/2408
  const devServers = [];
  configs.forEach(config => {
    devServers.forEach(devServer => {
      if (util.isDeepStrictEqual(config.devServer, devServer)) {
        delete config.devServer;
      }
    });
    if (config.devServer) {
      devServers.push(config.devServer);
    }
  });
}

module.exports = configs;
