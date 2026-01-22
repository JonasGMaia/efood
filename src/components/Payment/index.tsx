import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { AddButtonContainer } from '../AddButton/styles'
import { Overlay } from '../Modal/styles'
import { CartContainer, Sidebar } from '../Cart/styles'
import { RootReducer } from '../../store'
import { setStep, selectTotalNoCarrinho } from '../../store/reducers/cart'
import { FormContainer, FormRow, BtnContainer } from '../Delivery/styles'
import { usePurchaseMutation } from '../../services/api'
import Loader from '../Loader'

const Payment = () => {
  const dispatch = useDispatch()

  const [purchase, { isSuccess, data, isLoading, isError }] =
    usePurchaseMutation({
      fixedCacheKey: 'checkout-mutation'
    })

  const { items, delivery } = useSelector((state: RootReducer) => state.cart)
  const valorTotal = useSelector(selectTotalNoCarrinho)

  const paraReal = (valor = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor)
  }

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setStep('confirmation'))
    }
  }, [isSuccess, data, dispatch])

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
        .min(13, 'Número inválido')
        .max(19, 'Número inválido')
        .required('O campo é obrigatório'),
      cvv: Yup.string()
        .length(3, 'Deve ter 3 dígitos')
        .required('O campo é obrigatório'),
      validadeMes: Yup.string()
        .length(2, 'Use 2 dígitos')
        .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido')
        .required('O campo é obrigatório'),
      validadeAno: Yup.string()
        .length(4, 'Use 4 dígitos')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: delivery.receiver,
          address: {
            description: delivery.address.description,
            city: delivery.address.city,
            zipCode: delivery.address.zipCode,
            number: delivery.address.number,
            complement: delivery.address.complement
          }
        },
        payment: {
          card: {
            name: values.CardName,
            number: values.CardNumber,
            code: Number(values.cvv),
            expires: {
              month: values.validadeMes,
              year: values.validadeAno
            }
          }
        }
      })
    }
  })

  const getErrorMessage = (fieldName: keyof typeof formValid.values) => {
    const isAltered = formValid.touched[fieldName]
    const isInvalid = formValid.errors[fieldName]

    if (isAltered && isInvalid) return isInvalid
    return ''
  }

  return (
    <CartContainer className={'is-open'}>
      <Overlay style={{ position: 'absolute' }} />
      <Sidebar>
        <form onSubmit={formValid.handleSubmit}>
          {isLoading && <Loader />}
          <FormContainer>
            <h2>Pagamento - Valor a pagar {paraReal(valorTotal)}</h2>

            {isError && (
              <p style={{ color: 'red', marginBottom: '16px' }}>
                Houve um erro ao processar o pagamento. Por favor, tente
                novamente.
              </p>
            )}

            <div>
              <label htmlFor="CardName">Nome no Cartão</label>
              <input
                id="CardName"
                type="text"
                name="CardName"
                value={formValid.values.CardName}
                onChange={formValid.handleChange}
                onBlur={formValid.handleBlur}
                disabled={isLoading}
              />
              <small>{getErrorMessage('CardName')}</small>
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
                  disabled={isLoading}
                />
                <small>{getErrorMessage('CardNumber')}</small>
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
                  disabled={isLoading}
                />
                <small>{getErrorMessage('cvv')}</small>
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
                  disabled={isLoading}
                />
                <small>{getErrorMessage('validadeMes')}</small>
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
                  disabled={isLoading}
                />
                <small>{getErrorMessage('validadeAno')}</small>
              </div>
            </FormRow>
          </FormContainer>
          <BtnContainer>
            <button type="submit" disabled={isLoading}>
              <AddButtonContainer>
                {isLoading ? 'Processando...' : 'Finalizar pagamento'}
              </AddButtonContainer>
            </button>
            <button
              type="button"
              onClick={() => dispatch(setStep('delivery'))}
              disabled={isLoading}
            >
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
