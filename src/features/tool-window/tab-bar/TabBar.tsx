import React, { useState } from 'react';
import {loadImage} from "../../../utils";
import styles from './TabBar.module.scss';

function TabBar() {
  const [active, setActive] = useState<number>(1);

  return (
    <div className={styles.TabBar}>
      <div
        className={[styles.BarTab, active === 1 ? styles.Active : ''].join(" ")}
        onClick={() => setActive(1)}
      >
        <img src={loadImage('theme/tool-window-project.svg')} alt="Project" />
        <span className={styles.Number}>1</span>: Project
      </div>
      <div
        className={[styles.BarTab, active === 7 ? styles.Active : ''].join(" ")}
        onClick={() => setActive(7)}
      >
        <img src={loadImage('theme/tool-window-structure.svg')} alt="Structure" />
        <span className={styles.Number}>7</span>: Structure
      </div>
    </div>
  )
}

export default TabBar
