import axios from '../../node_modules/axios'
// import axios from './node_modules/axios'

const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export default api