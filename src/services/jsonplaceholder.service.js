import {urls} from "../config/urls";
import {axiosService} from "./axios.service";

const jsonService = {
    getTodos: () => axiosService.get(urls.todos),
    getAlbums: () => axiosService.get(urls.albums),
    getComments: () => axiosService.get(urls.comments),
    getPost: (id) => axiosService.get(`${urls.post}/${id}`)
}

export {
    jsonService
}