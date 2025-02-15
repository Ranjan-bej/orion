import { useContext } from 'react'

import picture from './assets/logo.jpg'
import speakLogo from './assets/speak.gif'

import './App.css'
import { dataContext } from './context/UserContext'

function App() {

  let { recognition } = useContext(dataContext)
  return (
    <>
      <img src={picture} alt="orion" />

      <button onClick={() => { recognition.start() }}><img src={speakLogo} alt="" className='speakLogo' /></button>


    </>
  )
}

export default App
