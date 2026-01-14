import { AddButtonContainer } from './styles'

type AddButtonProps = {
  content?: string
  price?: string
  onClick?: () => void
}

const AddButton = ({ content, price, onClick }: AddButtonProps) => (
  <AddButtonContainer onClick={onClick}>
    {content || `Adicionar ao carrinho`}
    {price}
  </AddButtonContainer>
)

export default AddButton
