import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { cars as carsData } from './cars.data.jsx'
import CreateCarForm from './create-car-form/CreateCarForm.jsx'
import CreateCarFormA from './create-car-form/createCarFormAdv.jsx'
import { CarSevice } from '../../../services/car.service.js'
import { useNavigate } from 'react-router-dom'
import Header from '../../ui/Header.jsx'
import CarItem from './car-item/CarItem.jsx'

function Home() {
    // const filteredCars = cars.filter(car => car.price > 20000)
    // const filteredCars = useMemo(
    //     () => cars.filter(car => car.price > 20000),
    //     []
    // )
    // console.log('render')

    // const [cars, setCars] = useState(carsData)

    const nav = useNavigate()

    const [cars, setCars] = useState([])

    const clearCars = useCallback(
        () => () => {
            setCars([])
        },
        [cars]
    )

    useEffect(() => {
        const fetchData = async () => {
            // const responce = await fetch('http://localhost:4200/cars')
            // const data = await responce.json()
            const data = await CarSevice.getAll();

            setCars(data)
        }

        fetchData()

        return clearCars()
    }, [])

    console.log(cars)

    return (
        <div>
            <h1>Cars catalog</h1>
            <button onClick={() => nav('/car/1')}>Go to car</button>
            {/* <Player /> */}

            <Header />

            <CreateCarFormA setCars={setCars} /> */
            <div>
                {cars.length ? (
                    cars.map(car => (
                        <CarItem key={car.id} car={car} />
                    ))
                ) : (
                    <p>Thereare no cars</p>
                )}

            </div>
        </div>
    )
}

export default Home