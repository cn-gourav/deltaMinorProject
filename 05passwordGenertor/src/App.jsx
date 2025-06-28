import { useCallback, useState } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTVWXYZabcdefghijklmnopqrstvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+{}|:><?,./;'[]"

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setCharAllowed])

  return (
    <div className='w-screen max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1>Password Genertor</h1>
      test
      <input
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
      />

      <button className='outline-none bg-blue-700 
        text-white px-3 py-0.5 shrink-0'>Copy</button>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'></div>
        <input type="range" min={6} max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setlength(e.target.value)}
        />

        <label htmlFor="">{length}</label>
      </div>

      <div className='item'></div>
    </div>
  )
}

export default App
