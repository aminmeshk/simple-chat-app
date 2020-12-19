import { users } from 'dummy';
import { LOAD_USERS, UserActionTypes, UserState } from './types';

const userInitialState: UserState = {
  users: [],
  currentUser: null,
};

export const userReducer = (
  state = userInitialState,
  action: UserActionTypes,
): UserState => {
  switch (action.type) {
    case LOAD_USERS: {
      return {
        ...state,
        users: users,
        currentUser:
          users.find((x) => x.id === action.payload.currentUserId) ?? null,
      };
    }
    default: {
      return state;
    }
  }
};
