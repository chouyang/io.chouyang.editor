import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface File {
  id: number,
  name: string,
  path: string,
  size: number,
  mime: string,
  hash: string,
  permission: string,
  content: string,
  created_by: number,
  created_at: string,
  updated_at: string,
  opened?: boolean,
}

export interface Tree {
  id: number,
  name: string,
  path: string
  extra: string,
  created_at: string,
  updated_at: string,
  opened?: boolean,
  files: (File)[],
  trees: (Tree)[],
}

export interface AppState {
  selected: File | Tree | null,
  opened: File | null,
  fileTree: Tree;
}

const initialState: AppState = {
  selected: null,
  opened:   null,
  fileTree: {
    id:         0,
    name:       ' ! ',
    path:       '',
    extra:      'project not found',
    created_at: '',
    updated_at: '',
    files:      [],
    trees:      [],
    opened:     false,
  },
};

export const appSlice = createSlice({
  name:     'app',
  initialState,
  reducers: {
    setFileTree: (state, action: PayloadAction<Tree>) => {
      state.fileTree = action.payload;
    },
    selectItem:  (state, action: PayloadAction<File | Tree | null>) => {
      state.selected = action.payload;
    },
    setOpenedFile: (state, action: PayloadAction<File | null>) => {
      state.opened = action.payload;
    },
  },
});

export const fetchFileTree = () => {
  return fetch(`${ process.env.REACT_APP_SERVER }/${ process.env.REACT_APP_PATH }`, { method: "GET" })
    .then(res => res.json())
}

export const fetchFile = (path: string) => {
  return fetch(`${ process.env.REACT_APP_SERVER }/${ path }`, { method: "GET" })
    .then(res => res.json())
}

export const {
  setFileTree, selectItem,
  setOpenedFile,
} = appSlice.actions;

export default appSlice.reducer;
