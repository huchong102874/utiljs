const path = require('path');
module.exports = {
  // 入口 
  entry: {
    entry: './src/index.js',
  },
  // 出口
  output: {
    //绝对路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'utils.js'
  },
  // mode:"",
  // 模块
  module: {},
  //插件
  plugins: [],
  //开发服务
  devServer: {}
}