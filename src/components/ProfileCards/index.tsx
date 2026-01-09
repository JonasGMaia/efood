import AddButton from '../AddButton'
import { PCArea, PCContainer, PCContent } from './styles'

type ProfileCardsProps = {
  title: string
  description: string
  image: string
}

const ProfileCards = ({ title, description, image }: ProfileCardsProps) => (
  <PCArea>
    <PCContainer>
      <img src={image} alt="" />
      <PCContent>
        <h2>{title}</h2>
        <p>{description}</p>
      </PCContent>
      <AddButton />
    </PCContainer>
  </PCArea>
)
export default ProfileCards
