import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Vans, { loader as vansLoader } from "./pages/Vans/Vans"
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail"
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostVans, { loader as hostVansLoader } from './pages/Host/HostVans'
import HostVanDetail, { loader as hostVanDetailLoader } from './pages/Host/HostVanDetail'
import HostVanInfo from './pages/Host/HostVanInfo'
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import NotFound from './pages/NotFound'
import Login from './pages/Login.js'
import Layout from "./components/Layout"
import HostLayout from './components/HostLayout'
import Error from './components/Error'

import '../server.js'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route
      path="login"
      element={<Login />}
    />
    <Route
      path='vans'
      element={<Vans />}
      loader={vansLoader}
      errorElement={<Error />}
    />
    <Route
      path='vans/:id'
      element={<VanDetail />}
      loader={vanDetailLoader}
    />

    <Route
      path='host'
      element={<HostLayout />}
      loader={async () => {
        return null
      }}
    >
      <Route
        index
        element={<Dashboard />}
        loader={async () => {
          return null
        }}
      />
      <Route
        path='income'
        element={<Income />}
        loader={async () => {
          return null
        }}
      />
      <Route
        path='reviews'
        element={<Reviews />}
        loader={async () => {
          return null
        }}
      />
      <Route
        path='vans'
        element={<HostVans />}
        loader={hostVansLoader}
      />
      <Route
        path='vans/:id'
        element={<HostVanDetail />}
        loader={hostVanDetailLoader}
      >
        <Route
          index
          element={<HostVanInfo />}
          loader={async () => {
            return null
          }}
        />
        <Route
          path='pricing'
          element={<HostVanPricing />}
          loader={async () => {
            return null
          }}
        />
        <Route
          path='photos'
          element={<HostVanPhotos />}
          loader={async () => {
            return null
          }}
        />
      </Route>
    </Route>

    <Route path='*' element={<NotFound />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
