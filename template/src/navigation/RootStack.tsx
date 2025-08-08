import { useSession } from '@auth/useSession';
import { RootStackParamList } from '@navigation/routes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import AuthStack from './AuthStack';
import CoreStack from './CoreStack';
const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
  const token = null;
  const { session, isLoading: sessionLoading } = useSession();

  const navigationKey = session != null ? 'CoreStack' : 'AuthStack';

  if (sessionLoading) {
    //can render splash screen heree
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {session ? <CoreStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootStack;
