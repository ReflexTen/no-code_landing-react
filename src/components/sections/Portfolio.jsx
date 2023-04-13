import { useState, useEffect } from 'react'
import works from './../helpers/Works.js'

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

  useEffect(() => {
    if (sorting === 'Все работы') {
      setCollection([...works])
    } else {
      setCollection([...works.filter(item => item.tag === sorting)])
    }
  }, [sorting])

  return (
    <section className="portfolio section">
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
          <ul className="content__list ">
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
        </div>
      </div>
    </section>
  )
}

export default Portfolio
