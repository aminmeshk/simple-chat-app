import { Message, MessageStatus } from 'models';
import users from './users';

const messages: Message[] = [
  new Message(
    '1',
    users[0],
    '1',
    'Hello Snowman! Is that you?',
    new Date(2020, 12, 19, 14, 23, 30),
    MessageStatus.RECEIVED,
    false,
  ),
  new Message(
    '2',
    users[1],
    '2',
    "Hey Santa Claus!\nYes that's me. Am I on the nice list?",
    new Date(2020, 12, 19, 14, 29, 36),
    MessageStatus.READ,
    true,
  ),
  new Message(
    '3',
    users[0],
    '1',
    'Let me see',
    new Date(2020, 12, 19, 14, 30, 24),
    MessageStatus.RECEIVED,
    false,
  ),
  new Message(
    '4',
    users[1],
    '2',
    'Alright',
    new Date(2020, 12, 19, 14, 31, 36),
    MessageStatus.READ,
    true,
  ),
  new Message(
    '5',
    users[0],
    '1',
    'It depends how good you do this project!',
    new Date(2020, 12, 19, 14, 32, 20),
    MessageStatus.RECEIVED,
    false,
  ),
];

export default messages;
