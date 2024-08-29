import styled from "styled-components";

export const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  height: 44px;
  width: 220px;
  color: black;
  background-color: white;
  border: 1px solid black;
  padding: 10px 18px;
  border-radius: 15px;
  transition: 0.4s background ease-out;
  &:hover {
    background-color: black;
    color: white;
    transition: 0.3s background ease-in;
  }
`

export const CustomButton = styled(Button)`
  color: white;
  background-color: blackg;
  &:hover {
    background-color: white;
    color: black;
    transition: 0.3s background ease-in;
  }
`