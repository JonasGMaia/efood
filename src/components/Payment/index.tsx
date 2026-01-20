import { AddButtonContainer } from '../AddButton/styles'
import { Overlay } from '../Modal/styles'
import { CartContainer, Sidebar } from '../Cart/styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { setStep, selectTotalNoCarrinho } from '../../store/reducers/cart'
import { FormContainer, FormRow, BtnContainer } from '../Delivery/styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'

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
  const formValid = useFormik({
    initialValues: {
      CardName: '',
      CardNumber: '',
      cvv: '',
      validadeMes: '',
      validadeAno: ''
    },
    validationSchema: Yup.object({
      CardName: Yup.string()
        .min(5, 'O nome deve ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      CardNumber: Yup.string()
        .min(13)
        .max(19)
        .required('O campo é obrigatório'),
      cvv: Yup.string()
        .min(3)
        .max(3, 'O nome deve ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      validadeMes: Yup.string()
        .min(2)
        .max(2)
        .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido (use o formato 01 a 12)')
        .required('O campo é obrigatório'),
      validadeAno: Yup.string().min(4).max(4).required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isAltered = fieldName in formValid.touched
    const isInvalid = fieldName in formValid.errors

    if (isAltered && isInvalid) return message
    return ''
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay style={{ position: 'absolute' }} />
      <Sidebar>
        <form onSubmit={formValid.handleSubmit}>
          <FormContainer>
            <h2>Pagamento - Valor a pagar {paraReal(valorTotal)}</h2>
            <div>
              <label htmlFor="CardName">Nome no Cartão</label>
              <input
                id="CardName"
                type="text"
                name="CardName"
                value={formValid.values.CardName}
                onChange={formValid.handleChange}
                onBlur={formValid.handleBlur}
              />
              <small>
                {(getErrorMessage('CardName'), formValid.errors.CardName)}
              </small>
            </div>
            <FormRow>
              <div>
                <label htmlFor="CardNumber">Número do cartão</label>
                <input
                  id="CardNumber"
                  type="text"
                  name="CardNumber"
                  value={formValid.values.CardNumber}
                  onChange={formValid.handleChange}
                  onBlur={formValid.handleBlur}
                />
                <small>
                  {(getErrorMessage('CardNumber'), formValid.errors.CardNumber)}
                </small>
              </div>
              <div>
                <label htmlFor="cvv">CVV</label>
                <input
                  id="cvv"
                  type="text"
                  name="cvv"
                  value={formValid.values.cvv}
                  onChange={formValid.handleChange}
                  onBlur={formValid.handleBlur}
                />
                <small>{(getErrorMessage('cvv'), formValid.errors.cvv)}</small>
              </div>
            </FormRow>
            <FormRow>
              <div>
                <label htmlFor="validadeMes">Mês de vencimento</label>
                <input
                  id="validadeMes"
                  type="text"
                  name="validadeMes"
                  value={formValid.values.validadeMes}
                  onChange={formValid.handleChange}
                  onBlur={formValid.handleBlur}
                />
                <small>
                  {
                    (getErrorMessage('validadeMes'),
                    formValid.errors.validadeMes)
                  }
                </small>
              </div>
              <div>
                <label htmlFor="validadeAno">Ano de vencimento</label>
                <input
                  id="validadeAno"
                  type="text"
                  name="validadeAno"
                  value={formValid.values.validadeAno}
                  onChange={formValid.handleChange}
                  onBlur={formValid.handleBlur}
                />
                <small>
                  {
                    (getErrorMessage('validadeAno'),
                    formValid.errors.validadeAno)
                  }
                </small>
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
        </form>
      </Sidebar>
    </CartContainer>
  )
}

export default Payment
