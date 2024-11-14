module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      'style-loader',
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      'sass-loader',
    ],
  });
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      // 3363 - this one is well out of date and doesn't work well
      // use babel-loader instead BUT have to use an older version instead
      // https://stackoverflow.com/questions/65008713/storybook-use-awesome-typescript-loader
      // storybook is incompatible with webpack V5 which is used by the most recent version of babel-loader
      // {
      //   loader: require.resolve('awesome-typescript-loader'),
      // },
            {
        loader: require.resolve('babel-loader'),
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
