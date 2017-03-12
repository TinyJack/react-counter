console.log('Starting...');
var path = require('path');
var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
webpackConfig = require('./webpack.config');
webpackConfig.output.path = path.resolve(__dirname, "./dist");
var port = 8089;
var bundleStart = null;
var compiler = Webpack(webpackConfig);
compiler.plugin('compile', function() {
    console.log('Bundling...');
    bundleStart = Date.now();
});
compiler.plugin('done', function() {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms! port ' + port);
});
var webPackDevServer = new WebpackDevServer(compiler, {
  publicPath: '/dist/',
  hot: false,
  quiet: false,
  https: true,
  noInfo: false,
  stats: {
    children: false,
    chunkModules: false,
    cached: false,
    colors: true,
    errorDetails: true,
    chunkOrigins: false
  },
});
webPackDevServer.listen(port, null, function () {
    console.log('Bundling project, please wait...');
});