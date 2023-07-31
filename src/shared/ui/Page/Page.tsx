import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';

interface PageProps {
   className?: string;
}
export const Page: FC<PageProps> = ({ children, className }) => (
  <section className={classNames(cls.page, {}, [className])}>
    {children}
  </section>
);
