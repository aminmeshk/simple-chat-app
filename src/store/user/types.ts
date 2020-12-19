import { User } from 'models';

export interface UserState {
  users: User[];
  currentUser: User | null;
}

export const LOAD_USERS = 'user/list';

interface GetUserListAction {
  type: typeof LOAD_USERS;
  payload: {
    currentUserId: string;
  };
}

export type UserActionTypes = GetUserListAction;
