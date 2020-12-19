import { User } from 'models';
import {
  LOAD_DEFAULT_MESSAGES,
  MessageActionTypes,
  SEND_MESSAGE,
} from './types';

export const loadDefaultMessages = (): MessageActionTypes => ({
  type: LOAD_DEFAULT_MESSAGES,
});

export const sendMessage = (
  content: string,
  timestamp: Date,
  sender: User,
): MessageActionTypes => ({
  type: SEND_MESSAGE,
  payload: {
    content,
    timestamp,
    sender,
  },
});
