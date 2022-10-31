import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

const MovieList = ({ movies, Component, OnClickLabel }) => {
  return (
  <Swiper
    className="m-1 mb-3"
    slidesPerView={4}
    spaceBetween={10}
    centeredSlides={true}
    grabCursor={true} 
    pagination={{
      clickable: true
    }}
  >
    
    {movies.map((movie, index) => (
    <SwiperSlide key={index}>
      <div className="image-container">
        <img src={movie.Poster} alt={`${movie.Title} Poster`} />
        <div
            onClick={() => OnClickLabel(movie)}
            className="overlay"
          >
            <Component />
          </div>
      </div>
    </SwiperSlide>
    )
    )}
      
  </Swiper>
  );
};

export default MovieList;
