import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/lib/const/localStorage';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
  authData: undefined
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(action.payload));
    },
    initAuthData: (state) => {
      const authData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (authData) {
        state.authData = JSON.parse(authData);
      }
    },
    logout: (state) => {
      state.authData = undefined;
    },
  }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
