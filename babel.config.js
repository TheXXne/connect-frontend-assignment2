const path = require('path');

module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@emotion',
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          public: './public',
          '@clo-set/viewer': path.resolve(
            __dirname,
            '../../node_modules/@clo-set/engine/dist/closet.viewer.js',
          ),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    ],
  ],
  env: {
    production: {
      plugins: [
        ['react-remove-properties', { properties: ['data-testid'] }],
        'transform-remove-console',
      ],
    },
  },
};
