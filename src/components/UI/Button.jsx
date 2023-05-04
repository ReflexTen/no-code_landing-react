import React from 'react'

const Button = ({ text }) => {
  return (
    <div className=" request-button">
      <a className="request-button__link" href="#contact">
        {text}
      </a>
    </div>
  )
}

export default Button
