import teamImage from './../../images/expertise/expertise-image.png'

const Expertise = () => {
  return (
    <section className="expertise section" id="expertise">
      <div className="expertise__img-wrapper">
        <img
          className="expertise__img"
          src={teamImage}
          alt="изображение команды в работе"
        />
      </div>
      <div className="container">
        <h2 className="expertise__subtitle subtitle">Наша экспертиза</h2>
        <div className="expertise__box">
          <ul className="expertise__list">
            <li className="expertise__item">
              <div className="expertise__item-title">
                Быстрая разработка и запуск приложения
              </div>
              <div className="expertise__item-text">
                Экономим рабочие часы, ускоряем процессы в компании, сокращаем
                затраты бизнеса.
              </div>
            </li>
            <li className="expertise__item">
              <div className="expertise__item-title">
                Автоматизация бизнес-процессов
              </div>
              <div className="expertise__item-text">
                Экономим рабочие часы, ускоряем процессы в компании, сокращаем
                затраты бизнеса.
              </div>
            </li>
            <li className="expertise__item">
              <div className="expertise__item-title">
                Проверка гипотез и запуск MVP
              </div>
              <div className="expertise__item-text">
                Помогаем убедиться в прибыльности идеи с минимальными бюджетами
                до вложения крупных инвестиций
              </div>
            </li>
            <li className="expertise__item">
              <div className="expertise__item-title">
                Повышение прибыли бизнеса и монетизация
              </div>
              <div className="expertise__item-text">
                Создаём каналы продаж для привлечения новых клиентов, удержания
                старых и увеличения повторных покупок.
              </div>
            </li>
            <li className="expertise__item">
              <div className="expertise__item-title">
                Поддержка Start-Up и новых проектов
              </div>
              <div className="expertise__item-text">
                Составляем вместе со стартапом техническое задание, собираем
                команду под проект и помогаем на всех этапах разработки.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Expertise
