
import { useMutation, useQueryClient } from 'react-query'
import { CarSevice } from './../services/car.service'

export const useCreateCar = (reset) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation(
    ['create car'],
    (data) => CarSevice.create(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('cars')
        reset()
      }
    }
  )
  const createCar = data => {
    mutate(data)
  }

  return { createCar }
}