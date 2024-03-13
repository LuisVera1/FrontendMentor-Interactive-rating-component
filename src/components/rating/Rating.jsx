import './styles.css'

export const Rating = ({ onRating, onSubmit, value = 0 }) => {
  return (
    <>
      <div className="rating-icon">
        <img className='rating-icon__star' src="icon-star.svg" alt="icon-star" />
      </div>

      <div className="rating-text">
        <h1 className='rating-text__title'>How did we do?</h1>
        <p className='rating-text__message'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      </div>

      <div className="rating-rating">
        <button className={value == 1 ? 'rating-btn--selected' : 'rating-btn'} value="1" onClick={(event) => onRating(event)}>1</button>
        <button className={value == 2 ? 'rating-btn--selected' : 'rating-btn'} value="2" onClick={(event) => onRating(event)}>2</button>
        <button className={value == 3 ? 'rating-btn--selected' : 'rating-btn'} value="3" onClick={(event) => onRating(event)}>3</button>
        <button className={value == 4 ? 'rating-btn--selected' : 'rating-btn'} value="4" onClick={(event) => onRating(event)}>4</button>
        <button className={value == 5 ? 'rating-btn--selected' : 'rating-btn'} value="5" onClick={(event) => onRating(event)}>5</button>
      </div>

      <button className='rating__submit' onClick={onSubmit}>SUBMIT</button>
    </>
  )
}