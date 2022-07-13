const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: "./dist/main.js",
    output: {
        filename: "[contenthash]bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devtool: "inline-source-map",
}