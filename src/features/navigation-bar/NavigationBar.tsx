import React from 'react';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';
import styles from './NavigationBar.module.scss';

function NavigationBar() {

  return (
    <div className={styles.NavigationBar}>
      <Breadcrumbs />
    </div>
  )
}

export default NavigationBar
