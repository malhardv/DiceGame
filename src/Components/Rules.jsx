import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RuleBook>
      <h2>
        How to play?
      </h2>
      <p>
        Select any number
      </p>
      <p>
        After click on  dice  if selected number is equal to dice number you will get same point as dice.
      </p>
      <p>
        If you get wrong guess then  2 point will be dedcuted.
      </p>
    </RuleBook>
  )
}

export default Rules

const RuleBook = styled.div`
    background-color: #FBF1F1;
    max-width: 794px;
    margin: 0 auto;
    padding: 20px;
    margin-top: 40px;
    border-radius: 15px;
`