import lixeira from '../../assets/images/lixeira.png'
import { AddButtonContainer } from '../AddButton/styles'
import { Overlay } from '../Modal/styles'
import {
  CartContainer,
  CartItem,
  LixeiraIcone,
  Sidebar,
  CartImage,
  CartItemDetails,
  SidebarDetails,
  SideBarButton
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const paraReal = (valor = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor)
  }
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const handleCloseCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={handleCloseCart} style={{ position: 'absolute' }} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <CartImage>
                <img src={item.foto} alt="" />
              </CartImage>
              <CartItemDetails>
                <h3>{item.nome}</h3>
                <p>{paraReal(item.preco)}</p>
                <LixeiraIcone src={lixeira} alt="remover item do carrinho" />
              </CartItemDetails>
            </CartItem>
          ))}
        </ul>
        <SidebarDetails>
          <p>Valor total:</p>
          <p>
            {paraReal(items.reduce((total, item) => total + item.preco, 0))}
          </p>
        </SidebarDetails>
        <SideBarButton>
          <AddButtonContainer className="buyButton">
            Continuar com a entrega
          </AddButtonContainer>
        </SideBarButton>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
