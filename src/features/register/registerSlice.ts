import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MenubarState {
  id: string,
}

const initialState: MenubarState = {
  id: '',
};

export const registerSlice = createSlice({
  name:     'login',
  initialState,
  reducers: {
    reloadCaptcha: (state, action: PayloadAction<string>) => {

    }
  },
});

export const {
  reloadCaptcha,
} = registerSlice.actions;

export default registerSlice.reducer;
