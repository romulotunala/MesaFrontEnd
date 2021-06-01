module.exports = {
  devServer: {
    proxy: 'https://maps.googleapis.com/'
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mesafrontend/'
    : '/'
};