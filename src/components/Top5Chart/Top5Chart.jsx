import React from 'react'
import './Top5Chart.css'
import pic_KarolG from '../../assets/images/profile_4.jpeg'
import pic_arianagrande from '../../assets/images/ellipse_32.jpeg'
import pic_AVICII from '../../assets/images/ellipse_31.jpeg'
import pic_Shakira from '../../assets/images/ellipse_3.jpeg'
import pic_Camilo from '../../assets/images/ellipse_33.jpeg'
import green_star from '../../assets/vectors/vector_103_x2.svg'
import red_star from '../../assets/vectors/vector_75_x2.svg'
import blue_star from '../../assets/vectors/vector_127_x2.svg'

const categoryData = {
    Trending: {
      TitleTop5: 'Trending',
      star: green_star,
      backgroundColor: '#1ED760',
    },
    Competitors: {
        TitleTop5: 'Competitors',
        star: blue_star,
        backgroundColor: '#6BE3F9',
    },
    PrivateChannels: {
      TitleTop5: 'Private Channels',
      star: red_star,
      backgroundColor: '#F83B65',
    },
  };
  

const Top5Chart = ({category}) => {
  // Obtener datos de la categoría seleccionada
  const {TitleTop5, star, backgroundColor } = categoryData[category];

  return (
    <div className='top5Chart'>
      <div className='flex-div'><h1  style={{ color: backgroundColor }}>{TitleTop5}</h1></div>
      <div className='top5Container flex-col'>
        <div className='box-container2DARK flex-div'>
            <div className='pic flex-div'>
                <h2>1</h2>
                <img src={pic_KarolG} alt="" />
                <p>Karol G</p>
            </div>
            <div className='star flex-div'>
                <img src={star} alt="" />
                <h2 style={{ color: backgroundColor }}>20k</h2>
            </div>
        </div>
        <div className='box-container2DARK flex-div'>
            <div className='pic flex-div'>
                <h2>2</h2>
                <img src={pic_AVICII} alt="" />
                <p>AVICII</p>
            </div>
            <div className='star flex-div'>
                <img src={star} alt="" />
                <h2 style={{ color: backgroundColor }}>200</h2>
            </div>
        </div>
        <div className='box-container2DARK flex-div'>
            <div className='pic flex-div'>
                <h2>3</h2>
                <img src={pic_arianagrande} alt="" />
                <p>Ariana Grande</p>
            </div>
            <div className='star flex-div'>
                <img src={star} alt="" />
                <h2 style={{ color: backgroundColor }}>200</h2>
            </div>
        </div>
        <div className='box-container2DARK flex-div'>
            <div className='pic flex-div'>
                <h2>4</h2>
                <img src={pic_Shakira} alt="" />
                <p>Shakira</p>
            </div>
            <div className='star flex-div'>
                <img src={star} alt="" />
                <h2 style={{ color: backgroundColor }}>200</h2>
            </div>
        </div>
        <div className='box-container2DARK flex-div'>
            <div className='pic flex-div'>
                <h2>5</h2>
                <img src={pic_Camilo} alt="" />
                <p>Camilo</p>
            </div>
            <div className='star flex-div'>
                <img src={star} alt="" />
                <h2 style={{ color: backgroundColor }}>200</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Top5Chart
