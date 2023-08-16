import { FC, HTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
   className?: string;
}

export const Card: FC<CardProps> = (props) => {
  const { className, children, ...otherProps } = props;

  return (
    <div {...otherProps} className={classNames(cls.card, {}, [className])}>
      {children}
    </div>
  );
};
