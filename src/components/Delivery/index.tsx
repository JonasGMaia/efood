import { AddButtonContainer } from '../AddButton/styles'
import { Overlay } from '../Modal/styles'
import { CartContainer, Sidebar } from '../Cart/styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { setStep } from '../../store/reducers/cart'
import { FormContainer, FormRow, BtnContainer } from './styles'

const Delivery = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay style={{ position: 'absolute' }} />
      <Sidebar>
        <FormContainer>
          <h2>Entrega</h2>
          <div>
            <label htmlFor="fullName">Quem irá receber</label>
            <input id="fullName" type="text" />
          </div>
          <div>
            <label htmlFor="adress">Endereço</label>
            <input id="adress" type="text" />
          </div>
          <div>
            <label htmlFor="city">Cidade</label>
            <input id="city" type="text" />
          </div>
          <FormRow>
            <div>
              <label htmlFor="cep">CEP</label>
              <input id="cep" type="text" />
            </div>
            <div>
              <label htmlFor="phoneNumber">Número</label>
              <input id="phoneNumber" type="text" />
            </div>
          </FormRow>
          <div>
            <label htmlFor="comment">Complemento (opcional)</label>
            <input id="comment" type="text" />
          </div>
        </FormContainer>
        <BtnContainer>
          <button onClick={() => dispatch(setStep('payment'))}>
            <AddButtonContainer>Continuar com pagamento</AddButtonContainer>
          </button>
          <button onClick={() => dispatch(setStep('cart'))}>
            <AddButtonContainer>Voltar para o carrinho</AddButtonContainer>
          </button>
        </BtnContainer>
      </Sidebar>
    </CartContainer>
  )
}

export default Delivery
