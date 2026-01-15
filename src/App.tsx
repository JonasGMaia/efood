import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { GlobalCss } from './styles'
import { store, RootReducer } from './store'

import Rotas from './routes'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Delivery from './components/Delivery'
import Payment from './components/Payment'
import Confirmation from './components/Confirmation'

const SidebarManager = () => {
  const { isOpen, step } = useSelector((state: RootReducer) => state.cart)

  if (!isOpen) return null

  return (
    <>
      {step === 'cart' && <Cart />}
      {step === 'delivery' && <Delivery />}
      {step === 'payment' && <Payment />}
      {step === 'confirmation' && <Confirmation />}
    </>
  )
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <SidebarManager />
      </BrowserRouter>
    </Provider>
  )
}

export default App
