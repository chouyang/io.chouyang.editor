import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import menubarSlice                            from 'features/menubar/menubarSlice';
import toolWindowSlice                         from "features/tool-window/toolWindowSlice";

export const store = configureStore({
  reducer: {
    menubar: menubarSlice,
    tool:    toolWindowSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
