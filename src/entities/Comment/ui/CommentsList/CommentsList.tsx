import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './CommentsList.module.scss';
import { Comment } from '../../model/types/comments';
import { CommentComponent } from '../CommentComponent/CommentComponent';

interface CommentsListProps {
   className?: string;
   comments: Comment[],
   isLoading?: boolean
}

export const CommentsList: FC<CommentsListProps> = (props) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.commentsList, {}, [className])}>
        <CommentComponent isLoading />
        <CommentComponent isLoading />
        <CommentComponent isLoading />
      </div>
    );
  }

  return (
    <div className={classNames(cls.commentsList, {}, [className])}>
      {
        comments.length
          ? comments.map((comment) => (
            <CommentComponent
              key={comment.id}
              comment={comment}
              isLoading={isLoading}
            />
          ))
          : <Text text={t('Комментарии отсутстуют')} />
      }
    </div>
  );
};
