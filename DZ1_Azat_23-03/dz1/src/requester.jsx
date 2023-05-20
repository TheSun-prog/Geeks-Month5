import axios from "axios";


const BASE_URL = "https://jsonplaceholder.typicode.com/"


export const requester = axios.create({
    baseURL: BASE_URL
})