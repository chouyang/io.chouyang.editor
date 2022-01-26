import React              from 'react';
import { loadImage }      from "utils";
import { useAppDispatch } from "app/hooks";
import {
  File, Tree, selectItem,
}                         from "appSlice";
import { getFileIcon }    from "./fileTreeSlice";
import styles             from './FileTree.module.scss';

type Props = {
  tree: Tree,
  selected: File | Tree | null,
  opened: boolean
  indent?: number,
}

const FileTree = (props: Props) => {
  const { tree, indent = 0 } = props;
  const dispatch = useAppDispatch();

  const [expanded, setExpanded] = React.useState(props.opened);

  const expandTree = (e: React.FormEvent) => {
    e.stopPropagation();
    setExpanded(!expanded);
  }

  const getIconName = () => {
    const icon = expanded ? 'arrow-down' : 'arrow-right';
    if (props.selected?.path === tree.path) {
      return `theme/${ icon }-active.svg`;
    }

    return `theme/${ icon }.svg`;
  }

  return (
    <div className={ styles.FileTree }>
      {/* Name & Icon */ }
      <div
        style={ { paddingLeft: `calc(25px * ${ indent })` } }
        className={ [styles.Entry, props.selected?.path === tree.path ? styles.Active : ''].join(' ') }
        onClick={ () => dispatch(selectItem(tree)) }
        onDoubleClick={ expandTree }
      >
        {/* FOLDER NAME */ }
        <span>
            <img
              src={ loadImage(getIconName()) }
              alt="arrow"
              onClick={ expandTree }
            />
          &nbsp;
          <img src={ loadImage('filetype/folder.svg') } alt="folder"/>
          </span>
        <span>
            { tree.name }
          </span>
        <span className={ styles.ExtraInfo }>{ tree.extra }</span>
      </div>

      { expanded ? (
        <>
          <div>
            {/* SUB TREE */ }
            { tree.trees.map((t: Tree, k) => (
              <FileTree
                tree={ t }
                key={ k }
                indent={ indent + 1 }
                selected={ props.selected }
                opened={ false }
              />
            )) }
          </div>

          {/* FILE LIST  */ }
          { tree.files.map((f: File, key) => (
            <div
              key={ key }
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
        </>
      ) : '' }
    </div>
  );
};

export default FileTree;
