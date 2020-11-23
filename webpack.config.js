const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js', //точка входа (откуда вебпаку начать строить граф зависимостей)
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    resolve: {
        extensions: ['.js', '.json', '.scss', '.css']
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    // mode: 'development', //как собирать вебпаку проект сжато и минифицированно или полгностью   
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    plugins: [ //более гибкие чем loaders
        new HtmlWebpackPlugin({ //HtmlWebpackPlugin создает index.html в директории с бандлом и автоматически добавляет в него ссылку на бандл.
            template: './src/index.html'
        })
    ],
    module: {//loaders преобразование файлов
        rules: [
            {
                test: /\.svg$/, //тип обрабатываемого файла
                use: 'svg-inline-loader' //какой extension используем
            },
            {
                test: /\.(ttf|woff|woff2)$/i,
                use: ['file-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
                // use: ['style-loader', 'css-loader'] //css-loader - для импорта css; style-loader - чтобы стили иннерились внутрь html внутрь тега style
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }

}
