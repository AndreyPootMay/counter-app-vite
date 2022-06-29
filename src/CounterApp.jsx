import { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css'

function CounterApp({ value }) {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  }

  const handleSubstract = () => {
    setCounter(counter - 1);
  }

  const handleReset = () => {
    setCounter(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>My first app using vite and react js!</p>
        <p>
          count is: {counter}
        </p>
        <p className='btn-group'>
          <button className="btn btn-primary" onClick={handleAdd}> +1 </button>
          <button className="btn btn-secondary" onClick={handleReset}> Reset </button>
          <button className="btn btn-danger" onClick={handleSubstract}> -1 </button>
        </p>
      </header>
    </div>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
  value: 1
}

export default CounterApp
