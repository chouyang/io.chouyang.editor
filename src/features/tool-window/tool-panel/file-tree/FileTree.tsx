import React, { useState } from 'react';
import {loadImage} from "../../../../utils";
import {File} from "../../toolWindowSlice";
import styles from './FileTree.module.scss';

type Props = {
  tree: File,
  isOpen?: boolean,
  indent?: number,
  selectFile: (file: File) => void,
  selectedFile: File | null,
}

const FileTree = (props: Props) => {
  const {tree, isOpen = true, indent = 0, selectedFile = {id: ''}} = props;

  const [opened, setOpened] = useState<boolean>(isOpen);
  const {name, icon = '', extra = '', children = []} = tree;
  const active = selectedFile?.id === tree.id;

  const handleOnFileClick = () => {
    const {id, name} = tree;
    props.selectFile({id, name});
  }

  const handleOnFileDoubleClick = () => {
    setOpened(!opened);
  }

  const handleOnArrowClick = (e: React.FormEvent) => {
    e.stopPropagation();
    setOpened(!opened);
  }

  const getIconName = () => {
    const icon = opened ? 'arrow-down' : 'arrow-right';
    if (active) {
      return `theme/${icon}-active.svg`;
    }

    return `theme/${icon}.svg`;
  }

  return (
    <div className={styles.FileTree}>
      {/* Name & Icon */ }
      <div
        className={ [styles.Entry, active && 'active'].join(' ') }
        style={ {paddingLeft: `calc(30px * ${ indent })`} }
        onDoubleClick={handleOnFileDoubleClick}
        onClick={handleOnFileClick}
      >
        { children.length > 0 ? (
          <span>
            <img
              src={ loadImage(getIconName())}
              alt="arrow"
              onClick={ handleOnArrowClick }
            />
            &nbsp;
            <img src={ loadImage('filetype/folder.svg')} alt="folder" />
          </span>
        ) : (
          <img src={ loadImage(icon) } alt="file" />
        ) }

        <span> { name } </span>
        <span className={styles.ExtraInfo}>{ extra }</span>
      </div>

      {/* Children */ }
      { opened && children.map((child: File, key: number) =>
        <FileTree
          tree={ child }
          key={ key }
          indent={ indent + 1 }
          selectFile={props.selectFile}
          selectedFile={props.selectedFile}
        />
      ) }
    </div>
  );
};

export default FileTree;
