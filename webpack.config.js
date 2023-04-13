const path = require('path');
const root = path.resolve(__dirname);
const bswp = require('browser-sync-webpack-plugin');
const minicss = require('mini-css-extract-plugin');
const cleanup = require('./plugins/cleanup_after_emit.js');
const bsync = new bswp ({
  port: 3000,
  ui: { port: 3002 },
  proxy: 'http://localhost:3001',
  files: ['public/**/*.{html,css,js}', 'dist/**/*.{html,css,js}'],
  open: false,
  notify: false
});

const mcss = new minicss({
  filename:'styles.css',
})
const clean = new cleanup({ file: 'styles.js' })

module.exports = {
  entry: {
    main : path.join(root, 'src/entries/main.js'),
    styles : path.join(root, 'src/entries/tailwind.js'),
  },
  output: {
    path: path.join(root, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        include: path.join(root, 'src', 'tailwind.css'),
        use: [minicss.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.js$/,
        include: path.join(root, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        include: path.join(root, 'src'),
        exclude: /tailwind\.css$/,
        use: ['style-loader','css-loader', 'postcss-loader']
      }, 
    ]
  },
  plugins: [bsync, mcss, clean]
};