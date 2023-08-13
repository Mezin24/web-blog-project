import { DeepPartial } from '@reduxjs/toolkit';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StateSchema } from 'app/providers/StoreProvider';
import { ProfileSchema, ValidationErrors } from '../types/profile';
import { profileActions, profileReducer } from './ProfileSlice';
import { updateProfiledata } from '../services/updateProfileData/updateProfileData';

const data = {
  name: 'Test',
  lastname: 'Testovish',
  age: 30,
  city: 'Moscow',
  country: Country.Russia,
  currency: Currency.RUB,
  username: 'Test',
};

describe('profileSlice', () => {
  test('setReadonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: true };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly()))
      .toEqual({ readonly: false });
  });

  test('setProfileData', () => {
    const state: DeepPartial<ProfileSchema> = { form: { name: 'test' } };
    expect(profileReducer(state as ProfileSchema, profileActions.setProfileData({ name: '123' })))
      .toEqual({ form: { name: '123' } });
  });

  test('cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: { name: 'test' },
      readonly: false,
      validationErrors: [ValidationErrors.INVALID_DATA]
    };
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
      .toEqual({ data, form: data, readonly: true });
  });

  test('update profile service data pending', () => {
    const state: DeepPartial<ProfileSchema> = { isLoading: false, validationErrors: [ValidationErrors.INVALID_AGE] };
    expect(profileReducer(state as ProfileSchema, updateProfiledata.pending))
      .toEqual({
        isLoading: true, validationErrors: undefined
      });
  });

  test('update profile service data fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = { isLoading: false, validationErrors: [ValidationErrors.INVALID_AGE] };
    expect(profileReducer(state as ProfileSchema, updateProfiledata.fulfilled(data, '')))
      .toEqual({
        data, isLoading: false, validationErrors: undefined, form: data, readonly: true
      });
  });
});
