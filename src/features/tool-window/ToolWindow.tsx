import React     from 'react';
import ToolPanel from './tool-panel/ToolPanel';
import Bar       from './tab-bar/TabBar';
import styles    from './ToolWindow.module.scss';

function ToolWindow() {

  return (
    <div className={ styles.ToolWindow }>
      <Bar/>
      <ToolPanel/>
    </div>
  )
}

export default ToolWindow