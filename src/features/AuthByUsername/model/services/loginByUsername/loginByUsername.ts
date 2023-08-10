import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/lib/const/localStorage';

interface LoginByUsernameProps {
  username: string;
  password: string
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>(
  'login/loginByUsername',
  async (authData: LoginByUsernameProps, thunkApi) => {
    const { rejectWithValue, extra, dispatch } = thunkApi;
    try {
      const response = await extra.api.post<User>('/login', authData);
      if (!response.data) {
        throw new Error();
      }
      dispatch(userActions.setAuthData(response.data));
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      extra.navigate?.('/about');
      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
