import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOptoins } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { Currency } from '../model/types/currency';

interface CurrencyProps {
   className?: string;
   onChange?: (val: Currency) => void;
   value?: Currency;
   readOnly?: boolean
}

const options: SelectOptoins<Currency>[] = [
  { value: Currency.USD, option: Currency.USD },
  { value: Currency.EUR, option: Currency.EUR },
  { value: Currency.RUB, option: Currency.RUB },
];

export const CurrencySelect = (props: CurrencyProps) => {
  const {
    className, onChange, value, readOnly
  } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback((val) => {
    onChange?.(val as Currency);
  }, [onChange]);

  return (
    <Select
      className={classNames('', {}, [className])}
      options={options}
      label={t('Валюта')}
      onChange={onChangeHandler}
      value={value}
      readonly={readOnly}
    />
  );
};
