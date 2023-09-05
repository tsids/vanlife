import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Vans/Home"
import About from "./pages/Vans/About"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/Vans/VanDetail"
import Dashboard from './pages/Host/Dashboard'
import Layout from "./components/Layout"
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'

import '../server.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />} />
          <Route path='/vans/:id' element={<VanDetail />} />
          <Route path='/host' element={<Dashboard />} />
          <Route path='/host/income' element={<Income />} />
          <Route path='/host/reviews' element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
