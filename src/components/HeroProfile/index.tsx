import { Link } from 'react-router-dom'
import { HeroHeader, Logo } from '../Hero/styles'
import {
  CategProfile,
  OrganizerProfile,
  TitleProfile,
  CategProfileBanner,
  ProfileBanner
} from './styles'
import logo from '../../assets/images/logo.png'
import fundoHero from '../../assets/images/fundoHero.png'

type Props = {
  tipo: string
  titulo: string
  capa: string
}

const HeroProfile = ({ tipo, titulo, capa }: Props) => (
  <HeroHeader style={{ backgroundImage: `url(${fundoHero})` }}>
    <div className="container">
      <OrganizerProfile>
        <Link to="/">
          <h2 style={{ cursor: 'pointer' }}>Restaurantes</h2>
        </Link>
        <Link to="/">
          <Logo src={logo} alt="efood" />
        </Link>
        <h2>0 produto(s) no carrinho</h2>
      </OrganizerProfile>
    </div>
    <ProfileBanner style={{ backgroundImage: `url(${capa})` }}>
      <div className="container">
        <CategProfileBanner>
          <CategProfile>{tipo}</CategProfile>
          <TitleProfile>{titulo}</TitleProfile>
        </CategProfileBanner>
      </div>
    </ProfileBanner>
  </HeroHeader>
)

export default HeroProfile
