import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
   className?: string;
   block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const { className, block } = props;

  return (
    <img
      src={block.src}
      alt={block.title}
      className={classNames(cls.articleImageBlockComponent, {}, [className])}
    />
  );
});
