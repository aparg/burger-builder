import axios from 'axios'

const order = axios.create({
    baseURL:"/orders"
})

export default order