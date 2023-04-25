import React from 'react'
import ReviewsCard from '../../components/reviews-components/ReviewsCard'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Navigation, Pagination } from 'swiper'

const Reviews = () => {
  return (
    <section className="reviews section" id="reviews">
      <div className="container">
        <h2 className="reviews__subtitle subtitle">Клиенты и отзывы</h2>
        <div className="reviews__swiper-container">
          <Swiper
            slidesPerView={1}
            speed={500}
            // spaceBetween={50}
            navigation={{
              nextEl: '.slider-arrow-next',
              prevEl: '.slider-arrow-prew',
              clickable: true,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            modules={[Navigation, Pagination]}
          >
            <SwiperSlide>
              <ReviewsCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewsCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewsCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewsCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewsCard />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewsCard />
            </SwiperSlide>

            <div className="slider-controler">
              <div className="slider-arrow-prew arrow"></div>
              <div className="slider-arrow-next arrow"></div>
            </div>

            <div className="swiper-pagination"></div>
          </Swiper>
        </div>

        <div className="reviews__shadow-right"></div>
        <div className="reviews__shadow-left"></div>
      </div>
    </section>
  )
}

export default Reviews
