import { useState } from 'react'
import logo from './../images/logo/logo.png'
import Button from './UI/Button'

const menuList = [
  { text: 'Наша экспертиза', link: '#expertise' },
  { text: 'Проекты', link: '#portfolio' },
  { text: 'О нас', link: '#about' },
  { text: 'Команда', link: '#team' },
  { text: 'Отзывы', link: '#reviews' },
  { text: 'Сколько стоит?', link: '#contact' },
  { text: 'FAQ', link: '#questions' },
]

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(false)

  const setActiveMenuHandler = () => {
    setActiveMenu(!activeMenu)
  }

  return (
    <div className="menu">
      <div className="container">
        <div className="menu__box">
          <div className="menu__logo logo">
            <a href="#">
              <img className="logo__img" src={logo} alt="логотип No-code" />
            </a>
          </div>

          <nav className={`menu__nav ${activeMenu ? 'active' : ''}`}>
            <ul className="menu__list">
              {menuList.map((item, idx) => {
                return (
                  <li key={idx} className="menu__item">
                    <a
                      className="menu__item-link"
                      href={item.link}
                      onClick={setActiveMenuHandler}
                    >
                      {item.text}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <Button text={'Оставить заявку'} />

          <div
            className={`menu-icon ${activeMenu ? 'active-menu' : ''}`}
            onClick={setActiveMenuHandler}
          >
            <span className="menu-icon__line"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
