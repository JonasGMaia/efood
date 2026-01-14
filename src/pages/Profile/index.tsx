import { useParams } from 'react-router-dom'
import HeroProfile from '../../components/HeroProfile'
import ProfileGrid from '../../components/ProfileGrids'
import { useGetRestauranteIdQuery } from '../../services/api'

const Profile = () => {
  const { id } = useParams<{ id: string }>()
  const { data: restaurante, isLoading } = useGetRestauranteIdQuery(id || '')

  if (isLoading) return <h3>Carregando...</h3>

  if (!restaurante) return <h3>Restaurante não encontrado</h3>

  return (
    <>
      <HeroProfile
        capa={restaurante?.capa}
        titulo={restaurante?.titulo}
        tipo={restaurante?.tipo}
      />
      <ProfileGrid profileCardsfunction={restaurante} />
    </>
  )
}

export default Profile
