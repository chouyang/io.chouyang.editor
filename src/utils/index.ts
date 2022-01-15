import Login from '../features/login/Login';

// load svg icons from assets folder
export const loadImage = (path?: string): any => {
  if (!path) {
    return loadImage('filetype/text.svg');
  }

  return require(`../assets/image/${path}`);
}

export type ActiveWindowType = 'Login' | '';

const ActiveWindows = {
  Login,
  '': () => "",
}

export const loadWindow = (window: ActiveWindowType): any => {
  return ActiveWindows[window];
};
