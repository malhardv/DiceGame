import React, { useState } from 'react'
import styled from 'styled-components'
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';
import { Button, CustomButton } from '../../Styled/Button';
import Rules from '../Rules';


const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false)

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);

    }

    const handleRollDice = () => {

        if (!selectedNumber) {
            setError("Please Select a Number!");
            return;
        }

        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice(randomNumber);
        console.log(randomNumber);

        if (randomNumber == selectedNumber) {
            setScore((prev) => prev + 1);
        } else {
            setScore((prev) => prev - 1)
        }

        setSelectedNumber(undefined);

    }

    return (
        <MainContainer>
            <div className='header-content'>
                <TotalScore
                    score={score}
                ></TotalScore>
                <NumberSelector
                    error={error}
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber}
                ></NumberSelector>
            </div>
            <div className="dice-content">
                <RollDice
                    handleRoll={handleRollDice}
                    currentDice={currentDice}
                ></RollDice>
            </div>
            <div className='buttons'>
                <Button>Reset Score</Button>
                <CustomButton
                onClick={() => setShowRules((prev) => !prev)}
                >{showRules ? "Hide" : "Show"} Rules</CustomButton>
            </div>
            {showRules && <Rules></Rules>}
        </MainContainer>
    )
}

export default GamePlay

const MainContainer = styled.main`
    .header-content {
        display: flex;
        justify-content: space-around;
        margin-top: 40px;
        align-items: center;
    }

    .buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
        gap: 10px;
    }
`