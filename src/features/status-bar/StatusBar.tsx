import React from 'react';
import {loadImage} from "../../utils";
import styles from './StatusBar.module.scss';

function StatusBar() {

  return (
    <ul className={styles.StatusBar}>
      <li className={styles.Widget}>
        <img src={loadImage('theme/locked.svg')} alt="locked" />
      </li>
      <li className={styles.Widget}>
        <img src={loadImage('theme/git-branch.svg')} alt="branch" />
        <span className={styles.Label}>Master</span>
      </li>
      <li className={styles.Widget}>2 spaces</li>
      <li className={styles.Widget}>UTF-8</li>
      <li className={styles.Widget}>LF</li>
      <li className={styles.Widget}>JSON: TSConfig</li>
      <li className={styles.Widget}>20:33</li>

      <li className={styles.Copyleft}>
        <a href="https://beian.miit.gov.cn" target="_blank" rel="noreferrer">粤ICP备16097046号</a>
        <span>
            <small>Copyleft<strong className={styles.Symbol}>&copy;</strong> 丑羊 {new Date().getFullYear()}&nbsp;&nbsp;&nbsp;&nbsp;All Rights Ditched.</small>
        </span>
      </li>
    </ul>
  )
}

export default StatusBar
