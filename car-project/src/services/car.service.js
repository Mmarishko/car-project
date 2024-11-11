import axios from 'axios'

export const CarSevice = {

  async getAll() {
    const responce = await axios.get(
      'http://localhost:4200/cars'
    )

    return responce.data;

  },

  async getById(id) {
    const responce = await axios.get(
      `http://localhost:4200/cars?id=${id}`
    )

    return responce.data[0];

  },

  async create(data) {
    return axios.post(
      'http://localhost:4200/cars', 
      data)
  }
}