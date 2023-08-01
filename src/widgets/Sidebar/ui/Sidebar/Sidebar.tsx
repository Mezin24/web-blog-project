import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { AppPaths } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
   className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

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
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={AppPaths.main}
          className={cls.link_item}
        >
          <MainIcon className={cls.link_icon} />
          <span className={cls.link_text}>{t('Главная')}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={AppPaths.about}
          className={cls.link_item}
        >
          <AboutIcon className={cls.link_icon} />
          <span className={cls.link_text}>{t('О нас')}</span>
        </AppLink>

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
};
