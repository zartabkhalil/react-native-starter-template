import { Platform } from 'react-native';

const CardForFade = ({ current }: { current: any }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
export const StackHeaderOptions = {
  cardStyleInterpolator: CardForFade,

  headerShown: false,
  headerTitle: '',

  headerStyle: { height: Platform.OS === 'ios' ? 50 : 50 },
  headerTransparent: true,
};
