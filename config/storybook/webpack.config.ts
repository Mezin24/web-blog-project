import path from 'path';
import webpack, { RuleSetRule, DefinePlugin } from 'webpack';
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
  config.resolve?.modules?.unshift(paths.src);

  if (config.module?.rules) {
    // eslint-disable-next-line no-param-reassign
    // @ts-ignore
    config!.module.rules = config!.module!.rules!.map((rule: RuleSetRule| '...') => {
      if (rule !== '...' && /svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });
  }
  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module?.rules?.push(buildScssLoader(true));
  config.plugins?.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(true),
    __PROJECT__: JSON.stringify('storybook'),
  }));

  return config;
};
