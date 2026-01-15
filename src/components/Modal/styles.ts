import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Overlay = styled.div`
  background-color: ${cores.darkLayer2};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalContainer = styled.div`
  display: flex;
  gap: 20px;
  background-color: ${cores.rosa1};
  color: ${cores.rosa2};
  height: 344px;
  align-items: line-start;
  position: relative;
  padding: 30px;

  @media (max-width: ${breakpoints.desktop}) {
    height: fit-content;
    padding: 20px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding: 20px;
  }

  img {
    width: 280px;
    object-fit: cover;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
      margin-top: 16px;
    }
  }
`
export const ModalSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  line-height: 22px;
  font-size: 14px;

  h2 {
    font-size: 18px;
  }
  button {
    max-width: fit-content;
  }
`
export const Close = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  max-width: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    top: -4px;
  }
`
