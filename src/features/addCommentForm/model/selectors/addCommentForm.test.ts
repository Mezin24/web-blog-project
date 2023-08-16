import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getAddCommentFormError, getAddCommentFormText } from './addCommentForm';

describe('addCommentForm', () => {
  test('get Text', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text: 'test'
      }
    };
    expect(getAddCommentFormText(state as StateSchema)).toBe('test');
  });
  test('work with empty state Text', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFormText(state as StateSchema)).toBe(undefined);
  });
  test('get error', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        error: 'error',
        text: ''
      }
    };
    expect(getAddCommentFormError(state as StateSchema)).toBe('error');
  });
  test('work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFormError(state as StateSchema)).toBe(undefined);
  });
});
