import { createSlice } from '@reduxjs/toolkit';

export interface FileTreeState {
}

const initialState: FileTreeState = {};

export const fileTreeSlice = createSlice({
  name:     'fileTree',
  initialState,
  reducers: {},
});

export const {} = fileTreeSlice.actions;

export const getFileIcon = (ext: string) => {
  let split = ext.split('.')
  return {
    "js":         "filetype/javascript.svg",
    "ts":         "filetype/typescript.svg",
    "tsx":        "filetype/tsx.svg",
    "css":        "filetype/css.svg",
    "scss":       "filetype/sass.svg",
    "html":       "filetype/html.svg",
    "json":       "filetype/json.svg",
    "jpeg":       "filetype/image.svg",
    "jpg":        "filetype/image.svg",
    "png":        "filetype/image.svg",
    "gif":        "filetype/image.svg",
    "xml":        "filetype/image.svg",
    "ico":        "filetype/image.svg",
    "svg":        "filetype/image.svg",
    "txt":        "filetype/text.svg",
    "md":         "filetype/markdown.svg",
    "go":         "filetype/go.svg",
    ".gitignore": "filetype/text.svg",
    ".env":       "filetype/text.svg",
    "sum":        "filetype/text.svg",
    "dockerfile": "filetype/docker.svg",
    "yml":        "filetype/docker-compose.svg",
    "mod":        "filetype/text.svg",
  }[split[split.length - 1]]
}

export default fileTreeSlice.reducer;
