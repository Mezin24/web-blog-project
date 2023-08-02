import { HTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clear_inverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background_inverted',
}

export enum ButtonSize {
  SIZE_M = 'size_m',
  SIZE_L = 'size_l',
  SIZE_XL = 'size_xl',
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme,
  size?: ButtonSize,
  square?: boolean
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    size = ButtonSize.SIZE_M,
    square,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square
  };

  return (
    <button
      type="button"
      className={classNames(cls.button, mods, [className, cls[theme], cls[size]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
