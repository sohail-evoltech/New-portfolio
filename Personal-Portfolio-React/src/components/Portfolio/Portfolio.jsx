import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Summit from "../../img/summit.jpg";
import Gfints from "../../img/gfints.jpg";
import Lykas from "../../img/lykas.jpg";
import Evoltech from "../../img/evoltech.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>projects</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Summit} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Gfints} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Lykas} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Evoltech} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
