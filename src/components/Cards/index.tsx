import Tag from '../Tag'
import imagem1 from '../../assets/images/imagem1.png'
import Ratting from '../Ratting'
import { CardsContainer, CardSubContainer } from './styles'

export type SubCardProps = {
  kind?: 'image' | 'text'
}

const Card = () => (
  <CardsContainer>
    <CardSubContainer
      kind="image"
      style={{ backgroundImage: `url(${imagem1})`, minHeight: '217px' }}
    >
      <Tag type="descriptor" />
    </CardSubContainer>
    <CardSubContainer kind="text">
      <h2> Nome Restautante</h2>
      <Ratting />
    </CardSubContainer>
    <CardSubContainer kind="text">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eius
        ipsum libero nisi dolore quam maiores laboriosam magni architecto
        voluptates tempora, perspiciatis impedit officiis. Pariatur aut odio
        enim ducimus laboriosam?
      </p>
    </CardSubContainer>
    <CardSubContainer kind="text">
      <Tag type="link" to="/teste">
        Saiba mais
      </Tag>
    </CardSubContainer>
  </CardsContainer>
)

export default Card
