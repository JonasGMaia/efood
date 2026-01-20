import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardapioItem } from '../../pages/Home'
import { RootReducer } from '..'

type DeliveryPayload = {
  receiver: string
  address: {
    description: string
    city: string
    zipCode: string
    number: number
    complement: string
  }
}

export type CartItemType = CardapioItem & {
  cartItemId: string
}

type CartState = {
  items: CartItemType[]
  isOpen: boolean
  step: 'cart' | 'delivery' | 'payment' | 'confirmation'
  delivery: DeliveryPayload
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  step: 'cart',
  delivery: {
    receiver: '',
    address: {
      description: '',
      city: '',
      zipCode: '',
      number: 0,
      complement: ''
    }
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      const newItem = {
        ...action.payload,
        cartItemId: crypto.randomUUID()
      }
      state.items.push(newItem)
    },
    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.cartItemId !== action.payload
      )
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    setStep: (
      state,
      action: PayloadAction<'cart' | 'delivery' | 'payment' | 'confirmation'>
    ) => {
      state.step = action.payload
    },
    reset: (state) => {
      state.items = []
      state.step = 'cart'
    },
    setDeliveryData: (state, action: PayloadAction<DeliveryPayload>) => {
      state.delivery = action.payload
    }
  }
})

export const { add, open, close, remove, setStep, reset, setDeliveryData } =
  cartSlice.actions
export default cartSlice.reducer

export const selectTotalNoCarrinho = (state: RootReducer) => {
  return state.cart.items.reduce((acumulador, itemAtual) => {
    return (acumulador += itemAtual.preco)
  }, 0)
}
