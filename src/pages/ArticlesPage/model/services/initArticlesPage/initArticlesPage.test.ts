import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleView } from 'entities/Article/model/types/article';
import { fetchArticlesList } from '../fetchArticlesList';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticlesList.ts');

describe('initArticlesPage', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        entities: {},
        ids: [],
        view: ArticleView.SMALL,
        hasMore: true,
        error: undefined,
        isLoading: false,
        limit: 5,
        page: 1,
        _init: false
      }
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 });
  });
  test('not called fetchArticleList', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        entities: {},
        ids: [],
        view: ArticleView.SMALL,
        hasMore: false,
        error: undefined,
        isLoading: false,
        limit: 5,
        page: 2,
        _init: true

      }
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
