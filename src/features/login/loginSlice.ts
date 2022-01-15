import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MenubarState {
  id: string,
}

const initialState: MenubarState = {
  id: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    reloadCaptcha: (state, action: PayloadAction<string>) => {

    }
  },
});

export const {
  reloadCaptcha,
} = loginSlice.actions;

export default loginSlice.reducer;
