import { Link } from 'react-router-dom'
import { ChamadaHero, HeroHeader, Logo, Organizer } from './styles'
import logo from '../../assets/images/logo.png'
import fundoHero from '../../assets/images/fundoHero.png'

const Hero = () => (
  <HeroHeader style={{ backgroundImage: `url(${fundoHero})` }}>
    <div className="container">
      <Organizer>
        <Link to="/">
          <Logo src={logo} alt="efood" />
        </Link>
        <ChamadaHero>
          Viva experiências gastronômicas no conforto da sua casa
        </ChamadaHero>
      </Organizer>
    </div>
  </HeroHeader>
)

export default Hero
