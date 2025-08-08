import { combineReducers } from '@reduxjs/toolkit';
import User from './user.ts';

export const rootReducer = combineReducers({
  organization: User,
});

export type RootReducer = ReturnType<typeof rootReducer>;
