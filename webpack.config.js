const path = require("path");

module.exports = {
  entry: {
    app: ["./src/app.js"],
  },
  output: {
    path: path.resolve(__dirname, "./public/build"),
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
          plugins: ["@babel/plugin-transform-runtime"],
        },
      },
    ],
  },
};
