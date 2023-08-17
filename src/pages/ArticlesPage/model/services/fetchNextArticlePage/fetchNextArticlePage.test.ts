import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleView } from 'entities/Article/model/types/article';
import { fetchNextArticlePage } from './fetchNextArticlePage';
import { fetchArticlesList } from '../fetchArticlesList';

jest.mock('../fetchArticlesList.ts');

describe('fetchNextArticlePage', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        entities: {},
        ids: [],
        view: ArticleView.SMALL,
        hasMore: true,
        error: undefined,
        isLoading: false,
        limit: 5,
        page: 2
      }
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
  });
  test('not called fetchArticleList', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        entities: {},
        ids: [],
        view: ArticleView.SMALL,
        hasMore: false,
        error: undefined,
        isLoading: false,
        limit: 5,
        page: 2
      }
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
  test('not called with isLoading fetchArticleList', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        entities: {},
        ids: [],
        view: ArticleView.SMALL,
        hasMore: true,
        error: undefined,
        isLoading: true,
        limit: 5,
        page: 2
      }
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
