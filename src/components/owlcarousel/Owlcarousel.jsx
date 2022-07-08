import React from 'react'
import OwlCarousel from "react-owl-carousel";
import '../owlcarousel/owlcarousel.css'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import img1 from '../images/hero.jpg';
import img2 from '../images/coach.jpg';
import img3 from '../images/ballhit.jpg';
import img4 from '../images/point.jpg';
import img5 from '../images/resting.jpg';
import img6 from '../images/men2.jpg';

const Owlcarousel = () => {
  return (
    <OwlCarousel 
    className="owl-theme" 
    autoplay 
    items='1'
    loop
    >
    
    <div className="item">
          <img src={img1}/>
        </div>
        <div className="item">
          <img src={img2}/>
        </div>
        <div className="item">
          <img src={img3}/>
        </div>
        <div className="item">
          <img src={img4}/>
        </div>
        <div className="item">
          <img src={img5}/>
        </div>
        <div className="item">
          <img src={img6}/>
        </div>
    </OwlCarousel>
   
        
  )
}

export default Owlcarousel