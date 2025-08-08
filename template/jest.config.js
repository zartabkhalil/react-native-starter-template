module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFilesAfterEnv: ['./jest-setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|react-redux' +
      '|i18next' +
      '|react-i18next' +
      '|react-native-linear-gradient' +
      '|react-native-keyboard-aware-scroll-view' +
      '|@react-native-masked-view/masked-view' +
      '|@react-navigation' +
      '|@react-native' +
      '|@react-native/assets' +
      ')/)',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/android/',
    '/ios/',
    '<rootDir>/src/type/state.ts',
  ],
  collectCoverage: false,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.tsx',
    'react-native-responsive-fontsize':
      '<rootDir>/__mocks__/react-native-responsive-fontsize.tsx',
  },
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/navigation/*.{js,jsx,ts,tsx}',
  ],
  coveragePathIgnorePatterns: ['<rootDir>/src/type/state.ts'],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
};
