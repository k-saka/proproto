import * as path from "path";
import * as webpack from "webpack";

const isProduction = process.env.NODE_ENV == "production";

const config: webpack.Configuration = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    filename: isProduction ? "[name].[chunkhash].js" : "bundle.js",
    chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
  },
};

export default config;
