import { spawn } from 'child_process';
import {
  FC, memo, useCallback, useEffect
} from 'react';
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
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import ViewIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { ArticleBlock, ArticleBlockTypes } from 'entities/Article/model/types/article';
import cls from './ArticleDetailsComponent.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
  ArticleImageBlockComponent
} from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';

interface ArticleDetailsComponentProps {
   className?: string;
   id: string
}

const reducers: ReducersList = {
  articleDetails: articleReducer
};

export const ArticleDetailsComponent = memo((props: ArticleDetailsComponentProps) => {
  const { className, id } = props;
  const { t } = useTranslation('article-dateils');
  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleDetails(id));
    }
  }, [dispatch, id]);

  const renderBlock = (block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockTypes.TEXT:
      return <ArticleTextBlockComponent block={block} key={block.id} />;
    case ArticleBlockTypes.IMAGE:
      return <ArticleImageBlockComponent block={block} key={block.id} />;
    case ArticleBlockTypes.CODE:
      return <ArticleCodeBlockComponent block={block} key={block.id} />;
    default:
      return null;
    }
  };

  let content;

  if (isLoading) {
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
    content = (
      <>
        <div className={cls.imgWrapper}>
          <Avatar
            src={article?.img}
            alt={article?.title}
            className={cls.img}
            size={150}
          />
        </div>
        <Text
          size={TextSize.L}
          align={TextAlign.CENTER}
          title={article?.title}
          className={cls.title}
        />
        <div className={cls.info}>
          <Icon Svg={ViewIcon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={cls.info}>
          <Icon Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </div>
        <div className={cls.types}>
          { article?.type.map((type) => <span key={type} className={cls.span}>{type}</span>)}
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div className={classNames(cls.articleDetailsComponent, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
