import { TagContainer } from './styles'

export type Props = {
  destacado?: boolean
  tipo?: string
}

const Tag = ({ destacado, tipo }: Props) => {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {destacado && <TagContainer>Destaque da semana</TagContainer>}
      <TagContainer>{tipo}</TagContainer>
    </div>
  )
}
export default Tag
