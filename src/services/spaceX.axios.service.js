import axios from 'axios'

let axiosInstance = axios.create({
    baseURL: 'https://api.spacexdata.com/v3/launches/'
})

let getLaunches = () => {
    return axiosInstance.get()
}

export {getLaunches}