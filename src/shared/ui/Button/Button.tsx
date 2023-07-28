import { HTMLAttributes } from 'react';
import cls from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  PRIMARY = 'primary',
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme,
}

export const Button = (props: ButtonProps) => {
  const {
    className, 
    children, 
    theme = ButtonTheme.CLEAR,
    ...otherProps
  } = props
  return (
   <button
    className={classNames(cls.button, {}, [className, cls[theme]])}
    {...otherProps}
   >
     {children}
   </button>
 );
};