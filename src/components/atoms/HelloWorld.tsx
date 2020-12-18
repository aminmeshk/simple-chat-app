import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  name: string;
}

const HelloWorld: React.FC<Props> = (props) => {
  return (
    <View>
      <Text>Hello from World to {props.name}</Text>
    </View>
  );
};

export default HelloWorld;
