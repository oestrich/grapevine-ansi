module.exports = {
  env: {
    test: {
      presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
      ],
    },
    development: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    },
    production: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    }
  }
};
