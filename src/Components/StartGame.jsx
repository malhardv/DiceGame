import React from 'react'
import styled from 'styled-components'
import { Button } from '../Styled/Button'

const StartGame = ({toggle}) => {
  
  return (
    <Container>
        <div>
            <img src="src\assets\Images\dices.png" alt="dices image" />
        </div>
        <div className='header-content'>
          <h1>DICE GAME</h1>
          <Button
          onClick={toggle}
          >PLAY GAME</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    display: flex;
    max-width: 1182px;
    margin: 0 auto;
    margin-top: 80px;

    h1 {
      font-size: 96px;
      font-weight: 700;
    }

    .header-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: end;
    }
`



// padding: 10px 18px;
// width: 220px;
// height: 44px;

// background: #000000;
// border-radius: 5px;
