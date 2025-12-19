import styled from 'styled-components'
import { cores } from '../../styles'

export const RattingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 55px;
  height: 21px;
  margin-right: 10px;

  h2 {
    font-style: Bold;
    font-size: 18px;
    text-align: center;
    color: ${cores.rosa1};
  }
`
