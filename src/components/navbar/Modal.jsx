import React from "react";
import "../navbar/modal.css";

const Modal = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
        <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>Sign Up!</h1>
        </div>
        <div className="body">
          <form action="">E-mail:</form>
          <input type="text" />
          <form action="">Password:</form>
          <input type="text" />
          <div className="forgot">
              <a href="#"><p><span>Forgot password?</span></p></a>
            </div>
        </div>
        <div className="footer">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;


