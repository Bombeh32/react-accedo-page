import React from 'react'
import Slider from "react-slick";
import options from '../../assets/vectors/mi--options-horizontal.svg'
import './TrendingNowComp.css'



const TrendingNowComp = ({ imgSrc }) => {
  return (
    <div>
      <div className='TrendingNowComp flex-col'>
      <div className='ImgContainer flex-div'>
        <div className='Live-container flex-div'><p>LIVE</p></div>
        <img src={imgSrc} alt="" />
      </div>
      <div className='TitleContainer'><h1>Karol G Performs "Oki Doki / Tá Ok"| 2023 MTV Video Music Awards </h1></div>
      
      <div className='categories-list-options flex-div'>
        <div className='categories-list flex-div'>
            <div className='box-container4 flex-div'><p>#Pop</p></div>
            <div className='box-container4 flex-div'><p>#Rock</p></div>
            <div className='box-container4 flex-div'><p>#Jazz</p></div>
            <div className='box-container4 flex-div'><p>#Salsa</p></div>
        </div>
        <div className='options-container flex-div'>
            <img src={options} alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default TrendingNowComp

