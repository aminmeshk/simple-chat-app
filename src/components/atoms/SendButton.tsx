import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  onPress: () => void;
}

const SendButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      style={styles.sendButton}
      containerStyle={styles.sendButtonContainer}
      onPress={props.onPress}>
      <Image
        source={require('../../assets/images/direct.png')}
        style={styles.sendImage}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sendImage: {
    width: 28,
    height: 28,
  },
  sendButton: {
    paddingHorizontal: 6,
    paddingTop: 8,
    paddingBottom: 12,
  },
  sendButtonContainer: {
    alignSelf: 'flex-end',
  },
});

export default React.memo(SendButton);
