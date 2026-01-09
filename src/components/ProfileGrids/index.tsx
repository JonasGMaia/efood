import { useState } from 'react'
import ProfileCards from '../ProfileCards'
import ProfileCard from '../../models/ProfileCard'
import { ProfileGrids } from './style'
import Modal from '../Modal'

export type ProfileGridProps = {
  profileCardsfunction?: ProfileCard[]
}

const ProfileGrid = ({ profileCardsfunction }: ProfileGridProps) => {
  const [isCardSelected, setIsCardSelected] = useState<ProfileCard | null>(null)

  return (
    <>
      <div className="container">
        <ProfileGrids>
          {profileCardsfunction?.map((card) => (
            <div key={card.id} onClick={() => setIsCardSelected(card)}>
              <ProfileCards
                key={card.id}
                title={card.title}
                description={card.description || ''}
                image={card.image}
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
