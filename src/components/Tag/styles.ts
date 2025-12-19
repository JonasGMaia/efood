import styled from 'styled-components'
import { cores } from '../../styles'
import { TagProps } from './index'
import { Link } from 'react-router-dom'

export const TagContainer = styled.div<TagProps>`
  background-color: ${cores.rosa1};
  color: ${cores.rosa2};
  font-style: Bold;
  font-size: 12px
  text-align: center;
  text-decoration: none;
  height: 24px;
  width: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const TagLink = styled(Link)<TagProps>`
  background-color: ${cores.rosa1};
  color: ${cores.rosa2};
  font-style: Bold;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  height: 24px;
  width: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
`
