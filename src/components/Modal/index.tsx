import AddButton from '../AddButton'
import { ModalContainer, Overlay, ModalSubContainer, Close } from './styles'
import close from '../../assets/images/close.png'

type ModalProps = {
  card: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  } | null
  onClose: () => void
}

const Modal = ({ card, onClose }: ModalProps) => {
  if (!card) {
    return null
  }

  const formatPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <Overlay onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <ModalContainer className="container">
          <Close src={close} alt="fechar" onClick={onClose} />
          <img src={card.foto} alt={card.nome} />
          <ModalSubContainer>
            <h2>{card?.nome}</h2>
            <p style={{ whiteSpace: 'pre-wrap' }}>{card?.descricao}</p>
            <p>Serve {card?.porcao}</p>
            <AddButton
              content={`Adicionar ao carrinho - `}
              price={formatPreco(card?.preco)}
            />
          </ModalSubContainer>
        </ModalContainer>
      </div>
    </Overlay>
  )
}

export default Modal
