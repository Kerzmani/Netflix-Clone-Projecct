import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
import hero_banner from '../../assets/hero_banner.png'
import hero_title from '../../assets/hero_title.webp'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="Hero Banner" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="Hero Title" className="caption-img" />
          <p>
            An Army Ranger candidate and his team encounter an otherworldly
            killing machine in this action movie starring Alan Ritchson
            ("Reacher") and Dennis Quaid.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt=""  />Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt=""/>More Info
            </button>
          </div>
        <TitleCards />
        </div>
      </div>
       <div className="more-cards">
          <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
          <TitleCards title={"Only On Netflix"} category={"popular"} />
          <TitleCards title={"Upcoming Releases"} category={"upcoming"}/>
          <TitleCards title={"Top Picks For You"} category={"now_playing"}/>
       </div>
       <Footer />
    </div>
  );
}

export default Home
