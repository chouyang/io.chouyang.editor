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
}

export interface Tree {
  id: number,
  name: string,
  path: string
  extra: string,
  created_at: string,
  updated_at: string,
  files: (File)[],
  trees: (Tree)[],
}

export interface AppState {
  file: File,
  fileTree: Tree;
}

const initialState: AppState = {
  file:     {
    id:         0,
    name:       '',
    path:       '',
    size:       0,
    mime:       '',
    hash:       '',
    permission: '',
    content:    '',
    created_by: 0,
    created_at: '',
    updated_at: '',
  },
  fileTree: {
    id:         0,
    name:       '',
    path:       '',
    extra:      '',
    created_at: '',
    updated_at: '',
    files:      [],
    trees:      [],
  },
};

export const appSlice = createSlice({
  name:     'app',
  initialState,
  reducers: {
    setFileTree: (state, action: PayloadAction<Tree>) => {
      state.fileTree = action.payload;
    },
  },
});

export const fetchFileTree = () => {
  return fetch(`${ process.env.REACT_APP_SERVER }/${ process.env.REACT_APP_PATH }`, { method: "GET" })
    .then(res => res.json())
}

export const { setFileTree } = appSlice.actions;

export default appSlice.reducer;
