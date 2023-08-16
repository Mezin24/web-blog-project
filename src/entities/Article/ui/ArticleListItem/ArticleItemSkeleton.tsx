import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
  ArticleView
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
   className?: string;
   view?: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const {
    className, view = ArticleView.SMALL
  } = props;

  if (view === ArticleView.SMALL) {
    return (
      <Card
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      >
        <div className={cls.imageWrapper}>
          <Skeleton height={200} width={200} className={cls.img} />
        </div>
        <div className={cls.info}>
          <Skeleton width={150} height={16} />
        </div>
        <Skeleton height={16} width={160} className={cls.title} />
      </Card>
    );
  }

  return (
    <Card className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
      <div className={cls.header}>
        <Skeleton
          width={30}
          height={30}
          borderRadius="50%"
        />
        <Skeleton className={cls.username} height={16} width={100} />
        <Skeleton className={cls.createdAt} height={16} width={50} />
      </div>
      <Skeleton className={cls.title} height={24} width={250} />
      <Skeleton width="100%" height="250px" className={cls.img} />
      <Skeleton height="120px" width="100%" className={cls.text} />
    </Card>
  );
});
