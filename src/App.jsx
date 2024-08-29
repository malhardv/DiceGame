import React, { useState } from 'react'
import './App.css'
import styled from "styled-components"
import StartGame from './Components/StartGame'
import GamePlay from './Components/GamePlay/GamePlay'

function App() {

  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGame = () => {
    setIsGameStarted((prev) => !prev)
  }

  return (
    <div>
      {isGameStarted ? <GamePlay></GamePlay> : <StartGame
      toggle = {toggleGame}
      ></StartGame>}
    </div>
  )
}

export default App

const MainContainer = styled.div`
  
`