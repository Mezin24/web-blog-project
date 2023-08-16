import {
  ArticleDetailsComponent
} from 'entities/Article/ui/ArticleDetailsComponent/ArticleDetailsComponent';
import { CommentsList } from 'entities/Comment';
import {
  getArticleDetailsCommentError,
  getArticleDetailsCommentIsLoading
} from 'pages/ArticleDetailsPage/model/selectors/comments';
import {
  fetchArticleDetailsComments
} from 'pages/ArticleDetailsPage/model/services/fetchArticleDetailsComments';
import {
  articleDetailsCommentReducer, getArticleComments
} from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentSlice';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/addCommentForm';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
   className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentReducer
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('article-dateils');
  const { id } = useParams<{id: string}>();
  const isLoading = useSelector(getArticleDetailsCommentIsLoading);
  const error = useSelector(getArticleDetailsCommentError);
  const comments = useSelector(getArticleComments.selectAll);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchArticleDetailsComments(id));
  });

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  if (!id || error) {
    return (
      <div className={classNames(cls.articleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.articleDetailsPage, {}, [className])}>
        <ArticleDetailsComponent id={id} />
        <Text title={t('Комментарии')} className={cls.title} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentsList
          isLoading={isLoading}
          comments={comments}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
