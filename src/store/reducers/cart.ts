import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardapioItem } from '../../pages/Home'
import { RootReducer } from '..'

type CartState = {
  items: CardapioItem[]
  isOpen: boolean
  step: 'cart' | 'delivery' | 'payment' | 'confirmation'
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  step: 'cart'
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1)
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
    }
  }
})

export const { add, open, close, remove, setStep, reset } = cartSlice.actions
export default cartSlice.reducer
export const selectTotalNoCarrinho = (state: RootReducer) => {
  return state.cart.items.reduce((acumulador, itemAtual) => {
    return (acumulador += itemAtual.preco)
  }, 0)
}
