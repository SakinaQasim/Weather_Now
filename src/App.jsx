import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './components/Sunny'
import Sunny from './components/Sunny'

function App() {
  const [count, setCount] = useState(0)

  return (
    < div className='flex justify-center items-center'  id='bg'>
<Sunny/>
    </div>
  )
}

export default App
