import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfiledata = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>(
  'profile/updateProfiledata',
  async (_, thunkApi) => {
    const {
      rejectWithValue, extra, getState, dispatch
    } = thunkApi;
    try {
      const formData = getProfileForm(getState());
      const response = await extra.api.put<Profile>('/profile', formData);
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
