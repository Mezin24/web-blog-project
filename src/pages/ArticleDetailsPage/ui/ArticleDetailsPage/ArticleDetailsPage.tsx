import {
  ArticleDetailsComponent
} from 'entities/Article/ui/ArticleDetailsComponent/ArticleDetailsComponent';
import { CommentsList } from 'entities/Comment';
import { AddCommentForm } from 'features/addCommentForm';
import {
  getArticleDetailsCommentError,
  getArticleDetailsCommentIsLoading
} from 'pages/ArticleDetailsPage/model/selectors/comments';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle';
import {
  fetchArticleDetailsComments
} from 'pages/ArticleDetailsPage/model/services/fetchArticleDetailsComments';
import {
  articleDetailsCommentReducer, getArticleComments
} from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentSlice';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Page } from 'shared/ui/Page/Page';
import { Text } from 'shared/ui/Text/Text';
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
  const navigate = useNavigate();

  useInitialEffect(() => {
    dispatch(fetchArticleDetailsComments(id));
  });

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  if (!id || error) {
    return (
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        <Button theme={ButtonTheme.OUTLINE} onClick={() => navigate(-1)}>
          {t('Назад к статьям')}
        </Button>
        <ArticleDetailsComponent id={id} />
        <Text title={t('Комментарии')} className={cls.title} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentsList
          isLoading={isLoading}
          comments={comments}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
