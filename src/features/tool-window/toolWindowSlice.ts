import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ToolWindowState {
  selectedFile: string;
}

const initialState: ToolWindowState = {
  selectedFile: '',
};

export const toolWindowSlice = createSlice({
  name: 'toolWindow',
  initialState,
  reducers: {
    selectFile: (state, action: PayloadAction<string>) => {
      state.selectedFile = action.payload
    },
  },
});

export const {
  selectFile,
} = toolWindowSlice.actions;

export default toolWindowSlice.reducer;
