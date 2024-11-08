import { useMemo } from 'react'
import CarItem from './car-item/CarItem.jsx'
import {cars} from './cars.data.jsx'

function Home() {

    // const filteredCars = cars.filter(car => car.price > 20000)
    // const filteredCars = useMemo(
    //     () => cars.filter(car => car.price > 20000),
    //     []
    // )
    // console.log('render')
    
    return (
        <div>
            <h1>Cars catalog</h1>
            <div>
                {cars.length ? (
                    cars.map( car => (
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