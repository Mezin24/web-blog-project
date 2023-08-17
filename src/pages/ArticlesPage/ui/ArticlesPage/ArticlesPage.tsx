import { ArticlesList } from 'entities/Article/ui/ArticlesList/ArticlesList';
import {
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList';
import {
  articlesPageReducer,
  articlesPagetActions,
  getArticles
} from 'pages/ArticlesPage/model/slice/articlesSlice';
import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ArticleView } from 'entities/Article/model/types/article';
import { ArticleViewSelector } from 'entities/Article';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlePage } from 'pages/ArticlesPage/model/services/fetchNextArticlePage/fetchNextArticlePage';
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
  const error = useSelector(getArticlePageError);
  const view = useSelector(getArticlePageView);
  const articles = useSelector(getArticles.selectAll);
  const dispatch = useDispatch();

  useInitialEffect(() => {
    dispatch(articlesPagetActions.initView());
    dispatch(fetchArticlesList({ page: 1 }));
  });

  const onLoadMore = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPagetActions.setView(view));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollCb={onLoadMore} className={classNames(cls.articlesPage, {}, [className])}>
        <ArticleViewSelector view={view || ArticleView.SMALL} onChangView={onChangeView} />
        <ArticlesList
          articles={articles}
          view={view}
          isLoading={isLoading}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
