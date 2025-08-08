import { StackHeaderOptions } from '@constants/stylesCon';
import { AuthStackParams } from '@navigation/routes';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '@screens/auth/SignIn';
import SignUp from '@screens/auth/SignUp';
import React from 'react';
const Stack = createStackNavigator<AuthStackParams>();

const AuthStack = () => {
  const token = null;

  return (
    <Stack.Navigator

    // initialRouteName={
    //   token
    //     ?
    //     'CoreStack'
    //     : 'AuthStack'
    // }
    >
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={StackHeaderOptions}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={StackHeaderOptions}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
