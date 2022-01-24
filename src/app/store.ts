import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import menubarSlice                            from 'features/menubar/menubarSlice';
import toolWindowSlice                         from "features/tool-window/toolWindowSlice";
import appSlice                                from "appSlice";

export const store = configureStore({
  reducer: {
    app:     appSlice,
    menubar: menubarSlice,
    tool:    toolWindowSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
