import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidationErrors } from './getProfileValidationErrors';
import { ValidationErrors } from '../../types/profile';

describe('getProfileValidationErrors', () => {
  test('should return error', () => {
    const data = [ValidationErrors.INVALID_AGE, ValidationErrors.INVALID_DATA];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validationErrors: data
      }
    };
    expect(getProfileValidationErrors(state as StateSchema)).toEqual(data);
  });

  test('should work with empty value', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidationErrors(state as StateSchema)).toEqual(undefined);
  });
});
