import TitleBar from "../../components/titlebar";
import CsButton from "../../components/button";
import {loadImage} from "../../utils";
import {useEffect, useState} from "react";
import {ApiStatus} from "../../constants/api";
import styles from './Login.module.scss';

export default function Login(props: any) {
  const [id, setId] = useState<string>("")
  const [randomId, setRandomId] = useState<number>(0)

  useEffect(() => {
    if (id !== "") {
      return
    }
    fetch(`${process.env.REACT_APP_SERVER}/captcha`, {method: "POST"})
      .then(res => res.json())
      .then(
        (res) => {
          if (res.code !== ApiStatus.OK) {
            alert(res.message);
          } else {
            setId(res.payload)
          }
        },
        (error) => {
          console.log(error)
        }
      )
  })

  return (
    <div className={styles.Login}>
      <TitleBar
        onClose={ props.onClose }
      >
        Logging in...
      </TitleBar>
      <div className={styles.Body}>
        <div className={styles.FormGroup}>
          <label
            className={styles.Label}
            htmlFor="Username"
          >
            Username:
          </label>
          <input
            id="Username"
            className={styles.Input}
            type="text"
            placeholder="Your registered username."
          />
        </div>
        <div className={styles.FormGroup}>
          <label
            className={styles.Label}
            htmlFor="Password"
          >
            Password:
          </label>
          <input
            id="Password"
            className={styles.Input}
            type="password"
            placeholder="Secret words to pass."
          />
        </div>
        <div className={styles.FormGroup}>
          <img
            className={styles.Captcha}
            src={ id ? `${process.env.REACT_APP_SERVER}/captcha/${id}.png?reload=${randomId}` : loadImage('theme/captcha.jpg') }
            onClick={() => setRandomId(Math.random())}
            alt="Captcha"
          />
        </div>
        <div className={styles.FormGroup}>
          <label
            className={styles.Label}
            htmlFor="Captcha"
          >
            Captcha:
          </label>
          <input
            id="Captcha"
            className={styles.Input}
            type="text"
            placeholder="Type in what you see above."
          />
        </div>
      </div>
      <div className={styles.Footer}>
        <div className={styles.CloseButton}>
          <CsButton type="danger" onClick={ props.onClose }>Cancel</CsButton>
        </div>
        <div className={styles.LoginButton}>
          <CsButton onClick={ () => null }>Login</CsButton>
        </div>
      </div>
    </div>
  )
}