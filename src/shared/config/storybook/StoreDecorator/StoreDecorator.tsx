import { ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleReducer } from 'entities/Article/model/slice/articleSlice';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername';
import { addCommentFormReducer } from 'features/addCommentForm/model/slice/addCommentFormSlice';
import {
  articleDetailsCommentReducer
} from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
  articleDetails: articleReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComments: articleDetailsCommentReducer
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: Story) => (
  <StoreProvider
    initialState={state}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <StoryComponent />
  </StoreProvider>
);
