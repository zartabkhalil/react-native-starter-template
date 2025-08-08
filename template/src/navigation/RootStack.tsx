import { RootStackParamList } from '@navigation/routes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
  const token = null;

  return (
    <NavigationContainer>
      <Stack.Navigator

      // initialRouteName={
      //   token
      //     ?
      //     'CoreStack'
      //     : 'AuthStack'
      // }
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
