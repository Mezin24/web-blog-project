import { ArticleView } from 'entities/Article/model/types/article';
import { FC } from 'react';
import ListIcon from 'shared/assets/icons/article-20-20.svg';
import GridIcon from 'shared/assets/icons/tiled-24-24.svg';
import { classNames } from 'shared/lib/classNames/classNames';
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

  return (
    <div className={classNames(cls.articleViewSelector, {}, [className])}>
      {viewSelectors.map((selector) => (
        <Button
          onClick={() => onChangView(selector.view)}
          theme={ButtonTheme.CLEAR}
          key={selector.view}
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
