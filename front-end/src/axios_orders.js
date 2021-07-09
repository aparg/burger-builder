import axios from 'axios'

const order = axios.create({
    baseURL:"/"
})

export default order