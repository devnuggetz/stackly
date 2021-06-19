const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  reactStrictMode: true,
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
