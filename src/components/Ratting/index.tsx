import estrela from '../../assets/images/estrela.png'
import { RattingContainer } from './styles'
import type { Card } from '../../pages/Home'

const Ratting = ({ avaliacao }: Card) => (
  <RattingContainer>
    <h2>{avaliacao}</h2>
    <img src={estrela} alt="estrelas" />
  </RattingContainer>
)

export default Ratting
