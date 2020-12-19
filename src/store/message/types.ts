import { Message, User } from 'models';

export interface MessageState {
  messages: Message[];
}

export const LOAD_DEFAULT_MESSAGES = 'message/loadDefaults';
export const SEND_MESSAGE = 'message/send';

interface LoadDefaultMessagesAction {
  type: typeof LOAD_DEFAULT_MESSAGES;
}
interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  payload: {
    content: string;
    timestamp: Date;
    sender: User;
  };
}

export type MessageActionTypes = LoadDefaultMessagesAction | SendMessageAction;
