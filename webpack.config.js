const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: { main: './src/pages/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: ''
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
        compress: true, // это ускорит загрузку в режиме разработки
        port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
        open: true // сайт будет открываться сам при запуске npm run dev
    },
    module: {
        // configuration regarding modules
        rules: [
            {
                //regular expression regExp
                test: /\.js?$/,
                exclude: /node_modules/,
                use: "babel-loader",
        },
        {
            test: /\.html?$/, // регулярное выражение для html файлов
            use: ["html-loader"],
        },
        {
            test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
            type: 'asset/resource',
            generator: {
                filename: 'images/[name].[hash][ext]'
            },
        },
        {
            test: /\.(woff(2)?|eot|ttf|otf)$/,
            type: "asset/resource",
            generator: {
              filename: "fonts/[name].[hash][ext]",
            },
        },
        {
            test: /\.css$/, // применять это правило только к CSS-файлам
            use: [MiniCssExtractPlugin.loader, { // при обработке этих файлов нужно использовать MiniCssExtractPlugin.loader
                loader: 'css-loader', // и css-loader
                options: { importLoaders: 1 } // добавьте объект options
            }, // Добавьте postcss-loader
            'postcss-loader']
        }
    ],
  },

  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), 
  new MiniCssExtractPlugin()],

};