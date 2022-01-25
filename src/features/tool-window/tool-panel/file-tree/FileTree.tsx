import React, { useState } from 'react';
import { loadImage }       from "utils";
// import { useAppDispatch }           from "app/hooks";
import { Tree }            from "appSlice";
import styles              from './FileTree.module.scss';
import { getFileIcon }     from "./fileTreeSlice";

type Props = {
  tree: Tree,
  isOpen?: boolean,
  indent?: number,
}

const FileTree = (props: Props) => {
  const { tree, isOpen = true, indent = 0 } = props;
  // const dispatch = useAppDispatch();

  const [opened, setOpened] = useState<boolean>(isOpen);
  const active = false;

  const handleOnFileClick = () => {

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
      return `theme/${ icon }-active.svg`;
    }

    return `theme/${ icon }.svg`;
  }

  return (
    <div className={ styles.FileTree }>
      {/* Name & Icon */ }
      <div
        className={ [styles.Entry, active ? styles.Active : ''].join(' ') }
        style={ { paddingLeft: `calc(10px + ${ indent }px)` } }
        onDoubleClick={ handleOnFileDoubleClick }
        onClick={ handleOnFileClick }
      >
        {/* FOLDER NAME */ }
        <span>
          <img
            src={ loadImage(getIconName()) }
            alt="arrow"
            onClick={ handleOnArrowClick }
          />
          &nbsp;
          <img src={ loadImage('filetype/folder.svg') } alt="folder"/>
        </span>
        <span> { tree.name } </span>
        <span className={ styles.ExtraInfo }>~</span>

        {/* SUB TREE */ }
        { tree.trees.map((t: Tree, k) => (
          <FileTree
            tree={ t }
            key={ k }
            indent={ indent + 5 }
          />
        )) }

        {/* FILE LIST  */ }
        { tree.files.map((f: string) => (
          <p style={ { paddingLeft: "15px" } }>
            <img src={ loadImage(getFileIcon(f)) } alt="file"/>
            &nbsp;
            { f }
          </p>
        )) }
      </div>
    </div>
  );
};

export default FileTree;
