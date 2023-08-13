import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidationErrors } from '../../types/profile';

const data = {
  name: 'Test',
  lastname: 'Testovish',
  age: 30,
  city: 'Moscow',
  country: Country.Russia,
  currency: Currency.RUB,
  username: 'Test',
};

describe('validateProfileData', () => {
  test('with correct data', () => {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });

  test('with incorrect first and last name data', () => {
    const result = validateProfileData({ ...data, name: '', lastname: '' });
    expect(result).toEqual([ValidationErrors.INVALID_DATA]);
  });

  test('with incorrect age', () => {
    const result = validateProfileData({ ...data, age: undefined });
    expect(result).toEqual([ValidationErrors.INVALID_AGE]);
  });

  test('with incorrect country', () => {
    const result = validateProfileData({ ...data, country: undefined });
    expect(result).toEqual([ValidationErrors.INVALID_COUNTRY]);
  });

  test('with incorrect all data', () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidationErrors.INVALID_DATA,
      ValidationErrors.INVALID_AGE,
      ValidationErrors.INVALID_COUNTRY,
    ]);
  });

  test('with empty data', () => {
    const result = validateProfileData();
    expect(result).toEqual([
      ValidationErrors.NO_DATA
    ]);
  });
});
