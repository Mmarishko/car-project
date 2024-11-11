import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './CreateCarForm.module.css'
import ErrorMessage from './ErrorMessage'
import { useCreateCar } from '../../../../hooks/useCreateCar'

const clearData = {
  name: '',
  price: '',
  image: ''
}

const CreateCarFormA = ({ setCars }) => {
  // v1
  // const [data, setData] = useState(clearData);
  // const createCar = data => {
  //   console.log('data', data)
  //   setCars(prev => [
  //     {
  //       id: prev.length + 1,
  //       ...data
  //     },
  //     ...prev,
  //   ])

  //   reset(clearData)
  // }

  //v2
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onChange'
  })

  const { createCar } = useCreateCar(reset)


  return (
    <form className={styles.form}
      onSubmit={handleSubmit(createCar)}>
      <input
        {...register('name', { required: 'field is required' })}
        placeholder="Name" />
      {errors?.name?.message &&
        <ErrorMessage message={errors?.name?.message} />
      }
      <input
        {...register('price', { required: 'field is required' })}
        placeholder="Price" />
      {errors?.price?.message &&
        <ErrorMessage message={errors?.price?.message} />
      }<input
        {...register('image', { required: 'field id required' })}
        placeholder="image" />
      {errors?.image?.message &&
        <ErrorMessage message={errors?.image?.message} />
      }
      <button
        className='btn'>Createcar</button>
    </form>
  )
}

export default CreateCarFormA