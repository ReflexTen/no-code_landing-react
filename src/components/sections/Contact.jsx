import { useState, useRef, useLayoutEffect } from 'react'
import Fade from 'react-reveal/Fade'
import Button from '../UI/Button'
import { parsePhoneNumber } from 'libphonenumber-js'

const services = [
  'Бесплатный брифинг',
  'Дизайн и прототип',
  'Веб-сервис',
  'Сайт',
  'Продвижение приложения',
  'Видео продакшн',
]

const Contact = () => {
  const contactImgText = useRef()

  const [selectedService, setSelectedService] = useState('Бесплатный брифинг')

  // const [phoneValue, setPhoneValue] = useState('')

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

  function setPhoneValueHandler(e) {
    // console.log(e.target.value)
    // console.log(e.target.value.length)
    // console.log(Number(e.target.value))
    // if (e.target.value.length === 1) {
    //   setPhoneValue(`+7(${e.target.value}`)
    // } else if (e.target.value.length === 6) {
    //   setPhoneValue(`${e.target.value})-`)
    // } else {
    //   setPhoneValue(e.target.value)
    // }
    // setPhoneValue(e.target.value)
  }

  function normalizePhoneNumber(value) {
    const phoneNumber = parsePhoneNumber(value, 'RU')
    if (phoneNumber) {
      // phoneNumber.number()
      phoneNumber.isPossible()
      phoneNumber.isValid()
      // Note: `.getType()` requires `/max` metadata: see below for an explanation.
      phoneNumber.getType()
    }
    // console.log(phoneNumber.formatInternational())
    return phoneNumber.formatInternational()
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <Fade top {...properties}>
          <h2 className="contact__subtitle subtitle">
            Хочешь узнать{' '}
            <span className="contact__subtitle--red">стоимость</span> и{' '}
            <span className="contact__subtitle--red">срок</span> разработки
            твоего приложения?
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
                    type="tel"
                    placeholder="Соцсеть/телефон"
                    required
                    // value={phoneValue}
                    onChange={e => {
                      e.target.value = normalizePhoneNumber(e.target.value)
                    }}
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
                  required
                />
                <label className="form__label-checkbox" htmlFor="person-data">
                  Я согласен(а) на обработку моих персональных данных
                </label>

                {/* <Button text={'Оставить заявку'} /> */}
                <button className="form__button" type="submit">
                  Оставить заявку
                </button>
              </form>
            </div>
          </Fade>

          <Fade right {...properties}>
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
          </Fade>
        </div>
      </div>

      <div className="contact__form-shadow-circle shadow-circle"></div>
      <div className="contact__card-shadow-circle shadow-circle"></div>
    </section>
  )
}

export default Contact
