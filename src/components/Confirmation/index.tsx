import { AddButtonContainer } from '../AddButton/styles'
import { Overlay } from '../Modal/styles'
import { CartContainer, Sidebar } from '../Cart/styles'
import { useDispatch } from 'react-redux'
import { BtnContainer, FormContainer } from '../Delivery/styles'
import { close, reset } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'

const Confirmation = () => {
  const dispatch = useDispatch()
  const [_, { data }] = usePurchaseMutation({
    fixedCacheKey: 'checkout-mutation'
  })
  const handleCloseCart = () => {
    dispatch(close())
    dispatch(reset())
  }

  return (
    <CartContainer className={'is-open'}>
      <Overlay style={{ position: 'absolute' }} />
      <Sidebar>
        <FormContainer>
          <h2>Pedido realizado - {data?.orderId} </h2>
          <p style={{ fontWeight: '400' }}>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras. Lembre-se da importância de
            higienizar as mãos após o recebimento do pedido, garantindo assim
            sua segurança e bem-estar durante a refeição. Esperamos que desfrute
            de uma deliciosa e agradável experiência gastronômica. Bom apetite!
          </p>
        </FormContainer>
        <BtnContainer>
          <AddButtonContainer onClick={handleCloseCart}>
            Concluir
          </AddButtonContainer>
        </BtnContainer>
      </Sidebar>
    </CartContainer>
  )
}

export default Confirmation
