import { useState } from 'react'
import QuestionBox from '../questions-components/QuestionBox'
import questionsDate from '../../components/helpers/QuestionsDate.js'
import QuestionWrapper from '../questions-components/QuestionWrapper'

const Questions = () => {
  return (
    <section className="questions section" id="questions">
      <div className="container">
        <h2 className="questions__subtitle subtitle">FAQ</h2>
        <ul className="questions__list">
          <QuestionWrapper>
            {questionsDate.map(question => {
              return (
                <QuestionBox
                  key={question.idx}
                  title={question.title}
                  text={question.text}
                />
              )
            })}
          </QuestionWrapper>
        </ul>
      </div>
    </section>
  )
}

export default Questions
