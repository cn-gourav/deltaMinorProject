import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp() {
  return (
    <>
      <h1>Custom_App</h1>
    </>
  )
}

const anotherUser = 'Sourav'

// const ReactElement = {
//   type: "a",
//   props: {
//     href: 'http://google.com',
//     target: '_blank'
//   },
//   Children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="http://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  // <ReactElement />
  // anotherElement
  reactElement
  // < App /> 
)
