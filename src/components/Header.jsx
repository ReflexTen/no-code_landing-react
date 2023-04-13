import React from 'react'
import logo from './../images/logo/logo.png'

///////////////////////////////////////////////

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__box">
          <div className="header__logo logo">
            <a href="#">
              <img className="logo__img" src={logo} alt="логотип No-code" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <a className="header__item-link" href="#">
                  Наша экспертиза
                </a>
              </li>
              <li className="header__item">
                <a className="header__item-link" href="#">
                  Проекты
                </a>
              </li>
              <li className="header__item">
                <a className="header__item-link" href="#">
                  О нас
                </a>
              </li>
              <li className="header__item">
                <a className="header__item-link" href="#">
                  Команда
                </a>
              </li>
              <li className="header__item">
                <a className="header__item-link" href="#">
                  Отзывы
                </a>
              </li>
              <li className="header__item">
                <a className="header__item-link" href="#">
                  Сколько стоит?
                </a>
              </li>
              <li className="header__item">
                <a className="header__item-link" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <div className="header__request-button request-button">
            <a className="request-button__link" href="#">
              Оставить заявку
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
