import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MenubarState {
  activeWindow: string;
  activeItem: string;
  hoverItem: string;
  activeEntry: string;
  hoverEntry: string;
}

const initialState: MenubarState = {
  activeWindow: '',
  activeItem: '',
  hoverItem: '',
  activeEntry: '',
  hoverEntry: '',
};

export const menubarSlice = createSlice({
  name: 'menubar',
  initialState,
  reducers: {
    clickMenubar: (state, action: PayloadAction<string>) => {
      state.activeItem = action.payload === state.activeItem ? '' : action.payload;
      state.hoverItem = '';
    },
    hoverMenubar: (state, action: PayloadAction<string>) => {
      state.hoverItem = action.payload || '';
    },
    clickMenubarEntry: (state, action: PayloadAction<string>) => {
      state.activeItem = '';
      state.hoverItem = '';
      state.activeWindow = action.payload;
    },
    hoverMenubarEntry: (state, action: PayloadAction<string>) => {

    }
  },
});

export const {
  clickMenubar, hoverMenubar, clickMenubarEntry, hoverMenubarEntry,
} = menubarSlice.actions;

export default menubarSlice.reducer;
