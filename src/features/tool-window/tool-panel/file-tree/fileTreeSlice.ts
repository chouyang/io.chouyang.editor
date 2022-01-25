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

export const getFileIcon = (mime: string) => {

  return {
    "application/go":               "filetype/go.svg",
    "application/javascript":       "filetype/javascript.svg",
    "application/typescript":       "filetype/typescript.svg",
    "application/typescript-react": "filetype/tsx.svg",
    "application/json":             "filetype/json.svg",
    "text/css":                     "filetype/css.svg",
    "text/sass":                    "filetype/sass.svg",
    "text/html":                    "filetype/html.svg",
    "image/jpeg":                   "filetype/image.svg",
    "image/png":                    "filetype/image.svg",
    "image/gif":                    "filetype/image.svg",
    "image/x-icon":                 "filetype/image.svg",
    "image/svg":                    "filetype/image.svg",
    "image/svg+xml":                "filetype/image.svg",
    "text/plain":                   "filetype/text.svg",
    "text/xml":                     "filetype/image.svg",
    "text/yml":                     "filetype/docker-compose.svg",
    "text/md":                      "filetype/markdown.svg",
    "text/dockerfile":              "filetype/docker.svg",
    "text/ignore":                  "filetype/ignore.svg",
    "text/gitignore":               "filetype/ignore.svg",
  }[mime] || 'filetype/text.svg';
}

export default fileTreeSlice.reducer;
