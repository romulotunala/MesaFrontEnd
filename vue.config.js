module.exports = {
  devServer: {
    // proxy: 'https://maps.googleapis.com/'
    proxy: {
      '/googleapis': {
        target: 'https://maps.googleapis.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/googleapis': ''
        }
      }
    }
  }
};