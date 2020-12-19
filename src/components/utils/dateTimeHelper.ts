import { Message } from 'models';
import moment from 'moment';

export const toChatTime = (dateTime: Date) => moment(dateTime).format('HH:mm');
export const messageDateTimeComparator = (m1: Message, m2: Message) => {
  return moment(m1.timestamp).isAfter(m2.timestamp) ? -1 : 1;
};
