import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import GridIcon from 'shared/assets/icons/tiled-24-24.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import { ArticleView } from 'entities/Article/model/types/article';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
   className?: string;
   view: ArticleView;
   onChangView: (view: ArticleView) => void
}

const viewSelectors = [
  {
    icon: GridIcon,
    view: ArticleView.SMALL
  },
  {
    icon: ListIcon,
    view: ArticleView.BIG
  }
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = (props) => {
  const { className, onChangView, view } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.articleViewSelector, {}, [className])}>
      {viewSelectors.map((selector) => (
        <Button
          onClick={() => onChangView(selector.view)}
          theme={ButtonTheme.CLEAR}
        >
          <Icon
            Svg={selector.icon}
            className={classNames('', { [cls.selected]: view === selector.view })}

          />
        </Button>
      ))}
    </div>
  );
};
