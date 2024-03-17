import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import "webpack-dev-server";

const config: webpack.Configuration = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[file].[contenthash].js",
    clean: true,
    publicPath: "/",
  },
  devServer: {
    port: 9000,
    open: false,
    hot: true,
    historyApiFallback: true,
  },
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: [__dirname, "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        exclude: /node_modules/,
        use: {
          loader: "swc-loader",
        },
      },
      {
        test: /.css/,
        include: path.resolve(__dirname, "src"),
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]",
              },
            },
          },
        ],
        exclude: /\node_modules/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{ loader: "@svgr/webpack", options: { icon: true } }],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      title: "Qencode UI",
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
    }),
    new ForkTsCheckerWebpackPlugin(),
    new webpack.DefinePlugin({
      ENABLE_MOCK: JSON.stringify(process.env.ENABLE_MOCK),
    }),
  ],
};

export default config;
