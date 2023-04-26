import { useRef, useLayoutEffect } from 'react'
import telegramIcon from './../../images/icons/telegram.png'

const TeamCard = () => {
  const teamCartImgText = useRef()

  useLayoutEffect(() => {
    const teamCartImgTextValue = teamCartImgText.current
    teamCartImgTextValue.innerHTML = teamCartImgTextValue.innerText
      .split('')
      .map(
        (letter, i) =>
          `<span style="transform:rotate(${i * 11}deg")>${letter}</span>`
      )
      .join('')
  }, [])

  return (
    <div className="team-card">
      <div className="team-card__circle">
        <div className="team-card__circle-img-box"></div>
        <div className="team-card__circle-text">
          <p ref={teamCartImgText}>No-code No-code No-code No-code</p>
        </div>
      </div>
      <h4 className="team-card__title">Мария</h4>
      <h5 className="team-card__subtitle">Co-Founder, CEO, продакт-менеджер</h5>
      <div className="team-card__text">
        Защищает интересы клиентов и переводит язык программистов на язык
        бизнеса
      </div>
      <a className="team-card__link" href="#">
        <img className="team-card__link-icon" src={telegramIcon} alt="" />
      </a>
    </div>
  )
}

export default TeamCard