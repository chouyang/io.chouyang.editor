import styles from './index.module.scss';

type Props = {
  children: string,
  minimize?: boolean,
  maximize?: boolean,
  onClose: () => void,
  onMinimize?: () => void,
  onMaximize?: () => void,
}

const TitleBar = (props: Props) => {
  const {minimize = false, maximize = false} = props;

  return (
    <div className={styles.TitleBar}>
      <span
        className={styles.Close}
        onClick={props.onClose}
      >
        x
      </span>
      <span
        className={[styles.Minimize, minimize || styles.Disabled].join(' ')}
        onClick={() => minimize && props.onMinimize && props.onMinimize()}
      >
        x
      </span>
      <span
        className={[styles.Maximize, maximize || styles.Disabled].join(' ')}
        onClick={() => maximize && props.onMaximize && props.onMaximize()}
      >
        x
      </span>
      {props.children}
    </div>
  )
}

export default TitleBar;