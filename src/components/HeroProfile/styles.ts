import styled from 'styled-components'
import { cores } from '../../styles'

export const OrganizerProfile = styled.div`
  max-height: 384px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  font-size: 14px;
`
export const TitleProfile = styled.h1`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 900;
  padding-bottom: 10px;
`
export const CategProfile = styled.p`
  color: ${cores.branco};
  font-size: 32px;
  font-style: thin;
  font-weight: 100;
  padding-top: 10px;
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
`
