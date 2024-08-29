import React from 'react'
import styled from 'styled-components'

const TotalScore = (props) => {
    return (
        <ScoreContainer>
                <h1>{props.score}</h1>
                <p>Total Score</p>
        </ScoreContainer>
    )
}

export default TotalScore

const ScoreContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    line-height: 70px;

    h1 {
        font-size: 100px;
        font-weight: 500;
    }

    p {
        font-size: 24px;
        font-weight: 500;
    }
`

