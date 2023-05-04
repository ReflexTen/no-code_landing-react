import ReviewsCard from '../../components/reviews-components/ReviewsCard'
import Fade from 'react-reveal/Fade'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper'
import clients from '../helpers/ReviewsData'

const Reviews = () => {
  const properties = {
    duration: 1000,
    distance: '80px',
    delay: 400,
  }

  return (
    <section className="reviews section" id="reviews">
      <div className="container">
        <Fade top {...properties}>
          <h2 className="reviews__subtitle subtitle">Клиенты и отзывы</h2>
        </Fade>

        <Fade bottom {...properties}>
          <div className="reviews__swiper-container">
            <Swiper
              slidesPerView={2}
              speed={500}
              spaceBetween={30}
              navigation={{
                nextEl: '.slider-arrow-next',
                prevEl: '.slider-arrow-prew',
                clickable: true,
              }}
              pagination={{ el: '.swiper-pagination', clickable: true }}
              modules={[Navigation, Pagination]}
            >
              {clients.map(client => {
                return (
                  <SwiperSlide key={client.idx}>
                    <ReviewsCard
                      img={client.img}
                      name={client.name}
                      review={client.review}
                    />
                  </SwiperSlide>
                )
              })}

              <div className="slider-controler">
                <div className="slider-arrow-prew arrow"></div>
                <div className="slider-arrow-next arrow"></div>
              </div>

              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </Fade>

        <div className="reviews__shadow-right"></div>
        <div className="reviews__shadow-left"></div>
      </div>
    </section>
  )
}

export default Reviews
