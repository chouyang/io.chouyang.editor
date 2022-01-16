import React from 'react';
import CsButton from '../button';
import {loadImage} from "../../utils";
import styles from './index.module.scss';

type Props = {
  title: string,
  content?: string,
  cancelText?: string,
  confirmText?: string,
  onCancel: () => void,
  onConfirm: () => void,
}

const Dialog = (props: Props) => {

  return (
    <div className={styles.Dialog}>
      <div className={styles.Body}>
        <div className={styles.Logo}>
          <img src={loadImage('avatar.jpg')} alt="Logo" />
        </div>
        <div className={styles.Content}>
          <strong>{props.title}</strong>
          <div>
            {props?.content}
          </div>
          <div>
            <input type="checkbox" disabled />
            <small style={{color: '#BBB'}}>Do not ask me again</small>
          </div>
        </div>
      </div>
      <div className={styles.Footer}>
        <div className={styles.Buttons}>
          <CsButton
            type="info"
            style={{marginRight: '10px'}}
            onClick={ props.onCancel }
          >
            {props.cancelText || 'Cancel'}
          </CsButton>
          <CsButton
            style={{marginRight: '10px'}}
            type="success"
            onClick={ props.onConfirm }
          >
            {props.confirmText || 'Confirm'}
          </CsButton>
        </div>
      </div>
    </div>
  );
}

export default Dialog;