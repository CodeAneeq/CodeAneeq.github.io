import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

import './styles.scss';
import Testonimal from './testonimal';
import img from '../../assets/img/unkwon.svg'

export default function TestonimalsSlider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };

  return (
    <div className="testimonials-slider-container">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* Swiper Slides */}
        <SwiperSlide><Testonimal pic={img} testonimalPara={'"Aneeq was extremely easy and pleasant to work with and he truly cares about the project being a success. Aneeq has a high level of knowledge and was able to work on my MERN stack application without any issues."'} person={"Joe Matkin"} profession={"Freelancer"}/></SwiperSlide>
        <SwiperSlide><Testonimal pic={img} testonimalPara={'"Aneeq was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of developer you can trust with a project from start to finish."'} person={"Pascal Tremblay"} profession={"Freelancer"}/></SwiperSlide>
        <SwiperSlide><Testonimal pic={img} testonimalPara={'"Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team."'} person={"Faizan Ali"} profession={"Freelancer"}/></SwiperSlide>
      </Swiper>
    </div>
  );
}
