import React from "react";
import { render } from "react-dom";
import UseModal from "./lib/UseModal";
import Modal from "./lib/Modal";

export default function App() {
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = UseModal();
  const {
    isShowing: isRegistrationFormShowed,
    toggle: toggleRegistrationForm
  } = UseModal();

  return (
    <>
      <div className="App">
        <button className="modal-toggle" onClick={toggleLoginForm}>
          Login
        </button>
        <button className="modal-toggle" onClick={toggleRegistrationForm}>
          Register
        </button>

        <Modal
          isShowing={isLoginFormShowed}
          hide={toggleLoginForm}
          title="Login EXEMPLE"
        >
          <form>
            <div className="form-group">
              <input type="text" placeholder="Username" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Password" />
            </div>
            <div className="form-group">
              <input type="submit" value="Login" />
            </div>
          </form>
        </Modal>

        <Modal
          isShowing={isRegistrationFormShowed}
          hide={toggleRegistrationForm}
          title="Register EXEMPLE"
        >
          <form>
            <div className="form-group">
              <input type="text" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Username" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Password" />
            </div>
            <div className="form-group">
              <input type="submit" value="Register" />
            </div>
          </form>
        </Modal>
      </div>

      <style jsx="true">{`
        .App {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        button.modal-toggle,
        input[type="submit"] {
          background-color: turquoise;
          cursor: pointer;
          padding: 1rem 2rem;
          text-transform: uppercase;
          border: none;
        }

        button.modal-toggle:not(:first-child) {
          margin-left: 10px;
        }

        .form-group {
          margin-top: 10px;
        }

        input[type="text"],
        input[type="password"],
        input[type="email"] {
          box-sizing: border-box;
          width: 100%;
          padding: 0.5rem 0.7rem;
        }
      `}</style>
    </>
  );
};


render(<App />, document.getElementById("root"));