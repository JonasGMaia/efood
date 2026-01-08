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
import imagem2 from '../../assets/images/imagem2.png'

const HeroProfile = () => (
  <HeroHeader style={{ backgroundImage: `url(${fundoHero})` }}>
    <div className="container">
      <OrganizerProfile>
        <Link to="/">
          <h2>Restaurantes</h2>
        </Link>
        <Link to="/">
          <Logo src={logo} alt="efood" />
        </Link>
        <h2>0 produto(s) no carrinho</h2>
      </OrganizerProfile>
    </div>
    <ProfileBanner style={{ backgroundImage: `url(${imagem2})` }}>
      <div className="container">
        <CategProfileBanner>
          <CategProfile>Italiana</CategProfile>
          <TitleProfile>NNome do restaurante</TitleProfile>
        </CategProfileBanner>
      </div>
    </ProfileBanner>
  </HeroHeader>
)

export default HeroProfile
