const path = require('path');
const root = path.resolve(__dirname);
const bswp = require('browser-sync-webpack-plugin');
const bsync = new bswp ({
  port: 3000,
  ui: { port: 3002 },
  proxy: 'http://localhost:3001',
  files: ['public/**/*.{html,css,js}', 'dist/**/*.{html,css,js}'],
  open: false,
  notify: false
});


module.exports = {
  entry: path.join(root, 'src', 'index.js'),
  output: {
    path: path.join(root, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(root, 'src'),
        exclude: path.join(root, '/node_modules/'),
        use: {
          loader: 'babel-loader',
        }
      }
      ,{
        test: /\.css$/,
        include: path.join(root, 'src'),
        exclude: path.join(root, '/node_modules/'),
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
    ]
  },
  plugins: [bsync] 
};