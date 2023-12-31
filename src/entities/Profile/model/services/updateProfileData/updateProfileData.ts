import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidationErrors } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfiledata = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidationErrors[]>
>(
  'profile/updateProfiledata',
  async (_, thunkApi) => {
    const {
      rejectWithValue, extra, getState, dispatch
    } = thunkApi;

    const formData = getProfileForm(getState());
    const errors = validateProfileData(formData);
    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const response = await extra.api.put<Profile>('/profile', formData);
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue([ValidationErrors.SERVER_ERROR]);
    }
  }
);
