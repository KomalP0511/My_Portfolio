import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import ecommerceA from "../../img/ecommerceA.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import weatherApp from "../../img/weatherApp.jpg";
import cryptoo from "../../img/cryptoo.jpg";
import { themeContext } from "../../Context";
import payrollM from "../../img/payrollM.png";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={weatherApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ecommerceA} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cryptoo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={payrollM} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
