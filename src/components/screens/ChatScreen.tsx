import React, { useState } from 'react';
import { ChatItem } from 'components/organisms';
import { messages } from 'dummy';
import { Message } from 'models';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

interface Props {}

const ChatScreen: React.FC<Props> = (props) => {
  const [chatMessages, setChatMessages] = useState<Message[]>(messages);

  const renderItem = (itemData: { item: Message }) => {
    return <ChatItem message={itemData.item} />;
  };

  return (
    <FlatList
      renderItem={renderItem}
      data={chatMessages}
      contentContainerStyle={styles.flatList}
      keyExtractor={(_, idx) => idx.toString()}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#eee',
  },
});

export default ChatScreen;
