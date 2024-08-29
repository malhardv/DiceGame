import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({ setError, error, selectedNumber, setSelectedNumber }) => {

    const arr = [1, 2, 3, 4, 5, 6];

    const numberSelectorHandler = (value) => {
        setSelectedNumber(value);
        console.log(value);
        setError("");
    }

    return (
        <SelectNumber>
            <p className='error'>{error}</p>
            <div className='number-select'>
                {arr.map((value, i) => (
                    <NumberBox
                        key={i}
                        onClick={() => numberSelectorHandler(value)}
                        isSelected={value == selectedNumber}
                    >{value}</NumberBox>
                ))}
            </div>
            <p>Select Number</p>
        </SelectNumber>
    )
}

export default NumberSelector

const SelectNumber = styled.div`

    display: flex;
    flex-direction: column;
    align-items: end;
    .number-select {
        display: flex;
        gap: 24px;
    }

    p {
        font-size: 24px;
        font-weight: 700;
    }

    .error {
        color: red;
    }
`

const NumberBox = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    font-size: 24px;
    font-weight: 700;
    display: grid;
    place-items: center;
    background-color: ${(props) => props.isSelected ? "black" : "white"};
    color: ${(props) => props.isSelected ? "white" : "black"};
`