import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
`
export const Sidebar = styled.aside`
  background-color: ${cores.rosa1};
  z-index: 1;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;
  overflow-y: auto;
  export const Sidebar = styled.aside
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
  }
`
export const CartItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 8px;
  background-color: ${cores.rosa2};
  color: ${cores.rosa1};
  position: relative;
  margin-bottom: 16px;
`
export const LixeiraIcone = styled.img`
  max-width: 16px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`
export const CartImage = styled.div`
  max-heifght: 100%;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`
export const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  h3 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
  }
`
export const SidebarDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.rosa2};
`
export const SideBarButton = styled.button`
  border: none;
  width: 100%;

  .buyButton {
    cursor: pointer;

    &:hover {
      background-color: ${cores.rosa3};
    }
  }
`
