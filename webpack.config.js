const path =require('path');
const webpack = require('webpack');
const postCSSPlugins = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
  ]

module.exports={
    entry:'./app/scripts/App.js',
    output:{
        filename:'bundled.js',
        // path:path.resolve(__dirname,'app')
    },
    devServer:{
      before:function(app,server){
        server._watch('./app/**/*.html')
      },
        contentBase: path.join(__dirname, 'app'),
        hot: true,
        port: 4000,
        host: '0.0.0.0'
    },
    mode:"development",
    
 
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader?url=false',{loader:'postcss-loader',options: {plugins:postCSSPlugins}}],

            },
            {
              test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
              loader: 'url-loader',
              options: {
                limit: 8192,
              },},
            {
                test: /\.s[ac]ss$/i,
                use: [
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: true,
                    },
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: true,
                    },
                  },
                ],
              },
        ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }),
  ],
}