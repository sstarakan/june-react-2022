import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
})

const getUsers = () => {
    return axiosInstance.get();
}

const getUserPosts = (id) => {
    return axiosInstance.get('/' + id + '/posts');
}

export {getUsers, getUserPosts}