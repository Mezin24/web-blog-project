import cls from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import LightTheme from 'shared/assets/icons/theme-light.svg';
import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import { useTheme } from 'app/providers/theme/useTheme';
import { Theme } from 'app/providers/theme/ThemeContext';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme()
  return (
   <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme} className={classNames(cls.themeSwitcher, {}, [className])}>
    {theme === Theme.LIGHT ? <LightTheme /> : <DarkTheme/>}
   </Button>
 );
};