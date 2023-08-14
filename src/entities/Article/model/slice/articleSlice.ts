import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ArticleSchema } from '../types/ArticleSchema';
import { Article } from '../types/article';
import { fetchArticleDetails } from '../services/fetchArticleDetails';

const initialState: ArticleSchema = {
  data: undefined,
  error: undefined,
  isLoading: false
};

const articleSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleDetails.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleDetails.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;
