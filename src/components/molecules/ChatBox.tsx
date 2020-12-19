import { TimeRead } from 'components/atoms';
import { Colors } from 'components/styles';
import { Message } from 'models';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  message: Message;
}

const ChatBox: React.FC<Props> = (props) => {
  const { message } = props;
  const { isFromMe } = message;
  return (
    <View style={[styles.box, isFromMe ? styles.boxSent : {}]}>
      <Text style={[styles.content, isFromMe ? styles.contentSent : {}]}>
        {message.content}
      </Text>
      <TimeRead
        isFromMe={isFromMe}
        status={message.status}
        timestamp={message.timestamp}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    backgroundColor: 'lightgray',
    maxWidth: '65%',
    paddingEnd: 10,
    paddingStart: 12,
    borderRadius: 18,
    paddingVertical: 8,
  },
  boxSent: {
    backgroundColor: Colors.PRIMARY,
    paddingEnd: 12,
    paddingStart: 10,
  },
  content: {},
  contentSent: {
    color: 'white',
  },
});

export default ChatBox;
