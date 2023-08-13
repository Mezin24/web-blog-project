import { RuleSetRule } from 'webpack';
import { buildScssLoader } from './loaders/buildScssLoader';
import { BuildOptions } from './types/build';
import { buildBabelLoader } from './loaders/buildBabelloader';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const { isDev } = options;
  const typescript = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const babel = buildBabelLoader(options);

  const scss = buildScssLoader(isDev);

  const svgr = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [
    scss,
    svgr,
    babel,
    typescript,
    fileLoader
  ];
}
