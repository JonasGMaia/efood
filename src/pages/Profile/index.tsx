import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import HeroProfile from '../../components/HeroProfile'
import ProfileGrid from '../../components/ProfileGrids'
import type { Card } from '../Home'

const Profile = () => {
  const { id } = useParams()
  const [restaurantes, setRestaurantes] = useState<Card | null>(null)

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRestaurantes(data)
      })
      .catch((error) => console.error('Erro ao carregar restaurante:', error))
  }, [id])

  return (
    <>
      <HeroProfile
        tipo={restaurantes?.tipo || ''}
        titulo={restaurantes?.titulo || ''}
        capa={restaurantes?.capa || ''}
      />
      {restaurantes && <ProfileGrid profileCardsfunction={restaurantes} />}
    </>
  )
}

export default Profile
