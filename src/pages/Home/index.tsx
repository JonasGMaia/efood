import Hero from '../../components/Hero'
import HomeGrid from '../../components/HomeGrids'
import { useGetRestaurantsQuery } from '../../services/api'

export type CardapioItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Card = {
  id?: number
  titulo?: string
  destacado?: boolean
  tipo?: string
  avaliacao?: number
  descricao?: string
  capa?: string
  cardapio?: CardapioItem[]
}

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantsQuery()

  if (isLoading) return <h3>Carregando...</h3>

  return (
    <>
      <Hero />
      <HomeGrid homeCards={restaurantes} />
    </>
  )
}

export default Home
