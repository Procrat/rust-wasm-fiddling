const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'index.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'docs')
  }
}
