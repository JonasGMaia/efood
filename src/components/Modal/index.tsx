import AddButton from '../AddButton'
import { ModalContainer, Overlay, ModalSubContainer, Close } from './styles'
import close from '../../assets/images/close.png'
import ProfileCard from '../../models/ProfileCard'

type ModalProps = {
  card: ProfileCard | null
  onClose: () => void
}

const Modal = ({ card, onClose }: ModalProps) => {
  if (!card) {
    return null
  }

  return (
    <Overlay onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <ModalContainer className="container">
          <Close src={close} alt="fechar" onClick={onClose} />
          <img src={card.image} alt={card.title} />
          <ModalSubContainer>
            <h2>{card?.title}</h2>
            <p style={{ whiteSpace: 'pre-wrap' }}>{card?.details}</p>
            <AddButton content="Adicionar ao carrinho - R$ " price="60,00" />
          </ModalSubContainer>
        </ModalContainer>
      </div>
    </Overlay>
  )
}

export default Modal
