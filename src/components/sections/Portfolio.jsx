import { useState, useLayoutEffect, useEffect, useRef } from 'react'
import Fade from 'react-reveal/Fade'
import works from '../../components/helpers/Works.js'

const navigation = [
  { name: 'Все работы' },
  { name: 'PWA' },
  { name: 'Веб-сервис' },
  { name: 'Дизайн' },
  { name: 'Веб-сайты' },
  { name: 'Нативное приложение' },
]

const Portfolio = ({
  heightPortfolioList,
  activePortfolioList,
  statePortfolioList,
}) => {
  const [categories, setCatecategories] = useState(0)
  const [sorting, setSorting] = useState('Все работы')
  const [collection, setCollection] = useState([])

  const contentList = useRef()

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
  }, [statePortfolioList])

  useEffect(() => {
    if (sorting === 'Все работы') {
      setCollection([...works])
    } else {
      setCollection([...works.filter(item => item.tag === sorting)])
    }
  }, [sorting])

  const showList = test => {
    const contentListValue = contentList.current
    const contentListValueHeight = contentListValue.scrollHeight

    if (test === 'tag') {
      activePortfolioList(true, contentListValueHeight)
    } else {
      activePortfolioList(false, contentListValueHeight)
    }
  }

  const properties = {
    duration: 1000,
    distance: '80px',
    delay: 400,
  }

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <Fade top {...properties}>
          <h2 className="portfolio__subtitle subtitle">Портфолио</h2>
        </Fade>

        <ul className="portfolio__tags">
          {navigation.map((item, idx) => {
            return (
              <li
                key={idx}
                onClick={() => {
                  setSorting(item.name)
                  setCatecategories(idx)
                  showList('tag')
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
          <ul
            ref={contentList}
            className="content__list"
            style={{
              maxHeight: `${statePortfolioList ? heightPortfolioList : 400}px`,
            }}
          >
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
            onClick={showList}
            className={`content__circle-button ${
              statePortfolioList ? 'content__circle-button--active' : ''
            }`}
          >
            <div className="content__circle-text">
              <p ref={contentButtonText}>
                {statePortfolioList
                  ? '- Скрыть - Скрыть - Скрыть - Скрыть'
                  : '- Показать больше - Показать больше'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`shadow ${statePortfolioList ? 'shadow--active' : ''}`}
      ></div>
    </section>
  )
}

export default Portfolio
