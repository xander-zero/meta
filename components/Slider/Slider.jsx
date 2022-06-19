import React from "react";
import { SliderStyle } from "./SliderStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Container } from "react-bootstrap";
import Typography from "../Typography/Typography";
import face1 from "../../assets/img/face1.jpg";
import face2 from "../../assets/img/face2.jpg";
import face3 from "../../assets/img/face3.jpg";
import face4 from "../../assets/img/face4.jpg";
import Image from "next/image";
const Slider = () => {
  return (
    <Container>
      <SliderStyle>
        <div className="w-100 text-center mt-5">
          <Typography color="#2513d1" size="20px" className="mb-0">
            Testimonial
          </Typography>
          <Typography color="#1e1666" size="34px">
            What People Says
          </Typography>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="wrapper text-center">
              <Image layout="fixed" src={face1} alt="" />
              <Typography className="w-50 mx-auto" color="#6a7c92">
                Soren very company business under-full for adipisicing eliterdo
                eiusmod tempor asem incididuntlabore dolore magna.
              </Typography>
              <Typography color="#1e1666" className="m-0">
                Ira Melon
              </Typography>
              <Typography color="#2f1ed3" className="pb-3">
                CEO Founder
              </Typography>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper text-center">
              <Image layout="fixed" src={face2} alt="" />
              <Typography className="w-50 mx-auto" color="#6a7c92">
                Soren very company business under-full for adipisicing eliterdo
                eiusmod tempor asem incididuntlabore dolore magna.
              </Typography>
              <Typography color="#1e1666" className="m-0">
                Ira Melon
              </Typography>
              <Typography color="#2f1ed3" className="pb-3">
                CEO Founder
              </Typography>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper text-center">
              <Image layout="fixed" src={face3} alt="" />
              <Typography className="w-50 mx-auto" color="#6a7c92">
                Soren very company business under-full for adipisicing eliterdo
                eiusmod tempor asem incididuntlabore dolore magna.
              </Typography>
              <Typography color="#1e1666" className="m-0">
                Ira Melon
              </Typography>
              <Typography color="#2f1ed3" className="pb-3">
                CEO Founder
              </Typography>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper text-center">
              <Image layout="fixed" src={face4} alt="" />
              <Typography className="w-50 mx-auto" color="#6a7c92">
                Soren very company business under-full for adipisicing eliterdo
                eiusmod tempor asem incididuntlabore dolore magna.
              </Typography>
              <Typography color="#1e1666" className="m-0">
                Ira Melon
              </Typography>
              <Typography color="#2f1ed3" className="pb-3">
                CEO Founder
              </Typography>
            </div>
          </SwiperSlide>
        </Swiper>
      </SliderStyle>
    </Container>
  );
};

export default Slider;
