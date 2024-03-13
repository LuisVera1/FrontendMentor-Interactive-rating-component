
import { useState } from 'react';
import { Rating } from './components/rating/Rating'
import { Thanks } from './components/thanks/Thanks'
import './App.css'

const initialState = {
  rating: false,
  value: null,
}

function App() {
  const [state, setState] = useState(initialState);
  const { rating, value } = state;

  const onRating = ({ target }) => {
    setState({ ...state, value: target.value })
  }

  const onSubmit = () => {
    //if value is not selected
    if (value === null) {
      alert('Please choose a value first')
      return;
    }

    //re-render when value is selected
    setState({ ...state, rating: true })
  }

  return (
    <main>

      <section className="card">

        {/* rating */}
        {!rating &&
          <Rating onRating={onRating} onSubmit={onSubmit} value={value} />
        }

        {/* thanks */}
        {rating &&
          <Thanks value={value} />
        }

      </section>

    </main>
  )
}

export default App
