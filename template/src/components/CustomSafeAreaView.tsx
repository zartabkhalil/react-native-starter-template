import React, { type PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
type Props = PropsWithChildren<{}>;

const CustomSafeAreaView = ({ children }: Props) => {
  return (
    <SafeAreaView
      edges={['top', 'bottom']}
      style={{ flex: 1, backgroundColor: 'white' }}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default CustomSafeAreaView;
