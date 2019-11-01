const path = require('path');

module.exports = {
  mode: 'development',
  entry: './dist/main/index.js',
  output: {
    path: path.resolve(__dirname, 'dist', 'bundle'),
    filename: 'bundle.js',
    library: 'VirtualDOM'
  }
}