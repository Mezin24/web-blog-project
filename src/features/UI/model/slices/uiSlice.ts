import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UISchema } from '../types/uiSchema';

const initialState:UISchema = {
  scroll: {}
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{path: string, position: number}>) => {
      state.scroll[payload.path] = payload.position;
    }
  }
});
export const {
  actions: uiSliceActions,
  reducer: uiSliceReducer
} = uiSlice;
