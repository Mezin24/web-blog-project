import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AppPaths } from 'shared/config/routeConfig/routeConfig';
import {
  Article, ArticleBlockTypes, ArticleTextBlock, ArticleView
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
   className?: string;
   article?: Article;
   view?: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    className, article, view = ArticleView.SMALL
  } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const themes = <Text text={article?.type.join(', ')} className={cls.types} />;
  const views = (
    <>
      <Icon Svg={EyeIcon} className={cls.icon} />
      <Text text={String(article?.views)} className={cls.views} />
    </>
  );

  const textBlock = article?.blocks.find(
    (block) => block.type === ArticleBlockTypes.TEXT
  ) as ArticleTextBlock;

  const onShowMore = useCallback(() => {
    navigate(`${AppPaths.article_details}${article?.id}`);
  }, [article?.id, navigate]);

  if (view === ArticleView.SMALL) {
    return (
      <Card
        onClick={onShowMore}
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      >
        <div className={cls.imageWrapper}>
          <img src={article?.img} alt={article?.title} className={cls.img} />
          <Text text={article?.createdAt} className={cls.createdAt} />
        </div>
        <div className={cls.info}>
          {themes}
          {views}
        </div>
        <Text text={article?.title} className={cls.title} />
      </Card>
    );
  }

  return (
    <Card className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
      <div className={cls.header}>
        <Avatar
          src={article?.user.avatar}
          alt={article?.user.username}
          size={30}
        />
        <Text className={cls.username} text={article?.user.username} />
        <Text className={cls.createdAt} text={article?.createdAt} />
      </div>
      <Text className={cls.title} title={article?.title} />
      {themes}
      <img src={article?.img} alt={article?.title} className={cls.img} />
      <Text title={textBlock.title} text={textBlock.paragraphs[0]} className={cls.text} />
      <div className={cls.footer}>
        <Button onClick={onShowMore} theme={ButtonTheme.OUTLINE}>{t('Читать далее...')}</Button>
        {views}
      </div>
    </Card>
  );
});
