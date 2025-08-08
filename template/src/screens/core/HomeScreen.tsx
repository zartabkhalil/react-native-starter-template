import { useSession } from '@auth/useSession';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Text, View } from 'react-native';

const HomeScreen = () => {
  const { signOut } = useSession();
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{t('welcome')} 🔥🔥🔥🔥 Start Modify Home Screen</Text>
      <Button
        title="Logged Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};

export default HomeScreen;
