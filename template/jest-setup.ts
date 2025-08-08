// Add custom matchers from jest-native
import '@testing-library/jest-native/extend-expect';

// Gesture handler setup
import 'react-native-gesture-handler/jestSetup';

// Reanimated mock
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

// Keyboard Aware ScrollView mock
jest.mock('react-native-keyboard-aware-scroll-view', () => {
  return {
    KeyboardAwareScrollView: jest
      .fn()
      .mockImplementation(({ children }) => children),
  };
});

// i18n mock
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
  }),
}));
