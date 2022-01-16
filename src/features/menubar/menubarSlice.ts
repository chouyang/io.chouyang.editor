import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MenubarState {
  activeWindow: string;
  activeItem: string;
  activeEntry: string;
}

const initialState: MenubarState = {
  activeWindow: '',
  activeItem: '',
  activeEntry: '',
};

export const menubarSlice = createSlice({
  name: 'menubar',
  initialState,
  reducers: {
    clickMenubar: (state, action: PayloadAction<string>) => {
      state.activeItem = action.payload === state.activeItem ? '' : action.payload;
    },
    hoverMenubar: (state, action: PayloadAction<string>) => {
      state.activeItem = state.activeItem ? action.payload : '';
    },
    clickMenubarEntry: (state, action: PayloadAction<string>) => {
      state.activeItem = '';
      state.activeWindow = action.payload;
    },
    hoverMenubarEntry: (state, action: PayloadAction<string>) => {
      state.activeEntry = action.payload;
    }
  },
});

export const {
  clickMenubar, hoverMenubar, clickMenubarEntry, hoverMenubarEntry,
} = menubarSlice.actions;

export default menubarSlice.reducer;
