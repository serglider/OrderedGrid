const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    output: {
        filename: 'ordered-grid.min.js'
    },
    devtool: 'source-map',
    mode: 'production'
});