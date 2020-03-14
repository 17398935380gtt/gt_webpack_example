'use strict';

const path=require('path');
const webpack=require('webpack');

module.exports={
    // entry: './src/index.js',//单个入口只生成一个文件
    entry:{
       index: './src/index.js',
       ReactPage:'./src/ReactPage.js',
    },
    //多个入口根据对应的文件，打包成多个文件
    output: {
        path: path.join(__dirname,'dist'),
        filename: '[name].js'
        // filename: "bundle.js"//打包成一个文件
    },
    mode:'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                // use:[
                //     "file-loader",
                // ]
                use:[
                    {
                        loader: "url-loader",
                        options: {
                            limit:10240
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    "file-loader",
                ]
            },
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase:'./dist',
        hot:true
    }
};
