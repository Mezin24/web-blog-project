import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfiledata } from './updateProfileData';
import { ValidationErrors } from '../../types/profile';

const data = {
  id: '1',
  name: 'Test',
  lastname: 'Testovish',
  age: 30,
  city: 'Moscow',
  country: Country.Russia,
  currency: Currency.RUB,
  username: 'Test',
};

describe('updateProfiledata', () => {
  test('success updating', async () => {
    const thunk = new TestAsyncThunk(updateProfiledata, {
      profile: {
        form: data
      }
    });
    thunk.api.put.mockReturnValue(Promise.resolve({
      data
    }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalledTimes(1);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfiledata, {
      profile: {
        form: data
      }
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.payload).toEqual([ValidationErrors.SERVER_ERROR]);
    expect(result.meta.requestStatus).toBe('rejected');
  });

  test('validation error', async () => {
    const thunk = new TestAsyncThunk(updateProfiledata, {
      profile: {
        form: { ...data, lastname: '' }
      }
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidationErrors.INVALID_DATA]);
  });
});
