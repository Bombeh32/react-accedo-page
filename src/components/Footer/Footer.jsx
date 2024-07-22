import React from 'react'
import './Footer.css'
import KlipclubLogo from '../../assets/images/logo_horizontal_completo.png'
import FacebookLogo from '../../assets/vectors/f_1_x2.svg'
import InstagramLogo from '../../assets/vectors/instagram_7_x2.svg'
import TwitterLogo from '../../assets/vectors/vector_20_x2.svg'

const Footer = () => {
  return (
    <div className='Footer flex-col'>
      <div className='logo flex-div'><img src={KlipclubLogo} alt="" /></div>
      <div className='footer-options flex-div'>
        <div className='box-container4DARK'><p>Legal</p></div>
        <div className='box-container4DARK'><p>Privacy Center</p></div>
        <div className='box-container4DARK'><p>Privacy Policy</p></div>
        <div className='box-container4DARK'><p>Cookies</p></div>
        <div className='box-container4DARK'><p>About Ads</p></div>
        <div className='box-container4DARK'><p>&copy; 2022 Klipclub</p></div>
      </div>
      <div className='social-media flex-div'>
        <div className='flex-div'><img src={FacebookLogo} alt="" /></div>
        <div className='flex-div'><img src={InstagramLogo} alt="" /></div>
        <div className='flex-div'><img src={TwitterLogo} alt="" /></div>
      </div>
    </div>
  )
}

export default Footer
