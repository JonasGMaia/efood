import Tag from '../Tag'
import { TagContainer } from '../Tag/styles'
import Ratting from '../Ratting'
import {
  CardsContainer,
  CardSubContainer,
  Name,
  Description,
  TagRow
} from './styles'
// Link removed: Tag will receive the `to` prop directly
import type { Card } from '../../pages/Home'
import { Link } from 'react-router-dom'

export type SubCardProps = {
  kind?: 'image' | 'text'
}

const HomeCard = ({
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa,
  id
}: Card) => {
  return (
    <CardsContainer>
      <CardSubContainer
        kind="image"
        style={{ backgroundImage: `url(${capa})`, minHeight: '217px' }}
      >
        <TagRow>
          <Tag destacado={destacado} tipo={tipo} />
        </TagRow>
      </CardSubContainer>
      <CardSubContainer kind="text">
        <Name>{titulo}</Name>
        <Ratting avaliacao={avaliacao ?? 0} />
      </CardSubContainer>
      <CardSubContainer kind="text">
        <Description>{descricao}</Description>
      </CardSubContainer>
      <CardSubContainer kind="text">
        {id ? (
          <Link to={`/profile/${id}`}>
            <TagContainer>Saiba mais</TagContainer>
          </Link>
        ) : (
          <TagContainer>Saiba mais</TagContainer>
        )}
      </CardSubContainer>
    </CardsContainer>
  )
}

export default HomeCard
