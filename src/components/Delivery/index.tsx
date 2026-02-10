import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { AddButtonContainer } from '../AddButton/styles'
import { Overlay } from '../Modal/styles'
import { CartContainer, Sidebar } from '../Cart/styles'
import { setStep, setDeliveryData } from '../../store/reducers/cart'
import { FormContainer, FormRow, BtnContainer } from './styles'

const Delivery = () => {
  const dispatch = useDispatch()

  const formValid = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      comment: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome deve ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'CEP inválido')
        .max(9, 'CEP inválido')
        .required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      dispatch(
        setDeliveryData({
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
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
    <CartContainer className={'is-open'}>
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
              <label htmlFor="address">Endereço</label>{' '}
              <input
                id="address"
                type="text"
                name="address"
                value={formValid.values.address}
                onChange={formValid.handleChange}
                onBlur={formValid.handleBlur}
              />
              <small>{getErrorMessage('address')}</small>{' '}
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
                <label htmlFor="number">Número</label>
                <input
                  id="number"
                  type="text"
                  name="number"
                  value={formValid.values.number}
                  onChange={formValid.handleChange}
                  onBlur={formValid.handleBlur}
                />
                <small>{getErrorMessage('number')}</small>
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
            <AddButtonContainer type="submit">
              Continuar com pagamento
            </AddButtonContainer>

            <AddButtonContainer
              type="button"
              onClick={() => dispatch(setStep('cart'))}
            >
              Voltar para o carrinho
            </AddButtonContainer>
          </BtnContainer>
        </form>
      </Sidebar>
    </CartContainer>
  )
}

export default Delivery
