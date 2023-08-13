import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { fetchProfileData } from './fetchProfileData';

const data = {
  name: 'Test',
  lastname: 'Testovish',
  age: 30,
  city: 'Moscow',
  country: Country.Russia,
  currency: Currency.RUB,
  username: 'Test',
};

describe('fetchProfileData', () => {
  test('success fetching', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({
      data
    }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalledTimes(1);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error login', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalledTimes(1);
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
