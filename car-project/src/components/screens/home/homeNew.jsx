import { useCallback, useContext, useEffect, useMemo, useState } from 'react'

import { cars as carsData } from './cars.data.jsx'
import CreateCarForm from './create-car-form/CreateCarForm.jsx'
import CreateCarFormA from './create-car-form/createCarFormAdv.jsx'
import { CarSevice } from '../../../services/car.service.js'
import { useNavigate } from 'react-router-dom'
import Player from './Player.jsx'
import { useQuery } from 'react-query'
import Header from '../../ui/Header.jsx'
import { Catalog } from '../../ui/Catalog.jsx'

function Home() {

  const nav = useNavigate()

  const { data, isLoading, error } = useQuery(['cars'], () => CarSevice.getAll())

  if (isLoading) return <p>Loading...</p>

  return (
    <div>
      <h1>Cars catalog</h1>
      <button onClick={() => nav('/car/1')}>Go to car</button>

      <Header />

      <CreateCarFormA />
      <Catalog data={data} />
    </div>
  )
}

export default Home