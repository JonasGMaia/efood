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
import {
  close,
  remove,
  setStep,
  selectTotalNoCarrinho
} from '../../store/reducers/cart'

const Cart = () => {
  const valorTotal = useSelector(selectTotalNoCarrinho)
  const paraReal = (valor = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor)
  }
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const handleCloseCart = () => {
    dispatch(close())
  }

  const removeItem = (cartItemId: string) => {
    dispatch(remove(cartItemId))
  }

  return (
    <CartContainer className={'is-open'}>
      <Overlay onClick={handleCloseCart} style={{ position: 'absolute' }} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.cartItemId}>
              {' '}
              <CartImage>
                <img src={item.foto} alt={item.nome} />
              </CartImage>
              <CartItemDetails>
                <h3>{item.nome}</h3>
                <p>{paraReal(item.preco)}</p>
                <LixeiraIcone
                  onClick={() => removeItem(item.cartItemId)}
                  src={lixeira}
                  alt="remover item do carrinho"
                />
              </CartItemDetails>
            </CartItem>
          ))}
        </ul>
        <SidebarDetails>
          <p>Valor total:</p>
          <p>{paraReal(valorTotal)}</p>
        </SidebarDetails>
        {items.length > 0 && (
          <SideBarButton onClick={() => dispatch(setStep('delivery'))}>
            <AddButtonContainer className="buyButton">
              Continuar com a entrega
            </AddButtonContainer>
          </SideBarButton>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
