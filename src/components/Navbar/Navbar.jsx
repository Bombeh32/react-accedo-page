import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo-klipclub.png'
import search_icon from '../../assets/images/search_icon.svg'
import profile_pic from '../../assets/images/Profile_pic.svg'
import notification_icon from '../../assets/images/Notification_icon.svg'
import speech_bubble_icon from '../../assets/images/Speech_bubble_icon.svg'

const Navbar = () => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img className='logo' src={logo} alt="" />
        <div className='NavButtons flex-div'>
          <div className='flex-div'>
            <p>Broadcast</p>
          </div>
          <div className='flex-div'>
            <p>Virtual Events</p>
          </div>
          <div className='flex-div'>
            <p>Artists</p>
          </div>
          <div className='flex-div'>
            <p>KlipWall</p>
          </div>
        </div>
      </div>
      
      <div className='nav-middle flex-div'>
        <div className='search-box flex-div'>
          <img src={search_icon} alt="" />
          <input type="text" placeholder='Search'/>
        </div>
        
      </div>

      <div className="nav-right flex-div">
        <div className='img-notf flex-div'>
          <div className='img-notf-bubble flex-div'>
            <img src={speech_bubble_icon} alt="" />
          </div>
          <div className='img-notf-bubble flex-div'>
            <img src={notification_icon} alt="" />
          </div>
        </div>
        <img src={profile_pic} className='user-icon' alt="" />
      </div>
    </nav>
  )
}

export default Navbar
