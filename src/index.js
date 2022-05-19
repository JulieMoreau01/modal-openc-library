import React from "react";
import { render } from "react-dom";
import UseModal from "./lib/UseModal";
import Modal from "./lib/Modal";
import styles from "./lib/Modal.module.css"

export default function App() {
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = UseModal();

  const { isShowing: isLoginFormShowedBig, toggle: toggleLoginFormBig } = UseModal();

  return (
    <>
    <h1>modal-openc-library</h1>
      <div className={styles.App}>
        <button className={styles.modalToggle} onClick={toggleLoginForm}>
          TEST SMALL
        </button>

        <button className={styles.modalToggle} onClick={toggleLoginFormBig}>
          TEST BIG
        </button>

        <Modal
          isShowing={isLoginFormShowedBig}
          hide={toggleLoginFormBig}
          title="TEST EXEMPLE"
          size="big"
        >
          <div className={styles.modalBody}>Je suis le contenu exemple de la modal Small</div>
        </Modal>

        <Modal
          isShowing={isLoginFormShowed}
          hide={toggleLoginForm}
          title="TEST EXEMPLE"
          size="small"
        >
          <div className={styles.modalBody}>Je suis le contenu exemple de la modal big</div>
        </Modal>
      </div>
      </>
  );
};


render(<App />, document.getElementById("root"));