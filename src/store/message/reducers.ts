import { messages } from 'dummy';
import { Message, MessageStatus } from 'models';
import {
  LOAD_DEFAULT_MESSAGES,
  MessageActionTypes,
  MessageState,
  SEND_MESSAGE,
} from './types';

const messageInitialState: MessageState = {
  messages: [],
};

export const messageReducer = (
  state = messageInitialState,
  action: MessageActionTypes,
): MessageState => {
  switch (action.type) {
    case LOAD_DEFAULT_MESSAGES: {
      return {
        ...state,
        // messages: messages.sort(messageDateTimeComparator),
        messages: messages,
      };
    }
    case SEND_MESSAGE: {
      const lastId =
        state.messages.length > 0
          ? state.messages[state.messages.length - 1].id
          : '0';
      const newId = parseInt(lastId, 10) + 1;
      const msg = new Message(
        newId.toString(),
        action.payload.sender,
        action.payload.sender.id,
        action.payload.content,
        action.payload.timestamp,
        MessageStatus.SENT,
        true,
      );
      return {
        ...state,
        // messages: [msg, ...state.messages],
        messages: [...state.messages, msg],
      };
    }
    default: {
      return state;
    }
  }
};
