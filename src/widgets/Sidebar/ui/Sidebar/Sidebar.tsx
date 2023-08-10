import {
  memo, useCallback, useMemo, useState
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { getAuthData } from 'entities/User/model/selectors/getAuthData/getAuthData';
import { useSelector } from 'react-redux';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
   className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const isAuth = useSelector(getAuthData);

  const sidebarItems = useMemo(
    () => SidebarItemsList.filter((item) => !(!isAuth && item.auth)),
    [isAuth]
  );

  const toggleCollapsed = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <menu
      className={classNames(
        cls.sidebar,
        { [cls.collapsed]: collapsed },
        [className]
      )}
      data-testid="sidebar"
    >
      <nav className={cls.links}>
        {sidebarItems.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </nav>
      <Button
        data-testid="collapsed_btn"
        theme={ButtonTheme.BACKGROUND}
        size={ButtonSize.SIZE_L}
        square
        className={cls['toggle-btn']}
        onClick={toggleCollapsed}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </menu>
  );
});
