import styled from 'styled-components'
import { cores } from '../../styles'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  background-color: ${cores.rosa1};
  color: ${cores.rosa2};
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 24px;

  input {
    background-color: ${cores.rosa2};
    color: ${cores.cinza};
    border: none;
    width: 100%;
    outline: none;
    padding: 8px;
    font-size: 14px;
    font-weight: bold;
  }

  h2 {
    font-size: 16px;
    margin-bottom: 8px;
  }
`
export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  max-width: 100%;
`
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  button {
    width: 100%;
    border: none;

    &:hover {
      background-color: ${cores.rosa3};
    }
  }
`
