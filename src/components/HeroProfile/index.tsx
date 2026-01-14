import { Link } from 'react-router-dom'
import { HeroHeader, Logo } from '../Hero/styles'
import {
  CategProfile,
  OrganizerProfile,
  TitleProfile,
  CategProfileBanner,
  ProfileBanner,
  CartButton
} from './styles'
import logo from '../../assets/images/logo.png'
import fundoHero from '../../assets/images/fundoHero.png'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export type Props = {
  tipo?: string
  titulo?: string
  capa?: string
}

const HeroProfile = ({ tipo, titulo, capa }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const handleOpenCart = () => {
    dispatch(open())
  }

  return (
    <HeroHeader style={{ backgroundImage: `url(${fundoHero})` }}>
      <div className="container">
        <OrganizerProfile>
          <Link to="/">
            <h2 style={{ cursor: 'pointer' }}>Restaurantes</h2>
          </Link>
          <Link to="/">
            <Logo src={logo} alt="efood" />
          </Link>
          <CartButton onClick={handleOpenCart}>
            <h2>{items.length} produto(s) no carrinho</h2>
          </CartButton>
        </OrganizerProfile>
      </div>
      <ProfileBanner style={{ backgroundImage: `url(${capa || ''})` }}>
        <div className="container">
          <CategProfileBanner>
            <CategProfile>{tipo}</CategProfile>
            <TitleProfile>{titulo}</TitleProfile>
          </CategProfileBanner>
        </div>
      </ProfileBanner>
    </HeroHeader>
  )
}

export default HeroProfile
