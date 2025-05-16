import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MultiStep from './page/Multi_Step.tsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
     
    <MultiStep />
      
    </>
  )
}

export default App
