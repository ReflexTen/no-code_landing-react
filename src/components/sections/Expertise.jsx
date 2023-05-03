import teamImage from './../../images/expertise/expertise-image.png'
import expertiseList from '../helpers/ExpertiseList'
import Fade from 'react-reveal/Fade'

const Expertise = () => {
  const properties = {
    duration: 1000,
    distance: '80px',
    delay: 400,
  }

  return (
    <section className="expertise section" id="expertise">
      <Fade left {...properties}>
        <div className="expertise__img-wrapper">
          <img
            className="expertise__img"
            src={teamImage}
            alt="изображение команды в работе"
          />
        </div>
      </Fade>

      <div className="container">
        <Fade top {...properties}>
          <h2 className="expertise__subtitle subtitle">Наша экспертиза</h2>
        </Fade>
        <Fade right {...properties}>
          <div className="expertise__box">
            <ul className="expertise__list">
              {expertiseList.map((item, idx) => {
                return (
                  <li key={idx} className="expertise__item">
                    <div className="expertise__item-title">{item.title}</div>
                    <div className="expertise__item-text">{item.text}</div>
                  </li>
                )
              })}
            </ul>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default Expertise
