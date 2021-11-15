const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports ={
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: './style.scss',
    module: {
        rules: [
            {
                test: /(scss|css)$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          linkType: "text/css",
        }),
      ],
}