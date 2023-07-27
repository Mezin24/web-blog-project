import { LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme,
  to: string,
}

export const AppLink = (props: AppLinkProps) => {
  const { 
    className, 
    to, 
    theme = AppLinkTheme.PRIMARY, 
    children
  } = props
  return (
   <Link to={to}  className={classNames(cls.appLink, {}, [className, cls[theme]])}>
     {children}
   </Link>
 );
};