import Login from '../features/login/Login';
import Register from '../features/register/Register';

// load svg icons from assets folder
export const loadImage = (path?: string): any => {
  if (!path) {
    return loadImage('filetype/text.svg');
  }

  return require(`../assets/image/${path}`);
}

export type ActiveWindowType = 'Login' | 'Register' | '';

const ActiveWindows = {
  Login,
  Register,
  '': () => "",
}

export const loadWindow = (window: ActiveWindowType): any => {
  return ActiveWindows[window];
};
