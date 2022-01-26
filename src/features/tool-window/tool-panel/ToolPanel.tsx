import React              from 'react';
import { useAppSelector } from "app/hooks";
import { RootState }      from "app/store";
import ActionBar          from './action-bar/ActionBar';
import FileTree           from './file-tree/FileTree';
import styles             from './ToolPanel.module.scss';

const ToolPanel = () => {
  const tree = useAppSelector((state: RootState) => state.app.fileTree)
  const selected = useAppSelector((state: RootState) => state.app.selected)
  return (
    <div className={ styles.ToolPanel }>
      <ActionBar/>
      <FileTree
        tree={ tree }
        selected={selected}
      />
    </div>
  )
}

export default ToolPanel;
