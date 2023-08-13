import { AppPaths } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';

export interface SidebarItemType {
  path: string,
  text: string,
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>,
  auth?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
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
  {
    path: AppPaths.profile,
    text: 'Профиль',
    Icon: ProfileIcon,
    auth: true
  },
  {
    path: AppPaths.articles,
    text: 'Статьи',
    Icon: ArticleIcon,
    auth: true
  },
];
