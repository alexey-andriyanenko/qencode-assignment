import merge from "webpack-merge";
import sharedConfig from "./webpack.config";

const config = merge(sharedConfig, {
  mode: "production",
});
export default config;
