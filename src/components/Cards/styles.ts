import styled from 'styled-components'
import { cores } from '../../styles'
import { SubCardProps } from '.'

export const CardsContainer = styled.div`
background-color ${cores.branco};
width: 472px;
min- height: 398px;
display: flex;
flex-direction: column;
border: 1px solid ${cores.rosa1};
color: ${cores.rosa1};
position: relative;
`
export const CardSubContainer = styled.div<SubCardProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  background-size: cover;
  position: relative;
  max-width: 100%;
  padding: ${(props) => (props.kind === 'text' ? '10px' : '0')};
  background-color: ${(props) =>
    props.kind === 'text' ? cores.branco : 'transparent'};

  h2 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    width: 100%;
    font-size: 14px;
  }
`
