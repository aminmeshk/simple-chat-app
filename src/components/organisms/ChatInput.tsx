import { SendButton } from 'components/atoms';
import { Colors } from 'components/styles';
import React, { useCallback, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface Props {
  onSend: (content: string) => void;
}

const ChatInput: React.FC<Props> = (props) => {
  const { onSend } = props;
  const [text, setText] = useState('');
  const [inputFocused, setInputFocused] = useState(false);

  const onSendButtonPress = useCallback(() => {
    onSend(text);
    setText('');
  }, [text, onSend]);

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
      <SendButton onPress={onSendButtonPress} />
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
    borderColor: Colors.PRIMARY,
    borderWidth: 1,
  },
});

export default ChatInput;
