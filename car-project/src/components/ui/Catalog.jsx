import CarItem from '../screens/home/car-item/CarItem'

export const Catalog = ({ data }) => {
  return (
    <div>
      {data.length ? (
        data.map(car => (
          <CarItem key={car.id} car={car} />
        ))
      ) : (
        <p>Thereare no cars</p>
      )}

    </div>
  )

}