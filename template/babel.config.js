module.exports = {
  presets: ['module:@react-native/babel-preset'],

  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@assets': './src/assets',
          '@auth': './src/auth',
          '@components': './src/components',
          '@constants': './src/constants',
          '@network': './src/network',
          '@navigation': './src/navigation',
          '@features': './src/features',
          '@screens': './src/screens',
          '@hooks': './src/hooks',
          '@locales': './src/locales',
          '@store': './src/store',
          '@theme': './src/theme',
          '@types': './src/types',
          '@helpers': './src/helpers',
        },
      },
    ],
    // 'react-native-reanimated/plugin',
  ],
};
