import React from 'react';
import styles from './Gutter.module.scss';

function Gutter() {
  return (
    <div className={styles.Gutter}>
      <ul className={styles.LineNumber} />
    </div>
  );
}

export default Gutter;
