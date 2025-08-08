/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SessionProvider } from '@auth/useSession';
import CustomSafeAreaView from '@components/CustomSafeAreaView';
import RootStack from '@navigation/RootStack';
import { persistor, store } from '@store/store';
import { StyleSheet, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <CustomSafeAreaView>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SessionProvider>
            <RootStack />
          </SessionProvider>
        </PersistGate>
      </Provider>
    </CustomSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
