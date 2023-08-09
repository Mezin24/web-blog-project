import {
  ReducersMapObject, Action, CombinedState, Reducer
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
  counter: CounterSchema,
  user: UserSchema,
  login?: LoginSchema
  profile?: ProfileSchema
}

export type StateSchemaKeys = keyof StateSchema

export interface ReducerManagerInterface {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: Action) => CombinedState<StateSchema>;
  add: (key: StateSchemaKeys, reducer: Reducer) => void;
  remove: (key: StateSchemaKeys) => void;
}

export interface ReduxStoreWithManager extends ToolkitStore {
  reducerManager: ReducerManagerInterface
}
