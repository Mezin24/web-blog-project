import { Reducer } from '@reduxjs/toolkit';
import {
  ReduxStoreWithManager,
  StateSchemaKeys
} from 'app/providers/StoreProvider/config/StateSchema';
import { FC, useEffect } from 'react';
import { useStore, useDispatch } from 'react-redux';

export type ReducersList = {
  [name in StateSchemaKeys]?: Reducer
}

type ReducersListEntries = [StateSchemaKeys, Reducer]

interface DynamicMaduleLoaderProps {
  reducers: ReducersList,
  removeAfterUnmount?: boolean
}
export const DynamicMaduleLoader: FC<DynamicMaduleLoaderProps> = (props) => {
  const {
    children,
    reducers,
    removeAfterUnmount = true
  } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntries) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name}` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducersListEntries) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@REMOVE ${name}` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);
  return (
    // eslint-disable-next-line
    <>
      { children }
    </>
  );
};
