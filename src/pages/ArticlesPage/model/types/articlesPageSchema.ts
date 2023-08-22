import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { ArticleSortField, ArticleView } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/lib/types';

export interface ArticlesPageSchema extends EntityState<Article> {
  error?: string,
  isLoading?: boolean,

  view: ArticleView,
  page?: number;
  limit?: number
  hasMore?: boolean
  _init?: boolean;
  order: SortOrder,
  search: string,
  sort: ArticleSortField
}
