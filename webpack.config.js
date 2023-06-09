const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  resolve: {
    modules: [path.join(__dirname, "/src"), 'node_modules']
  },
  entry: {
    app: path.join(__dirname, "/src/index.js"),
    lifeguard: path.join(__dirname, "/src/workers/lifeguard.js"),
    swimmer: path.join(__dirname, "/src/workers/swimmer.js"),
  },
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "[name].js", // the name of the bundle
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // to import index.html file inside index.js
      inject: false,
    }),
    new ESLintPlugin({
      extensions: [`js`, `jsx`],
      exclude: [`/node_modules/`],
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public', to: '' },
      ]
    })
  ],
  devServer: {
    port: 3030, // you can change the port
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
};
