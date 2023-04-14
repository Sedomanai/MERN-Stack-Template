const path = require('path');
const root = path.resolve(__dirname);
//browser sync
const bsync = new (require('browser-sync-webpack-plugin')) ({
  port: 3000,
  ui: { port: 3002 },
  proxy: 'http://localhost:3001',
  files: ['ssr.js', 'public/**/*.{html,css,js}', 'dist/**/*.{html,css,js}'],
  open: false,
  notify: false
});


//mini css
const minicss = require('mini-css-extract-plugin');
const twcss = new minicss ({
  filename:'styles.css',
});

//css nano
const cssminimizer = new (require('css-minimizer-webpack-plugin'))();
const postcssloader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        (require('postcss-preset-env'))(),
        (require('cssnano'))({
          preset: ['default', { discardComments: { removeAll: true } }],
        })
      ]
    }
  }
}

//custom-cleanup-plugin
const clean = new (require('./plugins/cleanup_after_emit.js'))({ 
  file: 'styles.js' 
})
const cleanmap = new (require('./plugins/cleanup_after_emit.js'))({ 
  file: 'styles.js.map' 
})

const clientConfig = {
  entry: {
    main : path.join(root, 'client/main.js'),
    styles : path.join(root, 'client/tailwind.js'),
  },
  output: {
    path: path.join(root, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  module: {
    rules: [
      {
        include: path.join(root, 'client', 'tailwind.css'),
        exclude: /node_modules/,
        use: [minicss.loader, 'css-loader', postcssloader]
      },
      {
        test: /\.js$/,
        include: path.join(root, 'client'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        include: path.join(root, 'client'),
        exclude: /tailwind\.css$/,
        use: ['style-loader','css-loader', postcssloader]
      }, 
    ]
  },
 // devtool : 'hidden-source-map',
  optimization: {
    minimizer: [ cssminimizer ],
    //splitChunks: (require('./plugins/vendor_split_chunk.js'))
  },
  plugins: [bsync, twcss, clean, cleanmap]
};

const serverConfig = {
  target: 'node',
  entry: {
    ssr : path.join(root, 'server/ssr.in.js'),
  },
  output: {
    path: path.join(root, 'server'),
    libraryTarget: 'commonjs2',
    filename: 'ssr.js',
  }, module: {
    rules: [
      {
        test: /\.js$/,
        include: /server|client/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
    ]
  },
  plugins: [bsync]
}
module.exports = [clientConfig, serverConfig]