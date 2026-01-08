import HeroProfile from '../../components/HeroProfile'
import ProfileGrid from '../../components/ProfileGrids'
import ProfileCard from '../../models/ProfileCard'
import imagem3 from '../../assets/images/imagem3.png'

const products: ProfileCard[] = [
  {
    title: 'Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: imagem3,
    id: 1
  },
  {
    title: 'Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: imagem3,
    id: 2
  },
  {
    title: 'Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: imagem3,
    id: 3
  },
  {
    title: 'Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: imagem3,
    id: 4
  },
  {
    title: 'Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: imagem3,
    id: 5
  }
]
const Profile = () => (
  <>
    <HeroProfile />
    <ProfileGrid profileCardsfunction={products} />
  </>
)

export default Profile
