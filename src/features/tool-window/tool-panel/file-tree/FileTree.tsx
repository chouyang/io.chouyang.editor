import React, { useState } from 'react';
import { loadImage }       from "utils";
import { useAppDispatch }  from "app/hooks";
import {
  File, Tree, selectItem,
}                          from "appSlice";
import { getFileIcon }     from "./fileTreeSlice";
import styles              from './FileTree.module.scss';

type Props = {
  tree: Tree,
  selected: File | Tree | null,
  isOpen?: boolean,
  indent?: number,
}

const FileTree = (props: Props) => {
  const { tree, isOpen = true, indent = 0 } = props;
  const dispatch = useAppDispatch();

  const [opened, setOpened] = useState<boolean>(isOpen);

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
    if (props.selected?.path === tree.path) {
      return `theme/${ icon }-active.svg`;
    }

    return `theme/${ icon }.svg`;
  }

  return (
    <div className={ styles.FileTree }>
      {/* Name & Icon */ }
      <div
        onDoubleClick={ handleOnFileDoubleClick }
        onClick={ handleOnFileClick }
      >
        <div
          style={ { paddingLeft: `calc(25px * ${ indent })` } }
          className={ [styles.Entry, props.selected?.path === tree.path ? styles.Active : ''].join(' ') }
          onClick={ () => dispatch(selectItem(tree)) }
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
          <span>
            { tree.name }
          </span>
          <span className={ styles.ExtraInfo }>{ tree.extra }</span>
        </div>

        <div>
          {/* SUB TREE */ }
          { tree.trees.map((t: Tree, k) => (
            <FileTree
              tree={ t }
              key={ k }
              indent={ indent + 1 }
              selected={ props.selected }
            />
          )) }
        </div>

        {/* FILE LIST  */ }
        { tree.files.map((f: File, key) => (
          <div
            key={key}
            style={ { paddingLeft: `calc(25px * ${ indent })` } }
            onClick={ () => dispatch(selectItem(f)) }
            className={ [styles.Entry, props.selected?.path === f.path ? styles.Active : ''].join(' ') }
          >
            <p style={ { paddingLeft: "17px" } }>
              <img src={ loadImage(getFileIcon(f.mime)) } alt="file"/>
              &nbsp;
              { f.name }
            </p>
          </div>
        )) }
      </div>
    </div>
  );
};

export default FileTree;
