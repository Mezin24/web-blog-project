import { classNames } from 'shared/lib/classNames/classNames';
import React, {
  HTMLAttributes, memo, useCallback, useEffect, useRef, useState
} from 'react';
import cls from './Input.module.scss';

type HtmlInputProps = Omit<HTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HtmlInputProps {
  className?: string;
  value?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  type?: string;
  autoFocus?: boolean
}
export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    type = 'text',
    autoFocus = false,
    ...otherProps
  } = props;

  const [isMounted, setIsMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => (
    onChange?.(e.target?.value)
  ), [onChange]);

  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
      {placeholder && <div className={cls.placeholder}>{`${placeholder} > `}</div>}
      <input
        ref={inputRef}
        className={cls.input}
        type={type}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </div>
  );
});
