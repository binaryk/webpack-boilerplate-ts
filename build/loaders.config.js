'use strict';
var path = require('path');

module.exports = [
    {
        test: /\.[j|t]sx?$/,
        loaders: ['awesome-typescript-loader'],
        include: path.join(__dirname, '/../src')
    }
]