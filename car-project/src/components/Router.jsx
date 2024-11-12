import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/home/homeNew'
import CarDetail from './screens/car-detail/CarDetail'
import Error from './screens/Error'

const Router = () => {
  return (<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/car/:id' element={<CarDetail />} />

      <Route path='*' element={<Error />} />
    </Routes>
  </BrowserRouter>)
}

export default Router