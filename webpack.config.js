const path = require('path');

module.exports = {
    entry: { js: './src/app.js' },
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        loaders: [
            { test: /\.js[x]?$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                exclude: /node_modules/
            },
        ]
    },
    plugins: []
};