import { useState } from 'react'
import './App.css'
import FunctionalUpdate from './screens/functionalUpdate/FunctionalUpdate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FunctionalUpdate />
    </>
  )
}

export default App
