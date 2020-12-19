import { LOAD_USERS, UserActionTypes } from './types';

export const loadUserList = (currentUserId: string): UserActionTypes => ({
  type: LOAD_USERS,
  payload: {
    currentUserId,
  },
});
