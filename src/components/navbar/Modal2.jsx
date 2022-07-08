import React from "react";
import "../navbar/modal.css";

const Modal2 = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div>
          <button className="titleCloseBtn" onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>Sign In!</h1>
        </div>
        <div className="regform">
          <form action="">Name:</form>
          <input type="text" />
          <form action="">Surname:</form>
          <input type="text" />
          <form action="">Create Password:</form>
          <input type="text" />
          <form action="">Confirm Password:</form>
          <input type="text" />
          <form action="">E-mail:</form>
          <input type="text" />
          <form action="">Phone:</form>
          <input type="text" />
          <br />
          <div className="terms">
            <input type="checkbox" />
            <p>
              By creating an account you agree to our{" "}
              <a href="#">
                <span>Terms and Privacy</span>
              </a>
            </p>
          </div>
        </div>
        <div className="footer">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
