// import { useState } from 'react'
import './App.css'
import Card from './components/card'

let myobj = {
  username:"histesh",
  age:21,
}

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black p-2'>Tailwind Class</h1>
      <Card userName="Gourav" />
      <Card />
    </>
  )
}

export default App
