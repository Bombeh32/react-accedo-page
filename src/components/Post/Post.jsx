import React from 'react'
import './Post.css'

import options from '../../assets/vectors/mi--options-horizontal.svg'
import like_icon from '../../assets/vectors/modo_de_aislamiento_1_x2.svg'
import comments_icon from '../../assets/vectors/vector_stroke_7_x2.svg'
import share_icon from '../../assets/vectors/vector_stroke_5_x2.svg'


const Post = ({profile_pic, post_type, post_text, post_img, artist_name, verify_profile_icon, music_icon}) => {
  return (
    <div className='Single-post-container'>
      <div className="profile-header flex-div">
        <div className="profile-header-left flex-div">
            <img src={profile_pic} alt="" className='profile_pic_image'/>
            <div className='flex-div'>
                <p> {artist_name} </p>
                {music_icon !== "" && (
                    <img src={music_icon} alt="" />
                )}
                {verify_profile_icon !== "" && (
                    <img src={verify_profile_icon} alt="" />
                )}  
                <p style={{fontSize:'13px', color: '#A7A6A1'}}>- 5 min</p>
                <img src={post_type} alt="" />
            </div>
        </div>
        <div className="profile-header-right options-container flex-div">
            <img src={options} alt="" />
        </div>
      </div>
      <div className='post-content flex-col'>
        {post_text !== "" && (
          <p style={{textAlign: 'justify'}}>{post_text}</p>
        )}
        {post_img !== "" && (
          <img src={post_img} alt="" />
        )}

      </div>
      <div className="post-footer flex-div">
        <div className="flex-div">
            <img src={like_icon} alt="" />
            <p>20 Likes</p>
        </div>
        <div className="flex-div">
            <img src={comments_icon} alt="" />
            <p>10k comments</p>
        </div>
        <div className="flex-div">
            <img src={share_icon} alt="" />
            <p>42 shares</p>
        </div>
      </div>
    </div>
  )
}

export default Post


