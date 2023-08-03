import { classNames } from 'shared/lib/classNames/classNames';
import React, {
  HTMLAttributes, memo, useCallback, useEffect, useState
} from 'react';
import cls from './Input.module.scss';

type HtmlInputProps = Omit<HTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HtmlInputProps {
  className?: string;
  value?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  type?: string;
}
export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    type = 'text',
    ...otherProps
  } = props;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => (
    onChange?.(e.target?.value)
  ), [onChange]);

  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
      {placeholder && <div className={cls.placeholder}>{`${placeholder} > `}</div>}
      <input
        className={cls.input}
        type={type}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </div>
  );
});
