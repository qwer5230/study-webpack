const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口文件
  entry: './src/index.js',
  
  // 输出配置
  output: {
    // 输出文件名
    filename: 'bundle.js',
    // 输出目录
    path: path.resolve(__dirname, 'dist'),
    // 清理输出目录
    clean: true
  },
  
  // 模式配置
  mode: 'development',
  
  // 开发工具配置
  devtool: 'inline-source-map',
  
  // // 开发服务器配置
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, 'dist'),
  //   },
  //   compress: true,
  //   port: 9000,
  //   open: true,
  //   hot: true
  // },
  
  // 模块解析配置
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  
  // 插件配置
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  
  // 模块加载器配置
  module: {
    rules: [
      // JavaScript/ES6+ 处理
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      
      // CSS 处理
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      
      // 图片处理
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      
      // 字体处理
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  }
} 