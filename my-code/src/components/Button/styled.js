// @ flow
import styled from "styled-components"

const RegularButton = styled.button`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  background: none;
  border: 1px solid ${p => p.theme.color.grey.grey};
  border-radius: 4px;
  color: ${p => p.theme.color.grey.lightgrey};
  letter-spacing: 0.17;
  padding: 12px;
  outline: none;

  transition: ${p => p.theme.transition};

  &:hover {
    border: 1px solid ${p => p.theme.color.main.red};
    color: ${p => p.theme.color.grey.white};
    outline: none;
  }

  &:active {
    background-color: ${p => p.theme.color.main.red};
    outline: none;
  }
`
export default RegularButton
