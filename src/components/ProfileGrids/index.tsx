import ProfileCards from '../ProfileCards'
import ProfileCard from '../../models/ProfileCard'
import { ProfileGrids } from './style'

export type ProfileGridProps = {
  profileCardsfunction?: ProfileCard[]
}

const ProfileGrid = ({ profileCardsfunction }: ProfileGridProps) => (
  <div className="container">
    <ProfileGrids>
      {profileCardsfunction?.map((card) => (
        <ProfileCards
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </ProfileGrids>
  </div>
)

export default ProfileGrid
