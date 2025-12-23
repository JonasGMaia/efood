import Hero from '../../components/Hero'
import HomeGrid from '../../components/HomeGrids'
import imagem1 from '../../assets/images/imagem1.png'
import imagem2 from '../../assets/images/imagem2.png'
import HomeCard from '../../models/HomeCard'

const homeContents: HomeCard[] = [
  {
    title: 'Hioki Sushi',
    categories: ['Japonesa', 'Destaque da Semana'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: imagem1,
    ratting: '4.9',
    id: 1
  },
  {
    title: 'La Dolce Vita Trattoria',
    categories: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: imagem2,
    ratting: '4.6',
    id: 2
  },
  {
    title: 'exemplo',
    categories: ['exemplo'],
    description: 'exemplo',
    image: imagem2,
    ratting: '4.6',
    id: 3
  },
  {
    title: 'exemplo',
    categories: ['exemplo'],
    description: 'exemplo',
    image: imagem2,
    ratting: '4.6',
    id: 4
  },
  {
    title: 'exemplo',
    categories: ['exemplo'],
    description: 'exemplo',
    image: imagem2,
    ratting: '4.6',
    id: 5
  },
  {
    title: 'exemplo',
    categories: ['exemplo'],
    description: 'exemplo',
    image: imagem2,
    ratting: '4.6',
    id: 6
  }
]

const Home = () => (
  <>
    <Hero />
    <HomeGrid homeCards={homeContents} />
  </>
)

export default Home
