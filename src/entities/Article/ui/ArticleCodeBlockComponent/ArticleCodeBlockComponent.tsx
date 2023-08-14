import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/frame.svg';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
   className?: string;
   block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
  const { className, block } = props;
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(block.code);
  }, [block.code]);

  return (
    <pre className={classNames(cls.articleCodeBlockComponent, {}, [className])}>
      <Button onClick={onCopy} theme={ButtonTheme.CLEAR} className={cls.copyBtn}>
        <CopyIcon />
      </Button>
      <code>
        {block.code}
      </code>
    </pre>
  );
});
