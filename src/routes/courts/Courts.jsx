import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Navbarline from "../../components/navbarline/Navbarline";
import Footerline from "../../components/footerline/Footerline";
import Footer from "../../components/footer/Footer";
import Cards from "../../components/cards/Cards";

const Courts = () => {
  return (
    <>
      <Navbar />
      <Navbarline />
      <Cards />
      <Footerline />
      <Footer />
    </>
  );
};

export default Courts;