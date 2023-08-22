import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleView } from 'entities/Article';

export const getArticlePageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading;
export const getArticlePageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlePageView = (
  state: StateSchema
) => state.articlesPage?.view || ArticleView.SMALL;
export const getArticlePageNum = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlePageLimit = (state: StateSchema) => state.articlesPage?.limit;
export const getArticlePageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlePageInit = (state: StateSchema) => state.articlesPage?._init;
export const getArticlePageSort = (
  state: StateSchema
) => state.articlesPage?.sort ?? ArticleSortField.TITLE;
export const getArticlePageSearch = (
  state: StateSchema
) => state.articlesPage?.search ?? '';
export const getArticlePageOrder = (
  state: StateSchema
) => state.articlesPage?.order ?? 'asc';
