import { ArticlesList } from 'entities/Article/ui/ArticlesList/ArticlesList';
import {
  getArticlePageIsLoading,
  getArticlePageView
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import {
  fetchNextArticlePage
} from 'pages/ArticlesPage/model/services/fetchNextArticlePage/fetchNextArticlePage';
import {
  initArticlesPage
} from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';
import {
  articlesPageReducer,
  getArticles
} from 'pages/ArticlesPage/model/slice/articlesSlice';
import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'shared/ui/Page/Page';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
   className?: string;
}

const reducers:ReducersList = {
  articlesPage: articlesPageReducer
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;
  const isLoading = useSelector(getArticlePageIsLoading);
  const view = useSelector(getArticlePageView);
  const articles = useSelector(getArticles.selectAll);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  const onLoadMore = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollCb={onLoadMore} className={classNames(cls.articlesPage, {}, [className])}>
        <ArticlesPageFilters />
        <ArticlesList
          articles={articles}
          view={view}
          isLoading={isLoading}
          className={cls.list}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
