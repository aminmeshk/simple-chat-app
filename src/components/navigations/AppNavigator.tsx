import React from 'react';

import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import ChatScreen from 'components/screens/ChatScreen';

const RootStack = createStackNavigator();

const defaultRootOptions: StackNavigationOptions = {
  headerShown: false,
};

interface RootProps {}

export const RootStackScreen: React.FC<RootProps> = () => {
  return (
    <RootStack.Navigator screenOptions={defaultRootOptions}>
      <RootStack.Screen name="Chat" component={ChatScreen} />
    </RootStack.Navigator>
  );
};
