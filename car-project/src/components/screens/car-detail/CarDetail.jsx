import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { CarSevice } from '../../../services/car.service.js'
import CarItem from "../home/car-item/CarItem.jsx"
import { withAuth } from "../../../hoc/withAuth.jsx"


const CarDetail = () => {
  const { id } = useParams()
  const [car, setCar] = useState({})

  useEffect(() => {
    if (!id) {
      return
    }

    const fetchData = async () => {
      const data = await CarSevice.getById(id);

      setCar(data)
    }

    fetchData()
  }, [id])

  if (!car?.name) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }



  return (
    <div>
      <Link to='/'>Back home</Link>
      <CarItem car={car} />
    </div>

  )
}

export default withAuth(CarDetail)