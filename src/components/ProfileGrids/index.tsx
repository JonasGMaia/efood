import { useState } from 'react'
import ProfileCards from '../ProfileCards'
import { ProfileGrids } from './styles'
import Modal from '../Modal'
import { Card, CardapioItem } from '../../pages/Home'

export type ProfileGridProps = {
  profileCardsfunction: Card
}

const ProfileGrid = ({ profileCardsfunction }: ProfileGridProps) => {
  const [isCardSelected, setIsCardSelected] = useState<CardapioItem | null>(
    null
  )

  return (
    <>
      <div className="container">
        <ProfileGrids>
          {profileCardsfunction?.cardapio?.map((item) => (
            <div key={item.id} onClick={() => setIsCardSelected(item)}>
              <ProfileCards
                descricao={item.descricao}
                imagem={item.foto}
                titulo={item.nome}
              />
            </div>
          ))}
        </ProfileGrids>
      </div>
      <Modal card={isCardSelected} onClose={() => setIsCardSelected(null)} />
    </>
  )
}

export default ProfileGrid
