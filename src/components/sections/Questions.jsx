import { useState } from 'react'
import QuestionBox from '../questions-components/QuestionBox'
import questionsDate from '../../components/helpers/QuestionsDate.js'

const Questions = () => {
  const [activeQuestion, setActiveQuestion] = useState('')

  return (
    <section className="questions section" id="questions">
      <div className="container">
        <h2 className="questions__subtitle subtitle">FAQ</h2>
        <ul className="questions__list">
          {questionsDate.map(question => {
            return (
              <QuestionBox
                key={question.idx}
                title={question.title}
                text={question.text}
                idx={question.idx}
                activeQuestion={activeQuestion}
                setActiveQuestion={setActiveQuestion}
              />
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Questions
