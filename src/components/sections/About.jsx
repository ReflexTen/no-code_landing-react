import Fade from 'react-reveal/Fade'
import aboutData from '../helpers/AboutData'

const About = () => {
  const properties = {
    duration: 1000,
    distance: '80px',
    delay: 400,
  }

  return (
    <section className="about section" id="about">
      <div className="container">
        <Fade top {...properties}>
          <h2 className="about__subtitle subtitle">
            Почему вам стоит выбрать нас?
          </h2>
        </Fade>

        <Fade bottom {...properties}>
          <ul className="about__inner">
            {aboutData.map((item, idx) => {
              return (
                <li key={idx} className="about__item">
                  <h3 className="about__item-title">{item.title}</h3>
                  <p className="about__item-text">{item.text}</p>
                </li>
              )
            })}
          </ul>
        </Fade>
      </div>
    </section>
  )
}

export default About
