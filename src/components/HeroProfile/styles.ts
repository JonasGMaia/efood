import styled from 'styled-components'
import { cores } from '../../styles'
import { breakpoints } from '../../styles'

export const OrganizerProfile = styled.div`
  max-height: 384px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  font-size: 14px;

  @media (max-width: ${breakpoints.desktop}) {
    .restaurantes {
      width: 100%;
    }
    .restaurantesH2 {
      display: none;
    }
  }
`
export const TitleProfile = styled.h1`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 900;
  padding-bottom: 10px;
  z-index: 1;
`
export const CategProfile = styled.p`
  color: ${cores.branco};
  font-size: 32px;
  font-style: thin;
  font-weight: 100;
  padding-top: 10px;
  z-index: 1;
`
export const CategProfileBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 200px;
`
export const ProfileBanner = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::after {
    content: '';
    background-color: ${cores.darkLayer1};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
export const CartButton = styled.button`
  text-decoration: none;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 14px;
  color: ${cores.rosa1};
`
