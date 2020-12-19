import { dateTimeHelper } from 'components/utils';
import { Message, MessageStatus } from 'models';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

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
      <View style={styles.timeReadContainer}>
        {isFromMe && (
          <Image
            source={
              message.status === MessageStatus.SENT
                ? require('../../assets/images/check-symbol.png')
                : message.status === MessageStatus.READ
                ? require('../../assets/images/double-tick-indicator.png')
                : null
            }
            style={styles.read}
          />
        )}
        <Text style={[styles.time, isFromMe ? styles.timeSent : {}]}>
          {dateTimeHelper.toChatTime(message.timestamp)}
        </Text>
      </View>
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
    borderRadius: 18,
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
    opacity: 0.5,
    alignSelf: 'flex-end',
  },
  timeSent: {
    color: 'white',
  },
  timeReadContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginStart: 6,
  },
  read: {
    width: 14,
    height: 14,
    marginEnd: 3,
    alignSelf: 'flex-end',
  },
});

export default ChatBox;
