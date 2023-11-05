import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import axios from "axios";

const FeedSlider = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get("/api/slide")
      .then((response) => {
        const imageUrls: string[] = Object.values(response.data) as string[];
        setImages(imageUrls);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <StyledSwiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {images?.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img src={imageUrl} alt={`slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </>
  );
};

export default FeedSlider;

const StyledSwiper = styled(Swiper)`
  width: 500px;
  height: 500px;
  border-radius: 5px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  background: yellow;
  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    line-height: 8px;
    color: #000;
    opacity: 1;
    background: rgba(255, 255, 255, 0.6);
  }

  .swiper-pagination-bullet-active {
    background: #5d6dbe;
    opacity: 0.8;
  }

  .swiper-button-prev,
  .swiper-button-next {
    background-color: #fff;
    opacity: 0.6;
    height: 30px;
    width: 30px;
    border-radius: 30px;

    &:after {
      font-size: 1rem;
      font-weight: bold;
      color: #5d6dbe;
    }
  }
`;
