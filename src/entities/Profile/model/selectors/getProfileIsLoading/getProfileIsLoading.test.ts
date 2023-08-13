import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true
      }
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty value', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
