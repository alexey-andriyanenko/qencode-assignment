import webpack from "webpack";
import "webpack-dev-server";
import merge from "webpack-merge";

import sharedConfig from "./webpack.config";

const config: webpack.Configuration = merge(sharedConfig, {
  devServer: {
    port: 9000,
    open: false,
    hot: true,
    historyApiFallback: true,
  },
  mode: "development",
});

export default config;
