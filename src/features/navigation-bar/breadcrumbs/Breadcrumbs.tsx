import React                      from 'react';
import { useAppSelector }         from "app/hooks";
import { RootState }              from "app/store";
import { getFileIcon, loadImage } from "utils";
import styles                     from './Breadcrumbs.module.scss';

function Breadcrumbs() {
  const selected = useAppSelector((state: RootState) => state.app.selected)
  const appPath = process.env.REACT_APP_PATH;
  const path = selected?.path.replace(appPath || '', '')
  const mime = selected && 'mime' in selected ? selected.mime : 'folder'

  const crumbs = path?.split('/').map((crumb, index) => {

    if (index === 0) {
      return (
        <span className={ styles.Root } key={ index }>{ crumb }</span>
      )
    }

    return (
      <span className={ styles.Crumb } key={ index }>
        <span className={ styles.Separator }> &gt; </span>
        { index === path.split('/').length - 1 ? (
          <img src={ loadImage(mime ? getFileIcon(mime) : 'filetype/folder.svg') } alt="file"/>
        ) : '' }
        { crumb }
      </span>
    );
  });


  return (
    <div className={ styles.Breadcrumbs }>
      { crumbs }
    </div>
  )
}

export default Breadcrumbs
