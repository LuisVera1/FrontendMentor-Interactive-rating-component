import './styles.css'

export const Thanks = ({ value = 5 }) => {
  return (
    <>

      <figure>
        <img className='thanks-img' src="public/illustration-thank-you.svg" alt="thank you" />
      </figure>

      <p className='thanks__rating'>{`You selected ${value} out of 5`}</p>

      <h1 className='thanks__title'>Thank you!</h1>

      <p className='thanks__message'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>

    </>
  )
}