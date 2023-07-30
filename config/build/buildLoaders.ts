import { RuleSetRule } from 'webpack';
import { buildScssLoader } from './loaders/buildScssLoader';
import { BuildOptions } from './types/build';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const typescript = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const babel = {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  };

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
