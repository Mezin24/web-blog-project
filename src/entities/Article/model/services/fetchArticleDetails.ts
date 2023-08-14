import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../types/article';

export const fetchArticleDetails = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>(
  'profile/fetchArticleDetails',
  async (id, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;
    try {
      const response = await extra.api.get<Article>(`/articles/${id}`);
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
