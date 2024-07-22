import React from 'react'
import './CarouselLive.css'
import live_profile_pic from '../../assets/images/profile_4.jpeg'
import Buy_profile_pic from '../../assets/images/profile_5_Use.jpeg'
import Klipclub_profile_pic from '../../assets/images/user.jpeg'
import live_hero_pic from '../../assets/images/start_stream_17.png'
import Buy_hero_pic from '../../assets/images/start_stream_1.jpeg'
import Klipclub_hero_pic from '../../assets/images/frame_26085623.jpeg'
import verified_icon_pic from '../../assets/vectors/vector_69_x2.svg'
import music_icon_pic from '../../assets/vectors/exclude_1_x2.svg'


const categoryData = {
  Live: {
    profile_pic: live_profile_pic, 
    hero: live_hero_pic, 
    artist_name: "Karol G", 
    verify_profile_icon: verified_icon_pic, 
    music_icon: music_icon_pic,
    
  },
  Buy: {
    profile_pic: Buy_profile_pic, 
    hero: Buy_hero_pic, 
    artist_name: "DJ AZURA ", 
    verify_profile_icon: verified_icon_pic, 
    music_icon: music_icon_pic
  },
  Klipclub: {
    profile_pic: Klipclub_profile_pic, 
    hero: Klipclub_hero_pic, 
    artist_name: "Klipclub", 
    verify_profile_icon: verified_icon_pic, 
    music_icon: music_icon_pic
  },
};

const CarouselLive = ({status}) => {
  const {profile_pic, hero, artist_name, verify_profile_icon, music_icon} = categoryData[status];
  
  return (
    <div className='carouselcontainer flex-div'>
      <div className='profile-pic flex-col'>
        <div className="profileContour flex-div">
          <div className='profile-pic-container flex-div'>
              {status === "Live" && (
                <div className="LiveContainerProfilePic" style={{ marginTop: '90px',
                  marginLeft: '25px'}}>
                  <p>LIVE</p>
                </div>
              )}
              {status === "Live" && (
                <img
                  src={profile_pic}
                  alt=""
                  style={{ padding: '4px', border: '4px solid #1ED760', boxShadow: '0px 3px 30px 3px #5BF445'}}
                />
              )} {status !== "Live" && (
                <img
                  src={profile_pic}
                  alt=""
                  style={{ padding: '0px', border: '0px' }}
                />
              )}
          </div>
        </div>  
        <div className='profile-pic-artist-info flex-div'><p>{artist_name}</p><img src={verify_profile_icon} alt="" />
          {status !== "Buy" && (
            <img src={music_icon} alt="" />
          )}
        </div>
        {status === "Buy" && (
          <div className='BuyInfo'>
            <p style={{color: '#84837D', fontSize: '13px', marginBottom: '8px'}}>482K Followers</p>
            <div 
            style={{
              padding: '4px', 
              display: 'flex', 
              justifyContent: 'center', 
              background: '#FFFFFF26', 
              borderRadius: '22px', 
              cursor: 'pointer', 
              }}>
              <p style={{fontSize: '13px'}}>Buy</p>
            </div>
          </div>
        )}
        
      </div>
      <div className='carousel-pic flex-div'>
        {status === "Live" && (
          <div className='LiveContainerProfilePic flex-div' style={{marginTop: '-420px',
            marginLeft: '840px'}}><p>LIVE</p></div>
        )}
        <img src={hero} alt="" />
      </div>
    </div>
  )
}

export default CarouselLive

