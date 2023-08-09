import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildMode, BuildPaths, EnvOptions } from './config/build/types/build';

export default (env: EnvOptions) => {
  const mode: BuildMode = env.mode || 'development';
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const PORT = env.port || 3000;
  const isDev = mode === 'development';
  const apiUrl = env.apiUrl || 'http://localhost:8000';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl
  });

  return config;
};
