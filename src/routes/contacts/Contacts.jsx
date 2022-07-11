import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Navbarline from "../../components/navbarline/Navbarline";
import Footerline from "../../components/footerline/Footerline";
import Footer from "../../components/footer/Footer";
import Googlemap from "../../components/googlemap/Googlemap";

const Contacts = () => {
  return (
    <>
      <Navbar />
      <Navbarline />
      <Googlemap />
      <Footerline />
      <Footer />
    </>
  );
};

export default Contacts;