import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlePageInit
} from '../../selectors/articlesPageSelectors';
import { articlesPagetActions } from '../../slice/articlesSlice';
import { fetchArticlesList } from '../fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (props, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    const init = getArticlePageInit(getState());

    if (!init) {
      dispatch(articlesPagetActions.initView());
      // @ts-ignore
      dispatch(fetchArticlesList({ page: 1 }));
    }
  }
);
