import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOptoins } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/lib/types';
import { ArticleSortField } from 'entities/Article/model/types/article';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
   className?: string;
   sort: ArticleSortField,
   order: SortOrder,
   onChangeSort: (sort: ArticleSortField) => void,
   onChangeOrder: (sort: SortOrder) => void,
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = (props) => {
  const {
    className, onChangeOrder, onChangeSort, order, sort
  } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOptoins<SortOrder>[]>(() => ([
    {
      value: 'asc',
      option: t('возростанию')
    },
    {
      value: 'desc',
      option: t('убыванию')
    },
  ]), [t]);

  const sortOptions = useMemo<SelectOptoins<ArticleSortField>[]>(() => ([
    {
      value: ArticleSortField.VIEWS,
      option: t('просмотрам')
    },
    {
      value: ArticleSortField.TITLE,
      option: t('названию')
    },
    {
      value: ArticleSortField.CREATED,
      option: t('дате созадния')
    },
  ]), [t]);

  return (
    <div className={classNames(cls.articleSortSelector, {}, [className])}>
      <Select<ArticleSortField>
        value={sort}
        options={sortOptions}
        label={t('Сортировать по')}
        onChange={onChangeSort}
      />
      <Select<SortOrder>
        value={order}
        options={orderOptions}
        label={t('По')}
        onChange={onChangeOrder}
      />
    </div>
  );
};
