import { useState } from 'react'
import Fade from 'react-reveal/Fade'

import QuestionBox from '../questions-components/QuestionBox'
import questionsData from '../../components/helpers/QuestionsData.js'

const Questions = () => {
  const [questionNum, setQuestionNum] = useState('')
  const [heightText, setHeightText] = useState(0)

  const setQuestionNumHandeler = (num, heightBox) => {
    if (questionNum === num) {
      setQuestionNum('')
      setHeightText(0)
    } else {
      setQuestionNum(num)
      setHeightText(heightBox)
    }
  }

  const properties = {
    duration: 1000,
    distance: '80px',
    delay: 400,
  }

  return (
    <section className="questions section" id="questions">
      <div className="container">
        <Fade top {...properties}>
          <h2 className="questions__subtitle subtitle">FAQ</h2>
        </Fade>

        <Fade bottom {...properties}>
          <ul className="questions__list">
            {questionsData.map(question => {
              return (
                <QuestionBox
                  key={question.idx}
                  title={question.title}
                  text={question.text}
                  idx={question.idx}
                  questionNum={questionNum}
                  setQuestionNumHandeler={setQuestionNumHandeler}
                  heightText={heightText}
                />
              )
            })}
          </ul>
        </Fade>
      </div>
    </section>
  )
}

export default Questions
