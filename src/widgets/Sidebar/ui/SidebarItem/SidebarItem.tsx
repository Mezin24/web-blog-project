import { classNames } from 'shared/lib/classNames/classNames';
import { t } from 'i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User/model/selectors/getAuthData/getAuthData';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
   className?: string;
   item: SidebarItemType,
   collapsed?: boolean
}
export const SidebarItem = memo(({ className, item, collapsed }: SidebarItemProps) => {
  const isAuth = useSelector(getAuthData);

  if (!isAuth && item.auth) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={
        classNames(
          cls.SidebarItem,
          { [cls.collapsed]: collapsed },
          [cls.link_item, className]
        )
      }
    >
      <item.Icon className={cls.link_icon} />
      <span className={cls.link_text}>{t(item.text)}</span>
    </AppLink>
  );
});
