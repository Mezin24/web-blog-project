import { AppPaths } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
   <header className={classNames(cls.navbar, {}, [className])}>
    <ThemeSwitcher />
      <nav className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={AppPaths.main}>Main</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={AppPaths.about}>About</AppLink>
      </nav>
   </header>
 );
};