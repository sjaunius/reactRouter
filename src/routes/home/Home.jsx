import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Navbarline from "../../components/navbarline/Navbarline";
import Owlcarousel from "../../components/owlcarousel/Owlcarousel";
import Footerline from "../../components/footerline/Footerline";
import Footer from "../../components/footer/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Navbarline />
            <Owlcarousel />
            <Footerline />
            <Footer />
        </>
    );
}

export default Home