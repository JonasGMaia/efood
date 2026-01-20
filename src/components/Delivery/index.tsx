import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { AddButtonContainer } from '../AddButton/styles'
import { Overlay } from '../Modal/styles'
import { CartContainer, Sidebar } from '../Cart/styles'
import { RootReducer } from '../../store'
import { setStep, setDeliveryData } from '../../store/reducers/cart'
import { FormContainer, FormRow, BtnContainer } from './styles'

const Delivery = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const formValid = useFormik({
    initialValues: {
      fullName: '',
      adress: '',
      city: '',
      cep: '',
      phoneNumber: '',
      comment: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome deve ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'CEP inválido')
        .max(9, 'CEP inválido')
        .required('O campo é obrigatório'),
      phoneNumber: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      dispatch(
        setDeliveryData({
          receiver: values.fullName,
          address: {
            description: values.adress,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.phoneNumber),
            complement: values.comment
          }
        })
      )
      dispatch(setStep('payment'))
    }
  })

  const getErrorMessage = (fieldName: keyof typeof formValid.values) => {
    const isAltered = formValid.touched[fieldName]
    const isInvalid = formValid.errors[fieldName]

    if (isAltered && isInvalid) return isInvalid
    return ''
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay style={{ position: 'absolute' }} />
      <Sidebar>
        <form onSubmit={formValid.handleSubmit}>
          <FormContainer>
            <h2>Entrega</h2>
            <div>
              <label htmlFor="fullName">Quem irá receber</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formValid.values.fullName}
                onChange={formValid.handleChange}
                onBlur={formValid.handleBlur}
              />
              <small>{getErrorMessage('fullName')}</small>
            </div>
            <div>
              <label htmlFor="adress">Endereço</label>
              <input
                id="adress"
                type="text"
                name="adress"
                value={formValid.values.adress}
                onChange={formValid.handleChange}
                onBlur={formValid.handleBlur}
              />
              <small>{getErrorMessage('adress')}</small>
            </div>
            <div>
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                type="text"
                name="city"
                value={formValid.values.city}
                onChange={formValid.handleChange}
                onBlur={formValid.handleBlur}
              />
              <small>{getErrorMessage('city')}</small>
            </div>
            <FormRow>
              <div>
                <label htmlFor="cep">CEP</label>
                <input
                  id="cep"
                  type="text"
                  name="cep"
                  value={formValid.values.cep}
                  onChange={formValid.handleChange}
                  onBlur={formValid.handleBlur}
                />
                <small>{getErrorMessage('cep')}</small>
              </div>
              <div>
                <label htmlFor="phoneNumber">Número</label>
                <input
                  id="phoneNumber"
                  type="text"
                  name="phoneNumber"
                  value={formValid.values.phoneNumber}
                  onChange={formValid.handleChange}
                  onBlur={formValid.handleBlur}
                />
                <small>{getErrorMessage('phoneNumber')}</small>
              </div>
            </FormRow>
            <div>
              <label htmlFor="comment">Complemento (opcional)</label>
              <input
                id="comment"
                type="text"
                name="comment"
                value={formValid.values.comment}
                onChange={formValid.handleChange}
                onBlur={formValid.handleBlur}
              />
            </div>
          </FormContainer>
          <BtnContainer>
            <button type="submit" onClick={() => dispatch(setStep('payment'))}>
              <AddButtonContainer>Continuar com pagamento</AddButtonContainer>
            </button>
            <button type="button" onClick={() => dispatch(setStep('cart'))}>
              <AddButtonContainer>Voltar para o carrinho</AddButtonContainer>
            </button>
          </BtnContainer>
        </form>
      </Sidebar>
    </CartContainer>
  )
}

export default Delivery
