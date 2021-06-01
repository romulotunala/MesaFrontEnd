module.exports = {
  devServer: {
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