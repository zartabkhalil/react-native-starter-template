import { StackHeaderOptions } from '@constants/stylesCon';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@screens/core/HomeScreen';
import React from 'react';
import { CoreStackParams } from './routes';
const Stack = createStackNavigator<CoreStackParams>();

const CoreStack = () => {
  const token = null;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={StackHeaderOptions}
      />
    </Stack.Navigator>
  );
};

export default CoreStack;
