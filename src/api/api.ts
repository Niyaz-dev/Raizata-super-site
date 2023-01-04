import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API
});

console.log(process.env.REACT_APP_API)
export const getDetails = () => {
    return instance.get('/detail')
}

