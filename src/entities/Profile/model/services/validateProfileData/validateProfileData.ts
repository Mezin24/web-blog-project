import { Country } from 'entities/Country';
import { Profile, ValidationErrors } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
  const errors: ValidationErrors[] = [];

  if (!profile) {
    errors.push(ValidationErrors.NO_DATA);
    return errors;
  }

  const {
    name, age, country, lastname
  } = profile;

  if (!name || !lastname) {
    errors.push(ValidationErrors.INVALID_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidationErrors.INVALID_AGE);
  }

  if (!country || !Object.values(Country).includes(country)) {
    errors.push(ValidationErrors.INVALID_COUNTRY);
  }
  return errors;
};
