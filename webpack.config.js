var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/Toast/index.jsx",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "Toast.js",
    library: "Toast",
    libraryExport: "default",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  externals: {
    react: {
      root: "React",
      commonjs: "react",
      commonjs2: "react",
      amd: "react"
    }
  }
};
