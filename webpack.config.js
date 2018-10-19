const path = require('path');

module.exports = {
    mode: 'production', // development
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css?$/, use: [
                    'style-loader',
                    {
                      loader: 'postcss-loader',
                      options: {
                        ident: 'postcss',
                        plugins: [
                          require('postcss-import')(),
                          require('postcss-url')(),
                          require('postcss-cssnext')(),
                          require('postcss-reporter')()
                        ]
                      }
                    }
                  ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};