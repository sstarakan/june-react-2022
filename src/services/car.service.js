import {axiosCarService} from "./axios.service";
import {urls} from "../config";


const carService = {
    getAll: () => axiosCarService.get(urls.cars),
    createCar: (car) => axiosCarService.post(urls.cars, car),
    updateById: (id, car) => axiosCarService.put(`${urls.cars}/${id}`, car),
    deleteById: (id) => axiosCarService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}