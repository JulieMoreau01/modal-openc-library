import React from "react";
import { render } from "react-dom";
import UseModal from "./lib/UseModal";
import Modal from "./lib/Modal";
import styles from "./lib/Modal.module.css"

export default function App() {
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = UseModal();
  const {
    isShowing: isRegistrationFormShowed,
    toggle: toggleRegistrationForm
  } = UseModal();

  return (
    <>
    <h1>modal-openc-library</h1>
      <div className={styles.App}>
        <button className={styles.modalToggle} onClick={toggleLoginForm}>
          TEST 
        </button>

        <Modal
          isShowing={isLoginFormShowed}
          hide={toggleLoginForm}
          title="TEST EXEMPLE"
        >
          <div className={styles.modalBody}>Je suis le contenu de la modal </div>
        </Modal>
      </div>
      </>
  );
};


render(<App />, document.getElementById("root"));