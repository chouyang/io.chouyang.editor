import { createSlice } from '@reduxjs/toolkit';

export interface FileTreeState {
}

const initialState: FileTreeState = {};

export const fileTreeSlice = createSlice({
  name:     'fileTree',
  initialState,
  reducers: {},
});

export const {} = fileTreeSlice.actions;

export default fileTreeSlice.reducer;
