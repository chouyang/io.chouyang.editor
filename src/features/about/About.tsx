import React from "react";
import {loadImage} from "../../utils";
import styles from './About.module.scss';

type Props = {
  onClose: () => void,
}

const About = (props: Props) => (
  <div className={styles.About} onClick={props.onClose}>
    <div className={styles.Head}>
      <img className={styles.Avatar} src={loadImage('avatar.jpg')} alt="Avatar"/>
      <strong className={styles.Brand}>丑羊v3</strong>
    </div>
    <div className={styles.Body}>
      <strong>丑羊 v3.2.24</strong>
      <div>Build #CY-202.7660.23, built on January 01, 2022</div>
      <br/>
      <strong>Change Log</strong>
      <div style={{color: 'lightgrey'}}>
        <span style={{color: 'darkorange'}}> 48e85d8 </span>
        (<span style={{color: 'cyan'}}>HEAD -&gt; </span>
        <span style={{color: 'lightgreen'}}>master</span>) refactor: restructure project
      </div>
      <br/>
      <div className={styles.PoweredBy}>
        Powered by
        <a href="https://golang.org" target="_blank" rel="noreferrer"> Golang </a> &
        <a href="https://reactjs.org" target="_blank" rel="noreferrer"> React </a>
      </div>
      <small>Server: OpenCloud 128-bit v0.1.3</small>
      <br/>
      <br/>
      <small className={styles.Copyleft}>
        Copyleft
        <span className={styles.Symbol}>&copy;</span>
        2010-{new Date().getFullYear()} 丑羊
      </small>
      <img className={styles.Logo} src={loadImage('logo.png')} alt="Logo"/>
    </div>
  </div>
);

export default About;