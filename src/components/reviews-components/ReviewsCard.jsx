import React from 'react'
import client from './../../images/reviews/client-1.jpg'

const ReviewsCard = () => {
  return (
    <div>
      <div className="reviews-card">
        <div className="reviews-card__img-box">
          <img className="reviews-card__image" src={client} alt="" />
        </div>
        <h4 className="reviews-card__title">Rowhan Marlin</h4>
        <p className="reviews-card__text">
          Learning is a Global training provider based across the UK that
          specialises in accrediated and bespoke training courses.
        </p>
      </div>
    </div>
  )
}

export default ReviewsCard
