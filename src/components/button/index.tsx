import React from 'react';
import styles from './index.module.scss';

type Props = {
  children: string,
  type?: string,
  onClick: () => void,
  style?: any,
}

const CsButton = ({children, onClick, style = {}, type = 'success'}: Props) => {

  return (
    <button
      style={style}
      onClick={ onClick }
      className={[styles.CsButton, styles[type]].join(' ')}
    >
      { children }
    </button>
  );
}

export default CsButton;