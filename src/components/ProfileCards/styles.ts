import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const PCArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${cores.rosa1};
  width: 320px;
  height: 100%;
  cursor: pointer;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`
export const PCContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  height: 100%;

  img {
    width: 100%;
  }
`
export const PCContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: ${cores.rosa2};
  height: 100%;

  p {
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin: 16px 0 8px;
  }

  h2 {
    width: 100%;
    font-size: 16px;
    font-weight: 900;
    line-height: 100%;
    margin-top: 8px;
  }
`
