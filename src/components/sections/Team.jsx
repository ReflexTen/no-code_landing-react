import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import TeamCard from '../team-components/TeamCard'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Navigation } from 'swiper'

const Team = () => {
  return (
    <section className="team section" id="team">
      <div className="container">
        <h2 className="team__subtitle subtitle">Ваша будущая команда</h2>

        <Swiper
          slidesPerView={4}
          speed={500}
          navigation={{
            nextEl: '.slider-arrow-next',
            prevEl: '.slider-arrow-prew',
            clickable: true,
          }}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <TeamCard />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="slider-arrow-prew arrow"></div>
            <div className="slider-arrow-next arrow"></div>
          </div>
        </Swiper>
      </div>

      <div className="team__shadow-right"></div>
      <div className="team__shadow-left"></div>
    </section>
  )
}

export default Team
