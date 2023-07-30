import path from 'path';
import webpack from 'webpack';
import { buildScssLoader } from '../build/loaders/buildScssLoader';
import { BuildPaths } from '../build/types/build';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  };
  config.resolve?.extensions?.push('ts', 'tsx');
  config.resolve?.modules?.push(paths.src);
  config.module?.rules?.push(buildScssLoader(true));

  return config;
};
