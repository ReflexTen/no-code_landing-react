const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="about__subtitle subtitle">
          Почему вам стоит выбрать нас?
        </h2>

        <ul className="about__inner">
          <li className="about__item">
            <h3 className="about__item-title">Многопрофильная команда</h3>
            <p className="about__item-text">
              Мы не просто создаем приложение, мы делаем всё, чтобы вы достигли
              своих целей. Для этого мы привлекаем к проекту нужных
              специалистов: продакт-менеджера, проджекта, дизайнера-аналитика,
              тестировщика, маркетолога.
            </p>
          </li>
          <li className="about__item">
            <h3 className="about__item-title">Экономим ваши деньги и время</h3>
            <p className="about__item-text">
              Мы используем технологии, которые сокращают время разработки в 3-5
              раз в сравнении с классическим подходом, а значит и экономим
              бюджет наших клиентов.
            </p>
          </li>
          <li className="about__item">
            <h3 className="about__item-title">Прозрачность и открытость</h3>
            <p className="about__item-text">
              Наши клиенты знают специалистов, с которыми работают, могут
              контролировать каждый этап работ и при желании активно включаться
              в процесс разработки.
            </p>
          </li>
          <li className="about__item">
            <h3 className="about__item-title">Тестирование проекта</h3>
            <p className="about__item-text">
              Чтобы приложение работало стабильно и без сбоев, в нашей команде
              есть тестировщики, которые проводят тестирование на каждом этапе
              разработки.
            </p>
          </li>
          <li className="about__item">
            <h3 className="about__item-title">Гарантия на разработку</h3>
            <p className="about__item-text">
              После сдачи проекта мы даём еще 6 месяцев на проверку его
              работоспособности. В случае обнаружения ошибки, вам не придётся
              платить за её исправление и доработки - мы берём эту
              ответственность на себя.
            </p>
          </li>
          <li className="about__item">
            <h3 className="about__item-title">Начинаем с идеи</h3>
            <p className="about__item-text">
              Если вы ещё не описали техническое задание или у вас нет дизайна,
              мы включим эти этапы в работу и поможем вам развить идею с нуля.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
