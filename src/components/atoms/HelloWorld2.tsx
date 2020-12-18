import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  name: string;
}

const HelloWorld2: React.FC<Props> = (props) => {
  return (
    <View>
      <Text>Hello from World 2 to {props.name}</Text>
    </View>
  );
};

export default HelloWorld2;
