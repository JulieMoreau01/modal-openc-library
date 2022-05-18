import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from './Modal.module.css'

const Modal = ({ isShowing, hide, title, size, ...props }) =>
  isShowing
    ? ReactDOM.createPortal(
      <>
        <div className={styles.modalOverlay}>
            <div className={styles.modalWrapper}>
              <div className={size === 'small' ? styles.modalSmall : styles.modalBig}>
                <div className={styles.modalHeader}>
                  <h4>{title}</h4>
                  <button
                    type="button"
                    className={styles.modalCloseButton}
                    onClick={hide}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className={styles.modalBody}>{props.children}</div>
              </div>
            </div>
          </div>
          </>
        ,
        document.body
      )
    : null;

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Modal