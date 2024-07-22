import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TrendingNowSlider.css'
import TrendingNowComp from './TrendingNowComp';

//Lista de imágenes
import CompImg1 from '../../assets/images/klips_visual.jpeg'
import CompImg2 from '../../assets/images/rectangle_732.png'
import CompImg3 from '../../assets/images/start_stream_8.jpeg'
import CompImg4 from '../../assets/images/start_stream_16.jpeg'
import CompImg5 from '../../assets/images/frame_771.jpeg'
import CompImg6 from '../../assets/images/start_stream_14.jpeg'
import CompImg7 from '../../assets/images/start_stream_18.jpeg'
import CompImg8 from '../../assets/images/frame_193.jpeg'
import CompImg9 from '../../assets/images/start_stream_11.jpeg'
import CompImg10 from '../../assets/images/frame_7711.jpeg'
import CompImg11 from '../../assets/images/start_stream.jpeg'
import CompImg12 from '../../assets/images/frame_7712.jpeg'



function TrendingNowSlider() {
  const [currentTrendingNowSlider, setTrendingNowSlider] = useState(0);
  const imgList = [CompImg1, CompImg2, CompImg3, CompImg4, CompImg5, CompImg6, CompImg7, CompImg8, CompImg9, CompImg10, CompImg11, CompImg12]; // Lista de imágenes

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    beforeChange: (current, next) => setTrendingNowSlider((next/3)),
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
          background: i === currentTrendingNowSlider ? "#FFFFFF40" : "#FFFFFF0D",
          borderRadius: "33px",
          opacity: "0.8",
          margin: "0 10px",
          transition: "background-color 0.3s ease",
        }}
      >
      </div>
    )
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {imgList.map((imgSrc, index) => (
          <TrendingNowComp key={index} imgSrc={imgSrc} />
        ))}
      </Slider>
    </div>
  );
}

export default TrendingNowSlider