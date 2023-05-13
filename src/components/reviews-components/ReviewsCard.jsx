const ReviewsCard = ({ img, name, review }) => {
  return (
    <div>
      <div className="reviews-card">
        <div className="reviews-card__img-box">
          <img className="reviews-card__image" src={img} alt="" />
        </div>
        <h4 className="reviews-card__title">{name}</h4>
        <div className="reviews-card__text">{review}</div>
      </div>
    </div>
  )
}

export default ReviewsCard
