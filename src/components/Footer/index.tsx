import Socials from '../Socials'
import { Link } from 'react-router-dom'
import { Logo } from '../Hero/styles'
import logo from '../../assets/images/logo.png'
import { Copyrights, Disclamer, FooterContainer, FooterContent } from './styles'
import fundoHero from '../../assets/images/fundoHero.png'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <FooterContainer style={{ backgroundImage: `url(${fundoHero})` }}>
    <div className="container">
      <FooterContent>
        <Link to="/">
          <Logo src={logo} alt="efood" />
        </Link>
        <Socials />
        <Disclamer>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.{' '}
        </Disclamer>
      </FooterContent>
      <Copyrights>
        © {currentYear} efood. Todos os direitos reservados.
      </Copyrights>
    </div>
  </FooterContainer>
)

export default Footer
