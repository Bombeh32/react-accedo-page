import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CarouselLiveSlider.css'
import CarouselLive from './CarouselLive';


function CarouselLiveSlider() {
  const [currentCarouselLiveSlide, setCarouselLiveSlideCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false, // Activar autoplay
    autoplaySpeed: 4000, // Velocidad de autoplay en milisegundos (opcional)
    pauseOnHover: true, // Pausar autoplay al pasar el ratón sobre el slider (opcional)
    beforeChange: (current, next) => setCarouselLiveSlideCurrentSlide(next),
    appendDots: dots => (
      <div >
        <ul style={{ margin: "-16px"}}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: "16px",
          height: "11px",
          background: i === currentCarouselLiveSlide ? "#FFFFFF40" : "#FFFFFF0D",
          borderRadius: "33px",
          opacity: "0.8",
          gap: '100px',
          transition: "background-color 0.3s ease",
        }}
      >
      </div>
    )
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <CarouselLive status="Live"/>
        <CarouselLive status="Buy"/>
        <CarouselLive status="Klipclub"/>
      </Slider>
    </div>
  );
}

export default CarouselLiveSlider