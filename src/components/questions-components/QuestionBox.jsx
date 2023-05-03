import { useRef } from 'react'
import arrowRightQuestions from './../../images/icons/arrow-right-questions.png'

const QuestionBox = ({
  title,
  text,
  idx,
  questionNum,
  setQuestionNumHandeler,
  heightText,
}) => {
  const questionsParent = useRef()

  const callHeight = () => {
    const questionsParentValue = questionsParent.current
    const heightTextValue = questionsParentValue.children[1].scrollHeight
    setQuestionNumHandeler(idx, heightTextValue)
  }

  return (
    <li ref={questionsParent} className="question">
      <div onClick={callHeight} className="question__header">
        <h3 className="question__title">{title}</h3>
        <button
          className={`question__button ${
            questionNum === idx ? 'question__button--active' : ''
          }`}
        >
          <img
            className="question__button-img"
            src={arrowRightQuestions}
            alt=""
          />
        </button>
      </div>

      <div
        style={{ maxHeight: `${questionNum === idx ? heightText : 0}px` }}
        className="question__text"
        data-open="false"
      >
        {text}
      </div>
    </li>
  )
}

export default QuestionBox
