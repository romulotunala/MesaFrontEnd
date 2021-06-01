module.exports = {
  devServer: {
    proxy: {
      '/googleapis': {
        target: 'https://maps.googleapis.com/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/googleapis': ''
        }
      }
    }
  }
};