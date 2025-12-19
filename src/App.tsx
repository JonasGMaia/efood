import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Hero from './components/Hero'
import { GlobalCss } from './styles'
import HomeGrid from './components/HomeGrids'

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Hero />
        <HomeGrid />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={routes} />
    </>
  )
}

export default App
