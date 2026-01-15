import { AddButtonContainer } from '../AddButton/styles'
import { Overlay } from '../Modal/styles'
import { CartContainer, Sidebar } from '../Cart/styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { setStep, selectTotalNoCarrinho } from '../../store/reducers/cart'
import { FormContainer, FormRow, BtnContainer } from '../Delivery/styles'

const Payment = () => {
  const valorTotal = useSelector(selectTotalNoCarrinho)
  const paraReal = (valor = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor)
  }
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay style={{ position: 'absolute' }} />
      <Sidebar>
        <FormContainer>
          <h2>Pagamento - Valor a pagar {paraReal(valorTotal)}</h2>
          <div>
            <label htmlFor="CardName">Nome no Cartão</label>
            <input id="CardName" type="text" />
          </div>
          <FormRow>
            <div>
              <label htmlFor="CardNumber">Número do cartão</label>
              <input id="CardNumber" type="text" />
            </div>
            <div>
              <label htmlFor="cvv">CVV</label>
              <input id="cvv" type="text" />
            </div>
          </FormRow>
          <FormRow>
            <div>
              <label htmlFor="validadeMes">Mês de vencimento</label>
              <input id="validade" type="text" />
            </div>
            <div>
              <label htmlFor="validadeAno">Ano de vencimento</label>
              <input id="validade" type="text" />
            </div>
          </FormRow>
        </FormContainer>
        <BtnContainer>
          <button onClick={() => dispatch(setStep('confirmation'))}>
            <AddButtonContainer>Finalizar pagamento</AddButtonContainer>
          </button>
          <button onClick={() => dispatch(setStep('delivery'))}>
            <AddButtonContainer>
              Voltar para edição de endereço
            </AddButtonContainer>
          </button>
        </BtnContainer>
      </Sidebar>
    </CartContainer>
  )
}

export default Payment
