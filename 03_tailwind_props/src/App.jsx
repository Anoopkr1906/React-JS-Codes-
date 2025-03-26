import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 w-125 text-black rounded-xl p-4' >Tailwind Test</h1>
      <Card username='Anoop Burnwal' Qualification='JEE'/>
      <Card username='Anooz Burnwal' Qualification='NDA'/>
    </>
  )
}

export default App
