import { dateTimeHelper } from 'components/utils';
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
      <Text style={[styles.time, isFromMe ? styles.timeSent : {}]}>
        {dateTimeHelper.toChatTime(message.timestamp)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    backgroundColor: 'lightgray',
    maxWidth: '55%',
    paddingEnd: 10,
    paddingStart: 12,
    borderRadius: 16,
    paddingVertical: 8,
  },
  boxSent: {
    backgroundColor: 'indigo',
    paddingEnd: 12,
    paddingStart: 10,
  },
  content: {
    // borderColor: 'red',
    // borderWidth: 1,
  },
  contentSent: {
    color: 'white',
  },
  time: {
    fontSize: 10,
    alignSelf: 'flex-end',
    opacity: 0.5,
    marginStart: 6,
  },
  timeSent: {
    color: 'white',
  },
});

export default ChatBox;
