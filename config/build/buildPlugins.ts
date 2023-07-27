import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack, { WebpackPluginInstance} from "webpack";
import { BuildOptions } from "./types/build";
import  MiniCssExtractPlugin from "mini-css-extract-plugin";


export function buildPlugins({paths}: BuildOptions): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "style/[name].[contenthash:8].css",
    })
  ]
}

