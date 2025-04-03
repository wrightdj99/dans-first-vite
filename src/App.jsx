import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className='card-header'>
        <h1>Welcome to Dan Wright's first ever deployed site!</h1>
      </div>
      <div className='card-body'>
        <button onClick={() => setCount(Math.floor(Math.random() * 4))}>
          Click To Change Image {count}
        </button>
      </div>
    </div>
  )
}

export default App
