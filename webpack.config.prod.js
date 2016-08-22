import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var mainPath = path.resolve(__dirname, 'src');
var distPath = path.resolve(__dirname, 'dist');

const GLOBALS = {
  'process.env.NODE_ENV' : JSON.stringify('production')
};

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  resolve: {
      extensions: ['', '.js', '.jsx', '.json'],
      alias: {
          nodeModulesPath: path.resolve(nodeModulesPath),
          mainPath: path.resolve(mainPath),
          distPath: path.resolve(distPath),
          foundation: path.resolve(nodeModulesPath, 'foundation-sites/js'),
          mockApi: path.resolve(mainPath, 'Api'),
          GlobalExtensions: path.resolve(mainPath, 'GlobalExtensions'),
          Components: path.resolve(mainPath, 'Components'),
          Common: path.resolve(mainPath, 'Components/Common'),
          Container: path.resolve(mainPath, 'Components/Container'),
          Static: path.resolve(mainPath, 'Components/Static'),
          EntryPoints: path.resolve(mainPath, 'EntryPoints'),
          Actions: path.resolve(mainPath, 'Actions'),
          Store: path.resolve(mainPath, 'Store'),
          Reducers: path.resolve(mainPath, 'Reducers'),
      }
  },
  entry: [
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
    contentBase: './dist'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('screen.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.ProvidePlugin({
		    $: 'jquery',
		    jQuery: 'jquery',
		    'window.jQuery': 'jquery'
		})
  ],
  module: {
     loaders: [
       {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
       {test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap")},
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
