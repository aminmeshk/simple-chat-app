import { combineReducers, createStore } from 'redux';
import { messageReducer } from './message/reducers';
import { userReducer } from './user/reducers';

const rootReducer = combineReducers({
  user: userReducer,
  message: messageReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
