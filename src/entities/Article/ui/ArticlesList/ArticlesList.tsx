import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticlesList.module.scss';

interface ArticlesListProps {
   className?: string;
   articles?: Article[];
   isLoading?: boolean;
   view?: ArticleView
}

export const ArticlesList: FC<ArticlesListProps> = (props) => {
  const {
    className, articles, isLoading, view = ArticleView.SMALL
  } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.articlesList, {}, [className, cls[view]])}>
        {new Array(view === ArticleView.SMALL ? 9 : 3)
          .fill(0)
          .map((_, index) => <ArticleListItemSkeleton view={view} key={String(index)} />)}
      </div>
    );
  }

  return (
    <div className={classNames(cls.articlesList, {}, [className, cls[view]])}>
      {articles?.map((article) => (
        <ArticleListItem
          article={article}
          key={article.id}
          view={view}
        />
      ))}
    </div>
  );
};
