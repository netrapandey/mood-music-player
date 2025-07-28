import { useState } from 'react'

import './App.css'
import { FaceDetection } from 'face-api.js'
import FacialExpression from './components/FacialExpression'
import MoodSongs from './components/MoodSongs'

function App() {
  
  return (
    <>
     <FacialExpression/>
     <MoodSongs/>
    </>
  )
}

export default App
