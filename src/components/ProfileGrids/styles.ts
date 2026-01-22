import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ProfileGrids = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 24px;
  column-gap: 24px;
  margin: 32px 0;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
