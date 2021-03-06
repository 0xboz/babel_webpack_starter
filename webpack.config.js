const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        app: "./src/app.js"
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "app.bundle.js"
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ["@babel/preset-env"]
            }
        }]
    }
}
