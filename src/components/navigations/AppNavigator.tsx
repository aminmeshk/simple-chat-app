import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from 'components/screens/ChatScreen';

const RootStack = createStackNavigator();

interface RootProps {}

export const RootStackScreen: React.FC<RootProps> = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Chat" component={ChatScreen} />
    </RootStack.Navigator>
  );
};
