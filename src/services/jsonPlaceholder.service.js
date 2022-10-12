import {axiosService} from "./axios.service";
import {urls} from "../config";


const jsonService = {
    getUsers: () => axiosService.get(urls.users),
    getPosts: () => axiosService.get(urls.posts),
    getComments: () => axiosService.get(urls.comments),
    getUserById: (id) => axiosService.get(`${urls.users}/${id}`),
    getPostById: (id) => axiosService.get(`${urls.posts}/${id}`),
    getCommentById: (id) => axiosService.get(`${urls.comments}/${id}`),
}

export {
    jsonService
}