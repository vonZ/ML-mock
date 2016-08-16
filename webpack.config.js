import webpack from 'webpack';
import path from 'path';
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var mainPath = path.resolve(__dirname, 'src');

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  resolve: {
      extensions: ['', '.js', '.jsx', '.json'],
      alias: {
          nodeModulesPath: path.resolve(nodeModulesPath),
          mainPath: path.resolve(mainPath),
          foundation: path.resolve(nodeModulesPath, 'foundation-sites/js'),
          mockApi: path.resolve(mainPath, 'api'),
          GlobalExtensions: path.resolve(mainPath, 'GlobalExtensions'),
          Components: path.resolve(mainPath, 'components'),
          Common: path.resolve(mainPath, 'Components/common'),
          ContainerComponent: path.resolve(mainPath, 'ContainerComponent'),
          PresentationalComponent: path.resolve(mainPath, 'PresentationalComponent'),
          EntryPoints: path.resolve(mainPath, 'EntryPoints'),
          Actions: path.resolve(mainPath, 'actions'),
          Store: path.resolve(mainPath, 'store'),
          Reducers: path.resolve(mainPath, 'reducers'),
      }
  },
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    'EntryPoints/global/foundationInit.js',
    'EntryPoints/index.js'
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
		    $: 'jquery',
		    jQuery: 'jquery',
		    'window.jQuery': 'jquery'
		})
  ],
  module: {
     loaders: [
       {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
       {test: /(\.css)$/, loaders: ['style', 'css']},
       {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
       {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
       {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
       {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
       {
           // Export Foundation's 'foundation' function, which we will use in order
           // to initialize Foundation with e.g. $.fn.foundation = foundation
           test: /(foundation\.core)/,
           loader: 'exports?foundation=jQuery.fn.foundation!babel-loader?presets[]=es2015'
       }, {
           // Make sure to transpile all other Foundation files
           test: /(foundation\.)/,
           loader: 'babel-loader?presets[]=es2015'
       }, {
           test: /jquery\.js$/, loader: 'expose?$'
       }, {
           test: /jquery\.js$/, loader: 'expose?jQuery'
       }
     ]
   }
};
