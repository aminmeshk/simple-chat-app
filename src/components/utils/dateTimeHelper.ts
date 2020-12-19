import moment from 'moment';

export const toChatTime = (dateTime: Date) => moment(dateTime).format('HH:mm');
