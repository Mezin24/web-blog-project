import { createSelector } from '@reduxjs/toolkit';
import { getAuthData } from 'entities/User/model/selectors/getAuthData/getAuthData';
import { AppPaths } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import { SidebarItemType } from '../types/items';

export const getSidebarItems = createSelector(getAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: AppPaths.main,
      text: 'Главная',
      Icon: MainIcon
    },
    {
      path: AppPaths.about,
      text: 'О нас',
      Icon: AboutIcon
    },
  ];

  if (userData) {
    sidebarItemsList.push({
      path: `${AppPaths.profile}${userData.id}`,
      text: 'Профиль',
      Icon: ProfileIcon,
      auth: true
    });
    sidebarItemsList.push(
      {
        path: AppPaths.articles,
        text: 'Статьи',
        Icon: ArticleIcon,
        auth: true
      }
    );
  }

  return sidebarItemsList;
});
