import React, { useState } from 'react'
import styled from 'styled-components'

const RollDice = ({currentDice, handleRoll}) => {

    return (
        <DiceContainer>
            <div className='dice' onClick={handleRoll}>
                <img
                    src={`src/assets/Images/Dice/dice_${currentDice}.png`}
                    alt="dice-image" />
            </div>
            <p>Click On Dice To Roll</p>
        </DiceContainer>
    )
}

export default RollDice;

const DiceContainer = styled.div`
    
    display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;

        .dice {
            cursor: pointer;
        }

        p {
            font-size: 24px;
            font-weight: 500;
        }

`