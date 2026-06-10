import { useState } from 'react'

import './App.css'

const App = () => {
  const [count, setCount] = useState(0)
  
  return (
    
    <div className="App">
      <header className="App-header"> Schedule Builder
        <p>
          Count: {count}
        </p>
        <button onClick={() => setCount(count + 1)}>
          Add Class
        </button>
      </header>
    </div>
  )
}

export default App
