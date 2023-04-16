import { useRef } from 'react'

const Contact = () => {
  const contactImgText = useRef()
  setTimeout(() => {
    const contactImgTextValue = contactImgText.current
    contactImgTextValue.innerHTML = contactImgTextValue.innerText
      .split('')
      .map(
        (letter, i) =>
          `<span style="transform:rotate(${i * 11}deg")>${letter}</span>`
      )
      .join('')
  }, 0.01)

  return (
    <section className="contact section">
      <div className="container">
        <h2 className="contact__subtitle subtitle">
          Хочешь узнать стоимость и срок разработки твоего приложения?
        </h2>

        <div className="contact__wrapper">
          <form className="contact__form form">
            <div className="form__interesting interesting">
              <p className="interesting__text">Мне интересно...</p>
              <ul className="interesting__list">
                <li className="interesting__list-item">Бесплатный брифинг</li>
                {/* <li className="interesting__list-item">Бесплатный брифинг</li>
                <li className="interesting__list-item">Бесплатный брифинг</li>
                <li className="interesting__list-item">Бесплатный брифинг</li>
                <li className="interesting__list-item">Бесплатный брифинг</li> */}
              </ul>
              <button className="interesting__button" type="button">
                V
              </button>
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

            <div className="form__request-button request-button">
              <button type="submit" className="request-button__link">
                Оставить заявку
              </button>
            </div>
          </form>

          <div className="contact__card card">
            <div className="card__circle">
              <div className="card__circle-img-box"></div>
              <div className="card__circle-text">
                <p ref={contactImgText}>No-code No-code No-code No-code</p>
              </div>
            </div>

            <p className="card__title">Мария</p>
            <p className="card__text">Co-Founder, CEO, продакт-менеджер</p>

            <div className="card__request-button request-button">
              <a className="request-button__link" href="#">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
