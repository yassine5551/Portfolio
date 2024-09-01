import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import masterChef from "../../img/p1.png";
import typing from "../../img/typing.png";
import WebAgency from "../../img/web.png";
import restaurantImg from "../../img/restaurant_v1.png";
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
          <a
            href="https://restaurant-landing-page-961q5q529-el-koujjer-yassines-projects.vercel.app/"
            target="_blank"
          >
            <img src={masterChef} alt="masterchef" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://restaurant-v1-five.vercel.app/" target="_blank">
            <img src={restaurantImg} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://web-agency-delta.vercel.app/" target="_blank">
            <img src={WebAgency} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://typing-game-tawny.vercel.app/" target="_blank">
            <img src={typing} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
