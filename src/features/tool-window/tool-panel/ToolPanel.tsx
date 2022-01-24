import React              from 'react';
import { useAppSelector } from "app/hooks";
import { RootState }      from "app/store";
import ActionBar          from './action-bar/ActionBar';
import FileTree           from './file-tree/FileTree';
// import { selectFile }     from '../toolWindowSlice';
import styles             from './ToolPanel.module.scss';

const ToolPanel = () => {
  // const selectedFile = useAppSelector((state: RootState) => state.tool.selectedFile)
  const tree = useAppSelector((state: RootState) => state.app.fileTree)
  return (
    <div className={ styles.ToolPanel }>
      <ActionBar/>
      <FileTree
        tree={ tree }
        isOpen
        // selectFile={ selectFile }
      />
    </div>
  )
}

export default ToolPanel;
