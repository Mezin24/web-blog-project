import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFound } from 'pages/NotFound';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetails } from 'pages/ArticleDetailsPage';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  NOT_FOUND = 'not_found',
}

type AppRouteProps = RouteProps & {
  auth?: boolean
}

export const AppPaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: AppPaths.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: AppPaths.about,
    element: <AboutPage />
  },
  [AppRoutes.PROFILE]: {
    path: AppPaths.profile,
    element: <ProfilePage />,
    auth: true
  },
  [AppRoutes.ARTICLES]: {
    path: AppPaths.articles,
    element: <ArticlesPage />,
    auth: true
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${AppPaths.article_details}/:id`,
    element: <ArticleDetails />,
    auth: true
  },
  [AppRoutes.NOT_FOUND]: {
    path: AppPaths.not_found,
    element: <NotFound />
  },
};
