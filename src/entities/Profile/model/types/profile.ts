import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export enum ValidationErrors {
  INVALID_DATA = 'INVALID_DATA',
  INVALID_AGE = 'INVALID_AGE',
  INVALID_COUNTRY = 'INVALID_COUNTRY',
  SERVER_ERROR = 'SERVER_ERROR',
  NO_DATA = 'NO_DATA',
}

export interface Profile {
  id?: string;
  name?: string,
  lastname?: string,
  age?: number,
  currency?: Currency,
  country?: Country,
  city?: string,
  username?: string,
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile,
  form?: Profile,
  isLoading?: boolean,
  error?: string,
  readonly?: boolean,
  validationErrors?: ValidationErrors[]
}
