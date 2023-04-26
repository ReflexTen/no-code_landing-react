import { useRef, useLayoutEffect } from 'react'
import peopleImage from '../../images/home/people.png'

import Fade from 'react-reveal/Fade'

const Home = () => {
  const homeButtonText = useRef()

  useLayoutEffect(() => {
    const homeButtonTextValue = homeButtonText.current
    homeButtonTextValue.innerHTML = homeButtonTextValue.innerText
      .split('')
      .map(
        (letter, i) =>
          `<span style="transform:rotate(${i * 10.5}deg")>${letter}</span>`
      )
      .join('')
  }, [])

  const properties = {
    duration: 2000,
    distance: '200px',
    delay: 400,
  }

  return (
    <section className="home section">
      <div className="container">
        <Fade left {...properties}>
          <h1 className="home__title">
            Разработка <span className="home__title-text">мобильных</span>{' '}
            <br />
            <div className="home__title-elipse"></div>
            <span className="home__title-text">приложений</span> для успеха в
            бизнесе!
          </h1>
        </Fade>

        <div className="home__box">
          <ul className="home__list">
            <li className="home__list-item">
              Экономим бюджет наших клиентов в 3-5 раз на low-code технологиях.
            </li>
            <li className="home__list-item">
              Реализуем проекты любой сложности.
            </li>
            <li className="home__list-item">
              Поддерживаем наших клиентов после запуска проекта
            </li>
          </ul>

          <Fade right {...properties} distance={'300px'} duration={2000}>
            <div className="home__button-box">
              <a className="home__button" href="#contact">
                <div className="home__button-text">
                  <p ref={homeButtonText}>- Оценить проект - Оценить проект</p>
                </div>
              </a>
            </div>
          </Fade>
        </div>
      </div>
      <Fade bottom {...properties} distance={'80px'}>
        <img className="home__img" src={peopleImage} alt="" />
      </Fade>
    </section>
  )
}

export default Home
