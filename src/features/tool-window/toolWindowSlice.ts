import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export type File = {
  id: string,
  name: string,
  extra?: string,
  icon?: string,
  children?: File[],
}

export interface ToolWindowState {
  selectedFile: File | null;
}

const initialState: ToolWindowState = {
  selectedFile: null,
};

export const toolWindowSlice = createSlice({
  name: 'toolWindow',
  initialState,
  reducers: {
    selectFile: (state, action: PayloadAction<File>) => {
      state.selectedFile = action.payload
    },
  },
});

export const {
  selectFile,
} = toolWindowSlice.actions;

export default toolWindowSlice.reducer;
