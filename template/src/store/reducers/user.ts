import { createSlice } from '@reduxjs/toolkit';
import { UserAction, UserState } from '../../types/state';

const initialState: UserState = {
  _id: '',
  email: '',
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state: UserState, action: UserAction) {
      return { ...state, ...action.payload };
    },

    clearUser() {
      return initialState;
    },
  },
});

export const { addUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
