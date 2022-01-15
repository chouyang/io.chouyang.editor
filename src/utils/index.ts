// load svg icons from assets folder
export const loadImage = (path?: string): any => {
  if (!path) {
    return loadImage('filetype/text.svg');
  }

  return require(`../assets/image/${path}`);
}
