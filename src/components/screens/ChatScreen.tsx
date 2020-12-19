import React, { useCallback, useEffect, useRef } from 'react';
import { ChatInput, ChatItem } from 'components/organisms';
import { Message } from 'models';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { loadUserList } from 'store/user/actions';
import { loadDefaultMessages, sendMessage } from 'store/message/actions';

interface Props {}

const ChatScreen: React.FC<Props> = () => {
  // const [chatMessages, setChatMessages] = useState<Message[]>(messages);
  const userList = useSelector((state: RootState) => state.user.users);
  const myUser = useSelector((state: RootState) => state.user.currentUser);
  const chatMessages = useSelector(
    (state: RootState) => state.message.messages,
  );
  const dispatch = useDispatch();
  const flatListRef = useRef<FlatList<Message>>(null);

  useEffect(() => {
    if (!userList || userList.length === 0) {
      dispatch(loadUserList('2'));
    }
  }, [userList, dispatch]);

  useEffect(() => {
    if (!chatMessages || chatMessages.length === 0) {
      dispatch(loadDefaultMessages());
    }
  }, [chatMessages, dispatch]);

  const onSend = useCallback(
    (content: string) => {
      if (!content || !myUser) {
        return;
      }
      content = content.trim();
      if (!content) {
        return;
      }
      dispatch(sendMessage(content, new Date(), myUser));
    },
    [dispatch, myUser],
  );

  const renderItem = (itemData: { item: Message }) => {
    return <ChatItem message={itemData.item} />;
  };

  if (
    !userList ||
    !chatMessages ||
    userList.length === 0 ||
    chatMessages.length === 0
  ) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size="large" color="indigo" />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        renderItem={renderItem}
        data={chatMessages}
        contentContainerStyle={styles.flatList}
        keyExtractor={(_, idx) => idx.toString()}
        ref={flatListRef}
        // inverted
        onContentSizeChange={() => flatListRef.current?.scrollToEnd()}
      />
      <ChatInput onSend={onSend} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#eee',
  },
  flatList: {},
});

export default ChatScreen;
