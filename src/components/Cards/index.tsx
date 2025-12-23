import Tag from '../Tag'
import Ratting from '../Ratting'
import {
  CardsContainer,
  CardSubContainer,
  Name,
  Description,
  TagRow
} from './styles'
import imagem1 from '../../assets/images/imagem1.png'

export type CardDataProps = {
  title: string
  categories: string[]
  description: string
  image: string
  ratting: string
}

export type SubCardProps = {
  kind?: 'image' | 'text'
}

const Card = ({
  title,
  categories,
  description,
  image,
  ratting
}: CardDataProps) => (
  <CardsContainer>
    <CardSubContainer
      kind="image"
      style={{ backgroundImage: `url(${image})`, minHeight: '217px' }}
    >
      <TagRow>
        {categories.map((category) => (
          <Tag key={category} type="category">
            {category}
          </Tag>
        ))}
      </TagRow>
    </CardSubContainer>
    <CardSubContainer kind="text">
      <Name>{title}</Name>
      <Ratting>{ratting}</Ratting>
    </CardSubContainer>
    <CardSubContainer kind="text">
      <Description>{description}</Description>
    </CardSubContainer>
    <CardSubContainer kind="text">
      <Tag type="link" to="/teste">
        Saiba mais
      </Tag>
    </CardSubContainer>
  </CardsContainer>
)

export default Card
