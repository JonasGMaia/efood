import AddButton from '../AddButton'
import { PCArea, PCContainer, PCContent } from './styles'

type Porps = {
  titulo: string
  descricao: string
  imagem: string
}

const ProfileCards = ({ titulo, descricao, imagem }: Porps) => {
  return (
    <>
      <PCArea>
        <PCContainer>
          <img src={imagem} />
          <PCContent>
            <h2>{titulo}</h2>
            <p>{descricao}</p>
          </PCContent>
          <AddButton />
        </PCContainer>
      </PCArea>
    </>
  )
}
export default ProfileCards
