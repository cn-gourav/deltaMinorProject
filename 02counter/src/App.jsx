
import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setcounter] = useState(0)


  const addValue = () => {
    // counter = counter + 1;
    if (counter < 20) {
      setcounter(counter + 1)
    }
  }


  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1
      setcounter(counter)
    }
  }

  return (
    <>
      <h1>Counter Value</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br /><br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
