var webpack = require('webpack');
var path = require('path');
// plugin para copiar arquivos
var CopyWebpackPlugin = require('copy-webpack-plugin');
// plugin para limpar o diretorio dist
var CleanWebpackPlugin = require('clean-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    publicPath : BUILD_DIR,
    filename: 'bundle.js'
  },
  watch: true,
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }, 
  plugins: [
     new CleanWebpackPlugin([BUILD_DIR], {        
        verbose: true, 
        dry: false
      }),
       new CopyWebpackPlugin([
          { from: 'node_modules/bootstrap/', to: BUILD_DIR + '/bootstrap'},
          { from: 'src/index.html', to: BUILD_DIR}
        ],        
        {    
          ignore: [          
                '*.txt',               
                '*.md',
                '*.json',
                'LICENSE',
                'Gruntfile.js'
          ],
          copyUnmodified: true
        }
      )
  ]
};

module.exports = config;