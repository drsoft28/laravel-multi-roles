const path = require('path');
module.exports = {
  // options...
  devServer:{
      port:7777
  },

  outputDir:'./dist',

  configureWebpack: {  
      resolve: {  
 
        alias: {  
          '@': path.join(__dirname, './src/')
        },  
      },  
  },

  transpileDependencies: [
    'vuetify'
  ]
}
