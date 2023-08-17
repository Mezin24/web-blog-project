import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlePageHasMore,
  getArticlePageIsLoading,
  getArticlePageNum
} from '../../selectors/articlesPageSelectors';
import { fetchArticlesList } from '../fetchArticlesList';
import { articlesPagetActions } from '../../slice/articlesSlice';

export const fetchNextArticlePage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
  'articlesPage/fetchNextArticlePage',
  async (props, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    const page = getArticlePageNum(getState());
    const isLoading = getArticlePageIsLoading(getState());
    const hasMore = getArticlePageHasMore(getState());

    if (hasMore && !isLoading) {
      dispatch(articlesPagetActions.setPage(page + 1));
      // @ts-ignore
      dispatch(fetchArticlesList({ page: page + 1 }));
    }
  }
);
