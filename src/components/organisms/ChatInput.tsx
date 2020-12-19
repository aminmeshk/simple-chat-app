import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  onSend: (content: string) => void;
}

const ChatInput: React.FC<Props> = (props) => {
  const [text, setText] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.textInput, inputFocused ? styles.textInputFocused : {}]}
        multiline={true}
        placeholder="Type something..."
        value={text}
        onChangeText={setText}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      />
      <TouchableOpacity
        style={styles.sendButton}
        containerStyle={styles.sendButtonContainer}
        onPress={() => {
          props.onSend(text);
          setText('');
        }}>
        <Image
          source={require('../../assets/images/direct.png')}
          style={styles.sendImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    paddingHorizontal: 8,
    paddingVertical: 6,
    flexDirection: 'row',
  },
  textInput: {
    minHeight: 20,
    backgroundColor: '#fafafa',
    paddingHorizontal: 8,
    borderRadius: 10,
    flex: 1,
  },
  textInputFocused: {
    borderColor: 'indigo',
    borderWidth: 1,
  },
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

export default ChatInput;
