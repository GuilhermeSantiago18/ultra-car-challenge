import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      Hello world
      <button onClick={() => console.log(count +=1)}>BTN</button>
    </div>
  )
}

export default App
