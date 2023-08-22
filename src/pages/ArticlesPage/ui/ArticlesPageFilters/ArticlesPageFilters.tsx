import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleViewSelector } from 'entities/Article';
import { ArticleSortField, ArticleView } from 'entities/Article/model/types/article';
import { articlesPagetActions } from 'pages/ArticlesPage/model/slice/articlesSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  getArticlePageOrder,
  getArticlePageSort,
  getArticlePageView
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { useSelector } from 'react-redux';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import {
  ArticleSortSelector
} from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector';
import { SortOrder } from 'shared/lib/types';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
   className?: string;
}

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const view = useSelector(getArticlePageView);
  const dispatch = useAppDispatch();
  const order = useSelector(getArticlePageOrder);
  const sort = useSelector(getArticlePageSort);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPagetActions.setView(view));
  }, [dispatch]);

  const onChangeSort = useCallback((sort: ArticleSortField) => {
    dispatch(articlesPagetActions.setSort(sort));
  }, [dispatch]);

  const onChangeOrder = useCallback((order: SortOrder) => {
    dispatch(articlesPagetActions.setOrder(order));
  }, [dispatch]);

  return (
    <div className={classNames(cls.articlesPageFilters, {}, [className])}>
      <div className={cls.filterWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view || ArticleView.SMALL} onChangView={onChangeView} />
      </div>
      <Card>
        <Input placeholder={t('Поиск')} />
      </Card>
    </div>
  );
};
