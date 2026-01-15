import styled from 'styled-components'
import { cores } from '../../styles'
import { breakpoints } from '../../styles'

export const HeroHeader = styled.header`
  background-size: cover;
  background-position: center;
  color: ${cores.rosa1};
  width: 100%;
  min-height: 374px;

  a {
    color: ${cores.rosa1};
  }
`
export const Organizer = styled.div`
  max-height: 384px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  gap: 140px;

  @media (max-width: ${breakpoints.tablet}) {
    max-height: 100%;
  }
`

export const ChamadaHero = styled.h1`
  font-size: 36px;
  width: 539px;
  @media (max-width: ${breakpoints.desktop}) {
    width: 80%;
  }
`
export const Logo = styled.img`
  width: 125px;
  height: 57px;
  margin-top: 20px;
`
