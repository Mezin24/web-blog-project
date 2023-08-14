import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockProps {
   className?: string;
   block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockProps) => {
  const { className, block } = props;

  return (
    <div
      className={classNames(cls.articleTextBlock, {}, [className])}
    >
      {block.title && <Text title={block.title} className={cls.title} />}
      {block.paragraphs.map((par) => (
        <Text text={par} key={par} className={cls.paragraph} />
      ))}
    </div>
  );
});
