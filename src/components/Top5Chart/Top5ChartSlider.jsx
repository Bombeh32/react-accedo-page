import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Top5Chart from './Top5Chart';

const Top5ChartSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true, // Activar autoplay
        autoplaySpeed: 4000, // Velocidad de autoplay en milisegundos (opcional)
        pauseOnHover: true, // Pausar autoplay al pasar el ratón sobre el slider (opcional)
        beforeChange: (current, next) => setCurrentSlide(next),
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
                background: 
                    i === currentSlide && i==0 ? "#1ED760" :
                    i === currentSlide && i==1 ? "#6BE3F9" :
                    i === currentSlide && i==2 ? "#F83B65" :
                    "#FFFFFF0D",
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
    <div>
      <Slider {...settings}>
        <Top5Chart category="Trending"/>
        <Top5Chart category="Competitors"/>
        <Top5Chart category="PrivateChannels"/>
      </Slider>
    </div>
  )
}

export default Top5ChartSlider
