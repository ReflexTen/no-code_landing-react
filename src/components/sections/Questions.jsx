import { useState } from 'react'
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

  return (
    <section className="questions section" id="questions">
      <div className="container">
        <h2 className="questions__subtitle subtitle">FAQ</h2>
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
      </div>
    </section>
  )
}

export default Questions
