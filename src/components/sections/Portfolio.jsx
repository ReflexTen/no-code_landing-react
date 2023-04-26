import { useState, useLayoutEffect, useEffect, useRef } from 'react'
import works from '../../components/helpers/Works.js'

const navigation = [
  { name: 'Все работы' },
  { name: 'UX/UI дизайн' },
  { name: 'Логотипы' },
  { name: 'Веб-сайты' },
  { name: 'Разработка' },
]

const Portfolio = () => {
  const [categories, setCatecategories] = useState(0)
  const [sorting, setSorting] = useState('Все работы')
  const [collection, setCollection] = useState([])

  const contentList = useRef()
  const circleButton = useRef()
  const shadowWrap = useRef()

  const contentButtonText = useRef()

  useLayoutEffect(() => {
    const contentButtonTextValue = contentButtonText.current
    contentButtonTextValue.innerHTML = contentButtonTextValue.innerText
      .split('')
      .map(
        (letter, i) =>
          `<span style="transform:rotate(${i * 10}deg")>${letter}</span>`
      )
      .join('')
  }, [])

  useEffect(() => {
    if (sorting === 'Все работы') {
      setCollection([...works])
    } else {
      setCollection([...works.filter(item => item.tag === sorting)])
    }
  }, [sorting])

  const showList = () => {
    circleButton.current.classList.toggle('content__circle-button--active')
    shadowWrap.current.classList.toggle('shadow--active')

    const contentListValue = contentList.current

    if (contentListValue.dataset.open !== 'true') {
      contentListValue.dataset.open = 'true'
      contentListValue.style.maxHeight = `${contentListValue.scrollHeight}px`
    } else {
      contentListValue.dataset.open = 'false'
      contentListValue.style.maxHeight = ``
    }
  }

  const hideList = () => {
    circleButton.current.classList.remove('content__circle-button--active')
    shadowWrap.current.classList.remove('shadow--active')

    const contentListValue = contentList.current
    contentListValue.dataset.open = 'false'
    contentListValue.style.maxHeight = ``
  }

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <h2 className="portfolio__subtitle subtitle">Портфолио</h2>

        <ul className="portfolio__tags">
          {navigation.map((item, idx) => {
            return (
              <li
                key={idx}
                onClick={() => {
                  setSorting(item.name)
                  setCatecategories(idx)
                  hideList()
                }}
                className={`portfolio__tag ${
                  categories === idx ? 'active' : ''
                }`}
              >
                {item.name}
              </li>
            )
          })}
        </ul>

        <div className="portfolio__content content">
          <ul ref={contentList} className="content__list" data-open="false">
            {collection.map((item, idx) => {
              return (
                <li key={idx} className="content__item">
                  <img
                    className="content__item-img"
                    src={item.sourse}
                    alt="Фото проекта"
                  />
                </li>
              )
            })}
          </ul>

          <div
            ref={circleButton}
            onClick={showList}
            className="content__circle-button"
          >
            <div className="content__circle-text">
              <p ref={contentButtonText}>- Показать больше - Показать больше</p>
            </div>
          </div>
        </div>
      </div>

      <div ref={shadowWrap} className="shadow"></div>
    </section>
  )
}

export default Portfolio
