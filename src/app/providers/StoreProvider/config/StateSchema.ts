import {
  Action, CombinedState,
  Dispatch,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { AxiosInstance } from 'axios';
import { ArticleSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { AddCommentFormSchema } from 'features/addCommentForm';

import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { ArticlesPageSchema } from 'pages/ArticlesPage';

export interface StateSchema {
  counter: CounterSchema,
  user: UserSchema,
  login?: LoginSchema
  profile?: ProfileSchema,
  articleDetails?: ArticleSchema,
  articleDetailsComments?: ArticleDetailsCommentsSchema,
  addCommentForm?: AddCommentFormSchema,
  articlesPage?: ArticlesPageSchema
}

export type StateSchemaKeys = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKeys, boolean>

export interface ReducerManagerInterface {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: Action) => CombinedState<StateSchema>;
  add: (key: StateSchemaKeys, reducer: Reducer) => void;
  remove: (key: StateSchemaKeys) => void;
  getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends ToolkitStore {
  reducerManager: ReducerManagerInterface
}

export interface ThunkExtraArg {
  api: AxiosInstance,
}

export interface ThunkConfig<T> {
  rejectValue: T,
  extra: ThunkExtraArg,
  dispatch: Dispatch,
  state: StateSchema,
  getState: () => StateSchema
}
