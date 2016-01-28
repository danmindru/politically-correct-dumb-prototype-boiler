var Express = require('express');
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var WebpackDevServer = require('webpack-dev-server');

/* PostCSS stuff */
var autoprefixer = require('autoprefixer');
var flexbugs = require('postcss-flexbugs-fixes');
var reporter = require('postcss-reporter');
var simpleExtend = require('postcss-simple-extend');

/*
 * Settings
 */
var port = 3000;
var host = 'localhost';
var distPath = path.resolve(__dirname, '../dist');
var publicPath = 'http://' + host + ':' + port + '/';

/*
 * Webpack config
 */
var webpackConfig = {
  devtool: 'eval',
  context: path.resolve(__dirname, '../src'),
  entry: {
    'main': [
      'webpack-hot-middleware/client?path=http://' + host + ':' + port + '/__webpack_hmr&reload=true',
      './styles/index.js',
      './index.js'
    ]
  },

  output: {
    path: distPath,
    filename: 'index.js',
    publicPath: publicPath
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx$/,
        loader: "eslint-loader",
        exclude: /(node_modules|bower_components)/,
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      },
      {
        test: /\.less$/,
        loaders: ['style', 'css', 'postcss', 'less']
      }
    ]
  },

  progress: true,
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx', '.css']
  },

  postcss: function () {
    return {
      defaults: [autoprefixer, simpleExtend, flexbugs, reporter],
      cleaner:  [autoprefixer({ browsers: [] })]
    };
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Prototype that thing like there\'s no tomorrow',
      template: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

/*
 * Dev-server options
 */
var serverOptions = {
  contentBase: 'http://' + host + ':' + port,
  hot: true,
  inline: true,
  historyApiFallback: false,
  quiet: true,
  noInfo: false,
  lazy: false,
  filename: 'index.js',
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: { colors: true }
};

var compiler = webpack(webpackConfig);
var app = new Express();

app.use(require('webpack-dev-middleware')(compiler, serverOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', port);
  }
});