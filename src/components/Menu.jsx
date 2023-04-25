import logo from './../images/logo/logo.png'

const Menu = () => {
  return (
    <div className="menu">
      <div className="container">
        <div className="menu__box">
          <div className="menu__logo logo">
            <a href="#">
              <img className="logo__img" src={logo} alt="логотип No-code" />
            </a>
          </div>
          <nav className="menu__nav">
            <ul className="menu__list">
              <li className="menu__item">
                <a className="menu__item-link" href="#expertise">
                  Наша экспертиза
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__item-link" href="#portfolio">
                  Проекты
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__item-link" href="#about">
                  О нас
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__item-link" href="#team">
                  Команда
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__item-link" href="#reviews">
                  Отзывы
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__item-link" href="#contact">
                  Сколько стоит?
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__item-link" href="#questions">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <div className="header__request-button request-button">
            <a className="request-button__link" href="#contact">
              Оставить заявку
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
