import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOptoins } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { Country } from '../../model/type/country';

interface CountryProps {
   className?: string;
   onChange?: (val: Country) => void;
   value?: Country;
   readOnly?: boolean
}

const options: SelectOptoins[] = [
  { value: Country.Armenia, option: Country.Armenia },
  { value: Country.Belarus, option: Country.Belarus },
  { value: Country.Kazakhstan, option: Country.Kazakhstan },
  { value: Country.Russia, option: Country.Russia },
  { value: Country.Ukraine, option: Country.Ukraine },
];

export const CountrySelect = (props: CountryProps) => {
  const {
    className, onChange, value, readOnly
  } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback((val) => {
    onChange?.(val as Country);
  }, [onChange]);

  return (
    <Select
      className={classNames('', {}, [className])}
      options={options}
      label={t('Страна')}
      onChange={onChangeHandler}
      value={value}
      readonly={readOnly}
    />
  );
};
