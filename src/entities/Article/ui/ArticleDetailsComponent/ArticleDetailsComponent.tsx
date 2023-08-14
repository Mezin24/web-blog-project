import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleReducer } from 'entities/Article/model/slice/articleSlice';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from 'entities/Article/model/selectors/getArticleDetailsData';
import { fetchArticleDetails } from 'entities/Article/model/services/fetchArticleDetails';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleDetailsComponent.module.scss';

interface ArticleDetailsComponentProps {
   className?: string;
   id: string
}

const reducers: ReducersList = {
  articleDetails: articleReducer
};

export const ArticleDetailsComponent: FC<ArticleDetailsComponentProps> = (props) => {
  const { className, id } = props;
  const { t } = useTranslation('article-dateils');
  const article = useSelector(getArticleDetailsData);
  const isloading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticleDetails(id));
  }, [dispatch, id]);

  let content;

  if (isloading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} borderRadius="50%" />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={400} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        title={t('Произошла ошибка при загрузке статьи')}
        align={TextAlign.CENTER}
      />
    );
  } else {
    content = <div>Article Details Component</div>;
  }

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div className={classNames(cls.articleDetailsComponent, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
};
