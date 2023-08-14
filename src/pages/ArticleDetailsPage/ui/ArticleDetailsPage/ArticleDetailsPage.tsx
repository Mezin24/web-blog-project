import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  ArticleDetailsComponent
} from 'entities/Article/ui/ArticleDetailsComponent/ArticleDetailsComponent';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
   className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{id: string}>();

  if (!id) {
    return (
      <div className={classNames(cls.articleDetailsPage, {}, [className])}>
        Error
      </div>
    );
  }

  return (
    <div className={classNames(cls.articleDetailsPage, {}, [className])}>
      <ArticleDetailsComponent id={id} />
    </div>
  );
};

export default ArticleDetailsPage;
