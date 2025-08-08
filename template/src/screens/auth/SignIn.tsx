import { useSession } from '@auth/useSession';
import React from 'react';
import { Button, Text, View } from 'react-native';

const SignIn = () => {
  const { signIn } = useSession();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>🔥🔥🔥🔥🔥 SignIn screen Ready</Text>
      <Button
        title="Login"
        onPress={() => {
          signIn('test-token');
        }}
      />
    </View>
  );
};

export default SignIn;
