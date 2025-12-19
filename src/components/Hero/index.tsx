import { ChamadaHero, HeroHeader, Logo, Organizer } from './styles'
import logo from '../../assets/images/logo.png'
import fundoHero from '../../assets/images/fundoHero.png'

const Hero = () => (
  <HeroHeader style={{ backgroundImage: `url(${fundoHero})` }}>
    <div className="container">
      <Organizer>
        <Logo src={logo} alt="efood" />
        <ChamadaHero>
          Viva experiências gastronômicas no conforto da sua casa
        </ChamadaHero>
      </Organizer>
    </div>
  </HeroHeader>
)

export default Hero
