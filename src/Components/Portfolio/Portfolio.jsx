import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";

import typing from "../../img/typing.png";
import MusicApp from "../../img/musicapp.png";
import Hoc from "../../img/hoc.png";
import restaurantImg from "../../img/restaurant_v1.png"
import "swiper/css";
import { themeContext } from "../../../context";
import { useContext } from "react";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
       
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          
          <a href="https://restaurant-v1-five.vercel.app/" target="_blank"><img src={restaurantImg} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://typing-game-tawny.vercel.app/" target="_blank"><img src={typing} alt="" /></a>
          
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hoc} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
