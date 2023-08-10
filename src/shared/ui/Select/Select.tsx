import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOptoins {
  option: string;
  value: string
}

interface SelectProps {
   className?: string;
   label?: string;
   value?: string;
   onChange: (value: string) => void
   options?: SelectOptoins[],
   readonly?: boolean
}
export const Select = memo((props: SelectProps) => {
  const {
    className, label, onChange, options, value, readonly = false
  } = props;
  const mods:Mods = {};

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
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
});
