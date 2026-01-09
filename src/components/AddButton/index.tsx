import { AddButtonContainer } from './styles'

type AddButtonProps = {
  content?: string
  price?: string
}

const AddButton = ({ content, price }: AddButtonProps) => (
  <AddButtonContainer>
    {content || `Adicionar ao carrinho`}
    {price}
  </AddButtonContainer>
)

export default AddButton
