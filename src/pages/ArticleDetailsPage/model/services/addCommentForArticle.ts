import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article/model/selectors/getArticleDetailsData';
import { Comment } from 'entities/Comment';
import { getAuthData } from 'entities/User/model/selectors/getAuthData/getAuthData';
import { fetchArticleDetailsComments } from './fetchArticleDetailsComments';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(
  'articleDetails/addCommentForArticle',
  async (text, thunkApi) => {
    const {
      rejectWithValue, extra, dispatch, getState
    } = thunkApi;

    const article = getArticleDetailsData(getState());
    const user = getAuthData(getState());

    if (!article || !user || !text) {
      return rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        text,
        articleId: article.id,
        userId: user.id
      });
      if (!response.data) {
        throw new Error();
      }

      // @ts-ignore
      dispatch(fetchArticleDetailsComments(article?.id));

      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
