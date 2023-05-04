import { useState, useRef, useLayoutEffect } from 'react'
import Fade from 'react-reveal/Fade'
import Button from '../UI/Button'

const services = [
  'Бесплатный брифинг - 1',
  'Бесплатный брифинг - 2',
  'Бесплатный брифинг - 3',
  'Бесплатный брифинг - 4',
]

const Contact = () => {
  const contactImgText = useRef()

  const [selectedService, setSelectedService] = useState(
    'Бесплатный брифинг - 1'
  )
  const [isActive, setIsActive] = useState(false)

  useLayoutEffect(() => {
    const contactImgTextValue = contactImgText.current
    contactImgTextValue.innerHTML = contactImgTextValue.innerText
      .split('')
      .map(
        (letter, i) =>
          `<span style="transform:rotate(${i * 11}deg")>${letter}</span>`
      )
      .join('')
  }, [])

  function activeList() {
    setIsActive(!isActive)
  }

  function chooseServices(e) {
    setSelectedService(e.target.innerText)
    setIsActive(false)
  }

  const properties = {
    duration: 1000,
    distance: '80px',
    delay: 400,
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <Fade top {...properties}>
          <h2 className="contact__subtitle subtitle">
            Хочешь узнать стоимость и срок разработки твоего приложения?
          </h2>
        </Fade>

        <div className="contact__wrapper">
          <Fade left {...properties}>
            <div className="contact__form-wrapper">
              <form className="contact__form form">
                <div className="form__interesting interesting">
                  <p className="interesting__text">Мне интересно...</p>

                  <div className="interesting__dropdown">
                    <button
                      className={`interesting__button  ${
                        isActive === true ? 'interesting__button--active' : ''
                      }`}
                      type="button"
                      onClick={activeList}
                    >
                      {`${selectedService}`}
                    </button>
                    {isActive && (
                      <ul className="interesting__list">
                        {services.map((service, idx) => {
                          return (
                            <li
                              key={idx}
                              onClick={e => chooseServices(e)}
                              className="interesting__list-item"
                            >
                              {service}
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="form__input-box">
                  <input
                    className="form__input"
                    type="text"
                    placeholder="Имя"
                    required
                  />
                  <input
                    className="form__input"
                    type="number"
                    placeholder="Соцсеть/телефон"
                    required
                  />
                </div>
                <textarea
                  className="form__textarea"
                  placeholder="Описание проекта"
                ></textarea>

                <input
                  className="form__checkbox"
                  type="checkbox"
                  id="person-data"
                  name="person-data"
                />
                <label className="form__label-checkbox" htmlFor="person-data">
                  Я согласен(а) на обработку моих персональных данных
                </label>

                <Button text={'Оставить заявку'} />
              </form>

              <div className="contact__form-shadow-circle shadow-circle"></div>
            </div>
          </Fade>

          <Fade right {...properties}>
            <div className="contact__card-wrapper">
              <div className="contact__card card">
                <div className="card__circle">
                  <div className="card__circle-img-box"></div>
                  <div className="card__circle-text">
                    <p ref={contactImgText}>No-code No-code No-code No-code</p>
                  </div>
                </div>

                <p className="card__title">Мария</p>
                <p className="card__text">Co-Founder, CEO, продакт-менеджер</p>

                <Button text={'Telegram'} />
              </div>

              <div className="contact__card-shadow-circle shadow-circle"></div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Contact
