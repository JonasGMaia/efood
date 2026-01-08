import styled from 'styled-components'
import { cores } from '../../styles'

export const Disclamer = styled.p`
  font-size: 10px;
  color: ${cores.rosa1};
  width: 480px;
  text-align: center;
  position: absolute;
  bottom: 20px;
`
export const Copyrights = styled.p`
  font-size: 10px;
  color: ${cores.rosa1};
  width: 480px;
  text-align: left;
  bottom: 20px;
`
export const FooterContainer = styled.footer`
  width: 100%;
  min-height: 300px;
  background-size: cover;
  background-position: center;
`
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  position: relative;
  height: 300px;
`
