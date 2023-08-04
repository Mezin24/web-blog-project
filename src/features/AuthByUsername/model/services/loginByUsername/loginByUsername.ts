import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/lib/const/localStorage';

interface AuthDataProps {
  username: string;
  password: string
}

export const loginByUsername = createAsyncThunk<
  User,
  AuthDataProps,
  { rejectValue: string }
>(
  'login/loginByUsername',
  async (authData: AuthDataProps, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);
      if (!response.data) {
        throw new Error();
      }

      dispatch(userActions.setAuthData(response.data));
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
