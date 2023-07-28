import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/build";

export function buildDevServer({
  port
}: BuildOptions): DevServerConfiguration {
  return {
    port,
    historyApiFallback: true,
    hot: true,
  }
}