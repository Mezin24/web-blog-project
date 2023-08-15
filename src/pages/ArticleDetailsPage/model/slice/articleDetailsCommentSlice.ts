import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentSchema';
import { fetchArticleDetailsComments } from '../services/fetchArticleDetailsComments';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
);

const articleDetailsCommentSlice = createSlice({
  name: 'articleDetailsCommentSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    ids: [],
    entities: {},
    error: undefined,
    isLoading: false
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleDetailsComments.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticleDetailsComments.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleDetailsComments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: articleDetailsCommentActions } = articleDetailsCommentSlice;
export const { reducer: articleDetailsCommentReducer } = articleDetailsCommentSlice;
