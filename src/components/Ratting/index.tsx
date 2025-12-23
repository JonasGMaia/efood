import estrela from '../../assets/images/estrela.png'
import { RattingContainer } from './styles'

type RattingProps = {
  children: string
}

const Ratting = ({ children }: RattingProps) => (
  <RattingContainer>
    <h2>{children}</h2>
    <img src={estrela} alt="estrelas" />
  </RattingContainer>
)

export default Ratting
