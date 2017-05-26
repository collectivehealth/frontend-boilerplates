const path = require('path');
const webpack = require('webpack');
const packageJson = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const CONTEXT = path.resolve(__dirname, 'src');

module.exports = () => {
  const config = {};

  config.context = CONTEXT;

  config.entry = {
    app: path.resolve(CONTEXT, 'index.js'),
    vendor: Object.keys(packageJson.dependencies)
  }

  // Configure output.
  config.output = {
    // Output directory.
    path: path.resolve(__dirname, 'dist'),
    // Output each file using the bundle name and a content-based hash.
    filename: '[name]-[chunkhash].js',
    sourceMapFilename: '[file].map',
    publicPath: '/'
  };

  config.resolve = {
    modules: [
      // Search for modules relative to source root.
      path.resolve(CONTEXT),
      path.resolve('./tests'),
      // Search for NPM modules.
      'node_modules'
    ]
  };

  // ---------------------------------------------------------------------------
  // ----- Loaders -------------------------------------------------------------
  // ---------------------------------------------------------------------------

  config.module = {
    rules: []
  };

  // HTML (templates): Add to the Angular Template Cache and return a URL
  // pointing to the template.
  config.module.rules.push({
    test: /\.html$/,
    use: ['html-loader'],
    exclude: [
      path.resolve(CONTEXT, 'index.html')
    ]
  });

  // Sass: Compile, add PostCSS transforms, emit to ExtractText.
  config.module.rules.push({
    test: /\.(c|sc|sa)ss$/,
    use: ExtractTextWebpackPlugin.extract(['css-loader?sourceMap', 'sass-loader?sourceMap'])
  });

  // Static assets: Inline anything under 10k, otherwise emit a file in the
  // output directory and return a URL pointing to it.
  config.module.rules.push({
    test: /\.(eot|gif|jpg|mp3|png|svg|ttf|woff|woff2)$/,
    use: ['url-loader?limit=10000']
  });

  config.module.rules.push({
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['env']
      }
    }
  })

  // ---------------------------------------------------------------------------
  // ----- Plugins -------------------------------------------------------------
  // ---------------------------------------------------------------------------

  config.plugins = [];

  config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor'
  }));

   // Configure source map plugin.
  config.plugins.push(new webpack.SourceMapDevToolPlugin({
    filename: '[file].map'
  }));

  // Responsible for managing index.html and injecting references to bundles.
  config.plugins.push(new HtmlWebpackPlugin({
    template: path.resolve(CONTEXT, 'index.html'),
    chunksSortMode: 'dependency'
  }));

  config.plugins.push(new ExtractTextWebpackPlugin('styles.css'));

  // ---------------------------------------------------------------------------
  // ----- Development Server --------------------------------------------------
  // ---------------------------------------------------------------------------

  config.devServer = {
    contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0',
    port: 8080
  };

  return config;
};
