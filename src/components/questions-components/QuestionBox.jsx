import React from 'react'
import arrowRightQuestions from './../../images/icons/arrow-right-questions.png'
import { useRef } from 'react'

const QuestionBox = ({
  title,
  text,
  idx,
  activeQuestion,
  setActiveQuestion,
}) => {
  const questionsParent = useRef()
  const buttonRef = useRef()

  const showAnswer = () => {
    const questionsParentValue = questionsParent.current
    // console.log(questionsParentValue.children[0].children[1])

    if (questionsParentValue.dataset.open !== 'true') {
      questionsParentValue.dataset.open = 'true'
      questionsParentValue.children[1].style.maxHeight = `${questionsParentValue.children[1].scrollHeight}px`

      buttonRef.current.classList.add('question__button--active')
    } else {
      questionsParentValue.dataset.open = 'false'
      questionsParentValue.children[1].style.maxHeight = ``
      buttonRef.current.classList.remove('question__button--active')
    }
  }

  return (
    <li ref={questionsParent} className="question" data-open="false">
      <div onClick={showAnswer} className="question__header">
        <h3 className="question__title">{title}</h3>
        <button ref={buttonRef} className="question__button">
          <img
            className="question__button-img"
            src={arrowRightQuestions}
            alt=""
          />
        </button>
      </div>

      <div className="question__text" data-open="false">
        {text}
      </div>

      {/* {activeQuestion === idx && (
        <div className="question__text" data-open="false">
          {text}
        </div>
      )} */}
    </li>
  )
}

export default QuestionBox
