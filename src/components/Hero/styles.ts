import styled from 'styled-components'
import { cores } from '../../styles'

export const HeroHeader = styled.header`
  background-size: cover;
  background-position: center;
  color: ${cores.rosa1};
  width: 100%;
  height: 384px;
`
export const Organizer = styled.div`
  max-height: 384px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  gap: 140px;
`

export const ChamadaHero = styled.h1`
  font-size: 36px;
  width: 539px;
`
export const Logo = styled.img`
  width: 125px;
  height: 57px;
  margin-top: 20px;
`
