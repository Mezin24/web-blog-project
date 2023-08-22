import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOptoins<T extends string> {
  option: string;
  value: T
}

interface SelectProps<T extends string> {
   className?: string;
   label?: string;
   value?: T;
   onChange?: (value: T) => void
   options?: SelectOptoins<T>[],
   readonly?: boolean
}
export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className, label, onChange, options, value, readonly = false
  } = props;
  const mods:Mods = {};

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  const optionsEls = useMemo(() => (
    options?.map((opt) => (
      <option
        className={cls.option}
        value={opt.value}
        key={opt.value}
      >
        {opt.option}
      </option>
    ))
  ), [options]);

  return (
    <div className={classNames(cls.selectWrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label}> `}</span>}
      <select
        disabled={readonly}
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsEls}
      </select>
    </div>
  );
};
