import { dateTimeHelper } from 'components/utils';
import { MessageStatus } from 'models';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
  timestamp: Date;
  status: MessageStatus;
  isFromMe: boolean;
}

const TimeRead: React.FC<Props> = (props) => {
  const { status, timestamp, isFromMe } = props;
  return (
    <View style={styles.timeReadContainer}>
      {isFromMe && (
        <Image
          source={
            status === MessageStatus.SENT
              ? require('../../assets/images/check-symbol.png')
              : status === MessageStatus.READ
              ? require('../../assets/images/double-tick-indicator.png')
              : null
          }
          style={styles.read}
        />
      )}
      <Text style={[styles.time, isFromMe ? styles.timeSent : {}]}>
        {dateTimeHelper.toChatTime(timestamp)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  time: {
    fontSize: 10,
    opacity: 0.5,
    color: 'black',
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

export default React.memo(TimeRead);
