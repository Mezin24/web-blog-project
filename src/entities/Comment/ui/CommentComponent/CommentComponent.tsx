import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import cls from './CommentComponent.module.scss';
import { Comment } from '../../model/types/comments';

interface CommentComponentProps {
   className?: string;
   comment: Comment;
   isLoading?: boolean
}

export const CommentComponent: FC<CommentComponentProps> = (props) => {
  const { className, comment, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.commentComponent, {}, [className])}>
        <div className={cls.header}>
          <Skeleton height={30} width={30} borderRadius="50%" className={cls.avatar} />
          <Skeleton height={20} width={100} />
        </div>
        <Skeleton height={50} width="100%" className={cls.content} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.commentComponent, {}, [className])}>
      <div className={cls.header}>
        {comment.user?.avatar
          ? <Avatar src={comment.user.avatar} size={30} alt={comment.user.username} />
          : null}
        <Text text={comment.user.username} />
      </div>
      <Text text={comment.text} />
    </div>
  );
};
