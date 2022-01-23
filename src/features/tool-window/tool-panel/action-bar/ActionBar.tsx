import React         from 'react';
import { loadImage } from "utils";
import styles        from './ActionBar.module.scss';

function ActionBar() {
  return (
    <div className={ styles.ActionBar }>
      <img src={ loadImage('theme/project-tab.svg') } alt="Project"/>
      <span> Project </span>
      <img src={ loadImage('theme/arrow-down-filled.svg') } alt="Arrow"/>
    </div>
  );
}

export default ActionBar;
