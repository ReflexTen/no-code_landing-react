import TeamCard from '../team-components/TeamCard'
import membersTeam from '../helpers/TeamData'
import Fade from 'react-reveal/Fade'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper'

const Team = () => {
  const properties = {
    duration: 1000,
    distance: '80px',
    delay: 400,
  }

  return (
    <section className="team section" id="team">
      <div className="container">
        <Fade top {...properties}>
          <h2 className="team__subtitle subtitle">Ваша будущая команда</h2>
        </Fade>

        <Fade bottom {...properties}>
          <Swiper
            breakpoints={{
              1050: {
                slidesPerView: 4,
              },
              825: {
                slidesPerView: 3,
              },
              576: {
                slidesPerView: 2,
              },
            }}
            slidesPerView={1}
            speed={500}
            navigation={{
              nextEl: '.slider-arrow-next',
              prevEl: '.slider-arrow-prew',
              clickable: true,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            modules={[Navigation, Pagination]}
          >
            {membersTeam.map(card => {
              return (
                <SwiperSlide key={card.idx}>
                  <TeamCard
                    img={card.img}
                    id={card.id}
                    name={card.name}
                    proffession={card.proffession}
                    about={card.about}
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
        </Fade>
      </div>

      <div className="team__shadow-right"></div>
      <div className="team__shadow-left"></div>
    </section>
  )
}

export default Team
