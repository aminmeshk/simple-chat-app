import MessageStatus from './messageStatus';
import User from './user';

class Message {
  id: string;
  sender: User;
  senderId: string;
  content: string;
  timestamp: Date;
  status: MessageStatus;
  isFromMe: boolean;

  constructor(
    id: string,
    sender: User,
    senderId: string,
    content: string,
    timestamp: Date,
    status: MessageStatus,
    isFromMe: boolean,
  ) {
    this.id = id;
    this.sender = sender;
    this.senderId = senderId;
    this.content = content;
    this.timestamp = timestamp;
    this.status = status;
    this.isFromMe = isFromMe;
  }
}

export default Message;
