import { useState } from 'react';
import React from 'react';
import '../navbar/navbar.css';
import Modal from "../navbar/Modal.jsx";
import Modal2 from "../navbar/Modal2.jsx";
import logo from '../images/matchpoint1logo.jpg';
import { Link } from "react-router-dom" 



const Navbar = () => {

const [openModal, setOpenModal] = useState(false);
const [openModal2, setOpenModal2] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container d-flex justify-content-between align-items-center justify-center">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li>
                  <div className="active">
                    <Link to="/"> Home </Link>
                  </div>
                </li>
                <li>
                <Link to="/About"> About </Link>
                </li>
                <li>
                <Link to="/Courts"> Courts </Link>
                </li>
                <li>
                <Link to="/Contacts"> Contacts </Link>
                </li>
            </ul>
          </div>
          <div className="button">
            <button id="button" className="btn btn-warning" onClick={() => {setOpenModal2(true)}}>
              Sign up
            </button>
            {openModal2 &&<Modal2 closeModal={setOpenModal2}/>}
          </div>
          <div className="button2">
            <button id="button2" className="btn2 btn2-warning" onClick={() => {setOpenModal(true)}}> 
              Sign in
            </button>
            {openModal &&<Modal closeModal={setOpenModal}/>}
          </div>
        </div>
      </nav>
  )
}

export default Navbar
