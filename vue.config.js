module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000', //目标地址
              changeOrigin: true,
              pathRewrite: {
              '^/api': ''
          }
        },
        '/upload': {
          target: 'http://localhost:3000'//图片上传地址
        }
      }
    }
  }