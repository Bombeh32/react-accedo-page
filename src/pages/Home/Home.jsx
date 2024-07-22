import React, { useState, useRef, useEffect } from 'react'
import './Home.css'
import profile_pic from '../../assets/images/Profile_pic.svg'
import CarouselLiveSlider from '../../components/CarouselLive/CarouselLiveSlider'
import TrendingNowSlider from '../../components/TrendingNowComp/TrendingNowSlider'
import Top5ChartSlider from '../../components/Top5Chart/Top5ChartSlider'
import Post from '../../components/Post/Post'
import Emojis_icon from '../../assets/vectors/smile_1_x2.svg'
//Profile pics
import KarolG_profile_pic from '../../assets/images/profile_4.jpeg'
import Camilo_profile_pic from '../../assets/images/ellipse_33.jpeg'
import Eleanor_profile_pic from '../../assets/images/profile_3.jpeg'
import Shakira_profile_pic from '../../assets/images/ellipse_3.jpeg'
import ArianaGrande_profile_pic from '../../assets/images/ellipse_32.jpeg'
//PostImages
import post2_pic from '../../assets/images/Collection.jpg'
import post3_pic from '../../assets/images/subscribe.jpg'
import post4_pic from '../../assets/images/EleanorPeñaVMSG.jpg'
//Artist info icon
import verified_icon_pic from '../../assets/vectors/vector_208_x2.svg'
import music_icon_pic from '../../assets/vectors/exclude_1_x2.svg'
import global_post_icon from '../../assets/vectors/vector_108_x2.svg'
import private_post_icon from '../../assets/vectors/vector_53_x2.svg'

//makepost assets
import add_image_icon from '../../assets/vectors/image_3_x2.svg'
import add_video_icon from '../../assets/vectors/vector_50_x2.svg'
import add_audio_icon from '../../assets/vectors/group_318_x2.svg'
import add_tag_icon from '../../assets/vectors/exclude_426_x2.svg'
import post_type_makepost_icon from '../../assets/vectors/vector_160_x2.svg'


