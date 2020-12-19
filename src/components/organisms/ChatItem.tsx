import React from 'react';
import { Message } from 'models';
import { Image, StyleSheet, View } from 'react-native';
import { ChatBox } from 'components/molecules';

interface Props {
  message: Message;
}

const ChatItem: React.FC<Props> = (props) => {
  const { message } = props;
  const { isFromMe } = message;

  return (
    <View style={[styles.container, isFromMe ? styles.containerSent : {}]}>
      <Image
        source={message.sender.profileImage}
        style={[styles.image, isFromMe ? styles.imageSent : {}]}
      />
      <ChatBox message={message} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 6,
    marginStart: 12,
  },
  containerSent: {
    flexDirection: 'row-reverse',
    // marginStart: 12,
    // marginEnd: 12,
  },
  image: {
    alignSelf: 'flex-end',
    marginBottom: 3,
    marginEnd: 3,
    width: 32,
    height: 32,
  },
  imageSent: {
    marginEnd: 0,
    marginStart: 3,
  },
});

export default ChatItem;
