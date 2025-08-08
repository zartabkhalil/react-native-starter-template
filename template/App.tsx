/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import RootStack from '@navigation/RootStack';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <RootStack/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