const Home = () => {
  const postsvalues = [
    {
      id: 1,
      profile_pic: Camilo_profile_pic, 
      post_type: global_post_icon,
      post_text: "This was the best performance of the night! The dancers, Choreography, costumes, stage everything! As busy as she is with her tour and then to put this sh... ", 
      post_img: '',
      artist_name: "Camilo", 
      verify_profile_icon: '', 
      music_icon: music_icon_pic,
      
    },
    {
      id: 2,
      profile_pic: Eleanor_profile_pic, 
      post_type: global_post_icon, 
      post_text: '',
      post_img: post2_pic,
      artist_name: "Eleanor Peña", 
      verify_profile_icon: verified_icon_pic, 
      music_icon: ''
    },
    {
      id: 3,
      profile_pic: KarolG_profile_pic, 
      post_type: private_post_icon, 
      post_text: '',
      post_img: post3_pic,
      artist_name: "Karol G", 
      verify_profile_icon: verified_icon_pic, 
      music_icon: music_icon_pic
    },
    {
      id: 4,
      profile_pic: Shakira_profile_pic, 
      post_type: global_post_icon, 
      post_text: "This was the best performance of the night! The dancers, Choreography, costumes, stage everything! As busy as she is with her tour and then to put this sh... ",
      post_img: post4_pic,
      artist_name: "Shakira", 
      verify_profile_icon: verified_icon_pic, 
      music_icon: music_icon_pic
    },
  ];
    
  const [inputText, setInputText] = useState('');
  const textareaRef = useRef(null);
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);
  const [newPost, setnewPost] = useState([]);
  const [iterador, setiterador] = useState(1);
  //const [textareaValue, setTextareaValue] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleFocus = () => {
    setInputText('This was the best performance of the night! The dancers, Choreography, costumes, stage everything! As busy as she is with her tour and then to put this show was amazing. Love her! 😍'); // Cambiar la altura del contenedor cuando el input obtiene el foco
    setIsTextAreaFocused(true);
  };
  const handleClickPost = () => {
    const newPostElements = {
      id: iterador,
      profile_pic: Eleanor_profile_pic, 
      post_type: global_post_icon,
      post_text: inputText, 
      post_img: '',
      artist_name: "Eleanor Peña", 
      verify_profile_icon: verified_icon_pic, 
      music_icon: music_icon_pic,
      
    };

    setnewPost(prevPosts => [...prevPosts, newPostElements]);
    setiterador(prevCounter => prevCounter + 1);
    setTextareaValue(''); // Limpiar el textarea después de agregar el objeto
  };

  
  
  useEffect(() => {
    if (textareaRef.current) {
      // Ajustar la altura del textarea basada en su contenido
      textareaRef.current.style.height = 'auto'; // Restaurar la altura automática
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Ajustar la altura al scrollHeight
    }
  }, [inputText]);


  return (
    <div className='PrincipalContainer'>
      <div className='fondo-blur'></div>
      <div className='Content'>
        <div className='flex-col'> 
          <div className='HeroCarousel'><CarouselLiveSlider/></div>
        
          <div className='TrendingNowCarousel flex-col'>
            <h1>Trending Now</h1> 
            <div className='TrendingNowCarouselItems'>
              <TrendingNowSlider/>
            </div> 
            <div></div>
          </div>
          <div className='KlipwallPosts'>
            <div> 
              
              <div className='Container-posts'>
                <div className='KlipwallPostContainer flex-col'>
                  <div><h1 >KlipWall</h1></div>
                  <div className='MakePostContainer flex-col box-container1'>
                    <div className='MakePost flex-div '>
                      <img src={profile_pic} alt="" />
                      <div className='search-box flex-col'>
                        <textarea
                          placeholder='What are you thinking?'
                          ref={textareaRef}
                          value={inputText}
                          onChange={handleChange}
                          onFocus={handleFocus}
                        />
                        {isTextAreaFocused && (
                          <div className='emojis-container flex-div'>
                            <img src={Emojis_icon} alt="" />
                          </div>
                        )}
                        
                      </div>
                    </div>
                    {isTextAreaFocused && (
                      <div className='post_options flex-div'>
                      <div className='post_options_media flex-div'>
                          <p>Agrega</p>
                          <img src={add_image_icon} alt="" /><img src={add_video_icon} alt="" /><img src={add_audio_icon} alt="" /><img src={add_tag_icon} alt="" />
                        </div>
                        <div className='flex-div' style={{gap: '8px'}}>
                          <div className='post_type flex-div'>
                            <p>Público</p>
                            <img src={post_type_makepost_icon} alt="" style={{width: '12px'}}/>
                          </div>
                          <div className='post_BTN flex-div' onClick={handleClickPost} style={{cursor:'pointer'}}>
                            <p>Post</p>
                          </div>
                        </div>    
                      </div>
                    )}
                    
                  </div>
                  <div className='PostTabs flex-div'>
                    <div className='box-container3 flex-div'><p>Trending</p></div>
                    <div className='box-container3 flex-div'><p>Friends</p></div>
                    <div className='box-container3 flex-div'><p>Private channel</p></div>
                  </div>
                  <div className='Postscontainer flex-col'>
                    
                    {newPost.slice(0).reverse().map(post => (
                      <Post
                        profile_pic={post.profile_pic}
                        post_type={post.post_type}
                        post_text={post.post_text}
                        post_img={post.post_img}
                        artist_name={post.artist_name}
                        verify_profile_icon={post.verify_profile_icon}
                        music_icon={post.music_icon}
                      />
                    ))}
                    {postsvalues.map(post => (
                      <Post
                        profile_pic={post.profile_pic}
                        post_type={post.post_type}
                        post_text={post.post_text}
                        post_img={post.post_img}
                        artist_name={post.artist_name}
                        verify_profile_icon={post.verify_profile_icon}
                        music_icon={post.music_icon}
                      />
                    ))}
                  </div>
                </div>
                <div className='top-five-chart box-container1'>
                  <div className='box-container2 flex-div'>
                    <p>Top 5</p>
                    </div>
                      <Top5ChartSlider/>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
      <div className='fondo-blur-bottom'></div>
    </div> 
  )
}

export default Home
