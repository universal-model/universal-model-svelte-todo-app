const path = require("path");

module.exports = (env = {}) => ({

  entry: path.resolve(__dirname, "./src/main.js"),
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
    chunkFilename: 'bundle.[id].js'
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte'),
      "@": path.resolve(__dirname, "./src")
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            hotReload: true
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    inline: true,
    hot: false,
    stats: "minimal",
    contentBase: 'public'
  }
});
